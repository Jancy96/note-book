<template>
  <div id="root" style="width: 100%;height: 100%;max-width: 100vw;max-height: 100vh">
   <div class="ant-row _1gp6t">
    <div class="ant-col ant-col-4 _2v5v5">
     <div class="_3zibT">
      <a href="https://www.jianshu.com">回首页</a>
     </div>
     <div class="_1iZMb">
      <div class="_33Zlg">
       <i class="fa fa-plus"></i>
       <span>新建文集</span>
      </div>
      <div class="_2G97m">
       <form class="M8J6Q _1mU5v">
        <input type="text" placeholder="请输入文集名..." name="name" class="_1CtV4" />
        <button type="submit" class="dwU8Q _3zXcJ _3QfkW"><span>提 交</span></button>
        <button type="button" class="vIzwB _3zXcJ"><span>取 消</span></button>
       </form>
      </div>
     </div>
     <ul class="_3MbJ4 _3t059">
      <li class="_3DM7w _31PCv" title="日记本" style="">
       <div class="_3P4JX _2VLy-">
        <i class="fa fa-gear"></i>
        <span>
         <ul class="_2V8zt _3FcHm _2w9pn">
          <li class="_2po2r cRfUr" title=""><span class=""><i class="fa fa-pencil-square-o _22XWG"></i>修改文集</span></li>
          <li class="_2po2r cRfUr" title=""><span class=""><i class="fa fa-trash-o _22XWG"></i>删除文集</span></li>
         </ul></span>
       </div><span>日记本</span></li>
      <li class="_3DM7w" title="随笔" style=""><span>随笔</span></li>
     </ul>
     <div style="height: 50px;"></div>
     <div role="button" class="ant-col ant-col-4 h-5Am">
      <span class="ant-dropdown-trigger"><i class="fa fa-bars"></i><span>设置</span></span>
      <span class="Yv5Zx">遇到问题<i class="fa fa-question-circle-o"></i></span>
     </div>
    </div>
    <div class="ant-col ant-col-20" style="height: 100%;">
     <div class="ant-col ant-col-8 rQQG7">
      <div class="_3revO _2mnPN">
       <div class="_3br9T">
        <div>
         <div class="_1GsW5">
          <i class="fa fa-plus-circle"></i>
          <span> 新建文章</span>
         </div>
         <ul class="_2TxA-">
          <li class="_25Ilv _33nt7" title="T2"><i class="_13kgp _2m93u"></i>
           <div class="_3P4JX poOXI">
            <i class="fa fa-gear"></i>
            <span>
             <ul class="_2V8zt _3FcHm _2w9pn">
              <li class="_2po2r cRfUr" title=""><span class=""><i class="fa fa-check _22XWG"></i>已发布</span></li>
              <li class="_2po2r cRfUr" title=""><span class=""><i class="iconfont ic-set _22XWG"></i>设置发布样式</span></li>
              <li class="_2po2r cRfUr" title=""><span class=""><i class="iconfont ic-icon_stick _22XWG"></i>置顶文章</span></li>
              <li class="_3FrjS _2_WAp _3df2u _2po2r cRfUr" title=""><span class=""><i class="fa fa-share _22XWG"></i>分享文章
                <div class="_3x4X_">
                 <ul class="_2KzJx oGKRI _3DXDE _2w9pn">
                  <li class="_1CHYP _2po2r cRfUr" title=""><span class=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAk1BMVEUAAAAAvCkAvCkAvCkAvCkAvCkAvCoA1UMAvCkAvCkAvCoAvCoAvCkAvy0Avy0AvCkAvCkAvCoAuyoAvCkAvCkAvCkAvCkAvSoAvCsAvSsAviwAwC0AwS8AvCoAvCoAvCoAvSoAvSwAv0AAvCoAvCkAuykAvCkAvCkAvCkAvSkAuykAvSsAxDAAxDEA/4AAvCkAuyl1qxS+AAAAMHRSTlMA9vvz5cSFB76ki3VoKSL47NzX0ZqAbmFLQDAcEe9dWU5FBN3azci4oJSPOBcNAq56ALHKAAABKUlEQVQ4y72S2ZKCQAxFwya7IsiObDruOvz/1w1XFpuGqnmZmvPQqc69IZ0K9G+okXGSHcnTg2xRNuVmQLisZ7rtNSyCxen3fcOxmuipg9x2g3OIAWvQkLHIljplvUcX5h1xAx5ECmLaF1w+hl3XtY5FREONBURJHQ3HrjfkPh70IA+fo0HiJlByS5PbV7i3ZMkg+v5mvGgpDF8TQ35ib07ZGgw248POIFZENtt/9Z6oxGbcEvPJT8w5UkioIoLPogwpkyhzB30Tdn2qbXt68e39USzj0BtkVHI41JJp/aKMuUEgoPcXc25woauSeE3C3VmJ5oYrDJE+bPfM66KN9Gdza/7nMomjEia6/iKe5MjoBi1Qh14/Exos84gKq7BfybdCv3Cv6Q/4AVCIWcoDQwrRAAAAAElFTkSuQmCC" alt="" />微信</span></li>
                  <li class="_1CHYP _2po2r cRfUr" title=""><span class=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAbOSURBVHja7Jd9bFV3Gcc/v3PO7bkv5d5CKfZtbSm9SCnVTQny5kBhRTaCMSCdmmxDE2I0UYLb/qjxDwyiIWp00XYa3aKjRCPOMgRm45LZtTg6YGOQDlDeelsYtKW33Nve3nteHv+4p5eWF9HFhH98kl/uyfM75/f9Pq+/5yoR4X6Kxn2W+07A6Js7/wN/LKMGgdVX8K8cQsZzofQD24FNQAiwgT6gA/gd8C6Q+Z94QIVsxtpLGD88HRXKqT8MrAUeAKYDRcBC4FvA34AdQEHOAx8E1yPuTJggGQ0sBUpAeBd43gO9AviAh4CPeYSeAeYCXwGG/hsCQaAQmOf9ngdOavl2KvWXUnAV/hWD4Ijg0jzJQNdbS4AfAMuBzwLvA99UsWjtvYADnlufBDYC5Z7eAr4D/BiF5cZ9BBquEFgxCCI+cdiI8DCQAA4BXYAJvAys8jz52L0IVACbgaeB/DvsnwSeAo6jwL3uI7j+Mv4l8XIR+4BSfEQcz/6s9du93HgdKAUO6NsKi+4Gvgho8SzPu8s7I8ABIAaggq6ROVEQcGL+pB6xE66t9yrDHVK6lAKfBs544FEvL2YZd+kNa4GfA5X3CE8/EPesqkaYr0WscuvcNMe6HOy0L4a2hr9xWvLqb/wSiy8jPOGF4DXPc5E7Efgc8KvJpXLHOpBcfnwBeBj4JKBQoCIWYim0oN2s/O5WlcdrYvMlhErPm4PeCXIrgQbgF1PAlfK6joDjIK6bfVYKlFqsdH2x95zVk425MgTlc7foM+0faiamM4oG/BNIe/HXAG0ygTrP7YU5YBEknUbSGZS4iG6gDB2laYgI2BaSchBXUGYeyu+fSiTgxK33woavbLxDmfwM4c+SIYXwca8ikhMECoAfATUT4DKeRlIpVDCAMbsKX1UlRnkZWtEsVMAPjoMTH8bp68c+fxHrUi/uyAgqEECZJoigTbPeGv1j2SAOw6F1154Z756GEU2AywlcjgNvTBD4IrBmwhVuIolmGJjLl+BftQpz8SLM2loIBm+/D2wL+/wF0m92M3bwVca7DsPYGCoYBNQsvWh809grJa9rIefM2KFizJVX8S8a+i3I28A5FYvWFgPdXiYjySRa8YeY9tSThDZtRC8uzoFduHSJ+PAwftOkqqqKQCAwhYw7OETihRdJ/PrFrPcCAS9f6HQTxk+1kP2yE89zZ+w4gQqAjGZb5XrggYl46+XlTN+xnUDDI7mDu7u7aWtr49ixYwwMDBAKhairq2PDhg2sXr0a5SWqNrOQyLNPo5TGSMvzkMlAXh6ILNfy7Togo4WtA+kjMx10F//S6xCL1h6MRWslNjsqvXPnS3LffpkQ27Zl7969smDBApkom8mroqJCWltbxXVdmSxOfESufv5x6S2tkFjNPIlFayfWW7G5tTN7S+u5VFLPwBMz0YA6BHBdgitXEFq/Lmf5kSNH2Lp1K6dOncrpwuEwc+bMwTRNent72blz55R9AC0Sxr/4E6i8PMS2J28tRChXIRst3yb11xI0IB9xEV0n0NCQe/PGjRu0trbS19dHMBhkzZo11NfXs3TpUjZv3kwkEgGgp6eHo0eP3t5OCwrAMG6W5F3mCQMYA2ag62izbt4Lw8PDdHZ2EolEaGpqorGxkb6+Pvbs2UN7ezuJRMLrT4LjOLcdbvfGcDMZNF2frD7tzQhT+v5xlALbxrl4aVIDVDiOQ3FxMdu2baOyspJly5aRTCbp6OgglUoBUFZWRk1NzW3g411d4DhZL9yUF4DrtxJoQSmU6zK6fz/iWVNUVMS6des4e/YsLS0t9PT0sGvXLtrb26eANTY2snDhwpsKy2LkJ89hnT6DZpo3Wzm8Aezx5oic6NsKi2JACKWW2H39SDqNf/kyfD4f1dXVnDx5kubmZl49dIhX9u1jZGQk9/GWLVtoamqisDDbvd14nPj3vs/o7/eiNG2iBAHeAb7uXcdT88AbSAqB72JZX0Mpghs3MO2rW/BVz+bCwAC7d+/mYFsbl/v7CYfDfPShB3n00cf4zNq1zAgGQWDs4EGSv3mJ8cNvonQtey9kwduBbwNH75iIkyaiAuBxyWSexXFmG9EogU+tJPLIKqidR79lk0ylMHwGMyIRZhgG8t5pEof/Trqri8zb7+Bej4NpovJ8IDIIPAe8BFy8ayXcMpLpKDUfy1ovGasRQ6/XIxHMshJ8xSVooXxAsEdHyVy7hv3+VZzhYUinQdNRfhOU+gcifwD+BJwCxv/tiH3bTJi9Tv1AKbY9XxxnEa77IBBFqSLAzLZ3AU3LoGlDyjDOoWknEDnigV4GRv+jGf//f07vN4F/DQAn0tMI2WCvFwAAAABJRU5ErkJggg==" alt="" />微博</span></li>
                  <li class="_1CHYP _2po2r cRfUr" title=""><span class=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABL1BMVEUAAAD/yAD/ygD/yAD/yQD/yQD/0QD/yQD/yQD/yQD/yQD/yQD/yQD/ywD/zAD/ywD/zgD+yQT/yQD/yAD/yQD/yAD/yQD/yQD/yQD/yQD/ygD/yQD/yAD/yAD/yQD/ygD/zQD/yAD/2wD00U//4XT/yQD////YuFz/zQD////uwBn/1QD/yAD////gtiL+/fjnuhrxwA/+/vv9+/LqvBf7xgT++u79+Oj99dP26sL+4nf+zh3uvxL++/D+99v479H+8cH87LPz5K776KH+6Zr+5o7r03v+2lTjwUHlvzf+0jDkuB71wwv3wwn6xgX++eT58tr+88n27Mj67L3+8Lz+7Kvv25X54Ijs1YP+44H223npz3P+4HD+3WXpzGPnxU3+10rmvjLmvCT4yRz+ygqQhZLkAAAALHRSTlMA/Fu7gTkS+PXxuaSIOzcdGjP67uHJtKmbkotvZlRLQyQOB/zm1WNILikYBsDBVmAAAAFrSURBVDjLhdPlcsJQEAXgTZpSrMXdqbd7i7t70bq7vP8z9F7CQALTy/cHMmf3zGRnAkvMZuDT6/n5JuImvwBRv6aAX7GB1Aa/gFXwCrgV2zizzSn4t0KzI3pxzivuaBSJZHDYcIXNYZDYHK4BPn7uA/AL9Lf0WWzV8xfZWDIWq1SvGp23AYsFP1AinciMyunv/sd7975ZSxGq8cNyEaYCVpzKjEeJcvqrQEjqJZ5BtAZgJriFc70sIYV+gv7bCsJcSDuLf9t0vcvWURtSXVmHzKBKyPU5W0fd0r0lpIpJEnuMT5CRQM2FWKoTUqPrMheo7WOvQghJ5vK3d+3OU/F17+BYmZ8KpYdm4TLHLpXK5W9az7uHJ8qBI5yU0/HhmWwYTyfGFlAScYWoGjCiTCdJOpQZVQNOZLRGDYDGKF/NqRqws9N6zLPv08NOb1fmEUTBbVo8m9wCYgQWLIIhDCphg6B8jehie9ESBeYPieVTx9PUohAAAAAASUVORK5CYII=" alt="" />QQ空间</span></li>
                  <li class="_1CHYP _2po2r cRfUr" title=""><span class=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAWlBMVEUAAAAwiB4wiB4xiB0xjB4xhx4yhx4zjx8xhx0xiR0whx0whx0wiB0xiB1JmyRCiisxiB0wiB4xhx0wiB0xiCE3iSSA/4Awhx0wiB4xhx4wiR4yiSAyih0whx2miU+GAAAAHXRSTlMA85qtKaCAGOxOyPvgwQcL0sWCeC8cAtnOu4phV1lham4AAACRSURBVDjL1c3rCoMwDIbhaKu11jmdhx2/+7/NOdKCoRY2GBs+fxroS0J7YZFg3w3GPGGk75nUhmkVaGzQMnCV4KKgJuHwj+BihDoKIp8FplycShZGQ2uzVecjeW2jbEvS3AM38u5AtdSSzuDC1Q4YKDIAOU8PoBELwmE44wdY8VWwDuhf7xXICkYMScSyJPqJJydOGY+9PtjNAAAAAElFTkSuQmCC" alt="" />豆瓣</span></li>
                  <li class="_1CHYP _2po2r cRfUr" title=""><span class=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEUAAABGZqlEYaFFYaFFYaFEYaJVbqpFYaFGY6NFYKFFYaFEYaFGYaJFYqJGY6BJY6FEYKAtYy3MAAAAEHRSTlMAEPvjgI0KXCjx26VuaD4xlUjU4QAAAGxJREFUOMvlz0sKwCAMRdHk1aj9u//VNoh0ZAx04KR3IoSDJDQnQekGaQDFCA0UMxNgxQAg5EjEJsBdh9EEgRyQdcLpPCwA0rbBFUv93gH8HQR6uzyQPBC6QJiZNH12d8n/AVgADQj6AEJTegCRiCEBOZVvEgAAAABJRU5ErkJggg==" alt="" />Facebook</span></li>
                  <li class="_1CHYP _2po2r cRfUr" title=""><span class=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAKdSURBVFiF7ddNiFVlGAfw35WpSRG1XmchIm40ECNLVEwXlS4E3Si8gYoYUZouIjcSbmojCH4GEYQQIfgReBIZoYI26kIrZTYuoiSYBM2POYxOqGVyr4tzL565zp0753aHcdEfzuJ53ud5/n/e9zznfU6pUqkYS4wbU/anQUCprdWStAtbsAwV/IAvxNA/ROw4MZRLOcdkMdz5D+Rb8QFm4Zmq9wEu44AYvqzGTcHb6BPDkbyAHnwlhs9aID+EjU2ivsFDrMJ4dImhv1QtMBO91cD3xXCwAPmH+LSA3KtYjX8wrSbgdZzOBe1RqXzkranD92iSTsQfeGGE5GWcRycGsKXWBf/WBW5XKv0kSV9rUnBJAXKyrluKSYhiuFwT8JtsS/JYiHOS9JgkXdSg4KwC5DV8i/m1zsi/hCewZpjEn3ESZ/CLGPol6VocKyhgnRi+rhkduYV38SamNEhcVH1gQJJeKUhcQ2feyI4gSRdgJTahbwRFJuGl6lMUN/NGbQc6cbhK3lmf0Wb0DiWgB7fQNcrkf+L3vCM7ghjuY98ok8N5MTx4UgBUKrvx/SgLOF7veCwg++qtwm78NQrkfehuLOCxfQofo9U2a4TPxXCv3tlRZ5dxAAtk93m70If9Qy0M3oEYytiAv7V3WNkmhoHmAjIRv2IFrreJ/KgYjjRaHHomjOEsXsYuXMSNFskv4J3hAppvc5LOkF04SwuS92C5GG63JiBJ5+A9bMbEguTdWC+Gu80CS5J0ruxSeQ4TMAeLZfNAUdzDJ2LYO9KEDlm/v4gdmNcCKdzHUewUQ2+RxMFHkKSvyIaSZZiN5/FsXU65SngTl/AdusVwrQXhw74Dr+IN2Udpuuyavi0b337EWTFcbYV0kID/f07HWsAjK3ysMn3cJKAAAAAASUVORK5CYII=" alt="" />Twitter</span></li>
                  <li class="_1CHYP _2po2r cRfUr" title=""><span class=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAhFBMVEUAAAD6QC3/WEb/TDv5Py38QS//QDL7QC76Py36Py3/QjD6Py35Py36Py36Py36QC35Py37QC/6Qi/6QTD6Py36Py36Py36QC36Py76Py38QC76Py36Py75Py76QC75Py75Py37QC36QC38QC//RjH/SEj6QS/6Py36Py36QC3/STH5Py10Ms8sAAAAK3RSTlMAWgUJ2FAoesmqGvHgvaWaVj02L/n16cGel0zt0bKPhYF1YEkfA46NcWsV3NJT+wAAAOxJREFUOMvdkmkCgiAQhUcS1NTSzK193+b+92tAJAo7QH0/HPU9ecMg/BVsxrP88VWeRSVKwgMbkkcTNPiFq49XaDFxvw+VsKzrJZXIzdgiEavwol6/dNY0CxVQyuRx/9ZaGTGQ9YZEDgbHkJrGFp4mo3WFKBA3QghIyOCBxEfNHCDCHpibBGNAZhsquvB3Q0mj5TyjaM45yClcQbKbEvLRN032Y4hPoNA9N2+GAon0rPUjEllnSJI7Fd1wKLqdxnSfsI+zqtTW1rug7U7Nc36GGG1acBC+pV/Y0Nj3lZbTIwxzzvebNvBO8Js8AWRdJxV3vVB1AAAAAElFTkSuQmCC" alt="" />Google+</span></li>
                 </ul>
                </div></span></li>
              <li class="_3nZXj _2_WAp _3df2u _2po2r cRfUr" title=""><span class=""><i class="fa fa-folder-open _22XWG"></i>移动文章
                <div class="_3x4X_">
                 <ul class="_2KzJx oGKRI _3DXDE _2w9pn">
                  <li class="_2po2r cRfUr" title="随笔"><span class="">随笔</span></li>
                 </ul>
                </div></span></li>
              <li class="_2po2r cRfUr" title=""><span class=""><i class="fa fa-external-link _22XWG"></i>在新窗口打开</span></li>
              <li class="_2po2r cRfUr" title=""><span class=""><i class="fa fa-lock _22XWG"></i>设为私密</span></li>
              <li class="_2po2r cRfUr" title=""><span class=""><i class="fa fa-history _22XWG"></i>历史版本</span></li>
              <li class="_2po2r cRfUr" title=""><span class=""><i class="fa fa-trash-o _22XWG"></i>删除文章</span></li>
              <li class="_2po2r cRfUr" title=""><span class=""><i class="fa fa-ban _22XWG"></i>设置禁止转载</span></li>
             </ul></span>
           </div><span class="NariC">T2</span><span class="hLzJv">vue test 2</span><span class="_29C-V">字数:3</span></li>
          <li class="_25Ilv" title="T1"><i class="_13kgp _2m93u"></i><span class="NariC">T1</span></li>
         </ul>
         <div class="_2cVn3">
          <i class="fa fa-plus"></i>
          <span> 在下方新建文章</span>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div class="ant-col ant-col-16 _1Yy97">
      <div class="_2mnPN">
       <div class="_3br9T">
        <div class="_3DuaW" autofocus="" tabindex="-1">
         <p class="_3-3KB">已保存</p>
         <div class="_1WI52" tabindex="-1">
          <input type="text" class="_24i7u" value="T2" />
          <ul class="_3LYoB clearfix">
           <li class="tGbI7 cztJE">
            <div>
             <a data-action="privatize" class=""><i class="fa fa-check"></i> 已发布</a>
             <a data-action="privatize" class="_3-PBb"><i class="fa fa-times"></i> 取消发布</a>
            </div></li>
           <li class="_2zLpt" data-index="0"><a class="fa fa-bold jLrZL"></a>
            <ul class="_3-PBb">
             <li><a class="fa fa-bold" data-action="bold"></a></li>
             <li><a class="fa fa-italic" data-action="italic"></a></li>
             <li><a class="fa fa-strikethrough" data-action="strikethrough"></a></li>
             <li><a class="fa fa-quote-left" data-action="insertBlockquote"></a></li>
            </ul></li>
           <li class="_2zLpt" data-index="1"><a class="fa fa-picture-o" data-action="openImageModal"></a></li>
           <li class="_2zLpt" data-index="2"><a class="fa fa-undefined jLrZL">H1</a>
            <ul class="_3-PBb">
             <li><a class="fa fa-undefined" data-action="insertTitle" data-level="1">H1</a></li>
             <li><a class="fa fa-undefined" data-action="insertTitle" data-level="2">H2</a></li>
             <li><a class="fa fa-undefined" data-action="insertTitle" data-level="3">H3</a></li>
             <li><a class="fa fa-undefined" data-action="insertTitle" data-level="4">H4</a></li>
            </ul></li>
           <li class="_2zLpt" data-index="3"><a class="fa fa-undefined _3-PBb">—</a>
            <ul class="">
             <li><a class="fa fa-undefined" data-action="insertHRule">—</a></li>
             <li><a class="fa fa-link" data-action="openLinkModal"></a></li>
             <li><a class="fa fa-youtube-play" data-action="openVideoModal"></a></li>
            </ul></li>
           <li class="_2zLpt" data-index="4"><a class="fa fa-undefined _20p0q" data-action="openFormulaModal">Σ</a></li>
           <li class="_2zLpt" data-index="5"><a class="fa fa-undo jLrZL"></a>
            <ul class="_3-PBb">
             <li><a class="fa fa-undo" data-action="undo"></a></li>
             <li><a class="fa fa-repeat" data-action="redo"></a></li>
            </ul></li>
           <li class="_2zLpt" data-index="6"><a class="fa fa-history" data-action="to-history"></a></li>
           <li class="_2zLpt" data-index="7"><a class="fa fa-volume-up" data-action="openAudioModal"></a></li>
           <li class="_2zLpt _3-PBb" data-index="8"><a class="fa fa-volume-off eeRmU" data-action="openAudioModal"></a></li>
           <li class="_2zLpt tGbI7" data-index="9"><a class="fa fa-expand" data-action="to-fullscreen"></a></li>
           <li class="_2zLpt tGbI7" data-index="10"><a class="fa fa-floppy-o" data-action="auto-save"></a></li>
          </ul>
          <div class="_15389">
           <div class="_2HkLJ" id="editor">
            <div contenteditable="true" class="kalamu-area">
             <p>vue test 2</p>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
    //   isShowProblem: false
    };
  },
  methods: {
    // showHideProblem() {
    //   this.isShowProblem = !this.isShowProblem;
    // },
    // closeBox(e) {
    //   const problemBox = this.$refs.problemBox;
    //   if (e.target.contains(problemBox)) {
    //     this.isShowProblem = false;
    //   }
    // }
  },
};
</script>

<style scoped>
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
