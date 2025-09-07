

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import { useSettingStore } from "../store/settings";

const route = useRoute();
const { get: siteSettings } = useSettingStore();

const source = computed(() => route.name?.toString());
</script>
