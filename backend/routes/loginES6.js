/**
 * Created by ABC on 2016/6/17.
 */

module.exports = function (express, routesCom) {

    var router = express.Router({caseSensitive : true}),
        coData = {
            title : '登录',
            active : routesCom.setNav(null),
        };


    router.get('/login.html', function (req, res) {
        var renderData = {
            module: 'Login_login',
            renderData : {"partial":"latestReport","module":"Organization_industryInner","tabs":{"latestReport":true,"hotIndustry":false,"hotStocks":false,"professorGrade":false,"institutionGrade":false,"industryGrade":false},"renderData":{"status":1,"total":"6419","pageCount":321,"currentPage":1,"pageNum":20,"data":[{"personData":[{"personId":"711","personName":"齐丁"},{"personId":"108","personName":"衡昆"}],"stockId":"2758","stockCode":"002240","stockSymbol":"sz002240","stockName":"威华股份","evaluation":"14.70","title":"布局“稀土+锂”，有望成为板块黑马","date":"2016-6-21","content":"威华股份(002240)定增引入盛屯集团，布局“稀土+锂”。1）公司2016 年5 月发布定增预案，盛屯集团现金全额认购非公开发行股票不超过8.58 亿元，发行期首日定价，锁定期3 年，增资布局稀土+锂行业，眼光长远。2）盛屯集团优质资产众多，运作能力强。盛屯集团旗下四大板块：一是控股盛屯矿业，专注金属产业链金融和矿山运营；二是锌锗及稀贵金属新材料，2014 年底入股冕宁矿业（稀土），2015 年控股四环锌锗（锌锗回收），并拥有四川金川县两项锂矿探矿权；三是金融；四是资产管理。公司6 月21 日公告，盛屯集团以12.32 元/股从现任大股东李建华手中获得8.15%股权，入主威华股份非常坚决。我们认为，这意味着在公司实际控制人变更进程正在加速，一是原有大股东持股比例继续下降，二是盛屯集团在增发完成前，提前通过协议转让方式获得8.15%股权，入主威华股份非常坚决。本次协议转让后，考虑到已提前布局公司股权，盛屯集团作为新任大股东，与现有股东利益更加一致。锂布局：上市平台投建锂盐产能，集团孵化四川业隆沟锂矿探转采。1）锂盐：致远锂业70%股权。公告增资4 亿元控股致远锂业70%股权，投建2 万吨氯化锂、1 万吨电池级氢氧化锂和1 万吨电池级碳酸锂，计划2017 年投产，2020 年达产，公司预计达产后每年2.5 亿净利润。2）锂矿：盛屯集团控股子公司奥诺伊矿业，有望探转采后注入。奥诺伊拥有四川省金川县两项探矿权，截至2014 年底估算氧化锂资源量37万吨，相当于91.5 万吨碳酸锂当量。公司在定增预案表示，奥伊诺矿业投产之后，致远锂业可能从奥伊诺矿业采购锂辉石原材料。我们认为，一旦奥诺伊探转采成功并成功投产，盛屯集团将极有可能将其注入威华股份，从而打造锂矿山、锂盐深加工产业链一体化布局。稀土布局：上市平台投建万弘1.2 万吨磁材回收产能，集团孵化四川冕宁稀土矿股权。1）废旧磁材回收：持有万弘60%股权。增资万弘股份2.3 亿获得60%股权，投建1.2 万吨废旧磁材回收，回收镨、钕、钆、铽、镝、钬等强势稀土元素，达产后年产稀土产品2040 吨REO，预计2017 年投产。2）哈哈三岔河稀土矿采矿权有望注入。盛屯集团通过入股冕宁矿业，拥有哈哈三岔河稀土矿区采矿证，稀土储量约30 万吨REO，计划开采规模60 万吨/年（折合稀土氧化物1.2 万吨），精矿产能1.5 万吨。我们认为，集团在成功孵化冕宁矿业后有望注入上市公司。投资建议：买入-A 投资评级，6 个月目标价20 元。鉴于当前稀土、锂在供给侧改革、新能源汽车催化下正进入高度景气通道，公司前期市场关注度较低，有望成为板块黑马。我们综合公司资本运作的布局和业绩释放进度，给予公司6 个月目标价为20 元。风险提示：1）增发方案被否；2）稀土供给侧改革低于预期；3）新能源汽车需求低于预期。","orgName":"安信证券","orgId":"45","industry":"家用轻工","shortTermHightprice":"15.09","midlineHightprice":"15.09","shortTermSuccess":"0","midlineSuccess":"0","shortTermGained":"2.65%","midlineGained":"2.65%","evaluationDays":"0","conceptData":["预亏预减","员工持股","土地流转","美丽中国"]},{"personData":[{"personId":"302","personName":"刘言"}],"stockId":"2778","stockCode":"002261","stockSymbol":"sz002261","stockName":"拓维信息","evaluation":"13.03","title":"协同整合接力高速增长","date":"2016-6-21","content":"拓维信息(002261)转型释放红利。过去，拓维信息主要是为运营商提供技术支持和服务的企业，从2013 年开始，公司开始向游戏和教育进行布局，先后收购了火溶信息布局游戏业务；自身开始布局线下教育、O2O 教育，后续收购了海云天、长征教育等优质教育企业。目前公司整体是“游戏+教育”的双主业驱动的模式，未来教育将是公司重点发展的领域，各个子公司和母公司平台的协同效应将是超预期增长的核心。海云天和拓维信息的协同。海云天深耕考试、测评行业多年，无论是在学校还是在教育机构均有着非常深厚的合作关系和渠道优势。拓维信息自身有着非常丰富的教育产品，通过和海云天的结合以后，利用海云天的渠道优势，有利于公司将自己的服务产品向教育机构和学校进行推广；另一方面，海云天具有考试数据优势，通过考试数据可以衍生出很多极具竞争力的教育服务产品，如“高招帮”等。长征教育和拓维信息的协同。长征教育主要是幼儿园教育内容提供商，其优势是通过占据课堂而获得幼儿园渠道。拓维信息和长征教育结合以后，拓维信息将为长征教育注入互联网基因，使其内容互联网平台化，从过去单纯的2B 向O2O+B2C 领域扩张，构建出院所服务闭环。受益改革，教育行业发展迎来黄金期。近年来，我国教育行业改革逐步有序推进，政策红利和资本增加双因素驱动行业爆发。同时，随着我国经济发展，城市化进程加快，人均收入的进一步提高叠加意愿教育消费观念，教育行业未来还有巨大的市场发展空间。互联网环境下，教育行业的商业服务不断涌出，互联网教育行业市场增长率达到32%，位列全行业第三，预计是行业未来最强劲的发展方向。从目前整体规模和资本倾向来看，我们看好K12 和幼儿教育两个细分市场。盈利预测与投资建议。预计2016-2018 年，公司的EPS 为0.3 元、0.38 元、0.48 元，对应的PE 为44 倍、34 倍、27 倍。考虑到公司潜在协同效应明显，未来进一步并购预期强烈，给予公司“增持”的投资评级。风险提示：1）游戏行业加速下滑的风险；2）国家管理政策发生变化的风险；3）业绩承诺不达预期的风险；4）整合协同进度慢于预期的风险。","orgName":"西南证券","orgId":"42","industry":"互联网传媒","shortTermHightprice":"13.20","midlineHightprice":"13.20","shortTermSuccess":"0","midlineSuccess":"0","shortTermGained":"1.30%","midlineGained":"1.30%","evaluationDays":"0","conceptData":["预盈预增","移动支付","员工持股","网络游戏","移动互联网","在线教育","融资融券标的","4G","社保重仓股","电子商务"]},{"personData":[{"personId":"396","personName":"邹戈"},{"personId":"397","personName":"谢璐"}],"stockId":"3231","stockCode":"002718","stockSymbol":"sz002718","stockName":"友邦吊顶","evaluation":"64.90","title":"成长路径清晰，员工持股彰显信心","date":"2016-6-21","content":"友邦吊顶(002718)多渠道提升厨卫市占率，业绩有望重回高增长：集成吊顶为朝阳行业，公司是集成吊顶行业优质龙头之一，但市场占有率还较小（3%-4%左右），随着消费升级带来的产品替代率上升以及公司品牌、渠道、规模等优势的发挥，未来收入规模和市场占有率的潜力提升空间大。短期业务角度来看，公司业绩增长主要来自于门店数量增加、拓展精装房工程市场、布局电商O2O、与互联网家装公司合作等。1 季度公司收入利润在去年同期促销高基数的背景下仍然实现稳定增长，内生改善逐步显现，业绩有望重回高增长。中期成长路径清晰，瞄准千亿市场空间：公司短期增长点在于厨卫吊顶的市占率提升，中期看全屋布局、空间延伸带动的业绩爆发式增长。近期公司积极开展对外投资，优化产品体系，全屋吊顶全面启动。通过对产品设计的升级、应用场景的拓展，加快“全屋吊顶”布局，抢占先机，瞄准未来千亿市场。上市来首次股权激励绑定，为未来业绩释放护航：此次员工持股计划将理顺内部激励机制，主要体现在：1）激励计划覆盖员工为范围广，包括中层管理人员和基层员工，合计356 人；2）资产管理计划按照2：1 设计优先级份额和进取级份额，通过份额分级，放大进取级份额收益；3）公司实际控制人为优先级份额本金及预期收益和进取级份额本金及年化4%的收益提供担保，彰显控制人对公司未来发展的信心。维持“买入”评级：公司是集成吊顶行业优质龙头之一，但市场占有率还较小，随着消费升级带来的产品替代率上升以及公司品牌、渠道、规模等优势的发挥，未来收入规模和市场占有率的潜力提升空间大。短期来看，公司多渠道提升厨卫产品市场占有率，全面启动全屋吊顶，内生改善逐步显现，业绩有望重回高增长。同时员工持股彰显实际控制人对公司未来发展的信心，为公司未来的业绩增长保驾护航。我们预计公司2016-2018 年每股收益为2.09 元、2.98 元、3.90 元，维持买入评级。风险提示：房地产市场景气度继续低迷，同业竞争加剧，新产品拓展低预期。","orgName":"广发证券","orgId":"36","industry":"其他建材","shortTermHightprice":"65.97","midlineHightprice":"65.97","shortTermSuccess":"0","midlineSuccess":"0","shortTermGained":"1.65%","midlineGained":"1.65%","evaluationDays":"0","conceptData":["预盈预增","基金重仓股","建筑节能"]},{"personData":[{"personId":"83","personName":"朱国广"},{"personId":"343","personName":"施跃"}],"stockId":"2487","stockCode":"000963","stockSymbol":"sz000963","stockName":"华东医药","evaluation":"64.40","title":"仿制药龙头迎来历史新机遇","date":"2016-6-21","content":"华东医药(000963)推荐逻辑：秉承 “要么唯一，要么第一”经营理念，构建一流产品线：阿卡波糖国内品牌第一；三大主流免疫抑制剂国内品牌第一；泮托拉唑国内品牌第一；百令胶囊国内唯一。我们认为公司在控费和仿制药一致性评价的大背景下，逐步侵蚀跨国药企市场份额，实现进口替代，有望在竞争中成为最终受益者。糖尿病药物：阿卡波糖为II 型糖尿病一线用药。阿卡波糖进入2012 年新版基药目录后，发力基层市场，销售持续攀升，公司市场份额不断上升对应拜耳市场份额持续下降，2015 年公司重点医院市场份额为24%，进口替代持续，预计未来三年CAGR 维持30%以上。为延长阿卡波糖系列生命周期，公司申报新剂型咀嚼片，并已经获批，后续将有产品线研发和外延预期，长期有望打造糖尿病用药全系列产品线。免疫抑制剂：三大主流品种均是国内品牌第一。作为国内器官移植术后抗排异用药的龙头企业，拥有最全的一线用药产品线。2015 年，公司免疫抑制剂在重点医院市场份额占到21%，仅次于安斯泰来。其中环孢素市场份额已经超越诺华，跃升第一；他克莫司、吗替麦考酚酯份额持续攀升，超越原研厂商可期。消化系统用药：行业第二，进口替代。消化性溃疡药主打品种泮托拉唑市场份额19%，相比原研厂商奈科明26%，赶超指日可待。埃索美拉唑预计2017 年获批，公司消化系列产品线将得到丰富。达托霉素市场空间广阔，未来具备成为大品种潜力。在2012 年全球销售额已达到8 亿美元，2014 年，达托霉素已在世界40 多个国家和地区上市，销售额合计为14.08 亿美元，预计公司首仿上市，未来收入可达5 亿元人民币。百令产品线：产能瓶颈缓解后收入有望翻番。2015 年收入超17 亿元，增速超30%，预计2016 年收入突破20 亿元。百令产品供不应求，主要矛盾是产能不足，随着适应症拓宽和下沙新基地投产，长期25%复合增长可期。“三流合一”促医药商业格局重构。浙江省试点“三流合一”平台，目的在于压缩多余过票环节，且回款周期缩短为30 天，如果严格实施，将大大提高商业公司资金周转效率，龙头公司在趋严的控费政策下将因集中度提升而愈发强大。盈利预测与投资建议。预计未来三年归母净利润将保持25%以上复合增长率，我们采取分部估值法，对公司工业给予31 倍PE、商业部分21 倍PE，对应目标价为83.27 元，维持“买入”评级。","orgName":"西南证券","orgId":"42","industry":"医药商业","shortTermHightprice":"64.69","midlineHightprice":"64.69","shortTermSuccess":"0","midlineSuccess":"0","shortTermGained":"0.45%","midlineGained":"0.45%","evaluationDays":"0","conceptData":["基金重仓股","长三角区","社保重仓股","健康中国","预盈预增","融资融券标的","券商重仓股"]},{"personData":[{"personId":"23","personName":"马宝德"}],"stockId":"3000","stockCode":"002483","stockSymbol":"sz002483","stockName":"润邦股份","evaluation":"10.96","title":"公告点评：并购绿威环保，大力布局污泥处理领域","date":"2016-6-21","content":"润邦股份(002483)事件：近日，公司发布关于与相关方签署《股权转让暨利润补偿协议》的公告。点评:并购绿威环保，大力布局污泥处理领域。公司拟以支付现金合计人民币17,875 万元的方式受让绿威环保股东江苏鑫浩、上海华廓以及苏州国环合计持有的绿威环保55%股权。本次股权转让完成后，公司将持有绿威环保55%的股权，绿威环保将成为公司的控股子公司。绿威环保是一家以污泥处理处置为核心业务的高新技术企业，总部位于苏州工业园区，拥有污泥深度调理脱水技术、污泥资源化焚烧技术、污泥资源化利用技术等多项污泥处置领域的核心技术。绿威环保着力于污泥处理领域的项目建设与技术研发，并以BOO、BOT、EPC、EMC 等多种业务合作模式为客户量身定做最优化的污泥处理处置解决方案。按照业绩承诺，绿威环保2016 年、2017 年、2018 年预测净利润分别为2,500 万元、3,250万元、4,225 万元，三年累计不低于9,975 万元。绿威环保在2015年全年和2016 年1~4 月份，分别实现净利润478.57 万元和409.32万元。控股绿威环保有利于大幅增厚公司业绩，并与现有环保业务形成协同效应。环保平台逐步完善，大力转型打造第二增长极。公司积极布局节能环保板块，设立子公司润禾环境，未来公司将以工业污水处理为切入点，同时逐步培育VOCs（挥发性有机物）治理、危废固废处理等细分领域的相关业务。公司于2015 年下半年陆续参股蓝兴环保（13.50%的股权）和建工金源（3.17%的股权），并且与清控资管签订了《战略合作备忘录》，双方将在推动节能环保产业发展及科技成果产业化、对接项目及资本平台等方面展开深入合作。公司拟收购正洁环境71.67%股权，待业绩承诺完成，可收购剩余股权，业绩承诺为2016 年、2017 年和2018年实现扣非归母净利润2,700 万元、3,600 万元和4,700 万元。环保业务利润弹性较大，有望大幅增厚公司业绩。未来，公司会通过多种方式参与环保板块布局，侧重运营和维护等轻资产模式，与资产重周期长的传统业务进行有效互补。海工业务大幅亏损和计提大额资产减值。海工业务以润邦海洋为主要实施主体，产品主要包括OSV（海洋工程辅助船）、海洋风电安装作业平台、特种工程船舶等。2015 年下半年的石油价格暴跌，后来一度跌到27 美元附近。受石油价格暴跌影响，油气开发公司投资计划大幅缩减。公司与油气相关的在手海工订单合同不同程度地出现了产品延期交付、成本上升、现有合同价格下调等情况。2015 年，公司海工业务下滑明显，导致公司业绩大幅亏损。润邦海洋实现营业收入1.93 亿元，实现净利润-5.22 亿元。公司2015年计提资产减值损失1.64 亿元。润邦海洋积极调整产品结构以适应市场的变化。未来公司将会逐渐收缩与油气相关度较高的海洋工程装备业务，同时会继续拓展波动比较小的其他与油气基本无关的特种工程船舶等海洋工程装备业务，严格控制公司海洋工程装备业务板块的经营风险。另外，随着海上风电发展，有望带动公司传统业务发展。受政策支持，十三五期间，海上风电有望获得较快发展，公司相关业务有望受益。公司与厦门船舶重工签订的总价3.4 亿元为其海洋风电安装平台的起重及提升系统的两套海洋风电安装平台整体解决方案合同在有效执行中。起重装备业务起色较大。起重装备业务是公司最重要的收入来源，约占公司总收入的70%左右。公司以润邦卡哥特科和润邦重机为主要实施主体，实行“卡尔玛”和“杰马”双品牌发展战略，目前发展良好。船舶配套业务。船舶配套装备业务受船市和航运市场影响较大，是卡哥特科的核心供应商。船舶配套装备业务净利和现金流相对稳定。立体停车设备。2009 年，公司开始布局立体停车领域,尽管市场空间广阔，每年都有所增长，但技术门槛相对较低,竞争厂商较多。公司的传统客户以房地产商为主，但由于之前房地产二级市场企业融资困难等因素，现金流不稳定。目前，公司已对客户结构进行优化和调整，筛选资信良好和资金充足的客户，如医院、商场、超市和写字楼等。实际控制人增持与员工持股计划，显示信心。公司第一期员工持股计划通过二级市场集中竞价的方式于2016 年3 月16 日和2016年3 月17 日累计购买公司股票62 万股（占公司总股本的0.14%），成交均价为9.70 元，成交总金额为601.27 万元。另外，公司实际控制人累计从二级市场增持101.48 万股，增持总额1299.54 万元，增持均价12.81 元/股。维持“推荐”评级：如果考虑到今年公司增发完成等因素，2016～2018 年，公司将分别实现EPS 分别为0.22 元、0.29 元和0.36 元，分别对应47.64 倍、36.34 倍和29.28 倍PE。考虑到公司2015 年大幅亏损，并计提大额资产减值准备，风险已得到较大释放，另外公司大力开拓节能环保和循环经济业务，利润弹性较大，实际控制人增持和公司员工持股计划实施，维持“推荐”评级。风险提示：市场开拓不及预期风险;项目推进不达预期风险；毛利率下滑风险；节能环保业务不达预期风险。","orgName":"国联证券","orgId":"39","industry":"专用设备","shortTermHightprice":"10.96","midlineHightprice":"10.96","shortTermSuccess":"0","midlineSuccess":"0","shortTermGained":"0.00%","midlineGained":"0.00%","evaluationDays":"0","conceptData":["基金重仓股","预盈预增","员工持股","污水治理"]},{"personData":[{"personId":"83","personName":"朱国广"},{"personId":"343","personName":"施跃"}],"stockId":"972","stockCode":"603368","stockSymbol":"sh603368","stockName":"柳州医药","evaluation":"84.40","title":"致力于产业链延伸的区域医药流通龙头","date":"2016-6-21","content":"柳州医药(603368)推荐逻辑：医药 流通行业集中度提升大趋势下，区域龙头将受益；积极转型，供应链延伸项目进展顺利，目前已经同14 家医院签订战略合作协议，有利于降低管理成本，增加医院客户粘性，进一步扩大销售份额；DTP 业务承接处方药外流，直营药店同步进展，零售端布局有条不紊。“两票制”催化行业集中，区域分销龙头受益。1）公司作为一家以医院销售、零售药店和第三终端并重发展的区域性医药流通区域龙头企业，已与广西区内100%的三甲医院建立良好业务关系，在区内14 个地级市均建立了健全的销售网络和售后服务体系；2）在包括两票制在内的政策催化下，医药流通行业集中度将进一步提升，具备区域优势、规模优势、渠道优势的区域龙头将显着受益。DTP 业务起步，布局优势明显。1）公司将重点推广“DTP 业务+院边店+医药电商”，与医院药品业务形成良性互补；2）控股子公司柳州桂中大药房于2015年成立DTP 事业部，着重推广DTP 业务并在医院内部及周边开设便民药店，同时打造网上药店业务，全终端布局承接处方药外流；3）目前公司拥有直营药房174 家，其中DTP 药房11 家；4）作为区域流通龙头，利用渠道，价格优势，柳州医药零售业务预计三年后将具备35%的市场扩容。供应链延伸服务推进，升级医院合作模式。1）公司拟投资10.35 亿元，在广西15-20 家三甲医院和30-50 家二甲医院实施供应链延伸项目，目前已与区内14家医疗机构签订供应链延伸服务战略协议；2）公司旨在将物流服务延伸到医院内部药房，升级医院合作模式，并逐步向综合性医药服务供应商转型；3）该项新服务预期将为公司提高20%-30%医院份额。医院分销业务和零售业务将形成协同效应，承接处方外流优势明显。新业务逐步落地，全产业链延伸。1）布局上游制药业务，仙茱中药负责南宁中药饮片厂基地建成投产后的运作，是公司首家进入生产领域的子公司，未来将有进一步向生产领域延伸的预期；2）成立柳药医疗，从事医疗投资、医院管理等，推动未来公司业务向下游医疗机构扩展；3）搭建医疗器械耗材配送项目；4）我们认为公司进行纵向、横向全产业链延伸将丰富公司产品线，后续有望借助其供应链平台快速放量，盈利能力将提升。盈利预测与投资建议。预计公司16-18 年EPS 分别为1.84 元、2.33 元、2.86元，对应PE 分别为45 倍、36 倍、29 倍。我们看好供应链延伸业务为公司带来的医院配送份额增量，DTP 业务在处方外流趋势下发展空间巨大，中药饮片等新业务亦处于放量前期，首次覆盖给予“买入”评级。风险提示：区域竞争或加剧的风险；医改政策或不断趋于严厉的风险。","orgName":"西南证券","orgId":"42","industry":"医药商业","shortTermHightprice":"85.50","midlineHightprice":"85.50","shortTermSuccess":"0","midlineSuccess":"0","shortTermGained":"1.30%","midlineGained":"1.30%","evaluationDays":"0","conceptData":["基金重仓股","员工持股","预盈预增"]},{"personData":[{"personId":"83","personName":"朱国广"},{"personId":"343","personName":"施跃"}],"stockId":"412","stockCode":"600521","stockSymbol":"sh600521","stockName":"华海药业","evaluation":"24.20","title":"内外兼修，畅享行业政策红利","date":"2016-6-21","content":"华海药业(600521)事件：公司公告，中国证监会发行审核委员会对公司非公开发行A 股股票申请进行了审核，根据审核结果，公司本次非公开发行A 股股票申请获得通过。健全长期激励机制，提高经营管理质量。为稳定管理层和骨干员工队伍，并为引进和稳定各类优秀人才提供一个良好的平台，本次非公开发行对象为公司部分董事、高级管理人员以及其他员工非公开发行不超过19602324 股，对应资金总额不超过 30265.99 万元。募集资金用途主要为偿还银行贷款和补充流动资金，减轻财务负担，增强抗风险能力和核心竞争力。制剂业务高速发展，国内转型成功典范。公司自上市初开始向制剂领域战略转型，目前公司已成功实现单业务向原料药与制剂双核心业务的战略转型。经历十几年的发展，公司制剂业务营收占比不断提高，2003-2015 年，公司制剂收入占主营收入比例由0.1%增长至45.9%。公司不仅在制剂业务方面获得突破，并且在制剂出口领域走在国内行业最前列，目前公司海外制剂业务约占整个制剂收入的60% 。公司在制剂品种方面积极寻求新的方向， 与美国ONCOBIOLOGICS 合作，布局高端生物制剂，享有ONCOBIOLOGICS 公司四个单抗产品在国内的100%市场权益。目前，阿达木单抗仿制药及治疗老年黄斑变性产品已经获国内临床申报受理，未来将对制剂产品线进行深度补充。仿制药一致性评价势不可挡，公司或成政策最大受益者。根据国务院关于开展一致性评价的具体落实意见，明确了对仿制药出口企业的相关规定。在中国境内用同一条生产线生产并在国内和欧美均上市的，在通过相关审核后可视为通过一致性评价；国内企业已在欧盟、美国和日本获准上市的仿制药，按照新的化药分类要求进行注册申请，由药审中心审评，批准上市后视为通过一致性评价。公司在欧美获批上市制剂品种已经超过16 个，具有一致性评价的先天优势，未来可借免一致性评价享受政策和市场红利。盈利预测与投资建议。预计2016-2018 年EPS 分别为0.58 元、0.77 元、0.94元，公司积极布局高端生物制剂，并且是一致性评价政策下受益最明确标的，未来将充分享受一致性评价带来的政策和市场红利。首次覆盖，给予“买入”评级。风险提示：药品招标降价、新产品研发进展低于预期、制剂出口受阻等风险。","orgName":"西南证券","orgId":"42","industry":"化学制药","shortTermHightprice":"24.24","midlineHightprice":"24.24","shortTermSuccess":"0","midlineSuccess":"0","shortTermGained":"0.17%","midlineGained":"0.17%","evaluationDays":"0","conceptData":["长三角经济区","基金重仓股","健康中国","社保重仓股","预盈预增","融资融券标的","员工持股"]},{"personData":[{"personId":"83","personName":"朱国广"}],"stockId":"2267","stockCode":"000650","stockSymbol":"sz000650","stockName":"仁和药业","evaluation":"7.57","title":"战略定位清晰，看好药房网终端价值","date":"2016-6-21","content":"仁和药业(000650)事件：公司发布公告对非公开发行预案进行了修改：非公开发行股票数量调整为不超过1.43 亿股（原为3.94 亿股），募投资金总额调整为不超过12 亿元（原为33 亿元），募投项目调整为仁和药房网零售终端推广全国主要城市项目（原为收购通化中盛、叮当医药、京卫元华，开展叮当连锁“B2C”、叮当医药“B2B\"、公立医院药房托管等6 个项目）。募投项目为零售终端建设，战略定位更为清晰。终端布局是OTC 企业产业升级的重要方向，扮演了公司FSC 产业链建设中关键的一环，本次预案中仅保留仁和药房网零售终端推广（即原预案中的叮当连锁“B2C”），我们认为这意味着公司战略进一步清晰，将率先发展当前最具战略重要性的终端布局。此外，在上一轮预案的5 个项目中，通化中盛、叮当医药、京卫元华已通过公司自有资金完成，我们预计其他项目亦将通过公司自有资金继续推进，将显着减轻原预案对公司业绩的摊薄效应。资金募集进度并不影响公司FSC 战略，业绩进入释放期。公司执行力强，在拟募集资金未到位时已通过整合产品集群、整合渠道、布局终端建立起了FSC 全产业链业态雏形。1）整合通化中盛+和力物连，产品品种已放大至近3000 个；2）已有的6 家商业公司将上承生产商，下接终端，压缩中间流通环节；3）将发展集医药展示、医药库存、医生药师执业场所、店对门配送为一体的数十万家客户近邻终端体系。我们认为公司FSC 模式下将实现由品种、终端扩张带来的收入规模扩大和由中间环节压缩带来的盈利能力提升。药房网为国内DTP 第一家，未来将发展成“OTC+处方药”双强的终端。药房网（原京卫大药房）是国内最早从事DTP 业务的药店，深耕DTP 领域十余年，已形成了强大的资源体系，在承接医院处方药外流尚有天然优势。目前拥有自有药店40 家左右，将通过本次募集资金拟在 2-3 年内将门店数扩充至3000家。我们认为药房网加入仁和后将实现“1+1＞2”的协同效应，一方面可借助仁和的上市公司平台实现其DTP 业务的规模化发展，另一方面扮演仁和FSC 的终端环节，为仁和的OTC 产品放量的重要渠道。盈利预测与投资建议。预计2016-2018 年EPS 分别为0.38 元、0.49 元、0.64元，对应PE 分别为19 倍、15 倍、11 倍，我们看好公司全产业链布局战略，以DTP 见长的药店终端将享受由医院医药分家与分级诊疗带来的政策红利。维持“买入”评级。风险提示：非公开发行进展或低于预期；FSC 全产业链布局进度或低于预期。","orgName":"西南证券","orgId":"42","industry":"中药","shortTermHightprice":"7.88","midlineHightprice":"7.88","shortTermSuccess":"0","midlineSuccess":"0","shortTermGained":"4.10%","midlineGained":"4.10%","evaluationDays":"0","conceptData":["鄱阳湖经济区","券商重仓股","预盈预增","基金重仓股","医药电商","融资融券标的"]},{"personData":[{"personId":"537","personName":"杨琳琳"}],"stockId":"2630","stockCode":"002112","stockSymbol":"sz002112","stockName":"三变科技","evaluation":"23.25","title":"收购地铁WiFi龙头南方银谷，构建地铁场景移动互联网生态圈","date":"2016-6-21","content":"三变科技(002112)事件：公司拟以股权+现金合计28 亿元向周发展等购买南方银谷100%股权，其中股权对价17.71 亿是以13.93 元/股发行1.27 亿股份，现金对价为10.29亿。周发展等5 名业绩承诺方股份锁定3 年。同时公司拟以13.93 元/股向正德管理等9 名特定对象非公开发行1.69 亿股募集配套资金23.50 亿元，锁定期3 年。其中10.29 亿元用于支付现金对价，剩余13.21 亿元主要用于广州地铁PIS 系统二期建设项目、地铁Wi-Fi 视频加速项目、网络技术研发中心项目、轨道交通通信创新实验室项目、补充上市公司流动资金、支付中介机构费用。核心观点：一、地铁Wi-Fi 填补地铁场景缺乏稳定互联网接入口的空白，目前该领域尚处于起步阶段，南方银谷是行业内起步较早，规模较大的公司，通过解决地铁Wi-Fi 刚需从而占据流量入口，具有先发和卡位优势。二、南方银谷是目前国内唯一一个成功在地铁内全场景完成Wi-Fi 覆盖并成功实施运营的企业，技术和市场先发优势明显。南方银谷与地铁公司独家合作，提供地铁场景内Wi-Fi 接入并开展地铁移动互联网场景运营，已合作的地铁线路分布在一二线重点城市，人口消费能力较强。南方银谷已在全国20 个开通地铁的城市中取得7 个城市地铁Wi-Fi 网络建设和运营独家合作权，运营里程合计1,082 公里，占2014 年底全国2,361 公里运营总线路的45.83%。南方银谷地铁Wi-Fi 网络已覆盖上海、广州、深圳全国一线城市（各城市年客运量超10 亿人次），及武汉、昆明、青岛、贵阳等，目前正与南京、成都、西安、太原等地铁公司洽谈地铁Wi-Fi 建设和运营。三、南方银谷基于与各地地铁公司独家战略合作，基于地铁全场景（包括站厅、站台、车厢）构建的地铁Wi-Fi、地铁iBeacon 系统及地铁电视系统（PIDS），为地铁乘客提供免费Wi-Fi 服务获取天然流量，为客户提供移动互联网广告、游戏分发及联运等互联网增值服务，力图创造国内领先的“在地（地铁）、在线（即时在线）、在云（云端）”的地铁场景移动互联网生态圈，致力打造国内领先的数字化媒体平台与互联网互动娱乐平台。四、南方银谷目前收入仅来自上海地铁部分线路、广州地铁电视商业化，16 年下半年到17 年将有多地地铁WiFi 项目完成建设和调试，未来业绩增量显着。目前南方银谷已签订订单支撑业绩快速增长，2016 年主要合同总金额达5.56 亿，其中广告合同金额为4.56 亿，游戏合同金额为1 亿。五、此次收购完成后公司将成为电力变压器制造与销售与地铁移动互联网的构建及运营并行的双主业公司。未来在业务和资产方面，公司将继续保持南方银谷的业务独立性。六、首次给予“谨慎增持”评级。预计公司2016 年实际净利润0.35 亿（假设南方银谷2016 年10 月起并表）。公司2016~2018 年备考净利润为1.1亿、2.3 亿和3.9 亿，其中南方银谷承诺净利润为1.0 亿、2.2 亿和3.8 亿；按增发完成后总股本4.97 亿计算，对应16~18 年备考EPS 为0.22 元、0.46元、0.78 元，当前股价22.90 元/股对应16~18 年备考PE 为103 倍、49倍、29 倍，增发完成后公司总市值为114 亿。七、风险提示：收购过会风险，并购整合不达预期；地铁Wi-Fi 设备建设低于预期。","orgName":"广发证券","orgId":"36","industry":"高低压设备","shortTermHightprice":"25.19","midlineHightprice":"25.19","shortTermSuccess":"0","midlineSuccess":"0","shortTermGained":"8.34%","midlineGained":"8.34%","evaluationDays":"0","conceptData":["长三角经济区","预亏预减","举牌概念股","壳资源","移动互联网"]},{"personData":[{"personId":"208","personName":"郑连声"}],"stockId":"3533","stockCode":"300258","stockSymbol":"sz300258","stockName":"精锻科技","evaluation":"15.56","title":"事件点评：收购诺依克便于公司拓展汽车电子和电控领域","date":"2016-6-21","content":"精锻科技(300258)事件：公司公告，拟用自有现金1 亿元收购宁波诺依克100%股权。点评：收购诺依克，便于进一步拓展汽车电子和电控领域1）诺依克主营汽车可变气门正时技术VVT 系统（相位调节器和OCV 阀），同时在传感器、VNT 真空调节阀等领域有一定基础研发能力。根据富临精工招股书资料，我国乘用车采用VVT 的车型比例从2002 年的3.3%增加至2011 年的63%。预计随着新机型的增多，未来我国使用VVT 系统的乘用车车型将会增加至80%以上，尤其是自主品牌未来配套空间巨大。根据预测，2015 年我国VVT市场需求达到2600 万套，市场容量达到56 亿元！因此，我们看好诺依克未来的业务发展。2）通过此次收购，便于公司进一步拓展汽车电子和电控产品领域市场业务，打造形成具有较强竞争力的高端汽车零部件模块。根据业绩承诺，若从今年7 月开始并表，则将增厚公司2016/2017 年EPS0.01/0.04 元。主业：订单充足+产能释放，折旧占比下滑，业绩增长进入加速期1）一季度公司订单完成率仅为64.02%，结合我们调研跟踪情况来看，目前公司订单交付压力较大。2）目前公司募投产能已充分达产，产能调整也已基本完成。相比往年，今年将是公司前2-3 年储备产能充分释放的一年。综上分析，订单爆满+产能充分释放将支撑公司业绩从今年开始加速增长。结合公司披露的定期报告涉及的量产项目信息，我们预计公司加速增长可持续。3）从增长格局看，天津大众DQ380 一期与DQ500 开始放量将推动公司内销保持较快增长；电动差速器齿轮出口、大众捷克工厂差速器锥齿轮及GKN 与格特拉克等海外项目陆续放量将支撑公司出口保持高速增长。4）目前订单爆满造成设备利用率明显提升，折旧占比从今年一季度开始下滑。我们认为，设备利用率提升加上未来公司有望合理控制投资节奏（资本开支走低），折旧占比有望继续小幅下滑后保持稳定。因此，折旧增速收窄以及占比下滑将从成本端改善公司业绩，进一步保证公司业绩加速可持续。积极开发新项目，为中长期增长打基础为了保持公司中长期可持续发展，公司着眼长远，在新能源汽车电机轴超精加工、电动乘用车空调涡盘（核心部件）、差速器总成、VVT、DCT 齿轮（轴）及底盘锻造件等领域进行战略性布局，符合汽车行业电动化、轻量化的趋势。我们认为，布局技术壁垒高、市场空间大、符合行业发展趋势的新项目新产品将充分保证公司中长期可持续发展。目前公司资产负债率低，经营良好，现金充足，预计未来有合适的机会不排除公司通过并购合作的方式来缩短学习曲线，实现快速发展。维持盈利预测与评级不变我们维持盈利预测不变，预计2016-18 年公司实现营业收入8.55/10.83/14.09亿元，同比增长22.41/26.68/30.06%；实现归母净利润1.78/2.29/2.98 亿元，同比增长27.32/28.33/30.31%，对应EPS 分别为0.44/0.56/0.74 元/股，2016年动态PE 为35 倍，考虑到公司业绩增长确定性高且外延预期较强，维持“买入”评级不变。风险提示：国内车市增长低于预期；出口低于预期；新项目进度低于预期；费用增长超预期；并购合作进展低于预期。","orgName":"渤海证券","orgId":"68","industry":"汽车零部件","shortTermHightprice":"16.60","midlineHightprice":"16.60","shortTermSuccess":"0","midlineSuccess":"0","shortTermGained":"6.68%","midlineGained":"6.68%","evaluationDays":"0","conceptData":["预盈预增","基金重仓股","券商重仓股","特斯拉"]},{"personData":[{"personId":"290","personName":"陈佳"}],"stockId":"2838","stockCode":"002321","stockSymbol":"sz002321","stockName":"华英农业","evaluation":"9.32","title":"定增完善产业链布局，产能规模进一步扩大","date":"2016-6-21","content":"华英农业(002321)事件描述华英农业公布 2016 年非公开发行股票预案。事件评论公司本次非公开发行股票对象为不超过 10 名特定投资者， 募集资金总额不超过 6.86 亿元，发行价格不低于 8.73 元， 发行股票数量不超过7858 万股，限售期 12 个月。本次募集资金将用于羽绒及羽绒制品加工项目、年屠宰 2000 万只麻鸭加工项目、年产 2 万吨精品熟食加工项目和年产 5000 万只樱桃谷商品代雏鸭生产项目。我们认为，定增募投项目将使得公司产业链布局进一步完善， 产能规模进一步扩大。 公司定增项目通过与新塘羽绒合作，将产业链延伸到下游的羽绒及羽绒制品加工领域， 不仅可以发挥公司种鸭、商品鸭养殖的优势为下游羽绒及羽绒制品提供原毛，产生协同效应，降低成本，同时丰富产品结构， 有效增强公司抗风险能力。 同时，公司通过定增项目积极扩张生产及屠宰产能，项目完成后，公司鸭苗出栏产能将达 2亿羽（较原先 1.5 亿羽增长 33%），肉鸭屠宰产能将达 1 亿羽（较原先0.8 亿羽增长 25%），生产规模的扩大使得公司市场份额有望进一步提高，同时规模效应下公司盈利能力也将得到逐步加强。看好公司未来发展，主要基于： 1、产能收缩逻辑下，鸭价有望持续上涨。 2014 年和 2015 年上半年祖代白羽肉鸭存栏量分别下降 3%和6.8%，随着白羽肉鸭协会对产能控制收紧，祖代鸭存栏量仍有望继续下行，基于产能持续收缩以及鸡鸭价格高度相关逻辑，后期鸭价上涨有望持续。2、公司 2016 年鸭苗和肉鸭屠宰产量有望提高 12%和 30%。随着募集资金到位， 2016 年公司鸭苗和肉鸭屠宰产能利用率会大幅提升，预计 2016、 2017 年公司鸭苗产量为 1.3 和 1.5 亿只，肉鸭屠宰量为 5000 万只和 8000 万只。 3、公司存在较大外延式并购预期，预计未来有可能向上游祖代鸭以及下游食品加工、鸭副产品类发展，通过整合相关资源进行布局，形成一体化产业链，增强盈利稳定性。给予“买入”评级。看好公司未来发展前景，考虑定增摊薄，预计 2016、2017 年 EPS 分别为 0.52 元和 0.79 元。给予“买入”评级。风险提示：鸭价上涨不达预期；屠宰及出栏量增长不达预期。","orgName":"长江证券","orgId":"51","industry":"畜禽养殖","shortTermHightprice":"9.42","midlineHightprice":"9.42","shortTermSuccess":"0","midlineSuccess":"0","shortTermGained":"1.07%","midlineGained":"1.07%","evaluationDays":"0","conceptData":["预盈预增","基金重仓股","员工持股","土地流转","智慧农业","禽产业链"]},{"personData":[{"personId":"45","personName":"张镭"},{"personId":"376","personName":"林起贤"}],"stockId":"2649","stockCode":"002131","stockSymbol":"sz002131","stockName":"利欧股份","evaluation":"16.29","title":"第一期股权激励+设立20亿并购基金，加码互联网板块布局","date":"2016-6-21","content":"利欧股份(002131)6 月 20 日晚，利欧股份公告第一期限制性股权激励方案（草案），授予对象五年内不得解锁有劣二团队长期稳定，解锁条件高二互联网子公司对赌业绩彰显公司发展信心。 6 月 17 日公告拟设立 20 亿互联网产业并购基金并认缴不超过出资总额的 30%，劣益互联网版图的持续扩张。点评：限制性股权激励方案绑定核心高管，确保互联网板块长期发展。 第一期限制性股权激励方案授予价格为 8.49 元/股，授予日满 12 个月后四年内可按 15%：25%：30%：30%的比例分期解锁。解锁条件为 16-19 年各年度互联网板块净利润不低二 4.43/5.63/6.79/8.01 亿且互联网板块净利润占比不低二 65%/70%/75%/80%。授予对象为公司高管及核心骨干 143人（包括处二利润对赌末期子公司漫酷广告、上海氩氪、琥珀传播的核心高管） 。授予对象授予日起五年内不得解锁有劣二核心团队的长期稳定，解锁条件高二子公司对赌业绩（假设智趣广告今年只有一个季度业绩并表则互联网板块对赌利润 4 个亿），彰显发展信心。设立 20 亿并购基金，拓展互联网版图。 公司携手浙大联创投资、宁波利欧数娱（副董事长王壮利投资企业）成立产业并购基金，其中公司认缴不超过出资总额的 30%，设立产业基金目的在二充分利用互联网行业资源，寺求对利欧股份互联网板块拓展有利的投资标的。公司前期已搭建起基二整合营销平台不流量运营平台，成立并购基金有劣二链接平台资源不各互联网服务细分领域的创业公司，进一步发挥平台资源优势并获取投资收益。维持强烈推荐。 预计 16-18 年备考净利润为 8.16 /10.93/13.14 亿，其中营销板块 16-18 年备考净利润为 7.16/9.93/12.14 亿， 当前股价对应的 PE为 31/23/19 倍，公司作为数字营销行业龙头具备持续高成长的能力，当前估值具备吸引力，维持强烈推荐评级。风险提示：数字营销行业竞争进一步加剧，互动娱乐板块开拓不及预期。","orgName":"中投证券","orgId":"43","industry":"互联网传媒","shortTermHightprice":"16.33","midlineHightprice":"16.33","shortTermSuccess":"0","midlineSuccess":"0","shortTermGained":"0.25%","midlineGained":"0.25%","evaluationDays":"0","conceptData":["长三角经济区","基金重仓股","券商重仓股","社保重仓股","预盈预增","水利水电建设","员工持股","重组","智能交通","新能源汽车","文化传媒概念"]},{"personData":[{"personId":"155","personName":"王鹤涛"}],"stockId":"2835","stockCode":"002318","stockSymbol":"sz002318","stockName":"久立特材","evaluation":"12.10","title":"设立专业性投资平台，加强资本与产业联动","date":"2016-6-21","content":"久立特材(002318)事件描述公司今日发布公告，决定以自有资金设立全资子公司浙江久立投资管理有限公司（久立投资），久立投资注册资本5000 万元，经营范围为非证券业务的投资管理咨询。事件评论设立投资公司，加强资本产业联动：公司产品以无缝管和焊接管为主，受下游石油投资增速放缓叠加原油价格持续低位徘徊影响，公司产品下游需求端尚未完全好转。在此背景下，公司业绩也不可避免的受到影响，公司在2016年1 季度收入同比增长7.03%的情况之下，净利润仍然同比下滑24.43%。公司此番设立投资公司，意在围绕发展经营战略，打造投资平台，加强资本和产业的联动，拓展业务经营领域，进而提高公司的核心竞争能力与持续盈利能力。投资公司设立后，将会极大的拓宽公司的投资渠道，公司可通过久立投资的平台，一方面利用股权投资等多种方式对产业链进行进一步延伸，另一方面也可以加快公司在高端装备制造业、新材料等高端产业的布局，推动转型升级。多举措并举提升盈利能力，期待高端产品产能有望释放：长期以来，公司致力于通过多种举措强化竞争和盈利能力。一方面，公司积极强化技术端，加强技术储备，在2015 年11 月，公司就已经与钢铁研究总院成功牵手。另一方面，公司还通过外延式扩张加强整合行业资源。公司此次设立久立投资，其核心出发点也是为了提升竞争和盈利能力。此外，公司重要看点还在于，未来一旦核电、油气重启获得实质性进展，公司相关领域的高端产品必将进一步受益，产能也将进一步释放，业绩将会得到提升。预计2016、2017 年公司EPS 分别为0.18 元、0.22 元，维持“买入”评级。","orgName":"长江证券","orgId":"51","industry":"钢铁","shortTermHightprice":"12.30","midlineHightprice":"12.30","shortTermSuccess":"0","midlineSuccess":"0","shortTermGained":"1.65%","midlineGained":"1.65%","evaluationDays":"0","conceptData":["社保重仓股","基金重仓股","预亏预减","券商重仓股","员工持股","LNG","融资融券标的","核能核电","军用材料","海水淡化概念","海洋经济"]},{"personData":[{"personId":"717","personName":"刘泽晶"},{"personId":"931","personName":"周楷宁"},{"personId":"932","personName":"宋兴未"}],"stockId":"3312","stockCode":"300036","stockSymbol":"sz300036","stockName":"超图软件","evaluation":"20.75","title":"星星之火已燎原","date":"2016-6-21","content":"超图软件(300036)公司订单已成星星之火燎原之势。我们收集了公司近一年（2015.6―2016.5）以来的订单数据，其中超图139个，国图158个，从可收集到订单数据情况看，公司2016年业绩爆发确定性极高。公司2016年1-5月：1、可统计到的订单总金额快速增长，前5个月的订单总金额已接近2015年后7个月的订单总金额（一般下半年订单显着多于上半年）；2、可统计到的订单平均金额较去年后7个月订单均额增长超过100%，说明2016年上半年市场需求释放充分；3、可统计到收购的国图信息订单总金额也实现快速增长，今年前5个月订单超过去年后7个月订单总额；4、南京国图前5个月订单数量接近去年后7个月；5、可统计到的国图订单平均金额较去年后7个月均额增长28%。收购的协同效应已开始显现。从我们可统计到的订单情况来看，公司收购南京国图和南康科技的协同效应已开始显现。我们从南京国图的订单数量和季度订单金额分析：1、国图2016年前5个月可统计到的订单数量为73个，2015年后7个月可统计到的订单数量为84个，考虑到季节性等因素，我们认为国图全年的订单数量有望实现50%以上的增长；2、2015年6-8月、2015年9-11月、2015年12月-2016年2月、2016年3-5月，可统计到的南京国图订单金额分别为2122/1924/5536/3574万元，单季度订单金额增长态势十分明显。不动产登记市场需求爆发。我们通过统计可获得的南京国图的订单信息发现，2015年6-12月，公司不动产登记订单仅有5个。2016年1-5月，不动产登记订单有28个，占前5个月总订单数的38%。按照单个订单均额160万算，2016年前5月，国图来自不动产登记市场的订单额达4476万元（不完全统计），可见不动产登记市场需求已爆发。维持“强烈推荐-A”评级：我们上调公司2016-18年预测净利润分别至1.39/1.93/2.65亿元，对应EPS为0.35/0.49/0.68元。公司各项业务全面开花，协同性已体现，不动产登记订单爆发，维持“强烈推荐-A”评级。风险提示：1、竞争激烈导致毛利率下降较快；2、不动产登记推行不及预期。","orgName":"招商证券","orgId":"38","industry":"计算机应用","shortTermHightprice":"21.20","midlineHightprice":"21.20","shortTermSuccess":"0","midlineSuccess":"0","shortTermGained":"2.17%","midlineGained":"2.17%","evaluationDays":"0","conceptData":["基金重仓股","社保重仓股","卫星导航","预盈预增","云计算","国产软件","员工持股"]},{"personData":[{"personId":"45","personName":"张镭"},{"personId":"65","personName":"李辻"},{"personId":"64","personName":"雷雳"}],"stockId":"2922","stockCode":"002405","stockSymbol":"sz002405","stockName":"四维图新","evaluation":"22.77","title":"前瞻布局迎接无人驾驶新风口","date":"2016-6-21","content":"四维图新(002405)四维图新作为我国领先的数字地图内容、车联网和动态交通信息服务提供商，已积累多年电子导航地图技术，在行业内具有明显研发优势。同时，四维图新作价38.75亿元收购杰发科技100%股权，形成车联网全产业链布局。研发优势及产业收购助力公司加速切入高精度地图、车联网和无人驾驶领域。投资要点：车载导航市场不断升温，公司电子导航地图核心业务持续向好。在汽车消费爆发及车联网用户渗透率提升的双轮驱动下，我国车载导航市场呈爆发增长态势，行业增速有望保持在20%左右。2015年，公司电子导航地图业务实现营收7.03亿元，同比增长19.26%，市场占有率行业第一，公司重视技术的研发和拓展，电子导航地图业务业绩增速有望继续保持。抢先布局高精度地图，精心筹备只为等风来。高精度地图是无人驾驶汽车精准判断环境的重要基础，能有效提升行车安全性水平、降低车载传感器和控制系统的成本。公司迎合无人驾驶发展进程，进阶式提升高精度地图的数据精度，满足无人驾驶发展的需求。公司大比例研发开支确保高精度地图领先地位，加之与车厂多年稳定的合作关系，公司具备明显卡位优势。收购杰发科技，后装市场加深渗透，前装市场有望参与。杰发科技主要产品为车载信息娱乐系统芯片及解决方案，后装市场占有率达60%。一方面，公司后装市场地位将继续保持，另一方面，高端芯片的研发投入和四维图新的前装市场资源将促使杰发科技向前装市场加速渗透。公司巩固前装导航市场的同时通过收购兼并向车联网全产业链延伸，加快布局无人驾驶，给予“推荐”评级。我们预计公司16～18年的备考营业收入分别为25.35、32.71、4167亿元，对应备考EPS分别为0.26、0.32、0.40元，给予公司未来6-12个月目标价27元，考虑到无人驾驶将迎来爆发期，市场空间广阔，首次覆盖，给予“推荐”评级。风险提示：行业竞争加剧，新业务拓展不及预期，人工智能应用不及预期。","orgName":"中投证券","orgId":"43","industry":"计算机应用","shortTermHightprice":"22.95","midlineHightprice":"22.95","shortTermSuccess":"0","midlineSuccess":"0","shortTermGained":"0.79%","midlineGained":"0.79%","evaluationDays":"0","conceptData":["融资融券标的","车联网概念","\"首都经济圈\"概念股","基金重仓股","预盈预增","卫星导航","智能交通","智能汽车","智慧城市","QFII持股","社保重仓股","证金概念","阿里概念"]},{"personData":[{"personId":"606","personName":"陈天诚"}],"stockId":"5528","stockCode":"001979","stockSymbol":"sz001979","stockName":"招商蛇口","evaluation":"14.77","title":"土地确权加厚，龙头前海弄潮","date":"2016-6-21","content":"招商蛇口(001979)事件：公司6 月18 日公告，实际控制人招商局集团与前海管理局签署框架协议，双方将组建合资公司，推进前海蛇口自贸片区的开发与运营、创新体制机制。框架协议内容如下：1）出资主体：公司控股的平台公司；2）合作模式：“小政府+大企业”的创新管理体制机制；3）合作目标：3-5 年后世界500 强，组织带动开发建设若干自贸园区；4）合作范围：2.9 平方公里（合计290 万方）原前海万物流园区；5）合作定位：自贸新城开发管理、园区运营、深港合作服务保障；6）. 股权比例：50:50（招商局并表）。土地确权出水，合计规模扩大：合作范围2.9 平方公里（290 万方），规模大于年报中前海片区242.86 万方。根据协议，双方合作范围以招商局集团原前海湾物流园区3.9 平方公里土地为合作基础，在扣除现状保留用地后，剩余2.9 平方公里土地（具体面积由双方最终确定）纳入合作范围，收、留地及合资方案，将基于土地评估结果协商；此外，招商局集团同意由深圳市政府收回其在上述合作范围内的市政基础设施、公共服务设施建设用地。根据15 年年报，公司前海片区的土地共计242.86 万方，其中已取得土地使用权证的134.22 万方，尚未取得的108.64 万方，另外，已经在开发建设的为14.58 万方。此次确立的合作范围290 万方，大于年报公布的公司前海片区土地规模。股权比例50:50，招商局并表，“小政府+大企业”模式确立，公司主导地位彰显。双方将发挥综合优势，开展好自贸新城开发管理、园区运营、深港合作服务保障等业务。组织和带动中资企业、深企率先在“一带一路”沿线国家和地区开发建设若干自贸园区，系统复制深圳改革开放和自贸区发展经验；另外合资公司在其开发经营用地中向前海管理局配建移交一定规模的总部与产业用房，用于服务保障深港合作，引进和扶持产业发展。力争通过3-5 年的努力，培育一家扎根深圳、面向全球的世界500 强企业；合作共赢。资产价值兑现拉开序幕，未来前海蛇口片区，资产整合空间尚存。此次合作协议指出，未来结合自贸片区发展需要，进一步推进双方在前海蛇口片区相关资产的整合。结合前面土地确权范围大于年报中公司前海片区土地使用权规模这点，公司未来存量资源或尚存在超预期的空间。且随着自贸区开发持续推进，资源禀赋大幅提升，根据15 年年报，公司共计境内土地使用权逾300 项，面积共计536 万方，土地储备资源大部分位于前海、蛇口等核心区域，将显着受益于前海蛇口自贸区开发的持续推进。且由于园区开发与运营正是公司强项，看好后续资源禀赋提升空间。估值低估，折价明显。公司上一个收盘价14.34 元，较员工持股价（定增价）23.6元/股折价约40%，较大股东增持均价22.74 元/股折价约37%，目前市值较我们重估RNAV2219 亿元折价近50%，公司估值存在低估，折价明显。投资建议：通过此次协议，公司前海片区土地确权落地，且通过合作政府，发挥主导优势，加速自贸区开发运营和后续发展复制，看好公司后续资源禀赋提升空间。公司换股合并后重新起航，确立三大核心业务。合并加厚公司土地储备，提升了可持续盈利能力。园区开发业务以前海为基点有序向全国拓展，200 万方工业用地改造将成盈利新增长点。地产销售有望再上台阶，毛利率随行业下滑。15 年年报显示，邮轮业务立足太子湾母港，2017 年项目投入运行后收入将大幅提升。我们预计公司2016-2018 年EPS 为1.12、1.35 和1.70，对应当前股价PE 估值为13.5X、11.2X、8.9X，维持“买入-A”评级，目标价22.4。风险提示：产业地产经营风险、地产销售下滑","orgName":"安信证券","orgId":"45","industry":"房地产开发","shortTermHightprice":"14.82","midlineHightprice":"14.82","shortTermSuccess":"0","midlineSuccess":"0","shortTermGained":"0.34%","midlineGained":"0.34%","evaluationDays":"0","conceptData":["社保重仓股","深圳本地","珠三角区","QFII持股","基金重仓股","券商重仓股","保险重仓股","预盈预增","证金概念"]},{"personData":[{"personId":"731","personName":"李朝松"},{"personId":"732","personName":"陈冠雄"}],"stockId":"2843","stockCode":"002326","stockSymbol":"sz002326","stockName":"永太科技","evaluation":"19.98","title":"布局锂电电解质，电子化学品再下一城","date":"2016-6-21","content":"永太科技(002326)事件：公司今日晚间发布对外投资公告拟与福建省邵武市永晶化工有限公司、邵武市晶禾投资管理中心及福州盈科恒通创业投资中心（有限合伙）共同出资在邵武市金塘工业园区成立合资公司，合资公司注册资本金为人民币10000 万元，其中永太科技出资6000 万元，占股60%；永晶化工出资1500 万元，占股15%；晶禾投资出资500 万元，占股5%；盈科恒通出资2000 万元，占股20%。合资公司拟分期投资建设锂电池电解质项目，拟建设6000 吨/年六氟磷酸锂，2000 吨/年的双氟磺酰亚胺锂装置，其中一期：3000 吨/年六氟磷酸锂；1000 吨/年双氟磺酰亚胺锂。永晶化工是福建省大型的氟化工生产企业，可年产高纯超净氢氟酸30000 吨（其中UP-SS 级6000 吨），具有丰富的氟化工经验和充足的原材料保障能力。本次合作可充分发挥各方优势，有利于公司进一步完善在精细氟化工领域尤其是电子化学品领域的布局，丰富公司业务。结论：维持“买入”评级：公司近年来外延扩张动作频频，公司的战略是沿着产业链延伸（纵向）和往优势市场延伸（横向），产业链延伸以医药产品为例，公司正在打通中间体、原料药到制剂的产业链上下游，往优势市场延伸主要是指公司从起初的液晶化学品延伸到CF 光刻胶的生产，此次对外投资设立合资公司进入锂电池电解质市场，是公司又一次往优势市场延伸的举措。我们认为通过内生增长和外延扩张，公司实现3 年14 亿利润是可期的。2016-2018 年预计公司EPS 为0.34、0.60、0.70 元，维持“买入”评级。风险提示：1. 公司外延扩张所需资金主要来自银行贷款，2015 年短期借款7.26 亿，相较于2014 年的2.7 亿大幅增加，财务费用支出比较大；2.公司外延扩张进入新的领域，新产品的推出有一定的市场风险；3. 公司并购企业，整合过程存在一定的管理风险；4. 此对外投资项目还存在一定的不确定性。","orgName":"国元证券","orgId":"77","industry":"化学制品","shortTermHightprice":"19.98","midlineHightprice":"19.98","shortTermSuccess":"0","midlineSuccess":"0","shortTermGained":"0.00%","midlineGained":"0.00%","evaluationDays":"0","conceptData":["预盈预增","券商重仓股","氟化工","社保重仓股","车联网概念","涉矿","智能汽车","IPO受益股","OLED"]},{"personData":[{"personId":"37","personName":"郭鹏"},{"personId":"33","personName":"陈子坤"},{"personId":"38","personName":"沈涛"},{"personId":"39","personName":"安鹏"}],"stockId":"460","stockCode":"600579","stockSymbol":"sh600579","stockName":"天华院","evaluation":"13.24","title":"非公开发行获通过，新技术有望加速推广","date":"2016-6-21","content":"天华院(600579)公司非公开发行获证监会通过6 月17 日，公司2015 年度非公开发行获证监会通过。此次非公开发行募资4.97 亿元，发行底价9.35 元，用于南京天华二期工程项目，投资方向主要为污泥干化、褐煤提质设备的产能扩建（年产量各50 台套）。多项技术储备加速推广，在手订单保障业绩天华院是原化工部十大重点科研院所之一，共取得重大科技成果400余项，近期国务院出台鼓励性政策支持科研成果转化，公司众多科研成果有望加速转化。面对化工装备需求下滑，公司发挥科研优势，积极向环保装备延伸。公司的污泥干化、褐煤提质、氨氮废水处理、低NOx 燃烧器等环保设备投放市场并商业化应用，有望加速推广。公司目前正在执行的合同金额为5.15 亿元，按合同约定全部在2016 年交货，为16 年业绩提供保障。污泥干化、褐煤提质订单有望加速落地褐煤提质过程中脱水回收的量可以满足电厂的循环水需求，提质后提高燃煤效率，减少用煤量，尤其适用于北方缺水的燃煤电厂，公司褐煤提质技术目前已在宝钢、攀钢获得工业应用；公司的污泥干化技术热利用率高、能耗低、投资小，目前已上海、南京、西宁、广州、郑州等地实现产业化应用，公司污泥处置、褐煤提质订单有望加速落地。公司非公开发行后，募投项目南京天华二期工程将加速推进，提升污泥处置和褐煤提质设备产能。大集团下科研院所存改革预期，关注增发进程考虑增发，预计16-18 年EPS 分别为0.13、0.16、0.21 元。公司是化工科学院旗下唯一上市平台，集团旗下优质资产丰富，存在科研院所改革预期。公司非公开发行已获通过，建议关注增发进程。公司属于大市场、大集团下的小公司，维持“买入”评级。","orgName":"广发证券","orgId":"36","industry":"专用设备","shortTermHightprice":"13.45","midlineHightprice":"13.45","shortTermSuccess":"0","midlineSuccess":"0","shortTermGained":"1.59%","midlineGained":"1.59%","evaluationDays":"0","conceptData":["央企","券商重仓股","基金重仓股"]},{"personData":[{"personId":"320","personName":"刘舜逢"},{"personId":"322","personName":"蒋朝庆"}],"stockId":"3290","stockCode":"300014","stockSymbol":"sz300014","stockName":"亿纬锂能","evaluation":"48.00","title":"入围电池目录，彰显锂电实力","date":"2016-6-21","content":"亿纬锂能(300014)事项：公司成功入选工信部《汽车动力蓄电池行业规范条件》企业目彔（第四批）。平安观点：成功入选电池目彔，助力电池业务腾飞： 6 月20 日，工信部装备工业司对符合《汽车动力蓄电池行业规范条件》的第四批企业进行公示，包括亿纬锂能在内的共31 家单位电池企业和1 家系统集成企业入选该目彔，截至目前，共有57 家动力电池企业进入目彔。工信部推行《汽车动力蓄电池行业规范》，旨为加强电池行业的管理，提升国产动力电池质量和技术，引导和规范我国动力电池行业健康发展。我国现仍处在新能源的起步阶段，进入电池目彔后公司将继续享受国家相应的补贴政策，此次公司成功入选电池目彔，利好公司动力电池的后续产能扩展进程，公司业绩有望进一步腾飞。日韩企业再度铩羽而归，利好国内优质企业：此次以韩国三星、LG 等为代表的外企依然没有出现在目彔中，这对采用三星和LG 等外国电池的新能源汽车厂商带来不小的冲击，按照规定，采用没有进入目彔的电池的新能源汽车产品，从今年5 月1 日开始，将不进入新能源汽车推广目彔，从而无法获得补贴。部分新能源汽车企业或将转向寻求国内优质锂电池企业，利好本土电池的产能扩展。亿纬锂能作为国内磷酸铁锂电池和三元电池的领先企业，公司三元电池产能扩张速度明显优于国内其他竞争企业，有望在迅速提升国内市场占有率，三元产业链爆发中率先受益。投资策略：我们预计公司2016-2018 年营业收入分别为20.71/28.74/33.56亿元，对应的EPS 分别为0.57/0.72/0.96 元，对应PE 为83/66/49 倍。我们认为亿纬锂能此次入选电池目彔利好公司长期发展，维持公司“推荐” 评级。风险提示：市场竞争风险，政策变动风险，产能扩张不达预期。","orgName":"平安证券","orgId":"54","industry":"其他电子","shortTermHightprice":"48.21","midlineHightprice":"48.21","shortTermSuccess":"0","midlineSuccess":"0","shortTermGained":"0.44%","midlineGained":"0.44%","evaluationDays":"0","conceptData":["预盈预增","基金重仓股","锂电池","融资融券标的","员工持股","新能源汽车"]},{"personData":[{"personId":"14","personName":"刘雪峰"}],"stockId":"2956","stockCode":"002439","stockSymbol":"sz002439","stockName":"启明星辰","evaluation":"25.13","title":"外延丰富产品线，员工持股长锁定彰显信心","date":"2016-6-21","content":"启明星辰(002439)公司拟并购赛博兴安100%股权，完善产品线并增进子公司协同；拟以6.37 亿收购赛博兴安100%股权，其中发行股份的方式支付3.86亿，以现金的方式支付2.51 亿元，同时发行股份募集配套融资用于支付现金对价和中介费用等，发行价格为20.05 元/股。本次交易不构成重大资产重组和借壳上市，但构成关联交易。标的资产15 年营业收入9215 万元，扣非净利润2981 万元，16-18 年业绩承诺为3874、5036、6547 万元；赛博兴安深耕军队军工系统业务，未来能和上市公司形成较强协同；标的2014/15 年92%/87%的收入来自于军队军工系统，其产品线与公司原有产品形成协同，将丰富公司安全大平台的拼图；未来销售渠道协同还有望拓宽相互之间的客户范围，促进整体业绩提速；推出员工持股计划参与配套募资，锁定时间3 年显示员工对公司信心；公司推出配套融资计划募集不超过2.64 亿元；员工持股计划第二期认购不超过1.31 亿元，其中监事和高管5 人，认购527 万元，其余员工780人，认购1.26 亿元。本次员工持股计划锁定期为3 年，认购价格为20.05元/股，其中财务总监和董秘参与认购显示了从上到下对公司未来的信心。16-18 年业绩分别为0.415 元/股、0.632 元/股、0.880 元/股假设赛博兴安能够完成业绩承诺，被并购公司与母公司协同效应能够小幅提升业绩内生增长，上调16-18 年盈利增长率至46.59%、52.31%、39.26%，净利润3.57 亿/5.45 亿/7.59 亿；维持买入评级；风险提示赛博兴安主要收入来源为军队军工体系，易受国家政策影响；并购后子公司与母公司的渠道协同效应以及后续整合存在不达预期的可能。","orgName":"广发证券","orgId":"36","industry":"计算机应用","shortTermHightprice":"25.47","midlineHightprice":"25.47","shortTermSuccess":"0","midlineSuccess":"0","shortTermGained":"1.35%","midlineGained":"1.35%","evaluationDays":"0","conceptData":["基金重仓股","云计算","网络安全","国家安全","社保重仓股","融资融券标的","QFII持股","员工持股","武器装备","军民融合","大数据","安防监控","预亏预减"]}]},"title":"研报选股","active":{"Index":false,"WebCast":false,"Organization":true,"ActivityPage":false}},
        };

        routesCom.render(req, res, 'login', coData, renderData);
    })

    return router;
}
