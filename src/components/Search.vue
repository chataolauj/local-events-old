<template>
    <div id="search-bar">
        <div id="input-design">
            <input v-model="location" type="text" placeholder="Search location or postal code" @keyup.enter="getLocation">
            <span class="fa fa-search" @click="getLocation"></span>
        </div>
        <span class="fa fa-filter"></span>
    </div>
</template>

<script>

export default {
    name: "Search",
    data() {
        return {
            location: null,
            loading: true
        }
    },
    methods: {
        getLocation() {
            this.$emit("location", this.location);
            this.$emit("loading", this.loading);
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

    #input-design {
        position: relative;
        width: 30%;
        margin-right: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;

        input[type="text"] {
            width: 100%;
            //font-size: 15px;
            padding: 5px;
            outline: none;
            border: 2px solid white;
            border-radius: 50px;
            text-indent: 10px;

            &:hover {
                box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, .3);
                transition: .2s ease-in-out;
            }

            &:focus {
                //border-color: $primaryOne;
                box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, .3);
            }
        }

        .fa-search {
            position: absolute;
            font-size: 20px;
            color: $primaryOne;
            background: none;
            outline: none;
            border: none;
            right: 15px;

            &:hover {
                cursor: pointer;
                color: $primaryTwo;
                transition: color .2s ease-in-out;
            }
        }
    }

    .fa-filter {
        font-size: 20px;

        &:hover {
            cursor: pointer;
            color: $primaryTwo;
            transition: color .2s ease-in-out;
        }
    }
}
</style>