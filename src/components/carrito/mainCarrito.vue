<template>
    <div>
        <v-menu offset-y :close-on-content-click="false">
            <v-btn icon slot="activator">
                <v-icon>shopping_cart</v-icon>
            </v-btn>

            <v-card width="500" max-height="600">
                <v-card-title primary-title>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <h3 class="headline mb-0">Carrito</h3>
                            <v-divider></v-divider>
                        </v-flex>
                    </v-layout>
                </v-card-title>

                <v-card-text>
                    <div class="title"><v-icon>sentiment_very_dissatisfied</v-icon> Carrito Vacio</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn color="success">
                        <v-icon class="mr-2">shop</v-icon> Comprar
                    </v-btn>
                    <v-btn color="danger" class="mr-2">
                        <v-icon>remove</v-icon> Limpiar Carrito
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-menu>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>