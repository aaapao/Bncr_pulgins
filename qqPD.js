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
    const hideTip = sysMethod.config.qqPD.hideTip ? sysMethod.config.qqPD.hideTip : true;
    if (!TOKEN && !APPID) return console.log('qqPD:配置文件未设置TOKEN或APPID');
    await sysMethod.testModule(['qq-guild-bot'], { install: true });
    /** Code Encryption Block[419fd178b7a37c9eae7b7426c4a04203a1a03e8c2ffdf11692d60b70e08c6ebc67a7ec309bd740fefc5ec09d4def2e1fa43539be59917335c3f618ec5450835f2df0a183cfbeffb792ed7f7e26ac9c0722e70f23ae6e0432548d53f70ddd1381dc3bf87d9c4e7dab7401ef8f3c5cf78185224eec27521311399a93cdcaa8debb43636665f878db1618cc00165494654ed7ee68448bcd64f16cce4161e2fc138786c5902dd95e6e642b2b75bf1a11a87c517f8f8370f06fc2d7aa23899411b3cdcce4933e8a5c7dcba9ffe4a5dd595267eb8a4c42d46792d98a5f200a26fd95234e685772b3d1f263d6ee827691a7027ceff0d3635abe07d96eb3ece2dffcdc3ad77a9550f64e3bdf248d266561286e8fa5787ee16b9d825e26cfbcf981e7b9ddb0b3a10889af344c85ad3255ad6363421f1c664e9a97114da44b03ef70efa16557454f58b484f8f9894284bca2b06976aa7e376e27f7da02d0a311f20f4832367b14fdb66eccb68a70126cc5fd9aa96824ad0c0970dae4e8a7070ba0a6b95e42f3df9fdd5ad792aa87fe92adfec2a56ab2f8b9df99adb09ff8602f17b7e0920790d0c6ae79e8d67551a86fa04d3f573f677037108054a952f722454076040275161e6631d7b37a043ca56efc1af6e58643d152866e515de869502d5c6942e86f9bd17ef22b200807ed807f15082dc765b6e287c7f1c203330dd8ef9b4722cf483ddec31a670f4467d349790fc8b51d50f4d076e6176687dd75db1b06d341f99e7d83cfd5399742c5eed11f859eec2fce5b203f6f33315b4b852535e31220746decc3a464ab6cb599d353ad974e552f1abe132165a385ccbdcc9758e78d588bcdb0233fd17e6c82696806cf0bcc987513b7527a8444d1a7dad2f4668fd1ba48015e468dfcdd00f25af6689b1d4fa275d0e87476040246a69c8feb9c5da8341f6762923a649fa64dadb712c8a394adefaac16796cc924c9bfb3996138d110dc29abbd2f967d427bd58dfdacb5233b39cd920cdc143e0586f298f57be9753bc68a886f49622543a0656cfcba437f6c307210cd90518067bc23cea6c6595a6b79c5a440e784320fc017d9acecf613d086bc895db5c50a51d06a523ea273643fd4ab7b67545798d34d859ae8819ed99d38cdb383e2af2d357dc06866dd44fe9a3b95762e0e94446120ede38c2ad007dc5656de47c46f8f8720d8192bd31582991bc08cbdbc2ad59ea8aea4021a59fe60219a9e864630b00d57b380dd1766b84c05f13364ec8715911cb450f3e5e822d1c90f4a5b29c198b974abe63b5c855a7553afaf10ad1e3e183f35b8e9750fee7f23168a9e1766cabd73091dda6a29b28b26df27650d07fff7f17f0de4dd0b9ac2ee8f4aff29c560d9f246c089d9a21c7556f5ebf483eb3540a548ddbe4043a18d21c697ab41b6cde29a5d7d66ac81cfea4929110788c2638244f13af828d66c04f7f2b20cd7261a3dc2fb48f2bad3a377a4f29a1f4f9d47c189f6045ed3c7cd6be0345a6194f5d8e0b9525ae6624dc7b727099aeed28b567c2ee37cc837b0175060709a51225be32dfa6d5e9ad643940114cd91b2c1b2030743b7c36de2cf1cd81833874a4ab7b762c67e8c8958f795fb54dad49941c8b468a70fb5c5959ff7546d6bc1c5105c4b6c482d86d744290aecf1ec0853f2635d2c9ce891bdacfacd1ed3c21ba6a7e0963800e71cd7e9e1f3b4f41df99854c42c691ade98bda1196a83b15d499c34ff5b08992f4b5391eb882e2f9ec38e5e2be7318f86f4ec819cc3d6b9fcfb81e38b7dc567720c8525969d5b64586b5b154b018afe4a7eae9707a3c7e506af62bc659f3e6fb42f39bc5ebce05910fe0793748bf104bb7827aa68614e9b9f40ed8a375afcf39d0fbde3d9aa73e15be92acbc743fc3f57c251f564d4f7f3e50088c5df43b22f4ebba2bb5a352cfa099f02e7f00d477a12788b7849705b31a678502261f313c1f0430ef463c1f6ef444625cc8989eb1e4e02e92482813c12d905e5800c72a282442087eb5c943a5c393e08e8b070742faec86202239f9cad959fe7f42aefe0fed0f8eea4e149656307419d884c0f1767690f4b6d71305b67807c8941d66ed8d4aba8d56bfa0ea3a4823ede8f4413738f3f73b46953543a5aa96f5398b00e7c172806656234ef3c1bdf62c07c3615ab8486af77891c87b582ca3a7254a80d1bbfe65e938f202a6d3615184a07303fb1eec59289e7ba1452f1b210b685495ce7ff0ac08fd8327c599c217c15a7276e23cebebffdd26d993526761c911389bbf5c69e02c2539de3dd0872697233b0d842b6391ff7f67da71eaec43d5c45f8cf890e13827c405ca0bcc3e1a7aa96b0d1e133c373b5ba30db3dff9de39c23393f676d7bf3c7436936e1f6e911bd7e0368361f26f2ea62c20874d99102ea948f0d9717d6f26a64998af33c1eed143308581e1e7c60745fcb81c62a03aea5f7d9204551efdfa153c912e8b94fea61a2b32165aa7c05f39d0d098b2ac19a542178bb7ee6ef8ad056ecf967abb7c259e200f9b55d6bf9ae877362faf4f10c7521ddf7e0e77af6a70187951330ef3d0ae5d9f1dbf08ddd366cb87727b0a3d63df415f5d99ba06bb8de54ac7962165c04eceaf8df83865e8736c3cc6dc781067e7743b14e52541d4087d79892e52ccecfbb96f4ab06e5cab63ef65c7c6a256315521f4b16d9fbe566b89670fe80c246d90e3f761becebfce016919123b1c6b9153bcbf915686e26283f23a9b5a6a6b762aa36060b2f3222bc000686ec61ce364511e4aa111498e201cd8ea8e04bb9215acfff47199c01e24ef89d68ebb40972faa38800ca81dda89adc7df3b13ab1667c9c2e663b946b40e73f06f107a0e56de1879440dfebfe824cf2a8d1ce1225666522975249b9de0ee2ff3cae53ba4aaa8ffae1f4ec1f775e9d9c175dfc4449a8473a565adaedd02ed9a3a9745aec720fdd2e181693b1509c4f1866c68e96fd8cb5c4b9dc96e2a99d7dbf435b48303ecffaca91d0b7b09483aaa89c4eecff6e897bf4f95e33f3d460068e0d88698fd810b367fd03f40fab00a1eb12985349fe05806d1bcac93b6a2a4031e4325c419a70020af001a5034132a46dd050d4866a66fd831ed543b86f2a36ca9a5959995967865f5de26b43d5ad8cf982d9bbd1d350cd08c68562be7b66f5343a388aa886e6bf8a37a891d8e74b64369ae0cf6b23583e7fbac429825ab4bdbcb8a28dcccfb0a37725991b2a7f63d69854123d1a47b93b8dcc771f294c9287ba53d16bcb68ccae00dd274c63cb394b001d0790f58e3e1d6d8fe537376e0c7b560d7e0038bc3b6d3af7ca5201d5a63c3a7316a8638fc552ec77172c3565aee7f04d39ad35497dbf703d3789c504daae658769b88eb657fdcd0bcd75c4f5c758ae947b264749903e22c1e1715dc98e815ad1de9a3e6df45d7ff0ff923f7fe19cf4455518fd712ce938e879c248dec97ca066ab938d616df1ee824f2c3aae57aaaad6ecc67353987b3005f7ea207a5f938fadc5a8b09aae969d93d48103b4fbc6bc4d71421d53cd33592f00b7bfd9c03a95917dd627385ad849c7811ad000a368de6cae683f03854b1d5c4dec763f190af8ad583a4cdefb39b3dff868219ad87503a2b02d7cedafeba59a7c937263b9b5902881900156fc7224bda047a1913dac027d42b1a5771a46859d980e85a2be94c416fe8de6f7a0de11d939e0be4f9ad075ec1733034ed44deca3220cfeaa90f2e30c47e6925cd557b9ff460b94358a2be9426f29f1faef432f8bee4eb27ec00ed27630b018c972268eae0a1db5542b7e9788c68cce91049b2725794684e0e782849656ec5a697cc06df9703374077e79c5e82a7135b028b61fc1a643344af9f88fc6b9785e1b69dbfc9653e49848d9a77e0b71a7d174fd276ceb9b9beda75d6f8d736bdf8d517561cb4c20a906f5eef359facbf29a4e81e507fdc83c98763220bd078af069570ebe203559f394492c2289de5ea906069ea1f048e49a623f24b6874f1b0a6cfe70f88005bf7713e3ad25c28d8b4124bcafddf6906d92d155139e25946380a2b43b28ac758639c39e1d0d3e60600ee51ec69cf2c1f66e8a680f7177d560b607fb9dfcf0bdc88da8aa9da72b4d2cda21fe7492c449077ec4d423765128877694b995b99c9a80e5a71b24fb28ab36afbb61c86cafce27da335c170f4d837bb7416ae9dc5048eaeb77efdbde7a33c2d9309a6a52438dce9f18dbcc5d98bf830abb4c6d9537c95ae790a1a52e62e0bc242220e714c7b61663f502e34f4e294109e06183d90f04f5086a0ffc528e3126416772b72ec5664f4077c1c19fb59aa0e7bbcf77022d766a201b3fc65320417efc242751de2d89d3e5d934ebd962f71d5aefb2dedc409457e91b433a4fcf273f20bbc7c05751706cb7bdcd25fc0069bf6bd811039a6b7912ff89814bda1d810610dd453e519ca9875229550cadac88d5b512125cb9ad931a90824233e3b4d9552579117dce4b1c522ddb765652afc67307b635931e86014659a459ee98f1de978650bc03f013cd42b80488737c26ae11aeb32cafd335c0652f61df119ec18c19e2a0d22030966ccdcb7723bd28838e5ede8cc00d57480b16864a0e8eae5a554122efb7a07f975f1aa38f2a086f5d697e60055776535c19a286ea392136098098cdaf02b1dd3ca51697da8f8f4d65257a6f9dae6a2650fffdeaffd3cbb2c48247f7b7c38e35269b71769f0001d9f3d5abf96ac0c8b85894b7a7cb139fb35d093a407a0a1b6fbfe3c3a8a54c3495635624672547f1f2e74ec13a5b20a781824196f604ee18b3fa625beab0b9ec299e08011eac44795e80b45fb01e393a25f09a31543894fb6911a91bf9f9a4340eaefeea6a5c2443bd82f6d807c13239b548737ca06c2b43136e9e4ccce3b2bb3fdb400c3cfb65b8cd319255638b31b6f873543b9b0e339] */
};




