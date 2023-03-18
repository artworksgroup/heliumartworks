<template>
    <div class="flex justify-center space-x-6 text-center">
        <div v-for="(value, unit) in countdown" :key="unit" class="countdown-item">
            <div class="text-4xl font-semibold text-white capitalize">{{ value }}</div>
            <div class="text-xl text-white">{{ unit }}</div>
        </div>
    </div>
</template>
  
<script >
export default {
    data() {
        return {
            targetDate: new Date('2023-07-01T11:59:59'),
            countdown: {
                jours: 0,
                heures: 0,
                minutes: 0,
                secondes: 0,
            },
            timer: null,
        };
    },
    mounted() {
        this.calculateCountdown();
        this.timer = setInterval(this.calculateCountdown, 1000);
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
    methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        calculateCountdown() {
            const now = new Date();
            const timeRemaining = this.targetDate.getTime() - now.getTime();

            if (timeRemaining < 0) {
                clearInterval(this.timer);
                this.countdown = { jours: 0, heures: 0, minutes: 0, secondes: 0 };
                return;
            }

            const secondes = Math.floor(timeRemaining / 1000);
            const minutes = Math.floor(secondes / 60);
            const heures = Math.floor(minutes / 60);
            const jours = Math.floor(heures / 24);

            this.countdown.jours = jours;
            this.countdown.heures = heures % 24;
            this.countdown.minutes = minutes % 60;
            this.countdown.secondes = secondes % 60;
        },
    },
};
</script>
  
<style scoped>
.capitalize::first-letter {
    text-transform: capitalize;
}
</style>
  