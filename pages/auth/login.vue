<template>
    <div class="mx-auto">
        <div class="flex justify-between w-full gap-9">
            <div class=" w-full lg:w-1/3 m-10 flex flex-col">
                <div> <img src="~/assets/images/logo_black.svg" alt="" class="h-8"> </div>

                <span class="my-10"></span>
                <div class="mt-10">
                    <h1 class="text-3xl font-bold">Welcome Back</h1>
                    <p class="text-gray-500">Login to your account</p> 
                </div>

                <span class="my-2"></span>

                <button class=" bg-[#E9F1FF] text-[#4285F4] py-3 rounded-md"> Se connecter avec Google</button>

                <div class="flex items-center gap-3">
                    <div class="w-1/2 h-0.5 bg-gray-300  my-5"></div>
                    <div>OU</div>
                    <div class="w-1/2 h-0.5 bg-gray-300 my-5"></div>
                </div>

                <div class="flex flex-col gap-3">
                    <TextFormInput 
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Entrez votre email"
                     />
                     <TextFormInput 
                        label="Mot de passe"
                        type="password"
                        name="password"
                        placeholder="Entrez votre mot de passe"
                     />
                </div>

                <div class="flex justify-between mt-5">
                    <button class="text-[#FF0051] py-3 rounded-md">Mot de passe oublié</button>
                    <FilledButton label="Connexion" />
                </div>
                
            </div>
            <div class="hidden lg:flex lg:w-3/5 h-screen">
                <img class="object-cover min-h-screen"
                    src="https://images.pexels.com/photos/1518761/pexels-photo-1518761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="">
                charles
            </div>
        </div>
    </div>
</template>

<script >
import TextFormInput from '~/components/inputs/TextFormInput.vue';
import FilledButton from '~/components/buttons/FilledButton.vue';
export default {
    components: {
        TextFormInput,
        FilledButton
    },
};
</script>