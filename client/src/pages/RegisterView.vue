<template>
    <div>
        <form>
            <h1>สมัครบัญชีเข้าใช้งาน</h1>
            <div v-for="(value,key) in fields" :key="key">
                <p>{{ value }}</p>
                <input v-model="form[key]" :type="key === 'password' ? 'password' : 'text'" :placeholder="key + '...'" />
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({});
const fields = {
    username:'ชื่อผู้ใช้งาน',
    firstname:'ชื่อจริง',
    lastname:'นามสกุล',
    position:'ตำแหน่ง',
    department:'แผนก',
    password:'รหัสผ่าน'
}
</script>

<style lang="scss" scoped>

</style>