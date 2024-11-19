# Icons

<Icons />

<script setup>
import { ref, computed } from "vue"
import * as a  from "bigquant-icons-vue"
import Icons from "./components/icons/index.vue"


const icons = computed(()=>Object.values(a))
</script>

<style>
.icon {
    width:24px;
    height:24px;
}
</style>
