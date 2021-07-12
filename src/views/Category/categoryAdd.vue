<template>
  <div id="warp_Browse_categories">
        <div class="warp_classification">
            <el-button type="danger" class="classification_class_a" @click="fiction">添加一级分类</el-button>
        </div>
        
        <el-row class="classification_content">


            <el-col :span="12">
                <div class="grid-content bg-purple content_left">


                    <ul class="Category_ul">
                        <li id="sameline">
                            <span class="Category_span">电脑</span>
                            <span class="edit">
                                <el-button type="danger" round size="mini">编辑</el-button>
                                <el-button type="success" round size="mini">添加子级</el-button>
                                <el-button plain round size="mini">删除</el-button>
                            </span>
                        </li>
                    </ul>
                    
                </div>
            </el-col>


            <el-col :span="12">
                <div class="grid-content bg-purple content_right">
                    <p class="Category_editor">分类编辑</p>
                    <div class="classification_name">
                        <ul>
                            <li>
                                <span>一级分类名称:</span><el-input  class="classification_input_class_a" size="small"></el-input>
                            </li>
                            <li>
                                <span>二级分类名称:</span><el-input  class="classification_input_class_b" size="small"></el-input>
                            </li>
                        </ul>
                        <el-button   type="danger" class="classification_determine" size="mini">确定</el-button>
                    </div>
                </div>
            </el-col>
                        
        </el-row>
    </div>
</template>

<script>
export default {
  setup(){
    // const fiction = 
  }

}
</script>

<style lang='scss' scoped>
 #warp_Browse_categories{
    .warp_classification{
        display: block;
        width: 100%;
        border-bottom: 2px solid #ccc;
        .classification_class_a{
            display: block;
            margin: 16px;
        }
    }
    .classification_content{
        display: block;
        width: 100%;
        height: 400px;
        display: flex;
        .content_left{
            height: 400px;
            background-color: #ccc;
            .Category_ul{
                padding-top: 15px;
                #sameline{
                    
                    height: 45px;
                    line-height: 40px;
                    margin-left: 10px;
                    border-radius: 5px;
                    margin-top: 10px;
                    // background-color: red;
                    .Category_svg{
                        width: 13px;
                        height: 13px;
                        vertical-align: middle;
                        margin-left: 20px;
                        cursor:pointer;
                    }
                    .Category_span{
                        width: 40px;
                        height: 20px;
                        vertical-align: middle;
                        font-size: 14px;
                        margin-left: 5px;
                    }
                    .edit{
                        margin-left: 300px;
                    }
                }
                .active{
                    background-color: rgb(243,243,243,);
                }
            }
            
        }
        .content_right{
            height: 400px;
            .Category_editor{
                display: block;
                margin: 15px;
                padding: 15px;
                background-color: rgb(245,247,250, );
                font-size: 14px;
            }
            .classification_name{
                margin-left: 30px;
                .classification_input_class_a{
                    width: 300px;
                    margin-left: 10px;
                }
                .classification_input_class_b{
                    width: 300px;
                    margin-top: 20px;
                    margin-left: 10px;
                }
                span{
                    display: inline-block;
                    font-size: 13px;
                }
                .classification_determine{
                    margin-left: 91px;
                    margin-top:10px;
                }
            }
        }
    }
}
</style>