<template>
    <el-card>
        <el-table :data="data" highlight-current-row stripe v-loading="loading" style="width: 100%">
            <el-table-column prop="id" label="ID" align="center" min-width="150" />
            <el-table-column prop="username" label="用户名" align="center" min-width="150" />
            <el-table-column prop="operate" label="操作" align="center" show-overflow-tooltip min-width="150" />
            <el-table-column prop="created" label="操作时间" align="center" min-width="200" />
        </el-table>
        <div class="am-pagination">
            <el-config-provider :locale="zhCn">
                <el-pagination
                    v-model:current-page="pagination.page"
                    :page-size="pagination.size"
                    layout="total, sizes, prev, pager, next, jumper"
                    :page-sizes="pagination.sizeOption"
                    :total="pagination.total"
                    @size-change="pagination.onSizeChange"
                    @current-change="pagination.onPageChange"
                />
            </el-config-provider>
        </div>
    </el-card>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { useTable } from '@/hooks/useTable.ts'
import { queryAudit } from '@/api/audit'

onMounted(() => {
    refresh()
})
const { data, refresh, loading, pagination } = useTable(queryAudit, {}, {})
</script>

<style scoped lang="scss"></style>
