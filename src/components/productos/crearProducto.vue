<template>
    <div>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn icon flat v-on="on"><v-icon>add</v-icon></v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Add a new product</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-layout row wrap>
            <v-flex xs6>
                <v-layout row wrap justify-center>
                    <images-selector-carousel :preview="true" loadText="Create Product"
                    v-on:passImages="crearProducto ($event)"
                    class="pa-2">
                    </images-selector-carousel>
                </v-layout>
            </v-flex>
            <v-flex xs6 class="pa-3">
                <v-text-field
                    label="Title"
                    :rules="[rules.required]"
                    box solo clearable
                    v-model="title"
                    id="id"
                ></v-text-field>
                <v-textarea
                    label="Description"
                    :rules="[rules.required]"
                    box solo rows="4"
                    resizable clearable
                    v-model="description"
                    id="id"
                ></v-textarea>
                <v-text-field
                    label="Creator"
                    :rules="[rules.required]"
                    box solo clearable
                    v-model="creator"
                    id="id"
                ></v-text-field>
                <v-text-field
                    label="Initial stock" clearable
                    :rules="[rules.required]"
                    box solo type="number"
                    v-model="stock" 
                    id="id"
                ></v-text-field>
                <v-text-field
                    label="Category"
                    :rules="[rules.required]"
                    box solo clearable
                    v-model="category"
                    id="id"
                ></v-text-field>
                <v-text-field
                    label="Price" clearable
                    :rules="[rules.required]"                    
                    box solo type="number"
                    v-model="precio"
                    id="id"
                ></v-text-field>
            </v-flex>
            <v-flex xs12>
                <v-layout row wrap justify-center>
                    <v-subheader><v-icon>info</v-icon> You need to select at least an image to create a product</v-subheader>
                </v-layout>
                <v-layout row wrap justify-center v-if="upload">
                    <v-btn color="success" :disabled="true" :loading="cargando">
                        {{status}}
                    </v-btn>
                </v-layout>
            </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            dialog: false,
            title: '',
            description: '',
            creator: '',
            stock: '',
            category: '',
            precio: '',
            upload: false,
            rules: {
                required: value => !!value || 'Required.',
            }
        }
    },
    methods: {
        crearProducto ($event) {
            if(this.stock<0 || this.precio<0){
                alert('Favor de no ingresar numeros negativos')
            }else if(isNaN(this.precio)){
                alert('Favor de ingresar números')
            }else{
                if (this.title.length < 1 && this.description.length < 1 && this.creator.length < 1 &&
                    this.stock.length < 1 && this.category.length < 1) {
                    alert('Fill all the text fields')
                } else {
                    this.upload = true
                    let imagenes = $event
                    let imagenesNoHeader = []
                    //Quitar header del base64
                    imagenes.forEach(imagen => {
                        imagenesNoHeader.push(this.removeBase64Headers(imagen.src))
                    });
                    let newProduct = {
                        titulo: this.title,
                        descripcion: this.description,
                        creador: this.creator,
                        stock: this.stock,
                        precio: this.precio,
                        imagenes: imagenesNoHeader,
                        categoria: this.category,
                    }
                    this.$store.dispatch('crearProducto', newProduct)
                }
            }
        },
        removeBase64Headers (base64) {
            return base64.substr(base64.indexOf(',') + 1)
        },
    },
    computed: {
        cargando () {
            return this.$store.getters.getCargando
        },
        status () {
            return this.$store.getters.getStatusUpload
        }
    }
}
</script>