    <template>
    <div class="totalData">

        <table border="0.1" cellspacing="0" cellpadding="5">
            <tr >
                <td class="title"> 省级平台:</td>
                <td>{{messageTotal.provincialTotal}}  </td>
                <td class="title"> 直属市级平台:</td>
                <td> {{messageTotal.municipaTotal}} </td>
                <td class="title"> 直属县级平台:</td>
                <td> {{messageTotal.countryTotal}} </td>
               
            </tr>
        <tr >
                <td class="title"> 直属羊场:</td>
                <td> {{messageTotal.sheepTotal}} </td>
                <td class="title" colspan="2"> 在栏羊只数:</td>
                <td colspan="2"> {{messageTotal.sheepNumber}} </td>
                
         </tr>
         <tr >
                <td class="title"> 种公羊:</td>
                <td > {{messageTotal.ramTotal}} </td>
               
                <td class="title"> 种母羊:</td>
                <td > {{messageTotal.eweTotal}} </td>
               
                <td class="title"> 商品羊:</td>
                <td > {{messageTotal.commercialTotal}} </td>
                
         </tr>
          <tr >
                <td class="title"> 羔羊:</td>
                <td > {{messageTotal.lambTotal}} </td>
               
                <td class="title"> 后备种公羊:</td>
                <td >{{messageTotal.reserveRamTotal}} </td>
               
                <td class="title"> 后备种母羊:</td>
                <td >{{messageTotal.reserveRamTotal}}  </td>
                
         </tr>
        </table>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        props:{
            messageTotal:Object
        }
    }
</script>
<style scoped>
 .totalData{
    display: flex;
    flex-wrap: wrap;
    font-size: 20px;
    color: #666;
    justify-content: center;
 }
 .totalData table{
    margin-top: 10px;
    width:75%;
    border-collapse: collapse;
 }
 .totalData table td{
    text-align:center;
    font-size: 10px;
    width: 80px;
    border: 1px solid #cad9ea; 
    height:30px;
 }
 .totalData table .title
 {
    font-size: 13px;
    color:#fff;
    width:150px;
    background-color: #2891d1;
   
}
</style>
