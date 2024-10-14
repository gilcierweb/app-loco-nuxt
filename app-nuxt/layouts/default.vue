<template>
    <v-app>
        <AppHeader />
        <v-main>
            <v-container>
                <v-row>
                    <slot />
                </v-row>
            </v-container>
        </v-main>
        <AppFooter />
    </v-app>
</template>