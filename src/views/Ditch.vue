<template>
  <section>
    <div>
      <el-form :inline="true">
        <el-form-item>
          <el-input v-model="name" placeholder="请输入渠道名称" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model="status" placeholder="状态" clearable>
            <el-option label="启用" :value="true"></el-option>
            <el-option label="禁用" :value="false"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="mb15" @click="add">添加渠道</el-button>
        </el-form-item>
      </el-form>
      <el-table
        v-loading="loading"
        :data="list"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="创建时间"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.gmt | formatDate('yyyy-MM-dd') }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          label="修改时间"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.upt | formatDate('yyyy-MM-dd') }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="渠道"
          width="180">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态">
          <template slot-scope="scope">
            <span>{{ scope.row.status | bel}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="edit(scope.$index, scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
      <!-- 添加弹窗-start -->
      <el-dialog title="添加渠道" :visible.sync="dialogVisible" style="max-width:50rem;margin:0 auto" :show-close="false">
        <el-form>
          <el-form-item label="渠道名称">
            <el-input v-model="addName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item v-if="showEdit">
            <el-switch
              style="display: block"
              v-model="editStatus"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="启用"
              inactive-text="禁用">
            </el-switch>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="mapcancel">取 消</el-button>
          <el-button type="primary" @click="save" :loading="btnLoading">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 添加弹窗-end -->
    </div>
  </section>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'users-ditch',
  data () {
    return {
      id: null,
      showEdit: false,
      editStatus: false,
      addName: '',
      name: '',
      status: null,
      currentPage: 1,
      total: 0,
      pageSize: 10
      // list: [
      //   {
      //     id: 1,
      //     gmt: 1553754190000,
      //     upt: 1553754189000,
      //     version: 1,
      //     name: "渠道1",
      //     type: "WX",
      //     status: true,
      //     sort: 0
      //   }
      // ]
    }
  },
  created () {
    this.$store.commit('changePage','/ditch')
  },
  computed: {
    ...mapState(['list', 'dialogVisible','loading','btnLoading'])
  },
  mounted () {
    this.listFn()
  },
  methods: {
    ...mapMutations({
      mapList: 'list',
      mapVisible: 'changeVisible',
      mapLoading: 'changeLoading',
      mapBtnLoading: 'changeBtnLoading',
      mapcancel: 'cancel'
    }),
    listFn () {
      this.mapLoading()
      let trans = {
        name: this.name,
        status: this.status,
        pageSize: this.pageSize,
        pageNum: this.currentPage
      }
      this.$axios.post('queryList',trans)
        .then(res => {
          if(res.success){
            const l = res.data
            this.mapList(l)
            this.total = l.total
            setTimeout(() => {
              this.mapLoading()
            }, 500)
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    add () {
      this.showEdit = false
      this.addName = ''
      this.mapVisible()
    },
    edit(index, row) {
      this.showEdit = true
      this.id = row.id
      this.addName = row.name
      this.editStatus = row.status
      this.mapVisible()
    },
    save () {
      if(this.addName !== ''){
        this.mapBtnLoading()
        if (this.showEdit) {//编辑
          this.editBtn()
        } else { // 添加
          this.addBtn()
        }
      } else {
        this.$message({
          message: '请填写渠道名称',
          type: 'warning'
        })
      }
    },
    editBtn () {
      let trans = {
        id: this.id,
        name: this.addName,
        status: this.editStatus
      }
      this.$axios.post(this.jk.ditchEdit,trans)
      .then(res => {
        if(res.success){
          this.$message({
            message: '修改成功',
            type: 'success'
          })
          this.listFn()
          this.mapVisible()
          this.mapBtnLoading()
        }else{
          this.$message.error(res.msg)
          this.addName = ''
        }
      })
      .catch(e => {
        console.log(e)
      })
    },
    addBtn () {
      this.$axios.post(this.jk.ditchAdd, {name: this.addName})
        .then(res => {
          if(res.success){
            this.$message({
              message: '添加成功',
              type: 'success'
            })
            this.mapVisible()
            this.listFn()
            this.mapBtnLoading()
          }else{
            this.$message.error(res.msg)
            this.addName = ''
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    search () {
      this.pageSize = 10
      this.currentPage = 1
      this.listFn()
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.listFn()
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.listFn()
      // console.log(`当前页: ${val}`);
    }
  }
}
</script>
