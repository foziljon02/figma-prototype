<template>
    <div class="my-card-body card-body d-flex">
        <div class="icon-container">
            <img width="35" :src="data.img" alt="">
        </div>

        <div class="ml-3">
            <h6 class="card-title m-0 mb-1">
                {{data.technology}}
            </h6>

            <div class="d-flex justify-content-between align-items-center" >
                <div class="d-flex align-items-center">
                    <div class="dot-blue text-blue" ></div>
                    <p class="ml-1">{{data.numOfCourses}} Course</p>
                </div>

                <div class="d-flex align-items-center ml-3">
                    <div class="dot-yellow text-blue" ></div>
                    <p class="ml-1">{{data.numOfCourses}} Course</p>
                </div>

            </div>
        </div>

        
    </div>
</template>

<script>

export default {
    name: 'CatagoryCard',
    props: {
        data: Object,
    }
}
</script>

<style scoped>

.dot-blue, .dot-yellow {
    width: 5px;
    height: 5px;
    border-radius: 50%;
}

.dot-blue {
    background: #2F3CED;
}

.dot-yellow {
    background: #ffab19;
}

.my-card-body {
    width: 100%;
}

</style>