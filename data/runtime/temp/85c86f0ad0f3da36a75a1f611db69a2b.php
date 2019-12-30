<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:34:"./weapp/Contact/template/index.htm";i:1571037616;s:49:"D:\work\php\cms\weapp\Contact\template\header.htm";i:1571037616;s:46:"D:\work\php\cms\weapp\Contact\template\bar.htm";i:1571037616;s:49:"D:\work\php\cms\weapp\Contact\template\footer.htm";i:1571037616;}*/ ?>
<!doctype html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<!-- Apple devices fullscreen -->
<meta name="apple-mobile-web-app-capable" content="yes">
<!-- Apple devices fullscreen -->
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<link href="/weapp/Contact/template/skin/css/main.css" rel="stylesheet" type="text/css">
<link href="/weapp/Contact/template/skin/css/page.css" rel="stylesheet" type="text/css">
<link href="/weapp/Contact/template/skin/font/css/font-awesome.min.css" rel="stylesheet" />
<!--[if IE 7]>
  <link rel="stylesheet" href="/weapp/Contact/template/skin/font/css/font-awesome-ie7.min.css">
<![endif]-->
<link href="/weapp/Contact/template/skin/js/jquery-ui/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
<link href="/weapp/Contact/template/skin/css/perfect-scrollbar.min.css" rel="stylesheet" type="text/css"/>
<style type="text/css">html, body { overflow: visible;}</style>
<script type="text/javascript">
    var eyou_basefile = "<?php echo \think\Request::instance()->baseFile(); ?>";
    var module_name = "<?php echo MODULE_NAME; ?>";
    var GetUploadify_url = "<?php echo U('Uploadify/upload'); ?>";
</script>  
<script type="text/javascript" src="/weapp/Contact/template/skin/js/jquery.js"></script>
<script type="text/javascript" src="/weapp/Contact/template/skin/js/jquery-ui/jquery-ui.min.js"></script>
<script type="text/javascript" src="/public/plugins/layer-v3.1.0/layer.js"></script>
<script type="text/javascript" src="/weapp/Contact/template/skin/js/admin.js"></script>
<script type="text/javascript" src="/weapp/Contact/template/skin/js/perfect-scrollbar.min.js"></script>
<script src="/weapp/Contact/template/skin/js/global.js?v=<?php echo (isset($weappInfo['version']) && ($weappInfo['version'] !== '')?$weappInfo['version']:'v1.0.0'); ?>"></script>
</head>
<body style="background-color: #FFF; overflow: auto;">
<div id="toolTipLayer" style="position: absolute; z-index: 9999; display: none; visibility: visible; left: 95px; top: 573px;"></div>
<div id="append_parent"></div>
<div id="ajaxwaitid"></div>
<div class="page">
    
    <div class="fixed-bar">
        <div class="item-title"><a class="back" href="<?php if('Contact' == \think\Request::instance()->param('sc') && 'index' == \think\Request::instance()->param('sa')): ?><?php echo url("Weapp/index"); else: ?><?php echo weapp_url("Contact/Contact/index"); endif; ?>" title="返回设置"><i class="fa fa-arrow-circle-o-left"></i></a>
            <div class="subject">
                <h3><?php echo $weappInfo['name']; ?></h3>
                <h5></h5>
            </div>
            <ul class="tab-base nc-row">
                <li>
                <?php if(\think\Request::instance()->param('sa') == 'index'): ?>
                    <a href="javascript:void(0);" class="tab current"><span>插件配置</span></a>
                <?php else: ?>
                    <a href="<?php echo weapp_url("Contact/Contact/index"); ?>" class="tab"><span>插件配置</span></a>
                <?php endif; ?>
                </li>

                <li>
                <?php if(in_array((\think\Request::instance()->param('sa')), explode(',',"doc"))): ?>
                    <a href="javascript:void(0);" class="tab current"><span>使用指南</span></a>
                <?php else: ?>
                    <a href="<?php echo weapp_url("Contact/Contact/doc"); ?>" class="tab"><span>使用指南</span></a>
                <?php endif; ?>
                </li>
            </ul>
        </div>
    </div>
    <form class="form-horizontal" id="post_form" action="<?php echo weapp_url('Contact/Contact/save'); ?>" method="post">
        <div class="ncap-form-default">
            <dl class="row">
                <dt class="tit">
                    <label>调用方式</label>
                </dt>
                <dd class="opt">
                    <div class="onoff">
                        <label for="tag_weapp1" class="cb-enable <?php if(!isset($contact['data']['tag_weapp']) || $contact['data']['tag_weapp'] == 1): ?>selected<?php endif; ?>">自动调用</label>
                        <label for="tag_weapp0" class="cb-disable <?php if(isset($contact['data']['tag_weapp']) && $contact['data']['tag_weapp'] == 2): ?>selected<?php endif; ?>">手工调用</label>
                        <input id="tag_weapp1" name="tag_weapp" value="1" type="radio" <?php if(!isset($contact['data']['tag_weapp']) || $contact['data']['tag_weapp'] == 1): ?> checked="checked"<?php endif; ?>>
                        <input id="tag_weapp0" name="tag_weapp" value="2" type="radio" <?php if(isset($contact['data']['tag_weapp']) && $contact['data']['tag_weapp'] == 2): ?> checked="checked"<?php endif; ?>>
                    </div>
                    <p class="notic">自动调用会默认绑定weapp模板标签，手工调用请参考使用指南的调用方法。</p>
                </dd>
            </dl>
            <dl class="row">
                <dt class="tit">
                    <label>显示方式</label>
                </dt>
                <dd class="opt">
                    <div class="onoff">
                        <label for="is_open1" class="cb-enable <?php if(isset($contact['data']['is_open']) && $contact['data']['is_open'] == 1): ?>selected<?php endif; ?>">展开</label>
                        <label for="is_open0" class="cb-disable <?php if(!isset($contact['data']['is_open']) || $contact['data']['is_open'] == 0): ?>selected<?php endif; ?>">收缩</label>
                        <input id="is_open1" name="is_open" value="1" type="radio" <?php if(isset($contact['data']['is_open']) && $contact['data']['is_open'] == 1): ?> checked="checked"<?php endif; ?>>
                        <input id="is_open0" name="is_open" value="0" type="radio" <?php if(!isset($contact['data']['is_open']) || $contact['data']['is_open'] == 0): ?> checked="checked"<?php endif; ?>>
                    </div>
                    <p class="notic"></p>
                </dd>
            </dl>
            <dl class="row">
                <dt class="tit">
                    <label for="top_height">距离顶部高度</label>
                </dt>
                <dd class="opt">
                    <input type="text" name="top_height" value="<?php echo (isset($contact['data']['top_height']) && ($contact['data']['top_height'] !== '')?$contact['data']['top_height']:'150'); ?>" id="top_height" class="input-txt"> px
                    <span class="err"></span>
                    <p class=""></p>
                </dd>
            </dl>
            <dl class="row">
                <dt class="tit">
                    <label for="qq_number">QQ号码</label>
                </dt>
                <dd class="opt">
                    <input type="text" name="qq_number" value="<?php echo (isset($contact['data']['qq_number']) && ($contact['data']['qq_number'] !== '')?$contact['data']['qq_number']:'10000'); ?>" id="qq_number" class="input-txt">
                    <span class="err"></span>
                    <p class=""></p>
                </dd>
            </dl>
            <dl class="row"><dt class="tit"><label><b>电话一设置</b></label></dt></dl>
            <dl class="row">
                <dt class="tit">
                    <label for="description_first">电话标题</label>
                </dt>
                <dd class="opt">
                    <input type="text" name="description_first" placeholder="" id="description_first" value="<?php echo (isset($contact['data']['description_first']) && ($contact['data']['description_first'] !== '')?$contact['data']['description_first']:'售前咨询'); ?>" class="input-txt">
                    <span class="err"></span>
                    <p class=""></p>
                </dd>
            </dl>
            <dl class="row">
                <dt class="tit">
                    <label for="telephone_first">电话号码</label>
                </dt>
                <dd class="opt">
                    <input type="text" name="telephone_first" placeholder="" id="telephone_first" value="<?php echo (isset($contact['data']['telephone_first']) && ($contact['data']['telephone_first'] !== '')?$contact['data']['telephone_first']:'020-00000000'); ?>" class="input-txt">
                    <span class="err"></span>
                    <p class=""></p>
                </dd>
            </dl>
            <dl class="row"><dt class="tit"><label><b>电话二设置</b></label></dt></dl>
            <dl class="row">
                <dt class="tit">
                    <label for="description_second">电话标题</label>
                </dt>
                <dd class="opt">
                    <input type="text" name="description_second" placeholder="" id="description_second" value="<?php echo (isset($contact['data']['description_second']) && ($contact['data']['description_second'] !== '')?$contact['data']['description_second']:'售后服务'); ?>" class="input-txt">
                    <span class="err"></span>
                    <p class=""></p>
                </dd>
            </dl>
            <dl class="row">
                <dt class="tit">
                    <label for="telephone_second">电话号码</label>
                </dt>
                <dd class="opt">
                    <input type="text" name="telephone_second" placeholder="" id="telephone_second" value="<?php echo (isset($contact['data']['telephone_second']) && ($contact['data']['telephone_second'] !== '')?$contact['data']['telephone_second']:'020-88888888'); ?>" class="input-txt">
                    <span class="err"></span>
                    <p class=""></p>
                </dd>
            </dl>
            <dl class="row"><dt class="tit"><label><b>微信设置</b></label></dt></dl>
            <dl class="row">
                <dt class="tit">
                    <label for="wechat_logo_local">上传二维码</label>
                </dt>
                <dd class="opt">
                    <div class="input-file-show div_wechat_logo_local" <?php if($contact['data']['is_remote'] != '0'): ?>style="display: none;"<?php endif; ?>>
                        <span class="show">
                            <a id="img_a_local" target="_blank" class="nyroModal" rel="gal" href="<?php echo (isset($contact['data']['wechat_logo_local']) && ($contact['data']['wechat_logo_local'] !== '')?$contact['data']['wechat_logo_local']:'javascript:void(0);'); ?>">
                                <i id="img_i_local" class="fa fa-picture-o" <?php if(!(empty($contact['data']['wechat_logo_local']) || (($contact['data']['wechat_logo_local'] instanceof \think\Collection || $contact['data']['wechat_logo_local'] instanceof \think\Paginator ) && $contact['data']['wechat_logo_local']->isEmpty()))): ?>onmouseover="layer_tips=layer.tips('<img src=<?php echo (isset($contact['data']['wechat_logo_local']) && ($contact['data']['wechat_logo_local'] !== '')?$contact['data']['wechat_logo_local']:''); ?> class=\'layer_tips_img\'>',this,{tips: [1, '#fff']});"<?php endif; ?> onmouseout="layer.close(layer_tips);"></i>
                            </a>
                        </span>
                        <span class="type-file-box">
                            <input type="text" id="wechat_logo_local" name="wechat_logo_local" value="<?php echo (isset($contact['data']['wechat_logo_local']) && ($contact['data']['wechat_logo_local'] !== '')?$contact['data']['wechat_logo_local']:''); ?>" class="type-file-text">
                            <input type="button" name="button" id="button1" value="选择上传..." class="type-file-button">
                            <input class="type-file-file" onClick="GetUploadify(1,'','weapp','img_call_back','<?php echo U('Uploadify/upload'); ?>')" size="30" hidefocus="true" nc_type="change_site_logo"
                                 title="点击前方预览图可查看大图，点击按钮选择文件并提交表单后上传生效">
                        </span>
                    </div>
                    <input type="text" id="wechat_logo_remote" name="wechat_logo_remote" value="<?php echo (isset($contact['data']['wechat_logo_remote']) && ($contact['data']['wechat_logo_remote'] !== '')?$contact['data']['wechat_logo_remote']:''); ?>" placeholder="http://" class="input-txt" <?php if($contact['data']['is_remote'] != '1'): ?>style="display: none;"<?php endif; ?>>
                    &nbsp;
                    <label><input type="checkbox" name="is_remote" id="is_remote" value="1" <?php if($contact['data']['is_remote'] == '1'): ?>checked="checked"<?php endif; ?> onClick="clickRemote(this, 'wechat_logo');">远程图片</label>
                    <span class="err"></span>
                    <p class="notic">建议尺寸 200 * 200 (像素) 的png|gif|jpg等图片</p>
                </dd>
            </dl>
            <dl class="row">
                <dt class="tit">
                    <label for="wechat">微信底部文案</label>
                </dt>
                <dd class="opt">
                    <input type="text" name="wechat" value="<?php echo (isset($contact['data']['wechat']) && ($contact['data']['wechat'] !== '')?$contact['data']['wechat']:'关注公众号'); ?>" id="wechat" class="input-txt">
                    <span class="err"></span>
                    <p class=""></p>
                </dd>
            </dl>
            <div class="bot">
                <input type="hidden" name="code" value="<?php echo (isset($contact['code']) && ($contact['code'] !== '')?$contact['code']:$weappInfo['code']); ?>">
                <a href="JavaScript:void(0);" onclick="checkForm();" class="ncap-btn-big ncap-btn-green" id="submitBtn">确认提交</a>
            </div>
        </div>
    </form>
</div>
<script type="text/javascript">
    // 判断输入框是否为空
    function checkForm(){
        layer_loading('正在处理');
        $('#post_form').submit();
    }
    
    function img_call_back(fileurl_tmp)
    {
        $("#wechat_logo_local").val(fileurl_tmp);
        $("#img_a_local").attr('href', fileurl_tmp);
        $("#img_i_local").attr('onmouseover', "layer_tips=layer.tips('<img src="+fileurl_tmp+" class=\\'layer_tips_img\\'>',this,{tips: [1, '#fff']});");
    }
</script>

<br/>
<div id="goTop">
    <a href="JavaScript:void(0);" id="btntop">
        <i class="fa fa-angle-up"></i>
    </a>
    <a href="JavaScript:void(0);" id="btnbottom">
        <i class="fa fa-angle-down"></i>
    </a>
</div>

<script type="text/javascript">
    $(document).ready(function(){
        $('#think_page_trace_open').css('z-index', 99999);
    });
</script>
</body>
</html>