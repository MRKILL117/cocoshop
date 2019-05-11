<template>
  <div>
    <v-layout row wrap align-center justify-center mt-5>
      <v-flex xs6>
        <v-card>
          <v-layout row wrap>
            <v-card-title primary-title>
              <div class="headline">Crear una cuenta</div>
            </v-card-title>
            <v-card-text>
              <v-text-field
                label="Nombre"
                box
                prepend-inner-icon="person"
                maxlength="25"
                v-model="user.nombre"
              ></v-text-field>
              <v-text-field
                label="Apellido"
                box
                prepend-inner-icon="person"
                maxlength="25"
                v-model="user.apellido"
              ></v-text-field>
              <v-text-field
                label="email"
                box
                prepend-inner-icon="mail"
                maxlength="35"
                v-model="user.email"
              ></v-text-field>
              <v-alert type="info" v-show="!checkPasswordMayus || !checkPasswordMins || !checkPasswordNum || !checkPasswordLength">
                La contraseña debe estar compuesta minimo con una letra mayuscula,
                una letra minuscula y un numero, y debe de contener un minimo de 8 caracteres
                </v-alert>
                
                <v-alert type="success" v-show="checkPasswordMayus && checkPasswordMins && checkPasswordNum && checkPasswordLength" >¡Muy bien!</v-alert>
                
                <v-text-field
                    label="Contraseña"
                    box
                    type="password"
                    prepend-inner-icon="lock"
                    v-model="user.password"
                ></v-text-field>
                <v-alert type="error" v-show="!checkPassword">Las contraseñas no son iguales</v-alert>
              <v-text-field
                label="Confirme su contraseña"
                box
                type="password"
                prepend-inner-icon="lock"
                v-model="user.c_password"
              ></v-text-field>
              <v-text-field
                label="Teléfono"
                box
                type="number"
                prepend-inner-icon="call"
                maxlength="10"
                v-model="user.telefono"
              ></v-text-field>
              <v-text-field
                label="Dirección"
                box
                prepend-inner-icon="home"
                maxlength="200"
                v-model="user.direccion"
              ></v-text-field>
              <v-text-field
                label="País"
                box
                prepend-inner-icon="room"
                maxlength="200"
                :readonly="true"
                value = "México"
                
              ></v-text-field>
              <v-select
                :items = "estados"
                label="Estado"                
                box
                prepend-inner-icon="filter_hdr"
                maxlength="200"
                v-model="user.estado"
              ></v-select>
              <v-text-field
                label="Ciudad"
                box
                prepend-inner-icon="location_city"
                maxlength="200"
                v-model="user.ciudad"
              ></v-text-field>
              <v-text-field
                label="CP"
                box
                type="number"
                prepend-inner-icon="markunread_mailbox"
                maxlength="5"
                v-model="user.codigoPostal"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn color="green" block @click="crearUser"
              :disabled="!checkPasswordMayus || !checkPasswordMins || !checkPasswordNum || !checkPasswordLength || !checkPassword"
              >Registrarse</v-btn>
            </v-card-actions>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        nombre: "",
        apellido: "",
        telefono: "",
        direccion: "",
        password: "",
        c_password: "",
        codigoPostal: "",
        ciudad: "",
        estado: "",
        pais: "México"
      },
      estados: [
        'CDMX',
        'Aguascalientes',
        'Baja California Norte',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Coahuila',
        'Colima',
        'Durango',
        'Estado de México',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'JALISCO',
        'Michoacán',
        'Morelos',
        'Nayarit',
        'Nuevo León',
        'Oaxaca',
        'Puebla',
        'Querétaro',
        'Quintana Roo',
        'San Luis Potosí',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz',
        'Yucatán',
        'Zacatecas'
      ]    
    };
  },
  methods: {
    crearUser() {
      this.$store.dispatch("crearUser", this.user);
      this.goToRoute("login");
    },
    goToRoute(route) {
      this.$router.push("/" + route);
    }
  },
  computed: {
    checkPassword() {
        if(this.user.password === this.user.c_password){
          this.errorMsg = false
          return true
        }else{
          this.errorMsg = true
          return false
        }
    },
    checkPasswordMayus(){
      let pass = this.user.password.split('');
      let cont = 0;
      this.cont1 = 0;
      for (let i = 0; i < pass.length; i++) {
        if(pass[i]===pass[i].toUpperCase()){
          cont++;
          if(pass[i]==='0' || pass[i]==='1' || pass[i]==='2' || pass[i]==='3' || pass[i]==='4' || pass[i]==='5' || pass[i]==='6' || pass[i]==='7' || pass[i]==='8' || pass[i]==='9'){
          cont--;
          }
        }
      }
      if(cont>=1){
        return true
      }else{
        return false
      }
    },
    checkPasswordMins(){
      let pass = this.user.password.split('');
      let cont = 0;
      for (let i = 0; i < pass.length; i++) {
        if(pass[i]===pass[i].toLowerCase()){
          cont++;
          if(pass[i]==='0' || pass[i]==='1' || pass[i]==='2' || pass[i]==='3' || pass[i]==='4' || pass[i]==='5' || pass[i]==='6' || pass[i]==='7' || pass[i]==='8' || pass[i]==='9'){
          cont--;
          }
        }
      }
      if(cont>=1){
        return true
      }else{
        return false
      }
    },
    checkPasswordNum(){
      let pass = this.user.password.split('');
      let cont = 0;
      for (let i = 0; i < pass.length; i++) {
        if(pass[i]==='0' || pass[i]==='1' || pass[i]==='2' || pass[i]==='3' || pass[i]==='4' || pass[i]==='5' || pass[i]==='6' || pass[i]==='7' || pass[i]==='8' || pass[i]==='9'){
          cont++;
        }
      }
      if(cont>=1){
        return true
      }else{
        return false
      }
    },
    checkPasswordLength(){
      let pass = this.user.password.split('');
      if(pass.length>=8){
        return true
      }else{
        return false
      }
    }
  }
};
</script>
