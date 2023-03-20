<template>
    <div class="max-w-screen-xl  mx-auto ">
        <div class="flex flex-col p-12 w-full">
            <div class="flex justify-between w-full">
                <h1 class="text-4xl">Profil</h1>
                <div></div>
            </div>
            <span class="my-5"></span>

            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <div class="w-20 h-20 rounded-full bg-[#F1F1F1]">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" alt=""  class="object-cover rounded-full">
                    </div>
                    <div class="flex flex-col ml-5">
                        <h1 class="text-2xl font-bold">Importer une photo</h1>
                        <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.   </p>
                    </div>
                </div>
                <div class="">
                   
                </div>

            </div>
            <span class="my-5"></span>


            <div class="">
                <div>
                    <h1 class="text-2xl font-bold">Information utilisateur</h1>
                    <p class="text-gray-500">Modifier vos informations personnelles</p>
                </div>

                <div class="">
                    <div class="flex flex-col md:flex-row lg:gap-20">
                        <TextFormInput label="Nom d'utilisateur" type="text" name="name"
                            placeholder="Votre nom d'utilisateur" />
                        <TextFormInput label="Email" type="email" name="email" placeholder="Entrez votre pemail" />
                    </div>
                </div>

                <hr class="my-10">

                <div>
                    <h1 class="text-2xl font-bold">Information personnelles</h1>
                    <p class="text-gray-500">Modifier vos informations personnelles</p>
                </div>

                <div class="flex flex-col md:flex-row lg:gap-20">
                    <TextFormInput label="Nom" type="text" name="name" placeholder="Entrez votre nom" />
                    <TextFormInput label="Prénom" type="text" name="firstname" placeholder="Entrez votre prénom" />
                </div>

                <div class="flex flex-col md:flex-row lg:gap-20 justify-between">
                    <div class="flex flex-col w-full md:flex-row gap-10 justify-between lg:w-1/2">
                        <SelectFormInput label="Nom" type="text" name="name" placeholder="Entrez votre nom"
                            :options="sexOptions" />
                        <TextFormInput label="Âge" type="date" name="age" placeholder="Date de naissance" />
                    </div>
                    <div class="w-full lg:w-1/2">
                        <TextFormInput label="Adresse" type="text" name="adresse"
                            placeholder="Zanguéra dans la von de maco" />
                    </div>
                </div>

                <div class="flex flex-col md:flex-row lg:gap-20">
                    <TextFormInput label="Téléphone" type="phone" name="phone" placeholder="(228) 92 56 99 18" />
                    <TextFormInput label="Ville" type="text" name="city" placeholder="Lomé" />
                </div>

                <div class="flex justify-center my-20">
                    <FilledButton label="Sauvegarder" />
                </div>



            </div>
        </div>

    </div>
</template>
<script>
import TextFormInput from '~/components/inputs/TextFormInput.vue';
import SelectFormInput from '~~/components/inputs/SelectFormInput.vue';
import FilledButton from '~~/components/buttons/FilledButton.vue';
export default {
    components: {
        TextFormInput,
        SelectFormInput,
        FilledButton,
    },
    data(){
        return {
            sexOptions : [
                {
                    "value": "M",
                    "label": "Masculin"
                },
                {
                    "value": "F",
                    "label": "Féminin"
                }
            ]
        }
    }
};
</script>