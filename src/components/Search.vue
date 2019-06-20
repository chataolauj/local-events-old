<template>
    <div id="search-bar">
        <div id="input-design">
            <input v-model="location" type="text" placeholder="Search location or postal code" @keyup.enter="getLocation">
            <span class="fa fa-search" @click="getLocation"></span>
        </div>
    </div>
</template>

<script>

export default {
    name: "Search",
    data() {
        return {
            location: null
        }
    },
    methods: {
        getLocation() {
            this.$emit("location", this.location);
        }
    }
}
</script>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css");

$primaryOne: #FF3B3F;
$primaryTwo: #51d0de;
$primaryThree: #e1e8f0;

#search-bar {
    background-color: $primaryOne;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transition: all 0.1s ease-in-out;

    #input-design {
        position: relative;
        width: 30%;
        display: flex;
        flex-direction: row;
        align-items: center;

        input[type="text"] {
            width: 100%;
            padding: 5px;
            outline: none;
            border: 2px solid white;
            border-radius: 50px;
            text-indent: 10px;

            &:hover {
                box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, .3);
            }

            &:focus {
                //border-color: $primaryTwo;
                box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, .3);
            }
        }

        .fa-search {
            position: absolute;
            color: $primaryOne;
            background: none;
            outline: none;
            border: none;
            right: 15px;

            &:hover {
                cursor: pointer;
                color: $primaryTwo;
            }
        }
    }
}
</style>