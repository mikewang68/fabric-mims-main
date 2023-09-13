<template>
  <div class="container">
    <el-alert type="success">
      <p>账户ID: {{ account_id }}</p>
      <p>用户名: {{ account_name }}</p>
    </el-alert>

    <el-card class="mainPage-card" >
      <div slot="header" class="mainPageHeader" style="text-align: center;">
        基于区块链的医疗信息管理系统
      </div>

      <div class="mainPageNote">
        <el-tag>系统角色: </el-tag>
        <span style="margin-left: 5px;"> {{ '管理员、医生、患者、药店、保险机构' }}</span>
      </div><br>

      <div class="mainPageNote">
        <el-tag type="success">医生功能: </el-tag>
        <span style="margin-left: 5px;"> {{ '查看患者信息、创建病历、查看病历' }}</span>
      </div><br>

      <div class="mainPageNote">
        <el-tag type="warning">患者功能: </el-tag>
        <span style="margin-left: 5px;"> {{ '查看病历、查看药品订单、查看保险报销申请、发起保险报销申请' }}</span>
      </div><br>

      <div class="mainPageNote">
        <el-tag type="success">药店功能: </el-tag>
        <span style="margin-left: 5px;"> {{ '查看病历、创建药品订单、查看药品订单' }}</span>
      </div><br>

      <div class="mainPageNote">
        <el-tag>保险机构功能: </el-tag>
        <span style="margin-left: 5px;"> {{ '查看病历、查看保险报销记录、创建保险报销记录、审核患者发起的报销申请' }}</span>
      </div><br>

      <div class="mainPageNote">
        <el-tag type="danger">管理员: </el-tag>
        <span style="margin-left: 5px;"> {{ '查看各类记录、查看账号、创建账号' }}</span>
      </div><br>

    </el-card>
    
    <el-row  class="home-item">
          <el-col :xs="16" :sm="8" :md="4" :lg="4">
            <el-card :body-style="{ padding: '40px' }">
              <div class="img" >
                <img src="./home1.png" alt="" class="image">
              </div>
              <div>
                <h3 style="padding: 10px;text-align: center;color: #62aff1">就诊追踪</h3>
                <p style="text-align: center">追踪患者就诊记录，负责、透明</p>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="16" :sm="8" :md="4" :lg="4">
            <el-card :body-style="{ padding: '40px' }">
              <div class="img" >
                <img src="./home2.png" alt="" class="image">
              </div>
              <div>
                <h3 style="padding: 10px;text-align: center;color: #62aff1">药房管理</h3>
                <p style="text-align: center">管理药房各类药品订单，库存</p>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="16" :sm="8" :md="4" :lg="4">
            <el-card :body-style="{ padding: '40px' }">
              <div class="img" >
                <img src="./home3.png" alt="" class="image">
              </div>
              <div>
                <h3 style="padding: 10px;text-align: center;color: #62aff1">住院管理</h3>
                <p style="text-align: center">完善，详细记录患者住院记录</p>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="16" :sm="8" :md="4" :lg="4">
            <el-card :body-style="{ padding: '40px' }">
              <div class="img" >
                <img src="./home4.png" alt="" class="image">
              </div>
              <div>
                <h3 style="padding: 10px;text-align: center;color: #62aff1">医药采购</h3>
                <p style="text-align: center">详细，入账各类药品采购记录</p>
              </div>
            </el-card>
          </el-col>
        </el-row>


  </div>

</template>


<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'account_id',
      'roles',
      'account_name',
    ])
  },

}
</script>

<style>
  .container p{
    font-size: 15px;
    width: 100%;
    /*text-align: center;*/
    min-height: 100%;
    overflow: hidden;
  }
  .mainPage-card {
    width: 80%;
    height: 400px;
    margin: 18px auto; /* auto可以使其水平居中 */
  }

  .mainPage-card .mainPageHeader {
    text-align: center;
    font-size: 20px;
  }

  .mainPage-card .mainPageNote {
    font-size: 16px;
  }
  .home-item{
   justify-content: space-between;
   display: flex;
   margin-top: 20px;
}
  .img{
    background: #EFF5FD;
    height: 124px;
    width: 124px;
    border-radius: 50%;
  }
  .image {
    width: 200px;
    height: 150px;
    display: block;
  }
</style>
