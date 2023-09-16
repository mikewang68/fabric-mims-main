<template>
  <div class="container">
  
    <el-alert
      type="success"
    >
      <p>本系统实现了对数据的去中心化存储，用户有5类，分别为管理员、医生、病人、药店和保险机构。</p>
      <p>管理员的权限最高，拥有其他用户的所有权限，而且还拥有为其他用户创建账号的权限；医生拥有查看病人病例和新增病例权限；</p>
      <p>病人拥有查看自己病例、查看保险报销、申请报销和查看药品订单的权限；</p>
      <p>药店拥有查看所有药品订单和新增订单的权限；保险机构拥有查看所有保险报销记录和新增报销的权限。</p>
      <p>数据都存储在区块链上，每个用户只能从区块链上读取到有权限的数据。</p>
    </el-alert>
    
    <el-card class="mainPage-card" >
      <div slot="header" class="mainPageHeader" style="text-align: center;">
        基于区块链的医疗管理系统
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
</style>

