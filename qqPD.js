/**
 * This file is part of the Bncr project.
 * @author zhu
 * @name zhu
 * @origin zhu
 * @version 1.0.0
 * @description qq频道机器人适配器
 * @adapter true
 * @public false
 * @disable false
 * @priority 2
 * @Copyright ©2023 zhu and Anmours. All rights reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 */

module.exports = async () => {
    let DEBUGGER = true // 接收器日志开关，用来debug
    let tips = true;
    if (!sysMethod.config.qqPD.enable) return sysMethod.startOutLogs('qqPD 退出.');
    const TOKEN = sysMethod.config.qqPD.token;
    const APPID = sysMethod.config.qqPD.appid;
    const INTENTS = sysMethod.config.qqPD.intents;
    const hideTip = sysMethod.config.qqPD.hideTip
    if (!TOKEN && !APPID) return console.log('qqPD:配置文件未设置TOKEN或APPID');
    await sysMethod.testModule(['qq-guild-bot'], { install: true });
    /** Code Encryption Block[419fd178b7a37c9eae7b7426c4a04203a1a03e8c2ffdf11692d60b70e08c6ebc67a7ec309bd740fefc5ec09d4def2e1fa43539be59917335c3f618ec5450835f2df0a183cfbeffb792ed7f7e26ac9c0722e70f23ae6e0432548d53f70ddd1381dc3bf87d9c4e7dab7401ef8f3c5cf78185224eec27521311399a93cdcaa8debb43636665f878db1618cc00165494654ed7ee68448bcd64f16cce4161e2fc138786c5902dd95e6e642b2b75bf1a11a87c517f8f8370f06fc2d7aa23899411b3cdcce4933e8a5c7dcba9ffe4a5dd595267eb8a4c42d46792d98a5f200a26fd95234e685772b3d1f263d6ee827691a7027ceff0d3635abe07d96eb3ece2dffcdc3ad77a9550f64e3bdf248d266561286e8fa5787ee16b9d825e26cfbcf981e7b9ddb0b3a10889af344c85ad3255ad6363421f1c664e9a97114da44b03ef70efa16557454f58b484f8f9894284bca2b06976aa7e376e27f7da02d0a311f20f4832367b14fdb66eccb68a70126cc5fd9aa96824ad0c0970dae4e8a7070ba0a6b95e42f3df9fdd5ad792aa87fe92adfec2a56ab2f8b9df99adb09ff8602f17b7e0920790d0c6ae79e8d67551a86fa04d3f573f677037108054a952f722454076040275161e6631d7b37a043ca56efc1af6e58643d152866e515de869502d5c6942e86f9bd17ef22b200807ed807f15082dc765b6e287c7f1c203330dd8ef9b4722cf483ddec31a670f4467d349790fc8b51d50f4d076e6176687dd75db1b06d341f99e7d83cfd5399742c5eed11f859eec2fce5b203f6f33315b4b852535e31220746decc3a464ab6cb599d353ad974e552f1abe132165a385ccbdcc9758e78d588bcdb0233fd17e6c82696806cf0bcc987513b7527a8444d1a7dad2f4668fd1ba48015e468dfcdd00f25af6689b1d4fa275d0e87476040246a69c8feb9c5da8341f6762923a649fa64dadb712c8a394adefaac16796cc924c9bfb3996138d110dc29abbd2f967d427bd58dfdacb5233b39cd920cdc143e0586f298f57be9753bc68a886f49622543a0656cfcba437f6c307210cd90518067bc23cea6c6595a6b79c5a440e784320fc017d9acecf613d086bc895db5c50a51d06a523ea273643fd4ab7b67545798d34d859ae8819ed99d38cdb383e2af2d357dc06866dd44fe9a3b95762e0e94446120ede38c2ad007dc5656de47c46f8f8720d8192bd31582991bc08cbdbc2ad59ea8aea4021a59fe60219a9e864630b00d57b380dd1766b84c05f13364ec8715911cb450f3e5e822d1c90f4a5b29c198b974abe63b5c855a7553afaf10ad1e3e183f35b8e9750fee7f23168a9e1766cabd73091dda6a29b28b26df27650d07fff7f17f0de4dd0b9ac2ee8f4aff29c560d9f246c089d9a21c7556f5ebf483eb3540a548ddbe4043a18d21c697ab41b6cde29a5d7d66ac81cfea4929110788c2638244f13af828d66c04f7f2b20cd7261a3dc2fb48f2bad3a377a4f29a1f4f9d47c189f6045ed3c7cd6be0345a6194f5d8e0b9525ae6624dc7b727099aeed28b567c2ee37cc837b0175060709a51225be32dfa6d5e9ad643940114cd91b2c1b2030743b7c36de2cf1cd81833874a4ab7b762c67e8c8958f795fb54dad49941c8b468a70fb5c5959ff7546d6bc1c5105c4b6c482d86d744290aecf1ec0853f2635d2c9ce891bdacfacd1ed3c21ba6a7e0963800e71cd7e9e1f3b4f41df99854c42c691ade98bda1196a83b15d499c34ff5b08992f4b5391eb882e2f9ec38e5e2be7318f86f4ec819cc3d6b9fcfb81e38b7dc567720c8525969d5b64586b5b154b018afe4a7eae9707a3c7e506af62bc659f3e6fb42f39bc5ebce05910fe0793748bf104bb7827aa68614e9b9f40ed8a375afcf39d0fbde3d9aa73e15be92acbc743fc3f57c251f564d4f7f3e50088c5df43b22f4ebba2bb5a352cfa099f02e7f00d477a12788b7849705b31a678502261f313c1f0430ef463c1f6ef444625cc8989eb1e4e02e92482813c12d905e5800c72a282442087eb5c943a5c393e08e8b070742faec86202239f9cad959fe7f42aefe0fed0f8eea4e149656307419d884c0f1767690f4b6d71305b67807c8941d66ed8d4aba8d56bfa0ea3a4823ede8f4413738f3f73b46953543a5aa96f5398b00e7c172806656234ef3c1bdf62c07c3615ab8486af77891c87b582ca3a7254a80d1bbfe65e938f202a6d3615184a07303fb1eec59289e7ba1452f1b210b685495ce7ff0ac08fd8327c599c217c15a7276e23cebebffdd26d993526761c911389bbf5c69e02c2539de3dd0872697233b0d842b6391ff7f67da71eaec43d5c45f8cf890e13827c405ca0bcc3e1a7aa96b0d1e133c373b5ba30db3dff9de39c23393f676d7bf3c7436936e1f6e910398b71f0a7b9959bdeec4f2df57bd302785adf3157294d4d3e08724fbd07ecbd08fba695cfefcf5f13e953911dcf69e627dd915d0bc137806be8ec6bfa00cd7728fe276575ba6d6590245efb8c2e6e9331ee0fa82fa277748332c03b417c25961c45586bc8e4613fefe87b4dfbf699477f6ac9c43943d790c8e0fc8bb18209504025b8e298f4fbc5386526c489fec948bdc957a7024035079c98abc8ad3428c1f31f36b01e19f26bbcc37f140647a47ee0ac5635c46b2efab9be64f242cd5ea74ce221fb21881d8a8ba44e6c0d28ecb4427de09d67de673af5a2998152793672c7242bd126d50522044999bee8792132fefd383b9e7533233a200e5097548aed42cb9ea473c04f89e5e1197311d3d9dc7947780887b48bd207b58e4ee6835ce57e371f7978ac1e9b1d968278e7f329dddcf67b5f0813ea77374638c6dd0bca0db2350abcb2813562b41656aa459e16846eae7149d0731de63ebbb315723a607c2506f4689d0484db0a02cedeb251ff90f8f6094c75eff9c8bc2d3378d962e550eaea9d4e021477c7c62fc7a8642aa893cd710021a512d41e275c92e654c24b04ea19c6924a349655f17bbe2ce8d14bddac115547f3dae4fe791973e383f23c615658bc4b02b87b8a3436f44eeb5dbc6b189bf1a8036271eae3ef0e60992a60ae71b7a2696faf7ebf71505596871164e470c08a7f78b1dd4c5e84d7cdc61da2cd5a4c738c57db9a83243b5a535690b6e23a58abe9382c1afc3bdf928506f8eb2d656a3c44d8b8901774c740f90c9470c4085524978824a84ee7034ff9ae6df058b775c716c2efe9d61f3339d64252edaa5f7406b363214f4b7d3a499843f5ce2978b4fc94ef8480afa70cf68fffc114ecbcc88c76afee28f3b9382851ae295687c79c384979edd99c98a4afbe42855d3a9a9576e32735f9592876fd47ccd988c00e338858474d9e63c4075fd02562ef05b1fc7d3d4a8f69b0077d749bb11fe91430bbcb5762f21bb7614993cc2bc27e4a103a5ea4c2c527406c9ebefdceb8e39d2b9d5b9102ef1da4f80d2e69038410d22211eac8f3c4784f6512fbfc44486602772a837eb9138470e5637eb32e8435329fed390d812938a0a89c3ef0ec93646128f1bd092e13ce52dbd71d550f0494eb58e97d75483ce6400c707da79c50449c578e68b40fe56fd435a0a773376c9bc7c54a8a542858bc1b78a09c6a5778a3de2024e9be94cf54631fc7d99226c95dc1f10e0cf0f11c00697038966d8838c71371574a0b1eb60e3d8faa4bffa758d9f0f64b8b71f37e08098dc40eb806d8115826ab0dd362e34deab80881f6007e9186bbbf7cd24463a8f729afffef0bb652ff09935182ab6eaeabf5e3dde400f2ea484b3ffc7d12e63d38c30c8efbb167fef61ba502f164d10867bbf34ee649dc4e3c4a2e2a99e4ca0df488cd95da40a1367cc80679dcf6456686991190967cbf292971a57c5ae65c13d11cffd338ee1c07cf06ec28479e167f913ad61a37b47b1246e68dfbb0e2ec84cff8fa8215c89e0653d1b7c2edc7366cb805926ac7a28d32c80319b4744184ccdfea8e6810a6cfa6ce955e25b431ba3ac243f9f77814dfdf29ef34e6b65f8d15d4e00883afb1fbe9568fbb9ffdf73008a99a753fe86cff99c022b4d3c38466039d44ec4063187a552e8a531ea71241b370521da0c2a3eb7375e4aead19ef1f0e84d7833cf8df6160d31c15a839c2a412b37612126ce952883efdb29e63636a1232a9f6bb49826af48c3afb5de1271c104513e075f63b424145905706d7f2de22d997904b220e64c3542ee7b746500e87c153579f4dd718c81db5a746cb03aa304dac1eaba67d99928d438b1d5e7e1d716505f6300ebcc2f71c41667529dd7fd304dd889a89aff75ec806cd546cdc686c069315e34785bc0574c5c49f0a603d9af8ddcd6bd5bf9796c077256f3be7cc605560ba9f312a8b780b0228b235c683213a9cf15ab5ee696520a8cbe65e84ccf40276f54e05ddc9e1bb0c05397811756f54ad62282b069a6128f66c424a6bcb6c1611e3f9cbe4596b13a54721b33023bd33b676ee7cd65d5f981781a95fe180c1369159839c0696453f0aba4eff8a1f80cc29a23397f891378cd3f53650c29f53c07bc0d191c9c6c3c94fb551f382fba75851b8e2c2888e40169aa21117e5d80d15685475e74ac9af4c3fc90128393f10891dc33e2e0b361d47d8fa456991e4a35a9fe5472ff5181342ea7e01d38e3e23958444607f2ff34cdc6cdfa68605a15c4e5b829b570ca511706545571611acbb8e18f422149336cc88e866101ff11fd7e73e821d62c29c1fa76362dc5555de7b811a41632030ecc59a41db04df6bc6513d86426988a19b7985a1444a1ddbef45d95aaff558d738d2f6645dcc373370c639c49d9567908b116d253b120fc994edbd10837889b7af09fa9289ebff7314c9a40a2348b4cb51b6cfd878ac3a5d80c164cb0cec57a84fce3d88b6ade45ded9ffdc1c1db2f32adfec95719ee3926734ced6bc0c68134fd2e0f5ed08de7bb036263edc7bbab163749264156cb364fe0820edd255ef69aef701194e04bb614f885ca863ea5d9c8d75996d6ca35d5e2b323fdf7d74c391dc48e87955ea16f19c7a97d9d213145c8a4a4709f01ae6353023a534d81552bc0d44cdb49e893de912c379775df322b39a4f61b84497f63456df034a7fbd9461ef46d83ebc869c4e0e67022557532794f39d423aba9cf95c84db0d24860fe685bd0627bae219b63cf8ccb7a3ad6f9d1ae5b5f6eb77cf8354cfbb6f1f304ec52978dfa0a84135029c1f5b9ef8ffc20ecfe9f4f41bab58af887b11316c093b4d8a26327af68aaf3bd03a3d9228a9eda05d335c9414535f64519402fa7b0c883f6525acf16fb2f504d0d01786231b0629f03fbabf9712141f5cb86285b198ff4b0c326ab1093b35bf8373eaad345a0e9e74cdf033982c2a370943304402fbcfa4c43ba075ea35f4358780976c2d5ce55ce1352c43fd4c89f01564e560db95a8df84f8372ea43a3a309b5569a06196ea0012df1f95ace2ce9dbdd57d77890874967222c8bdae403fe7258f4c15366e3642d48f3aaad48b9b9551597010f5f877b7eaac9bc571e6ba587c910591c76f84deb2d22ff6d58a165664bef24ea3cc227d1d15f9fafbe91f883a4ca69111404260c29fe99dc2fa3e1dfea1c8679b10acb396c1863a7c60fb8af46a61e565c9a89ea15bf1c1abac97335a06e4dcc37084b01545610bb8ba77a985be373aadde2164bdd85a27dc9eca85d07a358c723c7b43f264e45572b685bf7d6b1806072013faac8c4a15ecdac7110f5a12abe0a0f8d468da82949255daed87f6076b90b9cb38b0c92fe126335a401b05203fa42b9d4988d73f9893fd0c83fcf5ffb31adf47d94e69fc57ed831f785a92277ac5b9a0740542569c0c1bc445d4ac6b81441a611a544c829864b1a1c48d1c2bcb3ff7c2298275d540bca435018244e77e87e518c31dbe252e278eaf300c71a580f26e595bb53da21ce1c9f5dd9dc01d2f11145502513f2e43393bfd861cf61bac701ac7f69252752b] */
};




