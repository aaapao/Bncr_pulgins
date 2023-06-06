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
    let DEBUGGER = false // 接收器日志开关，用来debug
    let tips = true;
    if (!sysMethod.config.qqPD.enable) return sysMethod.startOutLogs('qqPD 退出.');
    const TOKEN = sysMethod.config.qqPD.token;
    const APPID = sysMethod.config.qqPD.appid;
    const INTENTS = sysMethod.config.qqPD.intents;
    const hideTip = sysMethod.config.qqPD.hideTip ? sysMethod.config.qqPD.hideTip : true;
    const publish = sysMethod.config.qqPD.publish ? sysMethod.config.qqPD.publish : false;
    const Listened = sysMethod.config.qqPD.Listened ? sysMethod.config.qqPD.Listened : '';
    if (!TOKEN && !APPID) return console.log('qqPD:配置文件未设置TOKEN或APPID');
    await sysMethod.testModule(['qq-guild-bot'], { install: true });
    /** Code Encryption Block[419fd178b7a37c9eae7b7426c4a042037c819ecd0c9708379886e39f6e9b2a6c5fe88bed332c399541d24a1cda2a6fa1f369af99714e0f118e004544d9db1944c02d944eb9fb0a746711b09879ba40073992921220e2fd62a35d083831a1bb3396c33fbf34f55f9a7b596e4b9e7480af0fdbb2fc26ac82a99cdace68deb381a5aaa6dbdf430a26c78abd935e2243f521a7409107b07edd2b2c15049f2ff789d354dcac6375e3683c9d6d35cb87299eadccf7ede1336f7837d15ba2fe8d50d68fabbeb37e1c19bb7e1a855f09611e33451b1893a14bfd4f94f245b2006e23aa4d693b2ad4678b38f377dd01dceb69cddb989c92f61cdddd2b08a378078b01399eae435c1c3e386cce3e1d41bed921b17d082db1d72ea5a0ac3cdf367339b738e76de77732b9005a988a2dd77bdd5b3c05f5ccf68a749294844c76fa94aa156048519a8893d509c0bd2d0fe79951ef46cbfe0bd9fea4fef8de64242fb7c745b011f1920b66bd322ea1a4ad464bdcfd15aff56ddffc8b1592e604f055696c5c448c604ecea7dbae7cebc9ff149ccaf2674d9abb33114453276524538d52b493809d158d830807f250ed4a7e357318a9319c60fe84e836d4758137371129b4b27a1fffe5398f292685f7c4a0ccffbef425274ff9c88a3ac9c91b76daf88ca642cc8c993ea60de4b65f75f6822204b8bca92100f79e4274c49677b707c8e8a9cd487e5d37a88c4855ccf85288fd8972759575a7612bc3eeba22b21d97061ff2c7271d754dcd729b75208aa774e9510d0a7db23427a8681a431e008c6ec44d53bce643f7e22ff5583427a719987231ba8d49b9a22962e86fb1fd471b14afc23f870e11e66c24529109ccabb797d171f43af932f8a4fbdff339c3511518c8b7921c53ed9c250e37ccfddcf8c47a5fd69ac5d6479231048ac67aac770235e28692f294f23174f7a52537d1d3aa91bc7a901dae7f5e8bc1c3e62fb1feacc14cebbe9e644cb741d90bb1d804d74b1aec0f1b5b3e254e1256b2daba2a6743559bd54ca8525af8446f67d9af8f9499fe064ff06b2c4d36dc25d565209ef5fd53a35b40deee93317860aa40f4016760fb6ec9506dd7396eb11b59bc264249f82fff86c2c3e4468976cd0c14d9f9d3f0761db35f55cc8cacb53db569eb3ffff92d559d17dc51e7c294c921f798c694325016cd1d471fafa616cd8e42394e30da5f6f31399de99d2c04908700d6a11517cb78a7a6930a51ae2a892c35e33a08870d9f9e16bde6f76dc307a4b0e2b8367e6fe61bfb8d6d1f9390544440133cc7cc66f9f222beceb5f1086312a30772bdfbd2d5be8e913751abe353cd9db15cfa2e77e4687f7bce9d26e935b869262ceb4e1b4c6f16522ebe3b2914c21164e076053a461d69fd4313c52bf5d945b05f6fdf68bcb58ab285082ef8b688097b71e2c8335e321ec30a04a48f65535f6280d3e5413d1577d5481e50d7716d476c71e09c8a50c1d0d41d75a429078b61ea7cb413bb0a040f850b3bff599c143b90080de7159742a43d880b7a81a76e4bd5d14d1259fcc00723c08346ca2592343774f6a00b002b02c5d8d2c503b5e29e1973827ae1116678274ff0b628d037d07a59fd2e068687101fe04b5c68850724350b37a43bf0d919c9be004d4a13621c2b4da954f4296d89ddeb04b7326b39141af55adf55333355602828a8e7559ccfe7ed7ede6bb63b6f2cceed8c06ea92780d389c050beb9bd5d651bd30f7123d833a2eb39539118f5b64bd315cc4a35eea513a66dfc25a5fcc9fadd3c989582e67582b9ecbe1ec691bd7708534624826f0cac889324b2b8925718610a6cc1b1b0d253731538fc88e574a472a778e8d58a43a47da56de3d652e6db5ad6c794c88db7b38aa6da8450edb3ff565f46001408a020c72638d60dd5276c715d548b4042b13a497b02b0663660410beb7ca6a1910afa1a9f2d2b9df0386eb79630b9faf2547c8f3182a1511df6648132a0f9a5bffc2465bf35a13cbe583154a5fe2a4dade29e307ff96885eba680f27061f958f15c837d9e0115b99c3f29aba300eda1cfdd9d42def5bcb0130076db9048b81e52892976495ff5d764b4602e9ae997f4d3b9787a0af4254ea21f0deeeee2520b73a5b43d0f18bdbf75ccb5fff9c60ccf9ec164c239c831b483bdbd8f3fb6f6e970ccf7c89969bdab24ce9523a519700ecc10474289ba37511f9bdc729db28a192d3954393404817bed902792762ce76b9a115eb44543f9250cf26ac50d82513e1185c0f5448c6f7995aebf633d97ff5b28fcec15569c151a9974d0ed2c42d20c8d122aa92f0b0691315e245dd6b4a930f33d5bb5e623da2d312d6d6c8ae133db4c42a4cbf53b7c3525d72ded1ed0054e30132368db7a685e68171314e274188a4606d97788b4d601011988cd776eab2d44447072dcf25c1aa8414033eb1d90b4593f5eea49fe48748a2086b087791b09ee7603171b9c5528cae0adcd23ca05b0b86450b3ca57598dd316d2edf9c0272e569e78c5350d345155ff7c53ecf1a2fde4effbd16aaceb63bc9b4bc8aa3fee1c399ac59fad4ee40e3929b066ed310ee7ce4c5d9a20a7f9dd5eae808cfc4eda2b52fd7455a99563da5159e12207b93562f7a40028a772f38455c5084c9018d32db646b181222ae76143436b7ac47b72943b9e462ee275272e42b666045f0b2bae8548d95db8facc2d43b644e7e1b40dc177f338708a3f06183c9b3fb02f952940cf9e3e260f64c84b71399f76b5149cff2048ffd01b0525228a279f0530ac7542507503651de460caa6f50b703e55439f425d92705a51c9ec4bfc64bdee6bb6b884abd1bb894e3a763ddb57f7f2925e6fec501ecbc8de9ba421f4e8754b4c6bb960adcbbd743d5ca29db524344b09054aa36f5c68ab943176ac93d7fadf61ab18b00fca3a70be57111c0195267ea27f878ae4a3408bd882eccaeee5ee50a89f7dfa31844fea557dfce0b64e290430e1fc9b98bf50dc0dd633dd248b36762fceccac1d8f96b84b8cec19d3d36f4c73142b05ba385885f03335246af0cfd90c8ebf4d5ad701de3881e61621f137c21842f9f4df2a013a8f762985a0d9b0d71888a797d1adfbc3b5c26ae6fcd1e211079de9546ee920813028851dcd8f160dc7513f541d3e3b6b7f4b2e97c802843c065c3232db4c2b24fce2f5a17746e32d541ee0c2fcf30f99347a8d258ade308eda35330a97410ce95a7a33967e9808fd9c126f33f524718c3cc4cdd7375e4057a52f698a7426bdac1ace2ca4f760d17d9544f05eefb8876419c7be681e8f0577d4dba174d37ec63c8c441c5b316cc744a34085f18b3a0c7c5cacaf32de0c38146c1845ee887ecbca304c7c63e770afc9d9a32aeedcac4d1bef0c50cf0486e51331de7ee56a2fa7f7a7dac4a4b330055d572be08fcb35d0247e9b89f0b89c110ce56fc0df1a49bcc5b478a1dbafed69f6230aacf850e7c456d9e2a0daf23b623e876eb3ac5c374f9c861af0d89ab00071ac42822434035b2c02d7496dc082aa8f2c5e0391d42767c0b351c90ce5b08d4ca54ac89149c47cccd2aceedc3dec75283426651418b188e1bcee96844807ccab9d9ee2ca1063043808393b4f2151a3c2b05b8eb1fed86db4cd3fc771c58e591ca0ac614df1ccee1f686432cb02489f4cb0d4339931c0d998b0954fee6e92fdf74487089c731bf656d77960a47c0b2e08e7bf306ec11f70f17257d3a0ed120d3959dfc15a001fd5536f074b025f79d78833305657f475352b4acdd301118b31463fa6d2860bb2f9815cfcc00beef51e1e6afe4ba5bca5878165572b361f1e2784fff613be0a8f257b7397ed590e728ba48a7f1cf65f3d92ce2ec89c4b21967863b95efb2ec70db9d636557ea1e22a0983826ab2d9beacedae613123d69be5575d53aefa89e86a4a6d1af657e0ea88bb272b60deff86ffdb1889954676f08cd3b02bfd0a98474b34aff0c6fe314c903c18ebf400a800e526e4b660e65e522fccc3ac528e6b8f4c1cdf65af98115fd84c96e42f239a8cac31218d94ca663efb00b7a8ce7b11436ea461843256d126a7c2304ecb2b47fba339af99cf3f9496715d6227f6a0afa7fc0700fd9416841bb9f4006c95a7f86081c5422a5b5ed7711823d0cc07871ee289feeca788acdf2d5019e27cee9364904c4742139ddfefd670cb368679c6407e483d395aeeefc12776ef26246397e5dcad87a92656df4d6bc6225e03aef20fb64bb3384969aa7b97a6db0f70363985c6b34e035cc8d324637eaca1869730cefab4430aa0715a86215497354ff01f10c12a3c9ae3b62204d4eb7fb90339f7c67496e0b9bfea362ce6f94bbaacab86414231db37ad9e610c753a88bdb52c83664895a1f1be51a6a25d1ee4f8c68f580fa58534f72132b442f0222e518194ef62874ace4c11891291bd625132d9cd987a26cd77d56d611ded404d27252ce51446d16e461a696677e1d321afd6d259ed913e57295c1d286045a51eae4e7074ea4e09e15813c22a3d22fc207062d9c09251c280746faf3f2ca270187e0c6843250ec6c32fc2c8ffba3aa299d230eec554357c9286c3cd47d0bcbf42cd306b56def21fb00e3cff3613a7ba636a48805b1f92aa63e3233f6c2d2881cc025ec0ad7a2f6674051ad42affa3968484cfe29d306f6e1aebf0b22a82a376e65a946cace7547ff86ff2fd7f244cf8007b59c4af81468cc5e3475db6634ec4962c629b7692fedbbf128cdfea7cbccef4421ed29002f0260dc683bec8fb18e0939d17f0dfd46834397f88af182068d68acbccfe277c07fb7e63cc34e948c4dfd9a81323d1497aab58df731a9f99e0fa75c1f97a4b92d7e38e80b12afa65a259ad3d15121715d9000599ecb5a2cf4ecc9ac928d0f76977a14583a7e98acf5c02b0121b92166424da43f305b13d4cdda224e6ef45f3caefa7483b9801aed6ed31b29a18649d22f573b7dc3497219d5798be217a38cccacc5337956a310e0579b94fd82c1c772d30d29d8dc8002bfb69271ef8a5941b106951fa0c471005cc9d21e59268223f3a3df9cb45f43a8865fdd441ca3084857e1c270ac3395e5a92b29431c4e6fca7b4278e12876a27ee31adfd1c1f806949e68db0430161e2ad0ccbc39d6e8330650163037adf4ca746a068036ca8a631f7de7914f55ebe018f372d243f74d1e84e244ba768a0a793d82ac966da0174f5bf03f84979813dad949897604d756d2175a714c7cb1d2bbecd7f5b819945307da546b506844a8c598403eb135c1f115c702478dad4e7ae21be95f2adcad0b12fb97e75ec5f75c970d5336e3b71af01a9f6e037f81599c70f160be34f6be45b54e51b1e0c4c0605d1f17b18f03183d86a9b86399712e1687aee75b165cdfd60a3d4e233d5974d7cd5f261c4daf4c2f776eed07e9ff1ef7f9d2bffb3f1c1ebc742bf6a9e533f67d95f39ca2cf1f2a232feebb7c6a7aaf2eb392ed71913a5db5c60eb3a34e65f5d59b0a6271303de68409b5760370d6f010f1f2b0d0c14b79a087d0e3f9e8c48ffbff8eede696ec3f260a8dcef0834a89e1f91231b9eaa9d3e9ab2fbb950fb761c8467423b60ac6fd78d39bf3fde00fc5cea9bc2b21b526d893a6a911e8d1207fb099e09a4ec9d9ca93ddec47dfafce7da59b957e86963767f9935c8d2efd535b1a61119d53d9b12142bbd6c1f3ad8fd0699d69ce74307391807f9187b33b62d50a97d2075953ca15cbac728906d415dfffe38051b6c46ee9c1aefc6f4ae8c47406e5e5ad3acd8149899b96fdd6386c969c1f8b562161bcbde6e09b21b18c5981a6e53a601a25233d5ee34c843823e686aa03517abe6b55d38e008e4fdc40c4f7c820e389c02045d863cb53cd2011fa31d135e0859435e3778bb0bef5f8a8af7384c7f02150d746af8d5cba2107ebd04b53739a77e374187a83559bfe0b9737fd75e3f5caf345252582c445f5f7354de2e5d8427319056913b66b2f857a3ef22eb89fa18ee056c790ebbe9db1d28bbccc9ce0adb210412cf9d2d0dd0f8c5ff34e4d5cd46882ef9e472897fd22c1b6bef196c3bdbbcd5717bd2687306fc08ba9bbdd36d6ac78e2e05117cb1e00f8669b71be266b3e011cd410b64e8a38bdd17b4c4c386cce58a27a1b1b3758d18b7df81e891d1907b57966a99c60357e4ed32ab89ce9d092411a9fd84e4c3969a6fa4bf387625bf8b8120244df6b2eaf9066eb70e4b55a57e2ea2f172befcca699ecefbe0ae7e7de6b41e216f134b102601584ba8013bace419e5ca52e73a9f248e65c363ed8040cd40b55312cfd61266d1f539b9cb1db14eec565b5268648336459ab8c949204db5c14d330f376aa2bfa7f3360cb94a34ff2237623b818a8b93e0e3e7450407391cbba2b2649c3fcfa7838be7a3b372f7970e49d2aee484382813d6cd62ef3defaa1a1d706011f2a861da1d1151b530feeece182a4ac4b439be6d443b39ae18576c94e9d08a35a54f173bcfb5f57426c111216ff3ac035bf8033dcf6674c05cabf5588662671c28700011aad14765b8c1b7500f4f66782bc13f3106accbc98d0ffe89eda7ff8e9bbaeafc700dabdd6a7a6f7b78cc8106edaca3a29b007338d74273300981a1a52712892813f73b6c0344a80c2f7d16b500c9d9d705c0f3956ad8033a9b007cd60835af30deb9012f4d10a32c4eba8122ca0fc7a03f32254ff35de91e09a55cc2fa5de553625b16dea3fdc1efd7247b2162abc83eec115433ae43fed9d6371f8c5fcb380e5fc9b5ebdb361e4450f3ded5ab673369a57cec47ac5c9e541e103fb23eacf28d94daf27a559a08ca2bfe5adeaaf6c2c60e39578d06210d8b0f0b7a191fb3180b69155871515b024ea80b60982c51f1161087b6332498f2f8795e98c3fa57d255c0219d5165408016bf4514a8047b0a7fad0995aafd519e1115efbcb2feac964e55b233d26de89776f1175c9cab220766687d1159b06ebde4f0e3c680d36b0634124084e6156119758ee85ce2009db8eee693cf5dc7f32b6c3fc27e265809aad9d6e9f7a8a5fda81fd0a1911ccb42857ecf22a96aca6a409d60dbdc80ddb3350e25b54fe3d2af2e2b7e3f14d8fd17ddfc7dc3372ed0e39e32991669f51ccec348695a4441f318dd55d1829a3cd92855552133b8f6d06a303202a86bd791429235e1a04f05bbbb41191098ccdfbd449baa6a5ad60a746b2c5c8496032817769da7cdcc1107d137bc4c84c311f847d411eb30b55ceec1e2c2f21e72122fb01845768e36af9b8245b185f1326517d9fa8fa9a23ad28a7eae551a73f8d9aaa44b4557a524b18e124b207098e08ba8cbbf3529009b5d3da04eace96191f99585e49a25a381f50ae1f06e9198fd09bddfad82c8f6b2f225e9324112ece66bb9386f1d87457e20198d825c9d6790ec9d18d19d8be6ea653fb24febfb98a660cf81527911d95491a06077c4e11121e5f42e5df23f2271a4e77e870404b773f35b48ceccad9a58aa771926d6cb50975b17a526f29d9dc513a31e3877b79e3d7709c9deea734ab0caf04012b22d5b4625d2d3a4318d718bf4bc2bf54f2ba300b174c877db7f0f1e36cce75722d8d7017de53ae310b272ad17553736aadd3445eaa2f27bffde667766f614c318e8fd96cb609540fc13a2af41943fb3b944d98364a5e7e42c19b7e9a52f26446fe5ad6462bd74323e0cdbadb3e2c4b19a1bd6275fae9c7e8aee37b7e1f4e42d80b6c71a9fdf253c1284dcf14d6a61909ef37adf97fda8efd744013dffc0b4693f4c0339adc5c98a8654fa1df44fee9eede0939fef5b2c340fcebe8714e7ed032687d6d3f9d6d0d65008741f3841f4529ed0fea8de2b93d12d5fe41d08cc858ea91016ca89405e7dd90c95c791607ddf49993326b85ba44215d902b718432150586e630cfa7014efc4e47da31fed70594ac6f82369b95dff07bb08162937ffe86d187776299595694220ef07ae72aaaf6a2927e45d0d2929ee54a00f1651c32a728f1838c7728a017f2bba9c79943973fabee73e966cbc54b57138c138264e88d79ef367dc0a179f8473c54f2930e0889e9036ac733e12c97d9bbc2a744c88a892456e9408eef4dbb3cfcaef95cb21e9e5d16bc600e04483b75229730dbc60b01359dbff4b9176ebfbbce19cba155c46801085b19e60fcec04e2a72d66e2b56ab542f90430fd4d4d5a2e1665687230f95d6af3c2a103abd46b04e3a34208c2673fa4788ff41079747875e986a0bcd1485008b587d6b0908ebc4babeefc52a5f92f7e716a5af12d982a3560fc4aa3f86950d4110b78f9d72d3c38511861acd195e084397212ac576f2d324f5b479eda1e1ba6d6f319223120b64028f9abc445aa49b3262bacb91e6196dd6aa95b65f93a9bd89ea71e5669a9357c65a263d15091c6ec1f97a017a1603a002284f44c5263f3eea23e0c05c1936c4fa81fb08342b6b1e414c2859056c21b0d3b58dbad4a5e13dbfc15d802cd5d2b2117ef3e6f0d317198aa6963547a1f453cae64049a64597c37da931d4b2daf07e6aa1985508e1bf62744d241924759a60ff41a7fbe0ceafb81ce0d4ab72ff2a59520f93c2d2f03c01d9e5dfc3ba8fa8e94babf5950290b8f21e723a8f372784e90ae84a1c6a7ee37c3894d6a933e4a0aaca17d4f346f47100fc26b34e64574d525878be11a1d12015a282c044fb2f0ac3570af7b8fa4a1f23549cef7ac4203783f73c49979aed89bdd55546e741942ba2bd139e5f805df572d5fb5a825f9b19c9b84cfd484b6508f3710532aa10e5824e5b3418d7e0d928b240facd122d0a5037785f6c6274b5444b10eb2f0a0c61c9bdfcc65d2c473c7f5e10e90c3907921ba683c95d4107f240e26b78b3c38b5cb9e9f907ebaa49ba8d12e213d28c0d9f20406d2a164e4702f35b61a41d264cda628aa73aefc423324cead85134f38ad10fc8ef9f404471fbdad40536877953887bfe0400ed6d7e3e77415f6618063df2546d4c004e20eca96434b78cb00e349c66fa0fd79afb8da3b2e52d856f754f6584955d173d86aa3a3b00fdb5762392843a00561e367c678046db3ff314ec4a98f40062a7c3cbe50e7ac23d9a3f6b46221d8074a63e256dc6df9472439295b911df4e7d357c7e2cbe17c14a13fc5b72189a5e7f23c0003dabf9d5526391711f581c949e9e90985bf5bf5350f920f6496725074ff1f8032377b77bef038a8b0484e77b825cbaef13764a5518bdff88debca1b86e6d4c89103abf36cefa8b599935be164dad40089b6d124d6a087930a0468cc6d53c863b173a6bf5266374b13d6c23e5103a6fd0f3f17bd00d93cc214cb8e07f1ffbc08b9a7398e38be8540d26b7db245d7413348ebc3b3524407343df70f819e92f90df3c13da03069293a74d2488bf2fd6ba789474026b724420b50bc0c27de90cd4f068d071ff55bcf75f7b577511999c2877e554f872ec6ddd96d484a23a584d1c71438b895886e24bce4ef09beaafc87781aaf087d89c94421ee8ee7821a83083f5354eb6a31c4ef5f5473223c094d1faceec9bd2c9cde976ae0e761a2597a3c9f96c2772fd02413b84390b5d6aadf6be445ff21da16e2b55a87ffadcb91b65ed993ddad71037ee199761b1633cf7a47dee5bd164fe9fed47dba90b7d4cf0167a2200c382c22e972d4b75d8066452ed1480574689a6767798a9a80ad906fada541bc8e902af82ed0f764c32496946619c1166aac161975cad6d89c3e8cfbfbd0d92c88fd72bad93e751e811c52ea1dd859a7f7a55b1f146c03354f57876ec733867820969363be5eed0773a71c07b6fa1f8b7a29f4440de64e6f4f48df84ebbf4340ca838147e73fe152c06f21259bf4a7df64c95c2bb42c9cc07212e67df8279c5610baf87343f972e93ef798376897882cf6866c45439af3593b6c98c44439cc7928df7e6c3c28be1db3ccfa0ba889f966a152c95905ceebdbb369de6d1dffa9013c22c6c6f274ba90a92ce0c35c7abbf6ffa5c7f548d892e0c69d1ff9eb905ce95b72c17f19c82859707fef84996f9bf4fd70a1a4e1870977731a16315c9e290a4dc54a09fc0a0fc30f62eb9fbb2b295c9ba2626f6355d574946e2cd8c55f6426eb8875d82aae4cd25fa77ba430f0a24bf4b34cb5b01a209aa3a0665eeb2d81817e3c3df48370f07a9c72d61f460b4a40726ec1b5a05807fcd3d2dff5eae3796a2ab98ee2dd0bdc8f829bae670eb46510969429de72aa963aeb06df1f60cd67fcaea3b104b9c936cc7116dde30f392daf4e40284ad1da6d4e3ab542237def7d3bbccb970573b67bc014adc4a184094ca0ad866adfe7d67081c4b75e6c1021f928f7d7df7a27239f808a97adc08cb3d493632046fa1769ab47d6eb02aafddae2752eb69fdb26ff64077c6152641c623881c10aff9cf2d5fa93c2a691fa5dc3a0bc14e9e5719a8037bd39b86f9fbb07ebc8c301982fb38e42c81bd6a171b614446f92ec92ec3964aaaf8f576db13a3ec2dc0e921b3b2a8a4fc5d0988aecfe1d70f83213af3a522c18a6794307a3aacc3d5ba82670a3235901618100d635951d8035de34d22f4f7c4e5374c91c5e15776a4af33f6e5d7c2af6834a86ac6353311350835c72135534520e96b6d77cdc72d3baba07ee6adfd4467dc8d94783d09c06eb54c7a9f2ad83e5e021dcf12712077ae77c894333be125d32556b5fb50ce89757ada48c55e7eb7dba48408307c5a8a904c31466e8f473093666dbfbcde701dd891b88df20c46decbfe8d8e2020ac2ce9451e0c8974a5a0739a9747eb7272ee0111931db37af81509906694afdcb909d7c3deb00dbbbddb5f24257b18b2d8557a1e495f4ac853ceb6149675ce088c554b8051f8468b0dc0e98c35a6a5b0dfe4732677de82d205762bc54a8d66dae11fcc5ad5313b3423430bac907bfb051ad980141f849dd9649f32720a3b763e26b1705c567d5e526650fd659e9e448b9b96d220e6b2a1535595015c890ac62dbe2ad68d630b960036eb4de85345ce52e15ef1d86fb20a1b9c97965f82a25d43c0d7f05def43dcef50fffe1c894fbf08c382db6c4587f61b6f4132801401a77544463364cf1affa76975554cab88d307c764a412c4ebfe45eb2192ea17fa02a83389fc73b02e7410cfe467356769f4189f0416f11dc9565f49771a1fcf308247978fc286fd1296f169272ea736d3add5be6f7a3913aa516fa86bfd6eb046ce8293fcd75cf099dc35f5c50dd510774f5638f2060e31a369b9539d4c588ebc99a27b7c6bbcb1d1f30c05f5bdcbfcadc731023104c875e14fb0f84bce06623fc34ed98190209fb2918b9c60ae162e9e8abcec3ae669c5eae20294b8b1b2b8259a53a2f2f59bd7d9193302f8acf047e7e72bdc36bfd15ebd6424c7a52f340a1713e3f832733fb064a820180ada2fb7d0097271c68c9d2521a39bd984ca085c37c3138ca26fd452bd93e915ba24ce268fc63828a5dbc53909d19813254e081a1b6dbaadb569abd8cffd1582130b4516916e82a50b257fb86afb0f3fe8e733641872654f61edaa02c059e2bda8ff5a9dad02c5d2dd323301329ea34c30bb7278a06223258e3b61d9619bb4893abfb80cb777d2ee17d33041332122195b6be32f4202457646296ca48572b42c687e4c5eb3ca4258856b40c696fe6a5dd172f0cfac53b011356bf141f13a8719fd59304fd32c79d60cd7548dec1dab8b7d453cbb43a7230cfd7261bf1b56746f0985d61e1ae3841d0d8185427a2360c38c2ac9b573f01d302df00fb6f1c1c319057c2cfd182d2b0d4e554c6c080ed60d0320c3859f126f39e52a50d604998210d7da4f632a9ff920c9a941d7a9b48fac69f17aa1d43d34848861b7af930a6af871e869959eff3375685401e195ffbd0268da01b4c101e28de4f881b8cc945c8b47756a7f1a52597ec1ac7b401530619e71e3bc02954635a3c34d2942f1067f9b4cfcb4b0d13512133ea72fbdb15f6f17e9e05c372c41d104a8590944e4e597c8de89661bf381e23f9f764a6408e6282090191c269b497a747c73b62f5dc37fa8275a3608cddb10f7dbc49624c7497c79ea29cd2f027f63ec3bc5118c9e0a24733d2ae86c71d13f2cb0b3037349f0a102bbe057e6a28baba7acf2d57fd8b44bb942b103ee8bb07232b4a0369d1bd5016d40a08bce0db09b96dc003c97d4903c5d6ecc97af72a3d6984b474121ec9fba45496edb1675d51ba18136b83b0f5bbb2c874f5d5f973932d3193628a1aa21a2d5902957c5f5cb9a59461e9c92f43696991704141dc65649e94bac9d9a8594a824e0bfebe274120d8359f613118203cc98ba832f6ac17c312b9aef6cfd9451e9f5e51a998fde85c9950bb4014463b0d242c62073d98875de30efc2ac92620646e724a3dd46fe3d7aa755931c020be99841d8c7cbe203d899c58fb7f9fc927019ada3e9b2937be22e5f09e69fb4e89ac9372b0dc6759fa2aea5f41b0ded2acd9e9a333a3051f330b8148a840644a27a912894cae7055ac81a35526a906ba995264f6ef66620d187e0769c420def8f59c46bcb54f25e7cdcd88ef0b438ddd047970518156e72d060dbe39de1cbf1cf4d7fdef50d3beee10beaade86f0c3a0fcc4ea4737e658dd1c66bb1450db4debdbc335e8e03b2bfcc8eb1795928bc8f91379dfcdeb46d980fc9fe79823476024d229d054548f148a02add38d9ece9fd0ee82038c97d55a0f73b29202658730fde4a416502edcf5c68f8d73dedeaf1889404680d8a93fa652bfc9e6b25bba991ce42024f19b4ae96a03ecf26782c8237395b9f97af691bbe94b2f894bda4fd625ddfdce56fbccefe9a4ea8bd5a9cf3036deb5c510fb69956bb285a05b05cf86248586584947ce8cee2fed6c52d6ef82aecc2fc2c7694615c2229c056de604fab17f4effc2a84893829658c1bf5bf499eee3b4c521d012853ae817d5e55253d1e3e41b0f354dc1ddd55bc24beaa13d87a0074815371c1ea452de036a87e43f0f49db3603eb5846d6ed0bd01c1f0b973cad5a2398d5feff5142695891316b3ba22183f45ad4d01ba9fdb60f4e784eaf70021100fb6a8a013cfbbb5e05d237495f6330b73b19ad80a92d8a3c3cba34d860b5c07633f8d41f450d91e317a8fc32f65cd04554cca7a3bd6899278ebb9746d5a8c5072964b5fcc54e908bae426bbbcbe91794c57b686b995d545eca6cb1b12a9d4588b9e88a852b755f115a8a0942cecca3d5ba7fa606cee83b65a4ea9ef10bac468bcf0d8349a6deb96f86145a148bb0dad2a96bea5c0c19087922716e6479a41e416964ec3300ccf4c15acff3707a2964cecdfd88ebe3aec33a25ce186eae3e38c8b1d3e7a42fb1b552d1b0cea232edf33772de38fdef7fb5dddc77a102a09c2da7076f647829efae9988c1031155c7bd67f744cfdfc5438c1c1aab04609eb7e0e7dfc539bbb3ab3d3abb446588953ac8390afe73047950cf4147b2224784044a04361b3ff32d11c6d36e4a3c4b8a50613c8fa30f65f6dd318c76af89feae04e34c85a5994a4433d4a563d64c77a246d490a5a8efe68f33a9367ff59072bf70ca8aaee60b1e723fe94b209bb01d65ffffa6674e896273d6ad3486c1bbef951dc39d3c069a2376d2d93ba5e678bc5fb0c69b09ef98dcb2eb064eab4cea40faf6239e7e22149f8c941f360885cfb12cfafd8ff04367a1409b2f14be7f8131436a6723a4eb4c49f1d68201d4524e789356a238107a2360af3f66bc405f587134a91fb279061633f32b0c1d21738ff5f1cc42f4d66acf3] */
};
