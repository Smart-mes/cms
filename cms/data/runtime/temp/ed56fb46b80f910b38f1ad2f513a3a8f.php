<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:23:"./template/pc/index.htm";i:1636704598;s:42:"D:\work\php\cms\cms\template\pc\header.htm";i:1636531270;s:42:"D:\work\php\cms\cms\template\pc\footer.htm";i:1636357838;}*/ ?>
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title><?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_title"); echo $__VALUE__; ?></title>

	<link rel="stylesheet" href="<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_templets_pc"); echo $__VALUE__; ?>/skin/css/fullpage.min.css">
	<link rel="stylesheet" href="<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_templets_pc"); echo $__VALUE__; ?>/skin/css/swiper-bundle.min.css">
	<link rel="stylesheet" href="<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_templets_pc"); echo $__VALUE__; ?>/skin/css/index.min.css">
	<style>

	</style>
</head>

<body>
	<!--网站公用头部——开始-->
	<div class="header">
	<div class="logo">
		<a href="/">
			<div class="logo-box">
				<img src=".<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_templets_pc"); echo $__VALUE__; ?>/skin/images/logo-1.png" alt="" class="show">
				<img src=".<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_templets_pc"); echo $__VALUE__; ?>/skin/images/logo-2.png" alt="" class="hide">
			</div>
			<div class="txt-box">
				<div class="txt">
					<h3 class="h3">数字化解决方案供应商</h3>
					<!-- <span>证券代码 833035</span> -->
				</div>
			</div>
		</a>
	</div>
	<div class="search"><i class="iconfont icon-search"></i></div>
	<ul class="nav">
		<li class="active nav-li">
			<a href="<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_cmsurl"); echo $__VALUE__; ?>" class="nav-link">首页</a>
		</li>
		<?php  if(isset($ui_typeid) && !empty($ui_typeid)) : $typeid = $ui_typeid; else: $typeid = "72"; endif; if(empty($typeid) && isset($channelartlist["id"]) && !empty($channelartlist["id"])) : $typeid = intval($channelartlist["id"]); endif;  if(isset($ui_row) && !empty($ui_row)) : $row = $ui_row; else: $row = 20; endif; $tagChannel = new \think\template\taglib\eyou\TagChannel; $_result = $tagChannel->getChannel($typeid, "top", "cur", ""); if(is_array($_result) || $_result instanceof \think\Collection || $_result instanceof \think\Paginator): $i = 0; $e = 1;$__LIST__ = is_array($_result) ? array_slice($_result,0, $row, true) : $_result->slice(0, $row, true); if( count($__LIST__)==0 ) : echo htmlspecialchars_decode("");else: foreach($__LIST__ as $key=>$field): $field["typename"] = text_msubstr($field["typename"], 0, 100, false); $__LIST__[$key] = $_result[$key] = $field;$i= intval($key) + 1;$mod = ($i % 2 ); ?>
		<li class="nav-li">
			<a href="<?php echo $field['typeurl']; ?>" class="nav-link"><?php echo $field['typename']; ?></a>
			<ul class="nav-down">
				<?php if(($key==0)): ?>
				<li><a href="<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_templets_pc"); echo $__VALUE__; ?>/creo.html">Creo</a></li>
				<li><a href="#">Windchill</a></li>
				<li><a href="#">Ansys</a></li>
				<li><a href="#">Smart. MES</a></li>
				<?php  if(isset($ui_typeid) && !empty($ui_typeid)) : $typeid = $ui_typeid; else: $typeid = ""; endif; if(empty($typeid) && isset($channelartlist["id"]) && !empty($channelartlist["id"])) : $typeid = intval($channelartlist["id"]); endif;  if(isset($ui_row) && !empty($ui_row)) : $row = $ui_row; else: $row = 100; endif; $tagChannel = new \think\template\taglib\eyou\TagChannel; $_result = $tagChannel->getChannel($typeid, "first", "hover", ""); if(is_array($_result) || $_result instanceof \think\Collection || $_result instanceof \think\Paginator): $i = 0; $e = 1;$__LIST__ = is_array($_result) ? array_slice($_result,0, $row, true) : $_result->slice(0, $row, true); if( count($__LIST__)==0 ) : echo htmlspecialchars_decode("");else: foreach($__LIST__ as $key=>$field): $field["typename"] = text_msubstr($field["typename"], 0, 100, false); $__LIST__[$key] = $_result[$key] = $field;$i= intval($key) + 1;$mod = ($i % 2 ); ++$e; endforeach; endif; else: echo htmlspecialchars_decode("");endif; $field = []; endif;  if(isset($ui_typeid) && !empty($ui_typeid)) : $typeid = $ui_typeid; else: $typeid = ""; endif; if(empty($typeid) && isset($channelartlist["id"]) && !empty($channelartlist["id"])) : $typeid = intval($channelartlist["id"]); endif;  if(isset($ui_row) && !empty($ui_row)) : $row = $ui_row; else: $row = 10; endif;if(is_array($field['children']) || $field['children'] instanceof \think\Collection || $field['children'] instanceof \think\Paginator): $i = 0; $e = 1;$__LIST__ = is_array($field['children']) ? array_slice($field['children'],0,10, true) : $field['children']->slice(0,10, true); if( count($__LIST__)==0 ) : echo htmlspecialchars_decode("");else: foreach($__LIST__ as $key=>$field2): $field2["typename"] = text_msubstr($field2["typename"], 0, 100, false); $__LIST__[$key] = $_result[$key] = $field2;$i= intval($key) + 1;$mod = ($i % 2 ); ?>
				<li><a href="<?php echo $field2['typeurl']; ?>"><?php echo $field2['typename']; ?></a></li>
				<?php ++$e; endforeach; endif; else: echo htmlspecialchars_decode("");endif; $field2 = []; ?>
			</ul>
		</li>
		<?php ++$e; endforeach; endif; else: echo htmlspecialchars_decode("");endif; $field = []; ?>
		<li>
			<span class="tel"><i class="iconfont icon-phone"></i><?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_attr_1"); echo $__VALUE__; ?></span>
		</li>
	</ul>
</div>
<div class="fixed-search">
	<div class="bg"></div>
	<form action="#" method="get">
		<input type="hidden" name="c" value="search">
		<input type="hidden" name="catid" value="12">
		<input type="text" name="key" placeholder="请输入关键字">
		<button></button>
		<div class="close">
			<svg viewBox="0 0 16 16" id="Close" width="100%" height="100%">
				<path d="M0 .966L.967 0l15.034 15.034-.967.966z"></path>
				<path d="M0 15.034L15.034 0l.967.966L.967 16z"></path>
			</svg>
		</div>
	</form>
</div>
<!-- header -->
	<!--网站公用头部——结束-->
	<div id="fullpage" class="section">
		<div class="section section1">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<?php  $tagAdv = new \think\template\taglib\eyou\TagAdv; $_result = $tagAdv->getAdv(1, "", ""); if(is_array($_result) || $_result instanceof \think\Collection || $_result instanceof \think\Paginator): $i = 0; $e = 1;$__LIST__ = is_array($_result) ? array_slice($_result,0, 10, true) : $_result->slice(0, 10, true); if( count($__LIST__)==0 ) : echo htmlspecialchars_decode("");else: foreach($__LIST__ as $key=>$field):  if ($i == 0) : $field["currentstyle"] = ""; else:  $field["currentstyle"] = ""; endif;$i= intval($key) + 1;$mod = ($i % 2 ); ?>
					<div class="swiper-slide item">
						<div class="txt-box cell-box">
							<div class="cell">
								<div class="wrapper">
									<h3 class="h3"><?php echo $field['title']; ?></h3>
									<p><?php echo $field['intro']; ?></p>
									<div class="btn">
										<a href="<?php echo $field['links']; ?>" class="index-more white">查看详情 <i class="iconfont icon-right-arrow"></i></a>
									</div>
								</div>
							</div>
						</div>
						<div class="bg-box" style="background-image: url(<?php echo $field['litpic']; ?>);"></div>
					</div>
					<?php ++$e; endforeach; endif; else: echo htmlspecialchars_decode("");endif; $field = []; ?>
				</div>
				<!-- Pagination -->
				<div class="pagination swiper-pagination"></div>
				<div class="button button-prev"></div>
				<div class="button button-next"></div>
			</div>
		</div>
		<!--section1  -->
		<div class="section section2">
			<div class="cont-box cell-box">
				<div class="cell">
					<div class="tab-cont">
						<div class="wrapper">
							<div class="item active">
								<div class="index-tit">
									<h3 class="h3">数字研发管理平台</h3>
									<ul>
										<li><a href="#">windchill</a></li>
										<li><a href="#">Creo</a></li>
									</ul>
									<p>
										数字化转型是工业企业势在必行的一项业务战略。客户期望的转变、变幻莫测的全球贸易环境、成本压力的不确定性、劳动力的短缺等为企业带来了各种各样的挑战，因此，在产品、服务、运营、员工发展等方面提高创新性、敏…
									</p>
								</div>
								<div class="btn">
									<a href="#" class="index-more">查看更多 <i class="iconfont icon-right-arrow"></i></a>
								</div>
							</div>
							<div class="item">
								<div class="index-tit">
									<h3 class="h3">智能制造</h3>
									<ul>
										<li><a href="#">windchill</a></li>
									</ul>
									<p>
										数字化转型是工业企业势在必行的一项业务战略。客户期望的转变、变幻莫测的全球贸易环境、成本压力的不确定性、劳动力的短缺等为企业带来了各种各样的挑战，因此，在产品、服务、运营、员工发展等方面提高创新性、敏…
									</p>
								</div>
								<div class="btn">
									<a href="#" class="index-more">查看更多 <i class="iconfont icon-right-arrow"></i></a>
								</div>
							</div>
							<div class="item">
								<div class="index-tit">
									<h3 class="h3">智能制造</h3>
									<ul>
										<li><a href="#">windchill</a></li>
									</ul>
									<p>
										数字化转型是工业企业势在必行的一项业务战略。客户期望的转变、变幻莫测的全球贸易环境、成本压力的不确定性、劳动力的短缺等为企业带来了各种各样的挑战，因此，在产品、服务、运营、员工发展等方面提高创新性、敏…
									</p>
								</div>
								<div class="btn">
									<a href="#" class="index-more">查看更多 <i class="iconfont icon-right-arrow"></i></a>
								</div>
							</div>
						</div>
					</div>
					<div class="tab-tit">
						<div class="wrapper">
							<div class="item active">
								<div class="icon">
									<i class="iconfont icon-zhinenghua"></i>
								</div>
								<div class="txt">
									<h4>数字研发管理平台</h4>
									<p>
										数字化转型是工业企业势在必行的一项业务战略。客户期望的转变、变幻莫测的全球贸易环境、成本压力的不确定性、劳动力的短缺等为企业带来了各种各样的挑战，因此，在产品、服务、运营、员工发展等方面提高创新性、敏…
									</p>

								</div>
							</div>
							<div class="item">
								<div class="icon">
									<i class="iconfont icon-wuli"></i>
								</div>
								<div class="txt">
									<h4>多物理场仿真平台</h4>
									<p>
										数字化转型是工业企业势在必行的一项业务战略。客户期望的转变、变幻莫测的全球贸易环境、成本压力的不确定性、劳动力的短缺等为企业带来了各种各样的挑战，因此，在产品、服务、运营、员工发展等方面提高创新性、敏…
									</p>

								</div>
							</div>
							<div class="item">
								<div class="icon">
									<i class="iconfont icon-gongchang"></i>
								</div>
								<div class="txt">
									<h4>数字工厂解决方案</h4>
									<p>基于以太坊的区块链开发与多重签名的智能合约编写，在分布式账本上进行价值保存，存储数据，封装代码、执行计算任务。</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="bg-box">
				<div class="bg"></div>
			</div>
		</div>
		<!-- section2 -->
		<div class="section section3">
			<div class="cont-box cell-box">
				<div class="cell">
					<div class="tab-cont">
						<div class="wrapper">
							<div class="item active">
								<div class="index-tit white">
									<h3 class="h3">智能制造</h3>
									<h5>企业数字化转型最优解</h5>
									<p>
										工业互联网运营平台采用先进的分布式云计算技术，实现支持制造行业从研发设计、生产制造、质量管控、物流运输以及市场营销等全流程的运营平台服务。
									</p>
								</div>
							</div>
							<div class="item">
								<div class="index-tit white">
									<h3 class="h3">智能制造2</h3>
									<h5>企业数字化转型最优解</h5>
									<p>
										工业互联网运营平台采用先进的分布式云计算技术，实现支持制造行业从研发设计、生产制造、质量管控、物流运输以及市场营销等全流程的运营平台服务。
									</p>
								</div>
							</div>
							<div class="item">
								<div class="index-tit white">
									<h3 class="h3">智能制造3</h3>
									<h5>企业数字化转型最优解</h5>
									<p>
										工业互联网运营平台采用先进的分布式云计算技术，实现支持制造行业从研发设计、生产制造、质量管控、物流运输以及市场营销等全流程的运营平台服务。
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="tab-tit">
						<div class="wrapper">
							<div class="item active">
								<div class="icon">
									<i class="iconfont icon-qiyeshuzihua"></i>
								</div>
								<div class="txt">
									<p>企业数字化转型最优解</p>
								</div>
							</div>
							<div class="item">
								<div class="icon">
									<i class="iconfont icon-tuandui"></i>
								</div>
								<div class="txt">
									<p>阳普专业团队助力</p>
								</div>
							</div>
							<div class="item">
								<div class="icon">
									<i class="iconfont icon-huizhang"></i>
								</div>
								<div class="txt">
									<p>优秀企业的信赖之选</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="bg-box">
				<div class="bg"></div>
				<!-- <div class="item active" style="background-image: url(static/images/index/img-8-1.jpg);"></div>
					<div class="item" style="background-image: url(static/images/index/img-8-1.jpg);"></div>
					<div class="item" style="background-image: url(static/images/index/img-8-1.jpg);"></div> -->
			</div>
		</div>
		<!--section3-->
		<div class="section section4">
			<div class="cont-box cell-box">
				<div class="cell">
					<div class="wrapper">A
						<div class="index-tit white">
							<h3 class="h3">合作客户</h3>
						</div>
						<div class="partner">
							<div class="swiper swiper1">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
										<div class="index-tit white">
											<h5>企业数字化转型最优解</h5>
											<p>
												工业互联网运营平台采用先进的分布式云计算技术，实现支持制造行业从研发设计、生产制造、质量管控、物流运输以及市场营销等全流程的运营平台服务。
											</p>
											<div class="btn">
												<a href="#" class="index-more white">查看详情 <i class="iconfont icon-right-arrow"></i></a>
											</div>
										</div>
										<div class="img-box">
											<img src="<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_templets_pc"); echo $__VALUE__; ?>/skin/images/test/nature-1.jpg" />
										</div>
									</div>
									<div class="swiper-slide">
										<div class="index-tit white">
											<h5>企业数字化转型最优解</h5>
											<p>
												工业互联网运营平台采用先进的分布式云计算技术，实现支持制造行业从研发设计、生产制造、质量管控、物流运输以及市场营销等全流程的运营平台服务。
											</p>
											<div class="btn">
												<a href="#" class="index-more white">查看详情 <i class="iconfont icon-right-arrow"></i></a>
											</div>
										</div>
										<div class="img-box">
											<img src="<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_templets_pc"); echo $__VALUE__; ?>/skin/images/test/nature-2.jpg" />
										</div>
									</div>
									<div class="swiper-slide">
										<div class="index-tit white">
											<h5>企业数字化转型最优解</h5>
											<p>
												工业互联网运营平台采用先进的分布式云计算技术，实现支持制造行业从研发设计、生产制造、质量管控、物流运输以及市场营销等全流程的运营平台服务。
											</p>
											<div class="btn">
												<a href="#" class="index-more white">查看详情 <i class="iconfont icon-right-arrow"></i></a>
											</div>
										</div>
										<div class="img-box">
											<img src="<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_templets_pc"); echo $__VALUE__; ?>/skin/images/test/nature-3.jpg" />
										</div>
									</div>
									<div class="swiper-slide">
										<div class="index-tit white">
											<h5>企业数字化转型最优解</h5>
											<p>
												工业互联网运营平台采用先进的分布式云计算技术，实现支持制造行业从研发设计、生产制造、质量管控、物流运输以及市场营销等全流程的运营平台服务。
											</p>
											<div class="btn">
												<a href="#" class="index-more white">查看详情 <i class="iconfont icon-right-arrow"></i></a>
											</div>
										</div>
										<div class="img-box">
											<img src="<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_templets_pc"); echo $__VALUE__; ?>/skin/images/test/nature-4.jpg" />
										</div>
									</div>
									<div class="swiper-slide">
										<div class="index-tit white">
											<h5>企业数字化转型最优解</h5>
											<p>
												工业互联网运营平台采用先进的分布式云计算技术，实现支持制造行业从研发设计、生产制造、质量管控、物流运输以及市场营销等全流程的运营平台服务。
											</p>
											<div class="btn">
												<a href="#" class="index-more white">查看详情 <i class="iconfont icon-right-arrow"></i></a>
											</div>
										</div>
										<div class="img-box">
											<img src="<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_templets_pc"); echo $__VALUE__; ?>/skin/images/test/nature-5.jpg" />
										</div>
									</div>
									<div class="swiper-slide">
										<div class="index-tit white">
											<h5>企业数字化转型最优解</h5>
											<p>
												工业互联网运营平台采用先进的分布式云计算技术，实现支持制造行业从研发设计、生产制造、质量管控、物流运输以及市场营销等全流程的运营平台服务。
											</p>
											<div class="btn">
												<a href="#" class="index-more white">查看详情 <i class="iconfont icon-right-arrow"></i></a>
											</div>
										</div>
										<div class="img-box">
											<img src="<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_templets_pc"); echo $__VALUE__; ?>/skin/images/test/nature-6.jpg" />
										</div>
									</div>
								</div>
								<!-- <div class="swiper-button-next"></div>
									<div class="swiper-button-prev"></div> -->
							</div>
							<div class="swiper swiper2">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
										<img src="<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_templets_pc"); echo $__VALUE__; ?>/skin/images/test/nature-1.jpg" />
									</div>
									<div class="swiper-slide">
										<img src="<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_templets_pc"); echo $__VALUE__; ?>/skin/images/test/nature-2.jpg" />
									</div>
									<div class="swiper-slide">
										<img src="<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_templets_pc"); echo $__VALUE__; ?>/skin/images/test/nature-3.jpg" />
									</div>
									<div class="swiper-slide">
										<img src="<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_templets_pc"); echo $__VALUE__; ?>/skin/images/test/nature-4.jpg" />
									</div>
									<div class="swiper-slide">
										<img src="<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_templets_pc"); echo $__VALUE__; ?>/skin/images/test/nature-5.jpg" />
									</div>
									<div class="swiper-slide">
										<img src="<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_templets_pc"); echo $__VALUE__; ?>/skin/images/test/nature-6.jpg" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="button button-prev"></div>
			<div class="button button-next"></div>
			<div class="bg-box">
				<div class="bg"></div>
			</div>
		</div>
		<!-- section4 -->
		<!-- section4 -->
		<div class="section section5">
			<div class="bg-box">
				<div class="bg"></div>
			</div>
			<div class="cont-box cell-box">
				<div class="cell">
					<div class="wrapper">
						<?php  if(isset($ui_typeid) && !empty($ui_typeid)) : $typeid = $ui_typeid; else: $typeid = "2"; endif; if(isset($ui_row) && !empty($ui_row)) : $row = $ui_row; else: $row = 10; endif; $tagChannelartlist = new \think\template\taglib\eyou\TagChannelartlist; $_result = $tagChannelartlist->getChannelartlist($typeid, "self"); if(is_array($_result) || $_result instanceof \think\Collection || $_result instanceof \think\Paginator): $i = 0; $e = 1;$__LIST__ = is_array($_result) ? array_slice($_result,0, $row, true) : $_result->slice(0, $row, true); if( count($__LIST__)==0 ) : echo htmlspecialchars_decode("");else: foreach($__LIST__ as $key=>$channelartlist): $channelartlist["typename"] = text_msubstr($channelartlist["typename"], 0, 100, false); $__LIST__[$key] = $_result[$key] = $channelartlist;$i= intval($key) + 1;$mod = ($i % 2 ); ?>
						<div class="mid-block">
							<div class="item">
								<div class="title">
									<h3 class="h3"><?php  $__VALUE__ = isset($channelartlist["typename"]) ? $channelartlist["typename"] : "变量名不存在"; echo $__VALUE__; ?></h3>
									<div class="btn">
										<a href="<?php  $__VALUE__ = isset($channelartlist["typeurl"]) ? $channelartlist["typeurl"] : "变量名不存在"; echo $__VALUE__; ?>" class="index-more">查看更多 <i
												class="iconfont icon-right-arrow"></i></a>
									</div>
								</div>
							</div>
							<?php  if(isset($ui_typeid) && !empty($ui_typeid)) : $typeid = $ui_typeid; else: $typeid = ""; endif; if(empty($typeid) && isset($channelartlist["id"]) && !empty($channelartlist["id"])) : $typeid = intval($channelartlist["id"]); endif;  if(isset($ui_row) && !empty($ui_row)) : $row = $ui_row; else: $row = 5; endif; $channelid = ""; $param = array(      "typeid"=> $typeid,      "notypeid"=> "",      "flag"=> "",      "noflag"=> "",      "channel"=> $channelid,      "joinaid"=> "",      "keyword"=> "",      "release"=> "off", ); $tag = array (
  'row' => '5',
); $tagArclist = new \think\template\taglib\eyou\TagArclist; $_result = $tagArclist->getArclist($param, $row, "", "","desc","",$tag,"0","on","off");if(is_array($_result["list"]) || $_result["list"] instanceof \think\Collection || $_result["list"] instanceof \think\Paginator): $i = 0; $e = 1; $__LIST__ = is_array($_result["list"]) ? array_slice($_result["list"],0, $row, true) : $_result["list"]->slice(0, $row, true);  $__TAG__ = $_result["tag"];if( count($__LIST__)==0 ) : echo htmlspecialchars_decode("");else: foreach($__LIST__ as $key=>$field): $aid = $field["aid"];$users_id = $field["users_id"];$field["title"] = text_msubstr($field["title"], 0, 100, false);$field["seo_description"] = text_msubstr($field["seo_description"], 0, 160, true);$i= intval($key) + 1;$mod = ($i % 2 ); ?>
							<div class="item">
								<a href="<?php echo $field['arcurl']; ?>">
									<div class="picture-box">
										<div class="date">
											<span class="month"><?php echo MyDate('m',$field['add_time']); ?>/</span>
											<span><?php echo MyDate('d',$field['add_time']); ?></span>
											<span><?php echo MyDate('Y',$field['add_time']); ?></span>
										</div>
										<img src="<?php echo $field['litpic']; ?>" alt="<?php echo $field['title']; ?>" />
									</div>
									<div class="txt-box">
										<h6 class="h6"><?php echo $field['title']; ?></h6>
										<div class="desc"><?php echo html_msubstr($field['seo_description'],0,40,true); ?></div>
									</div>
								</a>
							</div>
							<?php ++$e; $aid = 0; $users_id = 0; endforeach; endif; else: echo htmlspecialchars_decode("");endif; $field = []; ?>
						</div>
						<?php ++$e; endforeach; endif; else: echo htmlspecialchars_decode("");endif; $typeid = $row = ""; unset($channelartlist); ?>
					</div>
				</div>
			</div>
		</div>
		<div class="section section6">
			<div class="cont-box cell-box">
				<div class="cell">
					<div class="wrapper">
						<div class="trial">
							<div class="left">
								<div class="subTitle-box">
									<h3 class="underlined-title">免费试用</h3>
								</div>
							</div>
							<div class="right">
								<ul class="form-list" id="city_i">
									<li>
										<div class="item">
											<div class="label-box">您的姓名 <span class="red">*</span></div>
											<div class="input-box"><input type="text" class="input"></div>
										</div>
									</li>
									<li>
										<div class="item">
											<div class="label-box">公司/学校 <span class="red">*</span></div>
											<div class="input-box"><input type="text" class="input"></div>
										</div>
									</li>
									<li>
										<div class="item">
											<div class="label-box">电子邮件 <span class="red">*</span></div>
											<div class="input-box"><input type="text" class="input"></div>
										</div>
									</li>
									<li>
										<div class="item">
											<div class="label-box">感兴趣的产品<span class="red">*</span></div>
											<div class="input-box">
												<!-- <input type="text" class="input" placeholder="请输入邮箱地址"> -->
												<select type="text" class="input">
													<option selected="selected" disabled="disabled" style='display: none' value=''></option>
													<option value="PTC">PTC</option>
													<option value=" Creo"> Creo</option>
													<option value="PTC ">PTC </option>
													<option value="PLM">PLM</option>
													<option value="Windchill">Windchill</option>
													<option value="PTC AR">PTC AR</option>
													<option value="PTC IoT">PTC IoT</option>
													<option value="Ansys结构">Ansys结构</option>
													<option value="Ansys流体">Ansys流体</option>
													<option value="Ansys电磁">Ansys电磁</option>
													<option value="Smart. MES">Smart. MES</option>
													<option value="其他产品">其他产品</option>
												</select>
											</div>
										</div>
									</li>
									<li>
										<div class="item">
											<div class="label-box">所在的省<span class="red">*</span></div>
											<div class="input-box">
												<!-- <input type="text" class="input" placeholder="请输入邮箱地址"> -->
												<select type="text" class="input prov">
												</select>
											</div>
										</div>
									</li>
									<li>
										<div class="item">
											<div class="label-box">所在市<span class="red">*</span></div>
											<div class="input-box">
												<!-- <input type="text" class="input" placeholder="请输入邮箱地址"> -->
												<select type="text" class="input city">
												</select>
											</div>
										</div>
									</li>
								</ul>
								<div class="submit-btn">
									<button class="btn"><i class="iconfont icon-submit"></i>提交</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="section section7 fp-auto-height">
			<!--网站公用底部——开始-->
			 <div class="footer">
        <div class="wrapper">
            <div class="menu">
                <div class="left">
                    <ul class="company">
                        <li><img src=".<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_templets_pc"); echo $__VALUE__; ?>/skin/images/footer-logo.png" /></li>
                        <li><i class="iconfont icon-phone"></i> 020-8556 4896</li>
                        <li><i class="iconfont icon-address"></i>广州市天河区高唐路233号6栋802</li>
                        <li><i class="iconfont icon-mail"></i> mkt@sunprocn.com</li>
                        <li>
                            <a href="#"><i class="iconfont icon-WeChat"></i></a>
                            <a href="#"><i class="iconfont icon-weibo"></i></a>
                        </li>
                    </ul>
                </div>
               
                <div class="right">
                   
                    <div class="menu-list">
                        <?php  if(isset($ui_typeid) && !empty($ui_typeid)) : $typeid = $ui_typeid; else: $typeid = ""; endif; if(empty($typeid) && isset($channelartlist["id"]) && !empty($channelartlist["id"])) : $typeid = intval($channelartlist["id"]); endif;  if(isset($ui_row) && !empty($ui_row)) : $row = $ui_row; else: $row = 4; endif; $tagChannel = new \think\template\taglib\eyou\TagChannel; $_result = $tagChannel->getChannel($typeid, "top", "", ""); if(is_array($_result) || $_result instanceof \think\Collection || $_result instanceof \think\Paginator): $i = 0; $e = 1;$__LIST__ = is_array($_result) ? array_slice($_result,0, $row, true) : $_result->slice(0, $row, true); if( count($__LIST__)==0 ) : echo htmlspecialchars_decode("");else: foreach($__LIST__ as $key=>$field): $field["typename"] = text_msubstr($field["typename"], 0, 100, false); $__LIST__[$key] = $_result[$key] = $field;$i= intval($key) + 1;$mod = ($i % 2 ); ?>
                        <div class="menu-item">
                            <dl>
                                <dt><?php echo $field['typename']; ?></dt>
                                <?php  if(isset($ui_typeid) && !empty($ui_typeid)) : $typeid = $ui_typeid; else: $typeid = ""; endif; if(empty($typeid) && isset($channelartlist["id"]) && !empty($channelartlist["id"])) : $typeid = intval($channelartlist["id"]); endif;  if(isset($ui_row) && !empty($ui_row)) : $row = $ui_row; else: $row = 100; endif;if(is_array($field['children']) || $field['children'] instanceof \think\Collection || $field['children'] instanceof \think\Paginator): $i = 0; $e = 1;$__LIST__ = is_array($field['children']) ? array_slice($field['children'],0,100, true) : $field['children']->slice(0,100, true); if( count($__LIST__)==0 ) : echo htmlspecialchars_decode("");else: foreach($__LIST__ as $key=>$field2): $field2["typename"] = text_msubstr($field2["typename"], 0, 100, false); $__LIST__[$key] = $_result[$key] = $field2;$i= intval($key) + 1;$mod = ($i % 2 ); ?>
                                <dd><a href="<?php echo $field2['typeurl']; ?>"><?php echo $field2['typename']; ?></a></dd>
                                <?php ++$e; endforeach; endif; else: echo htmlspecialchars_decode("");endif; $field2 = []; ?>
                            </dl>
                        </div>
                        <?php ++$e; endforeach; endif; else: echo htmlspecialchars_decode("");endif; $field = []; ?>
                    </div>
                </div>
              
            </div>
            <div class="copyright">
                <div class="c-left">  <?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_copyright"); echo $__VALUE__; ?>　<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_recordnum"); echo $__VALUE__; ?></div>
                <div class="c-right">
                    <div class="link_list">
                        <span>友情链接</span>
                        <?php  $tagFlink = new \think\template\taglib\eyou\TagFlink; $_result = $tagFlink->getFlink("text", "", "1"); if(is_array($_result) || $_result instanceof \think\Collection || $_result instanceof \think\Paginator): $i = 0; $e = 1; $__LIST__ = $_result;if( count($__LIST__)==0 ) : echo htmlspecialchars_decode("");else: foreach($__LIST__ as $key=>$field): $field["title"] = text_msubstr($field["title"], 0, 45, false); $__LIST__[$key] = $_result[$key] = $field;$i= intval($key) + 1;$mod = ($i % 2 ); ?>
                        <a href="<?php echo $field['url']; ?>" <?php echo $field['target']; ?>><?php echo $field['title']; ?> </a>
                        <?php ++$e; endforeach; endif; else: echo htmlspecialchars_decode("");endif; $field = []; ?>
                    </div>
                    <div class="map">
                        <a href="">网站地图</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
			<!--网站公用底部——结束-->
			<!-- footer -->
		</div>
		<script src="<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_templets_pc"); echo $__VALUE__; ?>/skin/js/build.js"></script>
		<script src="<?php  $tagGlobal = new \think\template\taglib\eyou\TagGlobal; $__VALUE__ = $tagGlobal->getGlobal("web_templets_pc"); echo $__VALUE__; ?>/skin/js/app.js"></script>
</body>

</html>