<template>
  <div class="edit-top bor-bot">
   定期更新您的里程，可更准确地判断您的车辆状态：
  </div>
  <div class="edit-list bor-bot mb2">
      <label>当前里程 <span><greet msg="请输入当前里程" :value=kilometer id="curRoad"></greet>KM</span></label>
      <label>上路时间 <span class="pr75"><date :time=onRoadTime></date> </span><b class="ion-right"></b></label>
      <label v-on:click="lastMaintenanceFun">上次保养 <span class="pr75"><input value="{{maintenanceTime | time}}" disabled class="date"/></span><b class="ion-right"></b></label>
  </div> 
  <div class="addRecord-no" v-on:click="editSubmit">
   <div class="button">
      确定
   </div>
  </div>
  <div class="warm">
    <span class="warm-tit">说明</span>
    <div>
      <p>系统将自动根据您的保养记录更新上次保养时间！</p>
      <p>如需更新，请添加最新一次保养记录</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

</script>