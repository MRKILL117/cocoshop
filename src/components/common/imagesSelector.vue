<template>
    <div>
        <v-flex xs12 class="my-auto" v-if="preview">
            <v-img
                :src="coverPic"
                contain
                :max-height="preMaxHeight">
            </v-img>
        </v-flex>
        <v-flex xs12>
            <v-btn raised block color="primary" @click="onPickFile">Choose Files</v-btn>
            <input multiple type="file" ref="fileInput" style="display: none;" accept="image/*" @change="onFilePicked">
        </v-flex>
        <v-flex xs12>
            
            <v-carousel :cycle="false" hide-delimiters
                interval="9999999" :height="carouselHeight" light
                :class="auxClass" v-if="selected">
                <v-carousel-item v-for="i in paginas" :key="i">
                    <v-layout row>
                        <v-flex xs4 v-for="aux in itemsPerPage" :key="aux">
                            <v-img :src="getImageByIndex(aux, i).src"
                            :height="carouselHeight" :max-height="carouselHeight" min-width="150" @click="changeCover(getImageByIndex(aux, i))">
                                <v-layout column fill-height>
                                    <v-layout row justify-center>
                                        <v-tooltip attach="#btnRemove" bottom v-if="(getImageByIndex(aux, i).src.length > 0)" >
                                            <v-btn id="btnRemove" fab small color="error" slot="activator"
                                            @click="removeImage (getImageByIndex(aux, i))">
                                                <v-icon small>remove</v-icon>
                                            </v-btn>
                                            <span>Remove</span>
                                        </v-tooltip>
                                        <v-tooltip attach="#btnSetCover" bottom v-if="(getImageByIndex(aux, i).src.length > 0)">
                                            <v-btn fab small :color="imagesIndexModel[getImageIndex(aux, i)].color"
                                            slot="activator" id="btnSetCover" @click="setAsThumbnail (getImageIndex(aux, i))">
                                                <v-icon small>star</v-icon>
                                            </v-btn>
                                            <span>Set as cover</span>
                                        </v-tooltip>
                                    </v-layout>
                                    <v-layout row wrap justify-center align-content-start v-if="hasSource(aux, i)" class="">
                                        <v-flex xs12 >
                                            <v-text-field
                                                solo
                                                background-color="rgba(0,0,0,0.6)"
                                                dark
                                                :mask="getMaskNumbers()"
                                                @change="checkTypedIndex(aux, i, $event)"
                                                class="centered-input"
                                                style="margin-top: 50px;"
                                                v-model="imagesIndexModel[getImageIndex(aux, i)].index">
                                            </v-text-field>
                                        </v-flex>
                                    </v-layout>
                                </v-layout>
                            </v-img>
                        </v-flex>
                    </v-layout>
                </v-carousel-item>
            </v-carousel>
            <v-layout row wrap justify-center v-if=(selected)>
                <v-btn color="error" @click="resetImages()">Remove all images</v-btn>
                <v-btn color="success" @click="passImagesToParent">{{loadText}}</v-btn>
            </v-layout>
        </v-flex>
    </div>
</template>

<script>
export default {
    props: {
        preview: {
            default: false,
        },
        loadText : {
            default: "Load images",
        }
    },
    data () {
        return {
            // Esta es para ayudarme a actualizar el carousel que parece que no se actualiza hasta que
            // Algo a su alrededor cambia de tamaño
            auxClass: 'mt-2',
            newCharacter: {
                name: '',
                description: '',
                images: [],
                imagesNoHeader: []
            },
            defaultCover: 'https://2.bp.blogspot.com/-ZgJCyhJ528Q/V45lSl_muEI/AAAAAAAAYG8/Le77YQbVxIIZe8gRfVYoG36dFp3O-zI2wCLcB/s1600/no-image.jpg',
            coverPic: 'https://2.bp.blogspot.com/-ZgJCyhJ528Q/V45lSl_muEI/AAAAAAAAYG8/Le77YQbVxIIZe8gRfVYoG36dFp3O-zI2wCLcB/s1600/no-image.jpg',
            // v-model for v-text indexs
            imagesIndexModel: [
            ],
            imgsIndex: 0,
            selected: false,
            showCoverTooltip: true
        }
    },
    methods: {
        passImagesToParent () {
            this.$emit('passImages', this.newCharacter.images)
        },
        getImageByIndex (index, outerLoop) {
            index = this.getLoopIndex(index, outerLoop)
            if(this.newCharacter.images[index-1] !== null && this.newCharacter.images[index-1] !== undefined){
                return this.newCharacter.images[index-1]
            }else{
                return {src: ''}
            }
        },
        removeImage (element) {
            console.log("Eliminar")
            let index = this.newCharacter.images.indexOf(element)
            this.newCharacter.images.splice(index, 1)
            this.imagesIndexModel.splice(index, 1)

            for (let i = index; i < this.newCharacter.images.length; i++) {
                this.newCharacter.images[i].index--
                this.imagesIndexModel[i].index--
            }
            this.imgsIndex--
        },
        getImageIndex (index, outerLoop) {
            index = this.getLoopIndex(index, outerLoop)
            return this.newCharacter.images[index-1].index
        },
        setAsThumbnail (index) {
            this.imagesIndexModel.forEach(element => {
                element.color = 'warning'
            });
            this.imagesIndexModel[index].color = 'success'

            this.newCharacter.images.forEach(element => {
                element.thumbnail = false
            });
            this.newCharacter.images[index].thumbnail = true

            console.log(this.imagesIndexModel)
            console.log(this.newCharacter.images)
        },
        hasSource (index, outerLoop) {
            index = this.getLoopIndex(index, outerLoop)
            if(this.newCharacter.images[index-1] !== null && this.newCharacter.images[index-1] !== undefined){
                let img = this.newCharacter.images[index-1]

                return (img.src !== null && img.src !== undefined && img.src !== '')
            } else
                return false
        },
        getMaskNumbers () {
            let mask = ''
            //For de cantidad de digitos de numero de imagenes que hay, para mascara
            for (let i = 0; i < this.newCharacter.images.length.toString().length ; i++) {
                mask += '#'
            }
            return mask
        },
        changeCover (selectedImg) {
            this.coverPic = selectedImg.src
        },
        checkTypedIndex (index, outerLoop, newValue) {
            index = this.getLoopIndex(index, outerLoop) - 1
            let oldValue = this.newCharacter.images[index].index
            if (newValue > this.imgsIndex) {
                this.imagesIndexModel[index].index = oldValue
                // this.$set(this.imagesIndexModel, index, oldValue)
            } else {
                let auxImage = {
                    ...this.newCharacter.images[index]
                }
                this.newCharacter.images[index] = this.newCharacter.images[newValue]
                this.newCharacter.images[newValue] = {...auxImage}

                // Para este punto ya ha sido cambiado el arreglo asi que los indices tambien
                this.imagesIndexModel[index].index = index
                // this.$set(this.imagesIndexModel, index, index)
                this.imagesIndexModel[newValue].index = newValue
                // this.$set(this.imagesIndexModel, newValue, newValue)
                this.newCharacter.images[index].index = index
                this.newCharacter.images[newValue].index = newValue
            }
        },
        onPickFile () {
            this.$refs.fileInput.click()
        },
        onFilePicked (event) {
            this.selected = true
            console.log("Selected")
            var files = event.target.files
            let context = this
            for(let i = 0; i < files.length; i++) {
                let fileReader = new FileReader ()
                // Las imagenes no se cargaban en orden, a veces una cargaba mas rapido que otra y asi
                // cambia el orden de las imagenes
                // Se crea el array de tamaño "files.length" primero y luego cuando cargue una imagen se va
                // a colocar donde deberia con el iterador del for "i"
                this.newCharacter.images.push(
                    { src: '', index: 0 }
                )
                // color sera para el color individual de cada boton de "set as thumbnail"
                this.imagesIndexModel.push({ index: 0, color: 'warning'})

                fileReader.addEventListener ('load', () => {
                    //Metodo asincrono?
                    //Cuando termine se ejecuta esto, si es asincrono
                    let result = fileReader.result

                    this.newCharacter.images[context.imgsIndex] = {
                        src: result,
                        index: context.imgsIndex,
                    }
                    this.imagesIndexModel[context.imgsIndex].index = context.imgsIndex
                    context.imgsIndex++

                    this.auxClass = 'mt-5'
                    // Aca es donde cambio el tamaño de algo del carousel y luego lo devuelvo para que se actualice
                    this.auxClass = 'mt-2'
                    this.changeCover ({src: result})
                })
                //Se ejecuta esto y cuando termine...
                fileReader.readAsDataURL(files[i])
            }
        },
        resetImages () {
            this.newCharacter.images = []
            this.newCharacter.imagesNoHeader = []
            this.imgsIndex = 0
            this.imagesIndexModel = []
            this.selected = false
        },
        getLoopIndex (index, outerLoop) {
            let aux = (this.itemsPerPage*(outerLoop-1))
            index += aux
            return index
        },
        restart () {
            this.coverPic = this.defaultCover
            this.selected = false
        }
    },
    computed: {
        paginas () {
            return Math.ceil((this.newCharacter.images.length / this.itemsPerPage))
        },
        imagesLength () {
            return this.newCharacter.images.length
        },
        itemsPerPage () {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return 3
                case 'sm': return 3
                case 'md': return 3
                case 'lg': return 3
                case 'xl': return 6
            }
        },
        carouselHeight () {
          switch (this.$vuetify.breakpoint.name) {
            case 'xs': return 100
            case 'sm': return 100
            case 'md': return 100
            case 'lg': return 100
            case 'xl': return 140
          }
        },
        preMaxHeight () {
          switch (this.$vuetify.breakpoint.name) {
            case 'xs': return 200
            case 'sm': return 200
            case 'md': return 200
            case 'lg': return 260
            case 'xl': return 350
          }
        },
    },
    watch: {
        imagesLength: function (val) {
            if (val == 0) {
                this.restart()
            }
        }
    }
}
</script>

<style>
    
</style>