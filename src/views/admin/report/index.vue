<template>
  <div>
    Chart
    <iframe class="chart" src="http://220.128.216.143:3000/d/gREAuPpWz/siemens_demo_2?orgId=1&from=now-3h&to=now&kiosk&refresh=5s"></iframe>
  </div>
</template>

<style scoped>
.chart{
 position:fixed; top:70px; left:210px; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;
}
</style>