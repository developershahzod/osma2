import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
import Item from '../Components/Item'

export default class Random extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: 0,
      winner: 0,
      loading: false,
      winner1: false,
      winner2: false,
      winner3: false,
      winner4: false,
      winner5: false,
      modal_num1: null,
      next: 0,

      followers_list: [
       
      ],
    }
  }

  nextUser() {
    this.setState({ next: this.state.next + 1 })
  }
  opened(e) {
    this.setState({ open: e })
  }

  render() {
    return (
        <>
        <div
          jscontroller="nMfH9e"
          data-et={30}
          hidden="true"
          jsaction="rcuQ6b:npT2md"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".wYq63b{display:flex;left:0;position:absolute;top:0;z-index:1001}.S6VXfe{align-items:center;background-color:#fff;border-radius:0 2px 2px 0;box-shadow:0 2px 2px 0 rgba(0,0,0,.16),0 0 0 1px rgba(0,0,0,.08);display:flex;margin:80px auto 8px 0;overflow:hidden}.gyPpGe,.gyPpGe:visited,.qlVNAd{border:2px solid rgba(0,0,0,.16);border-radius:2px;color:#681da8;cursor:pointer;display:inline-block;font-size:14px;line-height:20px;margin:6px 11px;min-height:32px;text-decoration:underline;text-align:center;width:106px}.gyPpGe:not(:focus){clip:rect(1px,1px,1px,1px);overflow:hidden;position:absolute;padding:0}.kur4we{display:none}a.oBa0Fe{color:#70757a;float:right;font-style:italic;-webkit-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:rgba(0,0,0,0)}a.aciXEb{padding:0 5px;}.CvDJxb{min-width:1124px;z-index:128;width:100%;position:absolute;top:20px;margin-top:6px;}.tsf{width:calc(var(--center-abs-margin) + 652px);}.Q3DXx{display:flex}.Q3DXx.yIbDgf{justify-content:space-between}.Q3DXx #gb,.Q3DXx #gb>div{float:none}.sfbg{background:#fff;height:69px;left:0;position:absolute;width:100%}.minidiv .sfbg{height:72px;overflow:hidden;background:#fff;box-shadow:0 1px 6px 0 rgba(32, 33, 36, 0.28)}.A8SBwf,.IormK{width:692px;padding-left:27px}.A8SBwf{margin:0 auto;margin-left:calc(var(--center-abs-margin) - 47px);position:relative;}.RNNXgb{display:flex;z-index:3;min-height:44px;background:#fff;border:1px solid transparent;box-shadow:0 2px 5px 1px rgba(64,60,67,.16);border-radius:24px;margin:0 auto;width:690px;}.emcav .RNNXgb{border-bottom-left-radius:0;border-bottom-right-radius:0;box-shadow:0 2px 8px 1px rgba(64,60,67,.24);border-color:rgba(223,225,229,0)}.minidiv .emcav .RNNXgb{border-bottom-left-radius:0;border-bottom-right-radius:0;box-shadow:0 1px 6px rgba(32,33,36,.28);border-color:rgba(223,225,229,0);}.RNNXgb:hover,.sbfc .RNNXgb{background-color:#fff;box-shadow:0 2px 8px 1px rgba(64,60,67,.24);border-color:rgba(223,225,229,0)}.minidiv .RNNXgb:hover,.minidiv .sbfc .RNNXgb{border-color:rgba(223,225,229,0);box-shadow:0 1px 6px rgba(32,33,36,.28)}.SDkEP{flex:1;display:flex;padding:5px 4px 0 14px;}.logo{position:absolute;left:-139px;padding:4px 28px 0 30px;top:6px;}.iblpc span{display:none}.sbfc .iblpc span,.emcav .iblpc span{display:block}.iblpc{display:flex;align-items:center;padding-right:6px;margin-top:-7px}.sbfc .iblpc,.emcav .iblpc{padding-right:14px;margin-left:-1px}.sbfc.A8SBwf,.emcav.A8SBwf{padding-left:0;width:719px}.sbfc .RNNXgb,.emcav .RNNXgb{width:717px}@media (min-width:0){.emcav.A8SBwf.h3L8Ub{width:calc(var(--center-width) + var(--rhs-margin) + var(--rhs-width) + 47px)}.emcav.h3L8Ub .RNNXgb{width:calc(var(--center-width) + var(--rhs-margin) + var(--rhs-width) + 45px)}}@media (max-width:1300px){.emcav.A8SBwf.h3L8Ub{width:calc(var(--rhs-margin) + var(--rhs-width) + var(--center-width) + -105px)}.emcav.h3L8Ub .RNNXgb{width:calc(var(--rhs-margin) + var(--rhs-width) + var(--center-width) + -107px)}}.iblpc{display:flex;align-items:center;padding-right:6px;margin-top:-7px;height:46px}.M8H8pb{position:absolute;top:0;left:0;right:0;padding:inherit;width:inherit}@media (max-width:1300px){.A8SBwf{margin-left:calc(var(--center-abs-margin) + 105px)}}@media (max-width:1300px){.A8SBwf,.IormK{width:540px}.RNNXgb{width:538px}.sbfc.A8SBwf,.emcav.A8SBwf{width:567px}.sbfc .RNNXgb,.emcav .RNNXgb{width:565px}}#logo{overflow:hidden;position:relative;display:block;}.jfN4p{border:0}.CcAdNb{margin:auto}.QCzoEc{color:#9aa0a6}.gLFyf,.YacQv{font:16px arial,sans-serif;line-height:34px;font-size:16px;flex:100%;line-height:39px}textarea.gLFyf,.YacQv{font-family:arial,sans-serif;font:16px arial,sans-serif;line-height:22px;margin-bottom:8px;overflow-x:hidden}textarea.gLFyf{white-space:nowrap;overflow:hidden}.minidiv .gLFyf,.minidiv .YacQv{font-size:14px;line-height:22px;min-height:22px !important;}.gLFyf{resize:none;background-color:transparent;border:none;margin:0;padding:0 0 3px;color:rgba(0,0,0,.87);word-wrap:break-word;outline:none;display:flex;-webkit-tap-highlight-color:transparent}.a4bIc{display:flex;flex-wrap:wrap;flex:1;margin-top:6px}.YacQv{color:transparent;white-space:pre;position:absolute;pointer-events:none}.YacQv span{text-decoration:#d93025 dotted underline}.gLFyf.i4ySpb{display:block;position:absolute}.Sxjlmb{white-space:nowrap;margin:20px;font-size:14px;font-weight:bold;line-height:normal;color:#fff}.qfY0Jf{font-weight:normal;border:1px solid #fff;border-radius:3px;padding:1px 3px 0 3px}.dRYYxd{display:flex;flex:0 0 auto;margin-top:-5px;align-items:stretch;flex-direction:row;height:44px}.BKRPef{background:transparent;align-items:center;flex:1 0 auto;flex-direction:row;display:flex;cursor:pointer}.vOY7J{background:transparent;border:0;align-items:center;flex:1 0 auto;cursor:pointer;display:none;height:100%;line-height:44px;outline:none;padding:0 12px}.M2vV3{display:flex}.ExCKkf{height:100%;color:#70757a;vertical-align:middle;outline:none}.BKRPef{padding-right:4px}.ACRAdd{border-left:1px solid #dadce0;height:65%}.ACRAdd{display:none}.ACRAdd.M2vV3{display:block}.Umvnrc{flex:1 0 auto;display:flex;cursor:pointer;align-items:center;border:0;background:transparent;outline:none;padding:0 8px;width:24px;line-height:44px}.ly0Ckb{background:url('//www.gstatic.com/inputtools/images/tia.png') no-repeat center;height:24px;width:24px;vertical-align:middle}.yAnw3c{visibility:hidden}.XDyW0e{flex:1 0 auto;display:flex;cursor:pointer;align-items:center;border:0;background:transparent;outline:none;padding:0 8px;width:24px;line-height:44px}.goxjub{height:24px;width:24px;vertical-align:middle}.nDcEnd{flex:1 0 auto;display:flex;cursor:pointer;align-items:center;border:0;background:transparent;outline:none;padding:0 8px;width:24px;line-height:44px}.Gdd5U{height:24px;width:24px;vertical-align:middle}.Tg7LZd{height:44px;width:44px;background:transparent;border:none;cursor:pointer;flex:0 0 auto;padding:0;}.Tg7LZd{flex:0 0 auto;padding-right:13px}html:not(.zAoYTe) .Tg7LZd:focus{outline:none}.zgAlFc{background:none;color:#4285f4;height:24px;width:24px;margin:auto}.UUbT9{position:absolute;text-align:left;z-index:989;cursor:default;-webkit-user-select:none;width:100%;margin-top:-1px;}.aajZCb{display:flex;flex-direction:column;list-style-type:none;margin:0;padding:0;overflow:hidden;background:#fff;border-radius:0 0 24px 24px;box-shadow:0 9px 8px -3px rgba(64,60,67,.24),8px 0 8px -7px rgba(64,60,67,.24),-8px 0 8px -7px rgba(64,60,67,.24);border:0;padding-bottom:4px;}.minidiv .aajZCb{box-shadow:0 4px 6px rgba(32,33,36,.28);border-bottom-left-radius:16px;border-bottom-right-radius:16px}.mkHrUc{display:flex;}.erkvQe{padding-bottom:16px;flex:auto;overflow-x:hidden}.RjPuVb{height:1px;margin:0 26px 0 0;}.S3nFnd .RjPuVb,.S3nFnd .aajZCb{flex:0 0 auto}.xtSCL{border-top:1px solid #e8eaed;margin:0 14px;padding-bottom:4px}#shJ2Vb{display:none}.OBMEnb{padding:0;margin:0}.OBMEnb:not(:first-child){padding-top:8px}.G43f7e{display:flex;flex-direction:column;min-width:0;padding:0;margin:0}#ynRric{display:none}.ynRric{list-style-type:none;flex-direction:column;color:#70757a;font-family:Google Sans,arial,sans-serif-medium,sans-serif;font-size:14px;margin:0 20px 0 16px;padding:8px 0 8px 0;line-height:16px;width:100%}.ynRric{letter-spacing:0;text-transform:none}.sbct{display:flex;flex-direction:column;min-width:0;max-height:none;padding:0;}.eIPGRd{flex:auto;display:flex;align-items:center;margin:0 20px 0 14px}.pcTkSc{display:flex;flex:auto;flex-direction:column;min-width:0;max-height:none;padding:6px 0}.sbic{display:flex;align-items:center;margin-right:14px;}.ClJ9Yb{line-height:12px;font-size:13px;color:#70757a;margin-top:2px;padding-right:8px}.wM6W7d{display:flex;font-size:16px;color:#212121;flex:auto;align-items:center;word-break:break-word;padding-right:8px}.wM6W7d span{flex:auto}.AQZ9Vd{display:flex;align-self:stretch;}.TfeWfb{display:none}.xAmryf{display:none}.DJbVFb .a5RLac{line-height:24px;font-size:20px;font-family:arial,sans-serif;padding-top:16px;color:#4d5156;margin-bottom:auto}.DJbVFb .wM6W7d span{color:#202124;line-height:36px;font-weight:400;font-size:28px;font-family:Google Sans,arial,sans-serif}.iQxPRb{display:flex;gap:2px}#bgeLZd{display:none}.xAmryf{box-sizing:border-box;align-items:center;height:40px;border-radius:8px;display:flex;color:#4d5156;border:1px solid #dadce0;background-color:#fff;line-height:22px}.jtAOgd{white-space:nowrap;font-family:Google Sans,arial,sans-serif;font-size:14px;margin:0 14px}.TfeWfb{gap:12px 6px;overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none}.TfeWfb::-webkit-scrollbar{display:none}#YMXe{display:none}.MagqMc .ZFiwCf{background-color:#fff;border:1px solid #dadce0;width:100%}.MagqMc.U48fD{padding:0;margin-top:16px}.MagqMc .Bi9oQd{display:none}.MagqMc{padding:0}.MagqMc:hover .LGwnxb{color:#202124}.U48fD{-webkit-tap-highlight-color:transparent;cursor:pointer;display:block;line-height:18px;text-overflow:ellipsis;white-space:nowrap;padding:16px;padding-top:0;margin-top:24px;position:relative}.ZFiwCf{display:flex;align-items:center;justify-content:center;position:relative;margin:0 auto;font-size:14px;font-family:arial,sans-serif;font-weight:400;width:300px;height:36px;border-radius:18px;background-color:#f1f3f4}.ZFiwCf:hover{background-color:#D8D7DC}.Bi9oQd{background-color:#dadce0;margin-top:18px;position:absolute;border:0;height:1px;left:0;width:100%}.w2fKdd svg{width:auto}.w2fKdd{color:#70757a}.LGwnxb{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:auto;padding-left:0;padding-right:8px;max-width:200px;color:#202124}.LGwnxb:empty{padding-right:0}.LGwnxb span,.LGwnxb div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:auto}@media (hover:hover){.sbai{visibility:hidden}.sbhl .sbai{visibility:inherit}}#mitGyb{display:none}.ZDHp{position:relative;margin:20px;display:flex}.ZDHp .SHFPkb{margin-bottom:12px}.o6OF0 .SHFPkb{line-height:40px;font-family:Google Sans,arial,sans-serif;font-weight:400;display:block;color:#202124;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.o6OF0 .HrUlUc,.o6OF0 .PnfqLc{font-family:arial,sans-serif;font-weight:400;max-height:72px;color:#4d5156}.ZDHp .HrUlUc,.ZDHp .PnfqLc{font-size:18px;line-height:24px}.o6OF0 .bTSf5c{font-family:arial,sans-serif;font-weight:400;color:#4d5156}.ZDHp .bTSf5c{line-height:22px;font-size:14px;margin-bottom:6px}.ZDHp .HrUlUc,.ZDHp .PnfqLc{overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.Vlt3wb{font-style:normal;font-family:arial,sans-serif;font-weight:400;font-size:14px;line-height:22px;padding-top:8px;margin-top:12px;color:#4d5156;border-top:1px solid #dadce0;display:flex;width:100%}.Tnv2td{position:absolute;top:0;right:0}.z76Rnb{padding:6px;width:24px;height:24px;background-color:#fff;color:#70757a;border-radius:9999px;border:1px solid #dadce0;cursor:pointer}.kZtr1b{display:flex;flex-direction:column;flex-grow:1;min-width:0}.XAFD5c{width:200px;height:200px;background-color:#fff;border-radius:20px;margin-left:20px;flex-shrink:0;background-position:center;background-repeat:no-repeat}.o6OF0 .xAmryf{font-family:Google Sans,arial,sans-serif;margin:0;height:38px;background-color:#fff;border-radius:100px;border:1px solid #dadce0;color:#4d5156;align-items:center;text-align:center;flex:none;cursor:pointer}#TN4rFf{display:none}.IDVnvc{display:inline-block;max-width:223px;border-radius:12px;height:178px;margin:-2px -10px 2px 10px}.OBMEnb:only-child .IDVnvc{margin-right:calc(25% - 113px)}.cRV9hb{width:90px;padding:6px}.cRV9hb .pcTkSc{font-family:arial,sans-serif;overflow:hidden;margin-top:4px;padding:0}.cRV9hb .pcTkSc .wM6W7d{font-size:14px;line-height:18px;padding:0;color:#202124}.cRV9hb .pcTkSc .ClJ9Yb{line-height:16px;font-size:12px;display:none;display:flex}.cRV9hb .pcTkSc .wM6W7d span,.cRV9hb .pcTkSc .ClJ9Yb span{overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;display:-webkit-box;white-space:normal}.cRV9hb .pcTkSc .wM6W7d span{-webkit-line-clamp:2}.cRV9hb .pcTkSc .ClJ9Yb span{-webkit-line-clamp:2}.aVbWac{background:#fff;border-radius:12px;height:90px}@media (max-width:1300px){.A8SBwf:not(.h3L8Ub) .IDVnvc{height:167px}.A8SBwf:not(.h3L8Ub) .cRV9hb{width:79px}.A8SBwf:not(.h3L8Ub) .aVbWac{height:79px}.A8SBwf:not(.h3L8Ub) .aVbWac .sbic.vYOkbe{height:79px;width:79px}}.MG7lrf{font-size:8pt;margin-top:-16px;position:absolute;right:16px;}#TWnylf{display:none}.KxWPre{display:flex;justify-content:flex-start;padding-right:12px;margin:8px 0 4px}.E2ShOd{font-family:Google Sans,arial,sans-serif-medium,sans-serif;line-height:16px;color:#70757a;font-weight:500;font-size:14px;text-align:center}.VUsake{flex:1}.KxWPre{padding-right:18px;padding-left:14px;align-items:center}.E2ShOd{margin:0 20px 0 0}.V7WNjc{}.wSGdUc{width:24px;height:24px;color:#757575;}.Shjy3b{background:white}.GuoVP{color:#4d5156;font-family:Google Sans,arial,sans-serif-medium,sans-serif;font-size:16px}.Shjy3b{border-radius:4px}.GuoVP{padding:2px 20px}.EpPYLd{display:block;position:relative}.YpcDnf{padding:0 16px;vertical-align:middle}.GZnQqe .YpcDnf{line-height:23px}.EpPYLd:hover{cursor:pointer}.EpPYLd,.CB8nDe:hover{cursor:default}.LGiluc,.EpPYLd[disabled]{pointer-events:none;cursor:default}.GZnQqe.LGiluc,.GZnQqe.EpPYLd[disabled]{color:#dadce0 !important}#dh215c{display:none}.zs1JGd{padding:4px 0;display:flex;align-items:center;min-width:0}.JqPLlb{font-size:16px;color:#70757a;flex:1;align-items:center;word-break:break-word}.zs1JGd{cursor:pointer;margin-left:14px}.JqPLlb{padding:6px 0;color:#70757a}.c58wS{display:flex;margin-right:-14px;position:relative;z-index:99}"
          }}
        />
        <div id="_w4sBZYmTHJ_RwPAPx5aZiAo_1">
          <style
            dangerouslySetInnerHTML={{
              __html:
                '.gb_bb:not(.gb_dd){font:13px/27px Roboto,Arial,sans-serif;z-index:986}@-webkit-keyframes gb__a{0%{opacity:0}50%{opacity:1}}@keyframes gb__a{0%{opacity:0}50%{opacity:1}}a.gb_sa{border:none;color:#4285f4;cursor:default;font-weight:bold;outline:none;position:relative;text-align:center;text-decoration:none;text-transform:uppercase;white-space:nowrap;-webkit-user-select:none}a.gb_sa:hover:after,a.gb_sa:focus:after{background-color:rgba(0,0,0,.12);content:"";height:100%;left:0;position:absolute;top:0;width:100%}a.gb_sa:hover,a.gb_sa:focus{text-decoration:none}a.gb_sa:active{background-color:rgba(153,153,153,.4);text-decoration:none}a.gb_ta{background-color:#4285f4;color:#fff}a.gb_ta:active{background-color:#0043b2}.gb_ua{box-shadow:0 1px 1px rgba(0,0,0,.16)}.gb_sa,.gb_ta,.gb_va,.gb_wa{display:inline-block;line-height:28px;padding:0 12px;border-radius:2px}.gb_va{background:#f8f8f8;border:1px solid #c6c6c6}.gb_wa{background:#f8f8f8}.gb_va,#gb a.gb_va.gb_va,.gb_wa{color:#666;cursor:default;text-decoration:none}#gb a.gb_wa{cursor:default;text-decoration:none}.gb_wa{border:1px solid #4285f4;font-weight:bold;outline:none;background:#4285f4;background:-webkit-gradient(linear,left top,left bottom,from(top),color-stop(#4387fd),to(#4683ea));background:-webkit-linear-gradient(top,#4387fd,#4683ea);background:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#4387fd,endColorstr=#4683ea,GradientType=0)}#gb a.gb_wa{color:#fff}.gb_wa:hover{box-shadow:0 1px 0 rgba(0,0,0,.15)}.gb_wa:active{box-shadow:inset 0 2px 0 rgba(0,0,0,.15);background:#3c78dc;background:-webkit-gradient(linear,left top,left bottom,from(top),color-stop(#3c7ae4),to(#3f76d3));background:-webkit-linear-gradient(top,#3c7ae4,#3f76d3);background:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#3c7ae4,endColorstr=#3f76d3,GradientType=0)}#gb .gb_xa{background:#fff;border:1px solid #dadce0;color:#1a73e8;display:inline-block;text-decoration:none}#gb .gb_xa:hover{background:#f8fbff;border-color:#dadce0;color:#174ea6}#gb .gb_xa:focus{background:#f4f8ff;color:#174ea6;outline:1px solid #174ea6}#gb .gb_xa:active,#gb .gb_xa:focus:active{background:#ecf3fe;color:#174ea6}#gb .gb_xa.gb_j{background:transparent;border:1px solid #5f6368;color:#8ab4f8;text-decoration:none}#gb .gb_xa.gb_j:hover{background:rgba(255,255,255,.04);color:#e8eaed}#gb .gb_xa.gb_j:focus{background:rgba(232,234,237,.12);color:#e8eaed;outline:1px solid #e8eaed}#gb .gb_xa.gb_j:active,#gb .gb_xa.gb_j:focus:active{background:rgba(232,234,237,.1);color:#e8eaed}.gb_p{display:none!important}.gb_Va{visibility:hidden}.gb_Kd{display:inline-block;vertical-align:middle}.gb_Md .gb_o{bottom:-3px;right:-5px}.gb_g{position:relative}.gb_d{display:inline-block;outline:none;vertical-align:middle;border-radius:2px;box-sizing:border-box;height:40px;width:40px;cursor:pointer;text-decoration:none}#gb#gb a.gb_d{cursor:pointer;text-decoration:none}.gb_d,a.gb_d{color:#000}.gb_bf{border-color:transparent;border-bottom-color:#fff;border-style:dashed dashed solid;border-width:0 8.5px 8.5px;display:none;position:absolute;left:11.5px;top:33px;z-index:1;height:0;width:0;-webkit-animation:gb__a .2s;animation:gb__a .2s}.gb_cf{border-color:transparent;border-style:dashed dashed solid;border-width:0 8.5px 8.5px;display:none;position:absolute;left:11.5px;z-index:1;height:0;width:0;-webkit-animation:gb__a .2s;animation:gb__a .2s;border-bottom-color:rgba(0,0,0,.2);top:32px}x:-o-prefocus,div.gb_cf{border-bottom-color:#ccc}.gb_0{background:#fff;border:1px solid #ccc;border-color:rgba(0,0,0,.2);color:#000;-webkit-box-shadow:0 2px 10px rgba(0,0,0,.2);box-shadow:0 2px 10px rgba(0,0,0,.2);display:none;outline:none;overflow:hidden;position:absolute;right:8px;top:62px;-webkit-animation:gb__a .2s;animation:gb__a .2s;border-radius:2px;-webkit-user-select:text}.gb_Kd.gb_Fa .gb_bf,.gb_Kd.gb_Fa .gb_cf,.gb_Kd.gb_Fa .gb_0,.gb_Fa.gb_0{display:block}.gb_Kd.gb_Fa.gb_df .gb_bf,.gb_Kd.gb_Fa.gb_df .gb_cf{display:none}.gb_Nd{position:absolute;right:8px;top:62px;z-index:-1}.gb_2a .gb_bf,.gb_2a .gb_cf,.gb_2a .gb_0{margin-top:-10px}.gb_Kd:first-child,#gbsfw:first-child+.gb_Kd{padding-left:4px}.gb_Ka.gb_Od .gb_Kd:first-child{padding-left:0}.gb_Pd{position:relative}.gb_Ka .gb_Qd .gb_Id.gb_gd,.gb_Ka.gb_La .gb_Qd .gb_Id.gb_gd{padding:3px 8px 3px 16px}.gb_Qd .gb_Rd{display:inline-block}.gb_Qd .gb_gd{-webkit-border-radius:100px;border-radius:100px;background:#0b57d0;color:#fff;font-size:14px;font-weight:500;white-space:nowrap;width:auto}.gb_Qd .gb_Sd{-webkit-box-align:center;-webkit-align-items:center;-webkit-align-items:center;align-items:center;display:-webkit-inline-box;display:-webkit-inline-flex;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex}.gb_Qd .gb_x{fill:#0b57d0;margin-left:8px}.gb_Qd .gb_x circle{fill:#fff}.gb_Qd .gb_gd .gb_Dd{-webkit-box-flex:1;-webkit-flex-grow:1;-webkit-box-flex:1;box-flex:1;-webkit-flex-grow:1;flex-grow:1;text-align:center}.gb_Qd .gb_gd:hover{background:#3763cd}.gb_Qd .gb_gd:hover .gb_x{fill:#3763cd}.gb_Qd .gb_gd:focus,.gb_Qd .gb_gd:active,.gb_Qd .gb_gd:focus:hover,.gb_Qd .gb_gd[aria-expanded=true],.gb_Qd .gb_gd:hover[aria-expanded=true]{background:#416acf}.gb_Qd .gb_gd:focus .gb_x,.gb_Qd .gb_gd:active .gb_x,.gb_Qd .gb_gd:focus:hover .gb_x,.gb_Qd .gb_gd[aria-expanded=true] .gb_x,.gb_Qd .gb_gd:hover[aria-expanded=true] .gb_x{fill:#416acf}.gb_Qd .gb_gd:hover,.gb_Qd .gb_gd:focus,.gb_Qd .gb_gd:active,.gb_Qd .gb_gd[aria-expanded=true]{-webkit-box-shadow:0 1px 3px 1px rgba(66,64,67,.15),0 1px 2px 0 rgba(60,64,67,.3);box-shadow:0 1px 3px 1px rgba(66,64,67,.15),0 1px 2px 0 rgba(60,64,67,.3)}.gb_Qd .gb_gd:focus-visible{outline:1px solid #416acf;outline-offset:2px}.gb_Qd .gb_j.gb_gd{background:#a8c7fa;color:#062e6f}.gb_Qd .gb_j.gb_gd .gb_x{fill:#a8c7fa}.gb_Qd .gb_j.gb_gd .gb_x circle{fill:#062e6f}.gb_Qd .gb_j.gb_gd:hover{background:#b4cbf6}.gb_Qd .gb_j.gb_gd:hover .gb_x{fill:#b4cbf6}.gb_Qd .gb_j.gb_gd:focus,.gb_Qd .gb_j.gb_gd:focus:hover,.gb_Qd .gb_j.gb_gd:active,.gb_Qd .gb_j.gb_gd[aria-expanded=true],.gb_Qd .gb_j.gb_gd:hover[aria-expanded=true]{background:#b8cdf7}.gb_Qd .gb_j.gb_gd:focus .gb_x,.gb_Qd .gb_j.gb_gd:focus:hover .gb_x,.gb_Qd .gb_j.gb_gd:active .gb_x,.gb_Qd .gb_j.gb_gd[aria-expanded=true] .gb_x,.gb_Qd .gb_j.gb_gd:hover[aria-expanded=true] .gb_x{fill:#b8cdf7}.gb_Qd .gb_j.gb_gd:focus-visible{outline-color:#b8cdf7}.gb_Qd .gb_j.gb_gd:hover,.gb_Qd .gb_j.gb_gd:focus,.gb_Qd .gb_j.gb_gd:active,.gb_Qd .gb_j.gb_gd[aria-expanded=true]{-webkit-box-shadow:0 1px 3px 1px rgba(66,64,67,.15),0 1px 2px 0 rgba(60,64,67,.3);box-shadow:0 1px 3px 1px rgba(66,64,67,.15),0 1px 2px 0 rgba(60,64,67,.3)}.gb_0c .gb_Pd,.gb_f .gb_Pd{float:right}.gb_d{padding:8px;cursor:pointer}.gb_d:after{content:"";position:absolute;top:-4px;bottom:-4px;left:-4px;right:-4px}.gb_Ka .gb_ge:not(.gb_sa):focus img{background-color:rgba(0,0,0,.2);outline:none;-webkit-border-radius:50%;border-radius:50%}.gb_Td button svg,.gb_d{-webkit-border-radius:50%;border-radius:50%}.gb_Td button:focus:not(:focus-visible) svg,.gb_Td button:hover svg,.gb_Td button:active svg,.gb_d:focus:not(:focus-visible),.gb_d:hover,.gb_d:active,.gb_d[aria-expanded=true]{outline:none}.gb_Jc .gb_Td.gb_pe button:focus-visible svg,.gb_Td button:focus-visible svg,.gb_d:focus-visible{outline:1px solid #202124}.gb_Jc .gb_Td button:focus-visible svg,.gb_Jc .gb_d:focus-visible{outline:1px solid #f1f3f4}@media (forced-colors:active){.gb_Jc .gb_Td.gb_pe button:focus-visible svg,.gb_Td button:focus-visible svg,.gb_Jc .gb_Td button:focus-visible svg{outline:1px solid currentcolor}}.gb_Jc .gb_Td.gb_pe button:focus svg,.gb_Jc .gb_Td.gb_pe button:focus:hover svg,.gb_Td button:focus svg,.gb_Td button:focus:hover svg,.gb_d:focus,.gb_d:focus:hover{background-color:rgba(60,64,67,.1)}.gb_Jc .gb_Td.gb_pe button:active svg,.gb_Td button:active svg,.gb_d:active{background-color:rgba(60,64,67,.12)}.gb_Jc .gb_Td.gb_pe button:hover svg,.gb_Td button:hover svg,.gb_d:hover{background-color:rgba(60,64,67,.08)}.gb_ya .gb_d.gb_Aa:hover{background-color:transparent}.gb_d[aria-expanded=true],.gb_d:hover[aria-expanded=true]{background-color:rgba(95,99,104,.24)}.gb_d[aria-expanded=true] .gb_i{fill:#5f6368;opacity:1}.gb_Jc .gb_Td button:hover svg,.gb_Jc .gb_d:hover{background-color:rgba(232,234,237,.08)}.gb_Jc .gb_Td button:focus svg,.gb_Jc .gb_Td button:focus:hover svg,.gb_Jc .gb_d:focus,.gb_Jc .gb_d:focus:hover{background-color:rgba(232,234,237,.1)}.gb_Jc .gb_Td button:active svg,.gb_Jc .gb_d:active{background-color:rgba(232,234,237,.12)}.gb_Jc .gb_d[aria-expanded=true],.gb_Jc .gb_d:hover[aria-expanded=true]{background-color:rgba(255,255,255,.12)}.gb_Jc .gb_d[aria-expanded=true] .gb_i{fill:#fff;opacity:1}.gb_Kd{padding:4px}.gb_Ka.gb_Od .gb_Kd{padding:4px 2px}.gb_Ka.gb_Od .gb_b.gb_Kd{padding-left:6px}.gb_0{z-index:991;line-height:normal}.gb_0.gb_Ud{left:0;right:auto}@media (max-width:350px){.gb_0.gb_Ud{left:0}}.gb_Vd .gb_0{top:56px}.gb_l .gb_d,.gb_Z .gb_l .gb_d{background-position:-64px -29px}.gb_E .gb_l .gb_d{background-position:-29px -29px;opacity:1}.gb_l .gb_d,.gb_l .gb_d:hover,.gb_l .gb_d:focus{opacity:1}.gb_ed{display:none}@media screen and (max-width:319px){.gb_ld:not(.gb_qd) .gb_l{display:none;visibility:hidden}}.gb_o{display:none}.gb_8c{font-family:Google Sans,Roboto,Helvetica,Arial,sans-serif;font-size:20px;font-weight:400;letter-spacing:0.25px;line-height:48px;margin-bottom:2px;opacity:1;overflow:hidden;padding-left:16px;position:relative;text-overflow:ellipsis;vertical-align:middle;top:2px;white-space:nowrap;-webkit-flex:1 1 auto;-webkit-box-flex:1;flex:1 1 auto}.gb_8c.gb_9c{color:#3c4043}.gb_Ka.gb_La .gb_8c{margin-bottom:0}.gb_ad.gb_bd .gb_8c{padding-left:4px}.gb_Ka.gb_La .gb_cd{position:relative;top:-2px}.gb_Ka{color:black;min-width:160px;position:relative;-webkit-transition:box-shadow 250ms;transition:box-shadow 250ms}.gb_Ka.gb_Rc{min-width:120px}.gb_Ka.gb_jd .gb_kd{display:none}.gb_Ka.gb_jd .gb_ld{height:56px}header.gb_Ka{display:block}.gb_Ka svg{fill:currentColor}.gb_md{position:fixed;top:0;width:100%}.gb_nd{-webkit-box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.gb_od{height:64px}.gb_ld{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:space-between;-webkit-justify-content:space-between;justify-content:space-between;min-width:-webkit-min-content;min-width:min-content}.gb_Ka:not(.gb_La) .gb_ld{padding:8px}.gb_Ka.gb_pd .gb_ld{-webkit-flex:1 0 auto;-webkit-box-flex:1;flex:1 0 auto}.gb_Ka .gb_ld.gb_qd.gb_rd{min-width:0}.gb_Ka.gb_La .gb_ld{padding:4px;padding-left:8px;min-width:0}.gb_kd{height:48px;vertical-align:middle;white-space:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-user-select:none}.gb_td>.gb_kd{display:table-cell;width:100%}.gb_ad{padding-right:30px;box-sizing:border-box;-webkit-flex:1 0 auto;-webkit-box-flex:1;flex:1 0 auto}.gb_Ka.gb_La .gb_ad{padding-right:14px}.gb_ud{-webkit-flex:1 1 100%;-webkit-box-flex:1;flex:1 1 100%}.gb_ud>:only-child{display:inline-block}.gb_vd.gb_1c{padding-left:4px}.gb_vd.gb_wd,.gb_Ka.gb_pd .gb_vd,.gb_Ka.gb_La:not(.gb_f) .gb_vd{padding-left:0}.gb_Ka.gb_La .gb_vd.gb_wd{padding-right:0}.gb_Ka.gb_La .gb_vd.gb_wd .gb_ya{margin-left:10px}.gb_1c{display:inline}.gb_Ka.gb_Uc .gb_vd.gb_xd,.gb_Ka.gb_f .gb_vd.gb_xd{padding-left:2px}.gb_8c{display:inline-block}.gb_vd{-webkit-box-sizing:border-box;box-sizing:border-box;height:48px;line-height:normal;padding:0 4px;padding-left:30px;-webkit-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;-webkit-box-pack:flex-end;-webkit-justify-content:flex-end;justify-content:flex-end}.gb_f{height:48px}.gb_Ka.gb_f{min-width:auto}.gb_f .gb_vd{float:right;padding-left:32px}.gb_f .gb_vd.gb_yd{padding-left:0}.gb_zd{font-size:14px;max-width:200px;overflow:hidden;padding:0 12px;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:text}.gb_fd{-webkit-transition:background-color .4s;-webkit-transition:background-color .4s;transition:background-color .4s}.gb_Fd{color:black}.gb_Jc{color:white}.gb_Ka a,.gb_Oc a{color:inherit}.gb_P{color:rgba(0,0,0,.87)}.gb_Ka svg,.gb_Oc svg,.gb_ad .gb_id,.gb_0c .gb_id{color:#5f6368;opacity:1}.gb_Jc svg,.gb_Oc.gb_Sc svg,.gb_Jc .gb_ad .gb_id,.gb_Jc .gb_ad .gb_Ic,.gb_Jc .gb_ad .gb_cd,.gb_Oc.gb_Sc .gb_id{color:rgba(255,255,255,.87)}.gb_Jc .gb_ad .gb_Hc:not(.gb_Hd){opacity:.87}.gb_9c{color:inherit;opacity:1;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased}.gb_Jc .gb_9c,.gb_Fd .gb_9c{opacity:1}.gb_Ad{position:relative}.gb_Bd{font-family:arial,sans-serif;line-height:normal;padding-right:15px}a.gb_B,span.gb_B{color:rgba(0,0,0,.87);text-decoration:none}.gb_Jc a.gb_B,.gb_Jc span.gb_B{color:white}a.gb_B:focus{outline-offset:2px}a.gb_B:hover{text-decoration:underline}.gb_C{display:inline-block;padding-left:15px}.gb_C .gb_B{display:inline-block;line-height:24px;vertical-align:middle}.gb_Id{font-family:Google Sans,Roboto,Helvetica,Arial,sans-serif;font-weight:500;font-size:14px;letter-spacing:.25px;line-height:16px;margin-left:10px;margin-right:8px;min-width:96px;padding:9px 23px;text-align:center;vertical-align:middle;border-radius:4px;box-sizing:border-box}.gb_Ka.gb_f .gb_Id{margin-left:8px}#gb a.gb_wa.gb_Id{cursor:pointer}.gb_wa.gb_Id:hover{background:#1b66c9;-webkit-box-shadow:0 1px 3px 1px rgba(66,64,67,.15),0 1px 2px 0 rgba(60,64,67,.3);box-shadow:0 1px 3px 1px rgba(66,64,67,.15),0 1px 2px 0 rgba(60,64,67,.3)}.gb_wa.gb_Id:focus,.gb_wa.gb_Id:hover:focus{background:#1c5fba;-webkit-box-shadow:0 1px 3px 1px rgba(66,64,67,.15),0 1px 2px 0 rgba(60,64,67,.3);box-shadow:0 1px 3px 1px rgba(66,64,67,.15),0 1px 2px 0 rgba(60,64,67,.3)}.gb_wa.gb_Id:active{background:#1b63c1;-webkit-box-shadow:0 1px 3px 1px rgba(66,64,67,.15),0 1px 2px 0 rgba(60,64,67,.3);box-shadow:0 1px 3px 1px rgba(66,64,67,.15),0 1px 2px 0 rgba(60,64,67,.3)}.gb_Id{background:#1a73e8;border:1px solid transparent}.gb_Ka.gb_La .gb_Id{padding:9px 15px;min-width:80px}.gb_Cd{text-align:left}#gb .gb_Jc a.gb_Id:not(.gb_j),#gb.gb_Jc a.gb_Id:not(.gb_t){background:#fff;border-color:#dadce0;-webkit-box-shadow:none;box-shadow:none;color:#1a73e8}#gb a.gb_wa.gb_j.gb_Id{background:#8ab4f8;border:1px solid transparent;-webkit-box-shadow:none;box-shadow:none;color:#202124}#gb .gb_Jc a.gb_Id:hover:not(.gb_j),#gb.gb_Jc a.gb_Id:not(.gb_t):hover{background:#f8fbff;border-color:#cce0fc}#gb a.gb_wa.gb_j.gb_Id:hover{background:#93baf9;border-color:transparent;-webkit-box-shadow:0 1px 3px 1px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.3);box-shadow:0 1px 3px 1px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.3)}#gb .gb_Jc a.gb_Id:focus:not(.gb_j),#gb .gb_Jc a.gb_Id:focus:hover:not(.gb_j),#gb.gb_Jc a.gb_Id:focus:not(.gb_j),#gb.gb_Jc a.gb_Id:focus:hover:not(.gb_j){background:#f4f8ff;outline:1px solid #c9ddfc}#gb a.gb_wa.gb_j.gb_Id:focus,#gb a.gb_wa.gb_j.gb_Id:focus:hover{background:#a6c6fa;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}#gb .gb_Jc a.gb_Id:active:not(.gb_j),#gb.gb_Jc a.gb_Id:not(.gb_t):active{background:#ecf3fe}#gb a.gb_wa.gb_j.gb_Id:active{background:#a1c3f9;-webkit-box-shadow:0 1px 2px rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15);box-shadow:0 1px 2px rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15)}.gb_Jd{display:none}@media screen and (max-width:319px){.gb_ld:not(.gb_qd) .gb_l{display:none;visibility:hidden}}.gb_ya{background-color:rgba(255,255,255,.88);border:1px solid #dadce0;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:inline-block;max-height:48px;overflow:hidden;outline:none;padding:0;vertical-align:middle;width:134px;-webkit-border-radius:8px;border-radius:8px}.gb_ya.gb_j{background-color:transparent;border:1px solid #5f6368}.gb_Ea{display:inherit}.gb_ya.gb_j .gb_Ea{background:#fff;-webkit-border-radius:4px;border-radius:4px;display:inline-block;left:8px;margin-right:5px;position:relative;padding:3px;top:-1px}.gb_ya:hover{border:1px solid #d2e3fc;background-color:rgba(248,250,255,.88)}.gb_ya.gb_j:hover{background-color:rgba(241,243,244,.04);border:1px solid #5f6368}.gb_ya:focus-visible,.gb_ya:focus{background-color:#fff;outline:1px solid #202124;-webkit-box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15)}.gb_ya.gb_j:focus-visible,.gb_ya.gb_j:focus{background-color:rgba(241,243,244,.12);outline:1px solid #f1f3f4;-webkit-box-shadow:0 1px 3px 1px rgba(0,0,0,.15),0 1px 2px 0 rgba(0,0,0,.3);box-shadow:0 1px 3px 1px rgba(0,0,0,.15),0 1px 2px 0 rgba(0,0,0,.3)}.gb_ya.gb_j:active,.gb_ya.gb_Fa.gb_j:focus{background-color:rgba(241,243,244,.1);border:1px solid #5f6368}.gb_Ha{display:inline-block;padding-bottom:2px;padding-left:7px;padding-top:2px;text-align:center;vertical-align:middle;line-height:32px;width:78px}.gb_ya.gb_j .gb_Ha{line-height:26px;margin-left:0;padding-bottom:0;padding-left:0;padding-top:0;width:72px}.gb_Ha.gb_Ia{background-color:#f1f3f4;-webkit-border-radius:4px;border-radius:4px;margin-left:8px;padding-left:0;line-height:30px}.gb_Ha.gb_Ia .gb_Ja{vertical-align:middle}.gb_Ka:not(.gb_La) .gb_ya{margin-left:10px;margin-right:4px}.gb_Ma{max-height:32px;width:78px}.gb_ya.gb_j .gb_Ma{max-height:26px;width:72px}.gb_n{-webkit-background-size:32px 32px;background-size:32px 32px;border:0;-webkit-border-radius:50%;border-radius:50%;display:block;margin:0px;position:relative;height:32px;width:32px;z-index:0}.gb_Wa{background-color:#e8f0fe;border:1px solid rgba(32,33,36,.08);position:relative}.gb_Wa.gb_n{height:30px;width:30px}.gb_Wa.gb_n:hover,.gb_Wa.gb_n:active{-webkit-box-shadow:none;box-shadow:none}.gb_Xa{background:#fff;border:none;-webkit-border-radius:50%;border-radius:50%;bottom:2px;-webkit-box-shadow:0px 1px 2px 0px rgba(60,64,67,.30),0px 1px 3px 1px rgba(60,64,67,.15);box-shadow:0px 1px 2px 0px rgba(60,64,67,.30),0px 1px 3px 1px rgba(60,64,67,.15);height:14px;margin:2px;position:absolute;right:0;width:14px}.gb_Za{color:#1f71e7;font:400 22px/32px Google Sans,Roboto,Helvetica,Arial,sans-serif;text-align:center;text-transform:uppercase}@media (-webkit-min-device-pixel-ratio:1.25),(min-resolution:1.25dppx),(min-device-pixel-ratio:1.25){.gb_n::before,.gb_0a::before{display:inline-block;-webkit-transform:scale(0.5);-webkit-transform:scale(0.5);transform:scale(0.5);-webkit-transform-origin:left 0;-webkit-transform-origin:left 0;transform-origin:left 0}.gb_H .gb_0a::before{-webkit-transform:scale(scale(0.416666667));-webkit-transform:scale(scale(0.416666667));transform:scale(scale(0.416666667))}}.gb_n:hover,.gb_n:focus{-webkit-box-shadow:0 1px 0 rgba(0,0,0,.15);box-shadow:0 1px 0 rgba(0,0,0,.15)}.gb_n:active{-webkit-box-shadow:inset 0 2px 0 rgba(0,0,0,.15);box-shadow:inset 0 2px 0 rgba(0,0,0,.15)}.gb_n:active::after{background:rgba(0,0,0,.1);-webkit-border-radius:50%;border-radius:50%;content:"";display:block;height:100%}.gb_1a{cursor:pointer;line-height:40px;min-width:30px;opacity:.75;overflow:hidden;vertical-align:middle;text-overflow:ellipsis}.gb_d.gb_1a{width:auto}.gb_1a:hover,.gb_1a:focus{opacity:.85}.gb_2a .gb_1a,.gb_2a .gb_3a{line-height:26px}#gb#gb.gb_2a a.gb_1a,.gb_2a .gb_3a{font-size:11px;height:auto}.gb_4a{border-top:4px solid #000;border-left:4px dashed transparent;border-right:4px dashed transparent;display:inline-block;margin-left:6px;opacity:.75;vertical-align:middle}.gb_Aa:hover .gb_4a{opacity:.85}.gb_ya>.gb_b{padding:3px 3px 3px 4px}.gb_5a.gb_Va{color:#fff}.gb_E .gb_1a,.gb_E .gb_4a{opacity:1}#gb#gb.gb_E.gb_E a.gb_1a,#gb#gb .gb_E.gb_E a.gb_1a{color:#fff}.gb_E.gb_E .gb_4a{border-top-color:#fff;opacity:1}.gb_Z .gb_n:hover,.gb_E .gb_n:hover,.gb_Z .gb_n:focus,.gb_E .gb_n:focus{-webkit-box-shadow:0 1px 0 rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 0 rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.2)}.gb_6a .gb_b,.gb_7a .gb_b{position:absolute;right:1px}.gb_b.gb_D,.gb_8a.gb_D,.gb_Aa.gb_D{-webkit-flex:0 1 auto;-webkit-box-flex:0;flex:0 1 auto}.gb_9a.gb_ab .gb_1a{width:30px!important}.gb_m{height:40px;position:absolute;right:-5px;top:-5px;width:40px}.gb_bb .gb_m,.gb_cb .gb_m{right:0;top:0}.gb_b .gb_d{padding:4px}.gb_q{display:none}sentinel{}'
            }}
          />
        </div>
        <noscript>
          &lt;style&gt;table,div,span,p{"{"}display:none{"}"}&lt;/style&gt;&lt;meta
          content="0;url=/search?q=google+random+number+generator&amp;amp;sca_esv=564974394&amp;amp;rlz=1C5CHFA_enUZ1068UZ1068&amp;amp;sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&amp;amp;gbv=1&amp;amp;sei=w4sBZYmTHJ_RwPAPx5aZiAo"
          http-equiv="refresh"&gt;&lt;div style="display:block"&gt;Нажмите &lt;a
          href="/search?q=google+random+number+generator&amp;amp;sca_esv=564974394&amp;amp;rlz=1C5CHFA_enUZ1068UZ1068&amp;amp;sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&amp;amp;gbv=1&amp;amp;sei=w4sBZYmTHJ_RwPAPx5aZiAo"&gt;здесь&lt;/a&gt;,
          если переадресация не будет выполнена в течение нескольких
          секунд.&lt;/div&gt;
        </noscript>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@font-face{font-family:'Google Sans';font-style:normal;font-weight:400;font-display:optional;src:url(//fonts.gstatic.com/s/googlesans/v14/4UaGrENHsxJlGDuGo1OIlL3Kwp5eKQtGBlc.woff2)format('woff2');unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;}@font-face{font-family:'Google Sans';font-style:normal;font-weight:400;font-display:optional;src:url(//fonts.gstatic.com/s/googlesans/v14/4UaGrENHsxJlGDuGo1OIlL3Nwp5eKQtGBlc.woff2)format('woff2');unicode-range:U+0370-03FF;}@font-face{font-family:'Google Sans';font-style:normal;font-weight:400;font-display:optional;src:url(//fonts.gstatic.com/s/googlesans/v14/4UaGrENHsxJlGDuGo1OIlL3Bwp5eKQtGBlc.woff2)format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;}@font-face{font-family:'Google Sans';font-style:normal;font-weight:400;font-display:optional;src:url(//fonts.gstatic.com/s/googlesans/v14/4UaGrENHsxJlGDuGo1OIlL3Awp5eKQtGBlc.woff2)format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;}@font-face{font-family:'Google Sans';font-style:normal;font-weight:400;font-display:optional;src:url(//fonts.gstatic.com/s/googlesans/v14/4UaGrENHsxJlGDuGo1OIlL3Owp5eKQtG.woff2)format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;}"
          }}
        />
        <h1
          className="bNg8Rb OhScic zsYMMe BBwThe"
          style={{
            clip: "rect(1px,1px,1px,1px)",
            height: 1,
            overflow: "hidden",
            position: "absolute",
            whiteSpace: "nowrap",
            width: 1,
            zIndex: -1000,
            WebkitUserSelect: "none"
          }}
        >
          Специальные ссылки
        </h1>
        <div jscontroller="EufiNb" className="wYq63b">
          <div className="S6VXfe">
            <a
              jsname="BKxS1e"
              className="gyPpGe"
              role="link"
              tabIndex={0}
              jsaction="i3viod"
              data-ved="0ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ67oDCAU"
            >
              Перейти к основному контенту
            </a>{" "}
            <a
              jsname="PwyVob"
              className="o8xTWc gyPpGe"
              href="#"
              role="link"
              jsaction="xoizsc"
            >
              Отключить бесконечную прокрутку
            </a>
            <a
              jsname="BzS6B"
              className="wxIowe kur4we gyPpGe"
              href="#"
              role="link"
              jsaction="XZ94se"
            >
              Включить бесконечную прокрутку
            </a>
            <span id="tsuid_3">
              <g-snackbar
                jsname="Fd92vb"
                jscontroller="OZLguc"
                style={{ display: "none" }}
                data-dismiss=""
                jsshadow=""
                jsaction="rcuQ6b:npT2md"
                id="ow166"
                __is_owner="true"
              >
                <div
                  jsname="Ng57nc"
                  className="yK6jqe"
                  data-ved="0ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ4G8IBg"
                  jsowner="ow166"
                >
                  <div className="b77HKf">
                    <div className="rIxsve" jsslot="">
                      <span className="Txngnb wHYlTd yUTMj">
                        Не удалось изменить настройки. Повторите попытку.
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  jsname="sM5MNb"
                  aria-live="polite"
                  className="LH3wG"
                  style={{ zIndex: 2000 }}
                />
              </g-snackbar>
            </span>
            <a
              jsname="KI37ad"
              className="gyPpGe"
              href="https://support.google.com/websearch/answer/181196?hl=ru-UZ"
              ping="/url?sa=t&source=web&rct=j&url=https://support.google.com/websearch/answer/181196%3Fhl%3Dru-UZ&ved=0ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQwcMDCAc&opi=89978449&sqi=2"
            >
              Справка по использованию специальных возможностей
            </a>
            <div data-async-context="async_id:duf3-78;authority:0;card_id:;entry_point:0;feature_id:;ftoe:0;header:0;is_jobs_spam_form:0;open:0;preselect_answer_index:-1;suggestions:;suggestions_subtypes:;suggestions_types:;surface:0;title:;type:78">
              <div
                jscontroller="EkevXb"
                style={{ display: "none" }}
                jsaction="rcuQ6b:npT2md"
              />
              <div
                id="duf3-78"
                data-jiis="up"
                data-async-type="duffy3"
                data-async-context-required="type,open,feature_id,async_id,entry_point,authority,card_id,ftoe,title,header,suggestions,surface,suggestions_types,suggestions_subtypes,preselect_answer_index,is_jobs_spam_form"
                className="yp"
                data-ved="0ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ-0EICA"
              />
              <a
                jsname="JUypV"
                className="gyPpGe"
                data-async-trigger="duf3-78"
                role="link"
                tabIndex={0}
                jsaction="trigger.szjOR"
              >
                Оставить отзыв о специальных возможностях
              </a>
            </div>
          </div>
        </div>
        <div
          className="CvDJxb"
          jscontroller="tIj4fb"
          jsaction="rcuQ6b:npT2md;"
          id="searchform"
        >
          <div style={{ marginTop: "-20px" }} className="sfbg" />
          <div className="Q3DXx yIbDgf">
            <form
              className="tsf"
              action="/search"
              id="tsf"
              autoComplete="off"
              data-submitfalse="q"
              method="GET"
              name="f"
              role="search"
            >
              {" "}
              <div jsmodel="ZrDSAb vNzKHd" jsdata="MuIEvd;_;Asaukk">
                {" "}
                <div
                  jscontroller="cnjECf"
                  jsmodel="VYkzu kjkykd a4L2gc LM7wx BFDhle gx0hCb TnHSdd L97mud "
                  className="A8SBwf"
                  data-adhe="false"
                  data-alt="true"
                  data-hp="false"
                  data-mof="false"
                  jsdata="LVplcb;_;"
                  jsaction="lX6RWd:w3Wsmc;ocDSvd:duwfG;DR74Fd:KyvVPe;DkpM0b:d3sQLd;IQOavd:dFyQEf;XzZZPe:jI3wzf;Aghsf:AVsnlb;iHd9U:Q7Cnrc;f5hEHe:G0jgYd;vmxUb:j3bJnb;nTzfpf:YPRawb;R2c5O:LuRugf;qiCkJd:ANdidc;htNNz:SNIJTd;NOg9L:HLgh3;uGoIkd:epUokb;zLdLw:eaGBS;H9muVd:J4e6lb;djyPCf:nMeUJf;hBEIVb:nUZ9le;rcuQ6b:npT2md"
                >
                  <div className="logo">
                    <a
                      href="https://www.google.com/webhp?hl=ru&sa=X&sqi=2&pjf=1&ved=0ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQPAgJ"
                      title="Главная страница Google"
                      id="logo"
                      data-hveid={9}
                    >
                      <img
                        className="jfN4p"
                        src="/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                        style={{ background: "none" }}
                        alt="Google"
                        height={30}
                        width={92}
                        data-atf={1}
                        data-frt={0}
                      />
                    </a>
                  </div>
                  <div className="RNNXgb" jsname="RNNXgb">
                    <div className="SDkEP">
                      <div className="iblpc" jsname="uFMOof">
                        <div className="CcAdNb">
                          <span
                            className="QCzoEc z1asCe MZy1Rb"
                            style={{ height: 20, lineHeight: 20, width: 20 }}
                          >
                            <svg
                              focusable="false"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div
                        jscontroller="vZr2rb"
                        className="a4bIc"
                        data-hpmde="false"
                        data-mnr={4}
                        jsname="gLFyf"
                        jsaction="h5M12e;input:d3sQLd;blur:jI3wzf;keydown:uYT2Vb"
                      >
                        <div jsname="vdLsw" className="YacQv" />
                        <div
                          jsname="aJyGR"
                          jscontroller="xMclgd"
                          className="gLFyf i4ySpb"
                          data-promo-open-duration={2000}
                          jsaction="rcuQ6b:npT2md"
                        >
                          <g-snackbar
                            jsname="nH91he"
                            jscontroller="OZLguc"
                            style={{ display: "none" }}
                            data-dismiss=""
                            jsshadow=""
                            jsaction="rcuQ6b:npT2md"
                            id="ow13"
                            __is_owner="true"
                          >
                            <div
                              jsname="Ng57nc"
                              className="Wu0v9b v0rrvd"
                              data-ved="0ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ4G8ICw"
                              jsowner="ow13"
                            >
                              <div className="b77HKf">
                                <div className="rIxsve" jsslot="">
                                  <span className="Txngnb wHYlTd yUTMj Sxjlmb">
                                    Чтобы перейти к окну поиска, нажмите{" "}
                                    <span className="qfY0Jf">/</span>.
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              jsname="sM5MNb"
                              aria-live="polite"
                              className="jhZvod"
                            />
                          </g-snackbar>
                        </div>
                        <textarea
                          jsname="yZiJbe"
                          className="gLFyf"
                          jsaction="paste:puy29d; mouseenter:MJEKMe; mouseleave:iFHZnf;"
                          id="APjFqb"
                          maxLength={2048}
                          name="q"
                          rows={1}
                          aria-activedescendant=""
                          aria-autocomplete="both"
                          aria-controls="Alh6id"
                          aria-expanded="false"
                          aria-haspopup="both"
                          aria-owns="Alh6id"
                          autoCapitalize="off"
                          autoComplete="off"
                          autoCorrect="off"
                          role="combobox"
                          spellCheck="false"
                          type="search"
                          value="google random number generator"
                          aria-label="Найти"
                          data-ved="0ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ39UDCAw"
                          defaultValue={"google random number generator"}
                        />
                      </div>
                      <div className="dRYYxd">
                        {" "}
                        <div jscontroller="PymCCe" jsname="RP0xob" className="BKRPef">
                          {" "}
                          <div
                            className="M2vV3 vOY7J"
                            tabIndex={0}
                            jsname="pkjasb"
                            aria-label="Очистить"
                            role="button"
                            jsaction="AVsnlb;rcuQ6b:npT2md"
                            data-ved="0ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ05YFCA0"
                          >
                            {" "}
                            <span className="ExCKkf z1asCe rzyADb" jsname="itVqKe">
                              <svg
                                focusable="false"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                              </svg>
                            </span>{" "}
                          </div>{" "}
                          <span jsname="s1VaRe" className="ACRAdd M2vV3" />{" "}
                        </div>{" "}
                        <div
                          jscontroller="Y9t9Sc"
                          className="Umvnrc"
                          aria-label="Экранная клавиатура"
                          role="button"
                          tabIndex={0}
                          jsaction="h5M12e;rcuQ6b:npT2md"
                        >
                          <span className="ly0Ckb">
                            <img
                              className="yAnw3c"
                              src="/tia/tia.png"
                              tia_disable_swap="true"
                              tia_field_name="q"
                              jsname="JyIpdf"
                              data-atf={0}
                              data-frt={0}
                              tia_property="web"
                            />
                          </span>
                        </div>
                        <div
                          jscontroller="unV4T"
                          jsname="F7uqIe"
                          className="XDyW0e"
                          aria-label="Голосовой поиск"
                          role="button"
                          tabIndex={0}
                          jsaction="h5M12e;rcuQ6b:npT2md"
                          data-ved="0ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQvs8DCA4"
                        >
                          <svg
                            className="goxjub"
                            focusable="false"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#4285f4"
                              d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                            />
                            <path fill="#34a853" d="m11 18.08h2v3.92h-2z" />
                            <path
                              fill="#fbbc05"
                              d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                            />
                            <path
                              fill="#ea4335"
                              d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                            />
                          </svg>
                        </div>
                        <div
                          jscontroller="lpsUAf"
                          jsname="R5mgy"
                          className="nDcEnd"
                          data-base-lens-url="https://lens.google.com"
                          data-checkerboard-transparent-images-background-enabled="false"
                          data-convert-transparent-images="true"
                          data-downscaling-enabled="true"
                          data-downscaling-max-longest-edge-pixels={1000}
                          data-encoding-compression-ratio="0.4"
                          data-image-processor-enabled="true"
                          data-is-images-mode="false"
                          data-is-send-dimensions-in-body-enabled="false"
                          data-preferred-mime-type="image/jpeg"
                          data-propagated-experiment-ids="72276982,"
                          data-transparent-image-background-color="#fff"
                          data-transparent-image-checkerboard-color="#fff"
                          data-upload-path="/v3/upload?ssb=1&cpe=1&ifg204=1&"
                          aria-label="Поиск по картинке"
                          role="button"
                          tabIndex={0}
                          jsaction="rcuQ6b:npT2md;h5M12e"
                          data-ved="0ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQhqEICA8"
                        >
                          <svg
                            className="Gdd5U"
                            focusable="false"
                            viewBox="0 0 192 192"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect fill="none" height={192} width={192} />
                            <g>
                              <circle fill="#34a853" cx="144.07" cy={144} r={16} />
                              <circle fill="#4285f4" cx="96.07" cy={104} r={24} />
                              <path
                                fill="#ea4335"
                                d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"
                              />
                              <path
                                fill="#fbbc05"
                                d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"
                              />
                              <path
                                fill="#4285f4"
                                d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>{" "}
                    <button
                      jsname="Tg7LZd"
                      className="Tg7LZd"
                      aria-label="Поиск"
                      type="submit"
                      data-ved="0ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ4dUDCBA"
                    >
                      {" "}
                      <div className="zgAlFc">
                        {" "}
                        <span className="z1asCe MZy1Rb">
                          <svg
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                          </svg>
                        </span>{" "}
                      </div>{" "}
                    </button>{" "}
                  </div>
                  <div
                    jscontroller="Dvn7fe"
                    className="UUbT9"
                    style={{ display: "none" }}
                    jsname="UUbT9"
                    jsaction="mouseout:ItzDCd;mouseleave:MWfikb;hBEIVb:nUZ9le;YMFC3:VKssTb;vklu5c:k02QY;ldyIye:CmVOgc"
                  >
                    <div className="RjPuVb" jsname="RjPuVb" />
                    <div className="aajZCb" jsname="aajZCb">
                      <div className="xtSCL" />
                      <div className="mkHrUc" id="Alh6id" role="presentation">
                        <div className="erkvQe" jsname="erkvQe" />
                        <div className="rLrQHf" jsname="tovEib" role="presentation" />
                      </div>
                      <div
                        jsname="E80e9e"
                        className="OBMEnb"
                        id="shJ2Vb"
                        role="presentation"
                      >
                        <ul jsname="bw4e9b" className="G43f7e" role="listbox" />
                      </div>
                      <div jsname="XiTF2e" className="OBMEnb" role="presentation">
                        <div jsname="Q7Erhd" className="G43f7e" role="presentation" />
                      </div>
                      <div className="ynRric" id="ynRric" role="presentation" />
                      <li
                        data-view-type={1}
                        className="sbct"
                        id="YMXe"
                        role="presentation"
                      >
                        <div className="eIPGRd">
                          <div className="sbic">
                            <div className="j0GJWd" style={{ display: "none" }}>
                              <div>
                                <img
                                  className="uHGFVd AZNDm"
                                  alt=""
                                  style={{ display: "none" }}
                                  data-atf={0}
                                  data-frt={0}
                                />
                              </div>
                              <div className="iQxPRb">
                                <img
                                  className="uHGFVd EOLKOc"
                                  alt=""
                                  style={{ display: "none" }}
                                  data-atf={0}
                                  data-frt={0}
                                />
                                <img
                                  className="uHGFVd EOLKOc"
                                  alt=""
                                  style={{ display: "none" }}
                                  data-atf={0}
                                  data-frt={0}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="pcTkSc">
                            <div className="lnnVSe" aria-atomic="true" role="option">
                              <div className="wM6W7d">
                                <span />
                              </div>
                              <div className="ClJ9Yb">
                                <span />
                              </div>
                              <div className="a5RLac">
                                <span />
                              </div>
                            </div>
                            <div
                              className="Sz7Lee MagqMc U48fD"
                              style={{ display: "none" }}
                              aria-label="Показать больше"
                              role="button"
                              tabIndex={0}
                            >
                              <hr className="Bi9oQd" aria-hidden="true" />
                              <div className="ZFiwCf">
                                <span className="LGwnxb">Показать больше</span>
                                <span
                                  className="w2fKdd z1asCe lYxQe"
                                  style={{ height: 20, lineHeight: 20, width: 20 }}
                                >
                                  <svg
                                    focusable="false"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="AQZ9Vd" aria-atomic="true" role="button">
                            <div className="sbai" role="presentation">
                              Удалить
                            </div>
                          </div>
                        </div>
                        <div className="TfeWfb" />
                      </li>
                      <div className="xAmryf" id="bgeLZd">
                        <span className="jtAOgd" />
                      </div>
                      <li
                        data-view-type={8}
                        className="sbct"
                        id="mitGyb"
                        role="presentation"
                      >
                        <div className="eIPGRd hdt0ld">
                          <div className="sbic" />
                          <div className="pcTkSc">
                            <div>
                              <div className="wM6W7d">
                                <span />
                              </div>
                              <div className="ClJ9Yb">
                                <span />
                              </div>
                            </div>
                          </div>
                          <div className="AQZ9Vd" aria-atomic="true" role="button">
                            <div className="sbai" role="presentation">
                              Удалить
                            </div>
                          </div>
                        </div>
                      </li>
                      <div
                        className="ZDHp"
                        id="fU0xAb"
                        role="presentation"
                        style={{ display: "none" }}
                      >
                        <div className="kZtr1b">
                          <div className="lnnVSe" aria-atomic="true" role="option">
                            <div className="SHFPkb" />
                            <div className="bTSf5c" />
                            <div className="PnfqLc" />
                            <div className="HrUlUc" />
                          </div>
                          <div
                            className="Tnv2td"
                            aria-atomic="true"
                            role="button"
                            style={{ display: "none" }}
                          >
                            <span className="z76Rnb z1asCe JKu1je">
                              <svg
                                focusable="false"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                              </svg>
                            </span>
                          </div>
                          <div className="xAmryf" id="bgeLZd">
                            <span className="jtAOgd" />
                          </div>
                          <div
                            className="TfeWfb"
                            role="presentation"
                            style={{ display: "none" }}
                          />
                          <div className="Vlt3wb" style={{ display: "none" }} />
                        </div>
                        <span className="XAFD5c" style={{ display: "none" }} />
                        <div className="j0GJWd" style={{ display: "none" }}>
                          <div>
                            <img
                              className="uHGFVd AZNDm"
                              alt=""
                              style={{ display: "none" }}
                              data-atf={0}
                              data-frt={0}
                            />
                          </div>
                          <div className="iQxPRb">
                            <img
                              className="uHGFVd EOLKOc"
                              alt=""
                              style={{ display: "none" }}
                              data-atf={0}
                              data-frt={0}
                            />
                            <img
                              className="uHGFVd EOLKOc"
                              alt=""
                              style={{ display: "none" }}
                              data-atf={0}
                              data-frt={0}
                            />
                          </div>
                        </div>
                      </div>
                      <li
                        className="IDVnvc"
                        data-view-type={6}
                        id="TN4rFf"
                        role="presentation"
                      >
                        <div className="cRV9hb">
                          <div className="aVbWac">
                            <div className="sbic" />
                          </div>
                          <div className="pcTkSc" role="presentation">
                            <div className="lnnVSe" aria-atomic="true" role="option">
                              <div className="wM6W7d">
                                <span />
                              </div>
                              <div className="ClJ9Yb">
                                <span />
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                    <div
                      jsname="JUypV"
                      jscontroller="OqGDve"
                      className="MG7lrf"
                      data-async-context="async_id:duf3-46;authority:0;card_id:;entry_point:0;feature_id:;ftoe:0;header:0;is_jobs_spam_form:0;open:0;preselect_answer_index:-1;suggestions:;suggestions_subtypes:;suggestions_types:;surface:0;title:;type:46"
                    >
                      <div
                        jscontroller="EkevXb"
                        style={{ display: "none" }}
                        jsaction="rcuQ6b:npT2md"
                      />
                      <div
                        id="duf3-46"
                        data-jiis="up"
                        data-async-type="duffy3"
                        data-async-context-required="type,open,feature_id,async_id,entry_point,authority,card_id,ftoe,title,header,suggestions,surface,suggestions_types,suggestions_subtypes,preselect_answer_index,is_jobs_spam_form"
                        className="yp"
                        data-ved="0ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ-0EIEg"
                      />
                      <a
                        className="oBa0Fe aciXEb"
                        href="#"
                        id="sbfblt"
                        data-async-trigger="duf3-46"
                        aria-label="Оставить отзыв об этом результате"
                        role="button"
                        jsaction="trigger.szjOR"
                        data-ved="0ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQtw8IEw"
                      >
                        Пожаловаться на неприемлемые подсказки
                      </a>
                    </div>
                    <div className="KxWPre" id="TWnylf">
                      <div className="E2ShOd" />
                      <span className="VUsake" />
                      <g-dropdown-menu
                        className="V7WNjc"
                        jscontroller="pFsdhd"
                        jsdata="xJGXK;_;Asauko"
                        jsshadow=""
                        jsaction="rcuQ6b:npT2md;mMf61e:GKlhgf;YraOve:cCpuJc;kNOP9c:bzkPEc;hmb6Ye:oyYkKb;KyPa0e:G8Ofmd;wjOG7e:rWoVB;ZvRO4b:L76sMb;LyWNEf:L76sMb"
                      >
                        <g-popup
                          jsname="zpo2ue"
                          jscontroller="DPreE"
                          jsaction="A05xBd:IYtByb;EOZ57e:WFrRFb;"
                          jsdata="mVjAjf;_;Asauks"
                          id="ow22"
                          __is_owner="true"
                        >
                          <div
                            jsname="oYxtQd"
                            className="CcNe6e"
                            aria-expanded="false"
                            aria-haspopup="true"
                            jsslot=""
                            role="button"
                            tabIndex={0}
                            aria-label="Показать больше"
                            jsaction="WFrRFb;keydown:uYT2Vb"
                          >
                            <div className="wSGdUc">
                              <span className="IjabWd z1asCe SaPW2b">
                                <svg
                                  focusable="false"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div
                            jsname="V68bde"
                            className="UjBGL pkWBse iRQHZe"
                            style={{ display: "none", zIndex: 1000 }}
                            jsowner="ow22"
                          >
                            <g-menu
                              jsname="iXXGtd"
                              className="WNN1b Shjy3b yTik0 wplJBd PBn44e iQXTJe"
                              jscontroller="WlNQGd"
                              role="menu"
                              tabIndex={-1}
                              jsaction="PSl28c;focus:h06R8;keydown:uYT2Vb;mouseenter:WOQqYb;mouseleave:Tx5Rb;mouseover:IgJl9c"
                            >
                              <g-menu-item
                                jsname="NNJLud"
                                className="GuoVP EpPYLd GZnQqe"
                                jscontroller="CnSW2d"
                                role="menuitem"
                                tabIndex={0}
                                data-short-label=""
                                jsdata="zPXzie;_;Asaukw"
                              >
                                <div jsname="ibnC6b" className="YpcDnf OSrXXb">
                                  Закрыть
                                </div>
                              </g-menu-item>
                            </g-menu>
                          </div>
                        </g-popup>
                      </g-dropdown-menu>
                    </div>
                    <div
                      className="zs1JGd"
                      data-view-type={7}
                      jsname="RqJ7oe"
                      id="dh215c"
                      role="presentation"
                    >
                      <div className="JqPLlb" role="option" tabIndex={0} />
                    </div>
                  </div>
                  <div
                    jsname="mvaK7d"
                    className="M8H8pb"
                    data-ved="0ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ4d8ICBc"
                  />
                </div>{" "}
                <div
                  style={{
                    background:
                      "url(/images/searchbox/desktop_searchbox_sprites318_hr.webp)"
                  }}
                >
                  {" "}
                </div>
              </div>{" "}
              <div id="tophf">
                <input name="sca_esv" defaultValue={564974394} type="hidden" />
                <input
                  name="rlz"
                  defaultValue="1C5CHFA_enUZ1068UZ1068"
                  type="hidden"
                />
                <input
                  name="sxsrf"
                  defaultValue="AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468"
                  type="hidden"
                />
                <input
                  defaultValue="w4sBZYmTHJ_RwPAPx5aZiAo"
                  name="ei"
                  type="hidden"
                />
                <input
                  defaultValue="AD69kcEAAAAAZQGZ08Kng_yB-qYu71TYNHl-XgC4eSB6"
                  disabled="true"
                  name="iflsig"
                  type="hidden"
                />
              </div>
            </form>
            <div className="Q3DXx">
              <div className="c58wS">
                <div
                  id="_w4sBZYmTHJ_RwPAPx5aZiAo_5"
                  jscontroller="vTw9Fc"
                  jsname="gRWMdb"
                  data-triggering-tag="UMK4Dc"
                  jsaction="fj1r1d:qiause"
                >
                  <div
                    jscontroller="w4UyN"
                    className="fLciMb"
                    data-po={360}
                    aria-label="Настройки"
                    role="button"
                    tabIndex={0}
                    jsaction="rcuQ6b:npT2md;HfCvm;mouseenter:eGiyHb;focus:eGiyHb;focusin:eGiyHb;mouseleave:LfDNce;focusout:LfDNce"
                    data-ved="0ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ6psICBg"
                  >
                    <span className="z1asCe E9hVAb">
                      <svg
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z" />
                        <circle cx={12} cy={12} r="3.5" />
                      </svg>
                    </span>
                    <div jsname="suEOdc" className="ZOyvub">
                      Быстрые настройки
                    </div>
                  </div>
                </div>
              </div>
              <div id="_w4sBZYmTHJ_RwPAPx5aZiAo_7">
                <span className="gb" style={{ display: "none" }} />
                <div className="gb_Ka gb_f gb_bb gb_La" id="gb">
                  <div className="gb_vd gb_9a gb_kd" data-ogsr-up="">
                    <div className="gb_Pd">
                      <div className="gb_1c">
                        <div
                          className="gb_l gb_Kd gb_D"
                          data-ogsr-fb="true"
                          data-ogsr-alt=""
                          id="gbwa"
                        >
                          <div className="gb_g">
                            <a
                              className="gb_d"
                              aria-label="Приложения Google"
                              href="https://www.google.co.uz/intl/ru/about/products?tab=wh"
                              aria-expanded="false"
                              role="button"
                              tabIndex={0}
                            >
                              <svg
                                className="gb_i"
                                focusable="false"
                                viewBox="0 0 24 24"
                              >
                                <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="gb_b gb_Kd gb_Wf gb_D">
                        <div className="gb_g gb_8a gb_Wf gb_D">
                          <a
                            className="gb_d gb_Aa gb_D"
                            aria-label="Аккаунт Google: SHAHZOD AXMEDOV  
      (developershahzod@gmail.com)"
                            href="https://accounts.google.com/SignOutOptions?hl=ru&continue=https://www.google.com/search%3Fq%3Dgoogle%2Brandom%2Bnumber%2Bgenerator%26rlz%3D1C5CHFA_enUZ1068UZ1068%26oq%3Dgoogle%2B%26aqs%3Dchrome.0.69i59l3j69i60l4j69i65%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8&ec=GBRAAQ"
                            role="button"
                            tabIndex={0}
                          >
                            <img
                              className="gb_n gbii"
                              src="https://lh3.google.com/u/0/ogw/AGvuzYbI9rvFJ2LCmabBW1gYViEPBIWDxhqMMpGCv8_v=s32-c-mo"
                              srcSet="https://lh3.google.com/u/0/ogw/AGvuzYbI9rvFJ2LCmabBW1gYViEPBIWDxhqMMpGCv8_v=s32-c-mo 1x, https://lh3.google.com/u/0/ogw/AGvuzYbI9rvFJ2LCmabBW1gYViEPBIWDxhqMMpGCv8_v=s64-c-mo 2x "
                              alt=""
                              aria-hidden="true"
                              data-noaft=""
                              data-ilt={1694600133069}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        overflow: "hidden",
                        position: "absolute",
                        top: 0,
                        visibility: "hidden",
                        width: 370,
                        zIndex: 991,
                        height: 0,
                        marginTop: 50,
                        transition: "height 0.3s ease-in-out 0s",
                        right: 0,
                        marginRight: 4
                      }}
                    >
                      <iframe
                        role="presentation"
                        frameBorder={0}
                        scrolling="no"
                        name="app"
                        src="https://ogs.google.com/u/0/widget/app?awwd=1&gm3=1&origin=https%3A%2F%2Fwww.google.com&cn=app&pid=1&spid=1&hl=ru"
                        style={{
                          height: "100%",
                          width: "100%",
                          colorScheme: "light",
                          visibility: "hidden"
                        }}
                      />
                    </div>
                    <div
                      style={{
                        overflow: "hidden",
                        position: "absolute",
                        top: 0,
                        visibility: "hidden",
                        width: 436,
                        zIndex: 991,
                        height: 0,
                        marginTop: 50,
                        right: 0,
                        marginRight: 4
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="DH7hPe" />
        <div id="gac_scont" />
        <span className="kpshf line gsr bilit big mdm" style={{ display: "none" }} />
        <div className="main" id="main">
          <div jsmodel=" ROaKxe" className="e9EfHf" id="cnt">
            <div className="dodTBe" id="sfcnt" />
            <div className="rfiSsc wtAAQb">
              <div className="sBbkle y3NyWc" role="navigation">
                <div className="TrmO7" />
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".YrbPuc{color:#70757a;font-family:arial,sans-serif;font-size:14px;font-weight:400;line-height:22px}.oPWl9c{color:#70757a;font-family:arial,sans-serif;font-size:12px;font-weight:400;line-height:20px}.BjWz4c{color:#70757a;font-family:arial,sans-serif;font-size:12px;font-weight:400;line-height:16px}.cj1ht{color:#4d5156;font-family:arial,sans-serif;font-size:12px;font-weight:400;line-height:16px}sentinel{}.SGNhVe{font-family:Google Sans,arial,sans-serif;font-size:48px;letter-spacing:0;line-height:56px}.EX5Zne{font-family:Google Sans,arial,sans-serif;font-size:36px;line-height:40px}.JgzqYd{font-family:Google Sans,arial,sans-serif;font-size:28px;line-height:36px}.aTI8gc{font-family:Google Sans,arial,sans-serif;font-size:28px;font-weight:500;line-height:36px}.IFnjPb{font-family:Google Sans,arial,sans-serif;font-size:22px;font-weight:400;line-height:28px}.pb3iw{font-family:Google Sans,arial,sans-serif;font-size:18px;font-weight:400;line-height:24px}.ILxcde{font-family:Google Sans,arial,sans-serif;font-size:16px;font-weight:400;line-height:24px}.MBeuO{font-family:arial,sans-serif;font-size:20px;font-weight:400}.MBeuO{line-height:24px}.tNxQIb{font-family:arial,sans-serif;font-size:16px;font-weight:400;line-height:24px}.ZwRhJd{font-family:arial,sans-serif;font-size:14px;line-height:18px}.NNMgCf{font-family:arial,sans-serif;font-size:16px;line-height:24px}.Pqkn2e{font-family:arial,sans-serif;font-size:16px;line-height:22px}.wHYlTd{font-family:arial,sans-serif;font-size:14px;line-height:22px}.ApHyTb{font-family:arial,sans-serif;font-size:12px;line-height:16px}.sjVJQd{font-family:Google Sans,arial,sans-serif-medium,sans-serif;font-size:14px;font-weight:400;line-height:20px}.k1U36b{font-size:12px}sentinel{}.TGyDA{height:66px;display:-css3-box;-css3-box-orient:vertical;-css3-line-clamp:3;overflow:hidden;white-space:normal}.yUTMj{font-family:arial,sans-serif;font-weight:400}.VDgVie{text-align:center}.TUOsUe{text-align:left}.AraNOb{-webkit-text-decoration:underline;text-decoration:underline}.BBwThe{font-weight:700}.RiJqbb{font-family:Google Sans,arial,sans-serif-medium,sans-serif;font-weight:500}.SlP8xc{text-transform:none}.n9iHLc{text-transform:uppercase}.OSrXXb{overflow:hidden;text-overflow:ellipsis}.cHaqb{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.RES9jf{color:#202124}.GS5rRd{color:#1a0dab}.GS5rRd:visited{color:#681da8}sentinel{}.OhScic{margin:0px}.zsYMMe{padding:0px}.bNg8Rb{clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;z-index:-1000;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}sentinel{}.s6JM6d .eYa01b{width:148px}.s6JM6d .KtfA8c{width:204px}.s6JM6d .APo4S{margin-left:10px;margin-right:10px}.s6JM6d .THlyec{margin-left:-10px;margin-right:-10px;min-width:672px}.M8OgIe .hhv4Fb{margin-left:-38px;margin-right:-38px}.M8OgIe .JL6v7b{margin-left:38px;margin-right:38px;padding-left:0;padding-right:0}.M8OgIe .TRty9d{width:316px}.TQc1id .zLsiYe{margin-left:-21px;padding-left:0}sentinel{}.zJUuqf{margin-bottom:4px}.AB4Wff{margin-left:16px}.v0rrvd{padding-bottom:16px}@-webkit-keyframes g-snackbar-show{from{pointer-events:none;-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@keyframes g-snackbar-show{from{pointer-events:none;-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@-webkit-keyframes g-snackbar-hide{from{-webkit-transform:translateY(-100%);transform:translateY(-100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes g-snackbar-hide{from{-webkit-transform:translateY(-100%);transform:translateY(-100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes g-snackbar-show-content{from{opacity:0}}@keyframes g-snackbar-show-content{from{opacity:0}}@-webkit-keyframes g-snackbar-hide-content{to{opacity:0}}@keyframes g-snackbar-hide-content{to{opacity:0}}.LH3wG,.jhZvod{bottom:0;height:0;position:fixed;z-index:999}.Ox8Cyd{height:0;position:fixed;z-index:999}.E7Hdgb{box-sizing:border-box;visibility:hidden;display:inline-block}.yK6jqe,.Wu0v9b{box-sizing:border-box;visibility:hidden}.rTYTNb{-webkit-animation:g-snackbar-hide .4s cubic-bezier(0.4,0,0.2,1) both;animation:g-snackbar-hide .4s cubic-bezier(0.4,0,0.2,1) both;visibility:inherit}.UewPMd{-webkit-animation:g-snackbar-show .5s cubic-bezier(0.4,0,0.2,1) both;animation:g-snackbar-show .5s cubic-bezier(0.4,0,0.2,1) both;visibility:inherit}.b77HKf{background-color:#323232;padding:0 24px}.rIxsve{-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-align:center;display:box;display:-webkit-box;display:-webkit-flex;display:flex}.rTYTNb .rIxsve{-webkit-animation:g-snackbar-hide-content .35s cubic-bezier(0.4,0,0.2,1) both;animation:g-snackbar-hide-content .35s cubic-bezier(0.4,0,0.2,1) both}.UewPMd .rIxsve{-webkit-animation:g-snackbar-show-content .35s cubic-bezier(0.4,0,0.2,1) .15s both;animation:g-snackbar-show-content .35s cubic-bezier(0.4,0,0.2,1) .15s both}.Txngnb.Txngnb{line-height:20px}.Txngnb{box-flex:1;color:#fff;-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;margin:14px 0;word-break:break-word}.sHFNYd{margin-right:-8px}@media (min-width:569px) and (min-height:569px){.LH3wG,.jhZvod{text-align:center}.Wu0v9b,.yK6jqe{display:inline-block;max-width:568px;min-width:288px;text-align:left}.b77HKf{border-radius:8px}.sHFNYd{margin-left:40px}}.V9O1Yd .rIxsve{display:block;padding:8px 0}.V9O1Yd .sHFNYd{margin-left:0}.V9O1Yd .sHFNYd g-flat-button{padding-left:0}.jhZvod{left:16px;right:auto}.LH3wG,.Ox8Cyd{left:0;right:0}.yK6jqe,.Wu0v9b,.E7Hdgb{position:relative}.G9jore{position:absolute;top:-24px;bottom:-24px;left:-24px;right:-24px}sentinel{}.r2fjmd{margin-bottom:0px;margin-top:0px}g-dropdown-menu{display:inline-block;position:relative}.Jb0Zif g-dropdown-menu{vertical-align:middle}.WNN1b{background-color:#fff}.W4XqN{cursor:pointer;background-color:#fff}.GKXWV{border-top:1px solid #dadce0;height:0;margin-left:5px;margin-right:5px}.eNRwyf{height:100%;width:100%}sentinel{}.pkWBse{box-shadow:0 2px 10px 0 rgba(0,0,0,0.2)}.pkWBse{border-radius:8px}.UjBGL{display:block}.CcNe6e{cursor:pointer;display:inline-block}.iRQHZe{position:absolute}.Qaqu5{position:relative}.shnMoc.CcNe6e{display:block}.v4Zpbe.CcNe6e{display:-webkit-box;display:-webkit-flex;display:flex;height:100%;width:100%}sentinel{}.PBn44e{border-radius:8px}.yTik0{border:none;display:block;outline:none}.wplJBd{white-space:nowrap}.JM22S::-webkit-scrollbar{width:8px}.JM22S::-webkit-scrollbar-thumb{background-color:#bababa;border-right:4px solid #fff}.iQXTJe{padding:5px 0}sentinel{}.Zt0a5e.LGiluc{border-top-color:#dadce0}.Zt0a5e.LGiluc,.Zt0a5e.EpPYLd[disabled]{color:rgba(0,0,0,0.26)!important}.CjiZvb,.GZnQqe.EpPYLd:active{background-color:rgba(0,0,0,0.1)}sentinel{}"
              }}
            />
            <div data-st-cnt="ee" id="easter-egg" />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".y3NyWc{position:absolute;left:0;right:0;top:0}.y3NyWc{width:calc(var(--center-width) + var(--rhs-margin) + var(--rhs-width) + 20px)}"
              }}
            />
            <div className="rfiSsc">
              <div className="sBbkle" role="navigation">
                <div className="aAbqZ">
                  <div className="xhjkHe">
                    <div className="TrmO7" data-st-cnt="mode">
                      <div role="navigation">
                        <div id="bqHHPb" className="bqHHPb" data-st-tgt="mode">
                          <div
                            jscontroller="GElbSc"
                            data-d=""
                            data-o=""
                            data-rlp={14}
                            data-rsi={8}
                            data-sz={0}
                            jsaction="rcuQ6b:npT2md;sIMx0:PSOd0d;"
                            data-id="trc"
                            className="fMHynf Jb8vdb"
                            data-hveid="CAkQAA"
                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ96AJegQICRAA"
                          >
                            <h1
                              className="bNg8Rb OhScic zsYMMe BBwThe"
                              style={{
                                clip: "rect(1px,1px,1px,1px)",
                                height: 1,
                                overflow: "hidden",
                                position: "absolute",
                                whiteSpace: "nowrap",
                                width: 1,
                                zIndex: -1000,
                                WebkitUserSelect: "none"
                              }}
                            >
                              Фильтры и темы
                            </h1>
                            <div
                              jscontroller="fcDBE"
                              jsname="QcAYrd"
                              jsaction="rcuQ6b:npT2md"
                              jsshadow=""
                            >
                              <div className="IUOThf" jsslot="">
                                <a
                                  className="LatpMc nPDzT T3FoJb"
                                  href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=google+random+number+generator&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0pQJegQIDBAB"
                                  jsname="VIftV"
                                  role="link"
                                  data-hveid="CAwQAQ"
                                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0pQJegQIDBAB"
                                >
                                  <div jsname="bVqjv" className="GKS7s">
                                    <span className="FMKtTb UqcIvb" jsname="pIvPIe">
                                      Картинки
                                    </span>
                                  </div>
                                </a>
                                <a
                                  className="LatpMc nPDzT T3FoJb"
                                  href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=google+random+number+generator&tbm=vid&source=lnms&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0pQJegQIChAB"
                                  jsname="VIftV"
                                  role="link"
                                  data-hveid="CAoQAQ"
                                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0pQJegQIChAB"
                                >
                                  <div jsname="bVqjv" className="GKS7s">
                                    <span className="FMKtTb UqcIvb" jsname="pIvPIe">
                                      Видео
                                    </span>
                                  </div>
                                </a>
                                <a
                                  className="LatpMc nPDzT T3FoJb"
                                  href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=google+random+number+generator&tbm=nws&source=lnms&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0pQJegQICxAB"
                                  jsname="VIftV"
                                  role="link"
                                  data-hveid="CAsQAQ"
                                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0pQJegQICxAB"
                                >
                                  <div jsname="bVqjv" className="GKS7s">
                                    <span className="FMKtTb UqcIvb" jsname="pIvPIe">
                                      Новости
                                    </span>
                                  </div>
                                </a>
                                <a
                                  className="LatpMc nPDzT T3FoJb"
                                  href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=google+random+number+generator&tbm=shop&source=lnms&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0pQJegQICBAB"
                                  jsname="VIftV"
                                  role="link"
                                  data-hveid="CAgQAQ"
                                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0pQJegQICBAB"
                                >
                                  <div jsname="bVqjv" className="GKS7s">
                                    <span className="FMKtTb UqcIvb" jsname="pIvPIe">
                                      Покупки
                                    </span>
                                  </div>
                                </a>
                                <div id="w4sBZYmTHJ_RwPAPx5aZiAo__7">
                                  <a
                                    className="LatpMc nPDzT T3FoJb"
                                    href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=google+random+number+generator&tbm=bks&source=lnms&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0pQJegQIUhAB"
                                    jsname="VIftV"
                                    role="link"
                                    data-hveid="CFIQAQ"
                                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0pQJegQIUhAB"
                                  >
                                    <div jsname="bVqjv" className="GKS7s">
                                      <span className="FMKtTb UqcIvb" jsname="pIvPIe">
                                        Книги
                                      </span>
                                    </div>
                                  </a>
                                </div>
                                <div id="w4sBZYmTHJ_RwPAPx5aZiAo__8">
                                  <a
                                    className="LatpMc nPDzT T3FoJb"
                                    href="https://maps.google.com/maps?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&output=search&q=google+random+number+generator&source=lnms&entry=mc&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0pQJegQIUxAB"
                                    jsname="VIftV"
                                    role="link"
                                    data-hveid="CFMQAQ"
                                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0pQJegQIUxAB"
                                  >
                                    <div jsname="bVqjv" className="GKS7s">
                                      <span className="FMKtTb UqcIvb" jsname="pIvPIe">
                                        Карты
                                      </span>
                                    </div>
                                  </a>
                                </div>
                                <div id="w4sBZYmTHJ_RwPAPx5aZiAo__9">
                                  <a
                                    className="LatpMc nPDzT T3FoJb"
                                    href="/travel/flights?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&output=search&q=google+random+number+generator&source=lnms&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0pQJegQIURAB"
                                    jsname="VIftV"
                                    role="link"
                                    data-hveid="CFEQAQ"
                                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0pQJegQIURAB"
                                  >
                                    <div jsname="bVqjv" className="GKS7s">
                                      <span className="FMKtTb UqcIvb" jsname="pIvPIe">
                                        Авиабилеты
                                      </span>
                                    </div>
                                  </a>
                                </div>
                                <div id="w4sBZYmTHJ_RwPAPx5aZiAo__10">
                                  <a
                                    className="LatpMc nPDzT T3FoJb"
                                    href="/finance?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&output=search&q=google+random+number+generator&source=lnms&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0pQJegQIUBAB"
                                    jsname="VIftV"
                                    role="link"
                                    data-hveid="CFAQAQ"
                                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0pQJegQIUBAB"
                                  >
                                    <div jsname="bVqjv" className="GKS7s">
                                      <span className="FMKtTb UqcIvb" jsname="pIvPIe">
                                        Финансы
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div jsname="dS5Bb" className="F9Idpe Iy1nvd" />
                              <div jsname="HbXMbc" className="F9Idpe vezEod" />
                              <button
                                jsname="ggE0ke"
                                className="Iy1nvd SvoXfb"
                                jsaction="click: VeAzv"
                                aria-hidden="true"
                                tabIndex={-1}
                                data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQmbMJegQICRAB"
                              >
                                <svg
                                  className="x5f7Bc"
                                  focusable="false"
                                  viewBox="0 0 48 48"
                                >
                                  <path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" />
                                </svg>
                              </button>
                              <button
                                jsname="xpqF6b"
                                className="vezEod SvoXfb"
                                jsaction="click: NfCDXd"
                                aria-hidden="true"
                                tabIndex={-1}
                                data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQmrMJegQICRAC"
                              >
                                <svg
                                  className="x5f7Bc"
                                  focusable="false"
                                  viewBox="0 0 48 48"
                                >
                                  <path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div jsname="wKal9e" />
                      </div>
                    </div>
                    <div className="sKb6pb" id="uddia_1" style={{ height: 40 }}>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '.fKmH1e{align-items:center;border-radius:8px;color:#70757a;column-gap:4px;display:flex;font-family:Google Sans,arial,sans-serif;font-size:14px;margin-bottom:8px;padding:0 9px 0 12px;white-space:nowrap}div[aria-expanded="true"] .fKmH1e{background-color:#e8f0fe;color:#1a73e8}.bSeRjc:hover div[aria-expanded="true"] .fKmH1e{background-color:#d2e3fc;color:#1a73e8}g-menu.DWsAYc{padding:16px 0}g-menu.DWsAYc g-menu-item a.K1yPdf{align-items:center;color:#5f6368;display:flex;font-family:Google Sans,arial,sans-serif;font-size:14px;gap:12px;height:30px;padding:0 16px}.bSeRjc{border-radius:8px;height:40px;line-height:40px;margin-left:12px}.bSeRjc:hover .fKmH1e{background-color:#f1f3f4;color:#202124}'
                        }}
                      />
                      <span
                        className="bSeRjc"
                        jscontroller="nabPbb"
                        data-ffp="false"
                        jsaction="KyPa0e:Y0y4c;BVfjhf:VFzweb;wjOG7e:gDkf4c;"
                      >
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              ".cF4V5c{background-color:#fff}.cF4V5c g-menu-item{display:block;font-size:14px;line-height:23px;white-space:nowrap}.cF4V5c g-menu-item a,.cF4V5c .y0fQ9c{display:block;padding-top:4px;padding-bottom:4px;cursor:pointer}.cF4V5c g-menu-item a,.cF4V5c g-menu-item a:visited,.cF4V5c g-menu-item a:hover{text-decoration:inherit;color:inherit}"
                          }}
                        />
                        <g-popup
                          jsname="V68bde"
                          jscontroller="DPreE"
                          jsaction="A05xBd:IYtByb;EOZ57e:WFrRFb;"
                          jsdata="mVjAjf;_;Asauk4"
                        >
                          <div
                            jsname="oYxtQd"
                            className="CcNe6e"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="button"
                            tabIndex={0}
                            jsaction="WFrRFb;keydown:uYT2Vb"
                          >
                            <div jsname="LgbsSe" className="fKmH1e">
                              Все фильтры
                              <span
                                style={{ height: 20, lineHeight: 20, width: 20 }}
                                className="z1asCe K1bG5d"
                              >
                                <svg
                                  focusable="false"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M7 10l5 5 5-5z" />
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div
                            jsname="V68bde"
                            className="UjBGL pkWBse iRQHZe"
                            style={{ display: "none", zIndex: 200 }}
                            id="_w4sBZYmTHJ_RwPAPx5aZiAo_9"
                          >
                            <g-menu
                              jsname="xl07Ob"
                              className="cF4V5c DWsAYc yTik0 wplJBd PBn44e iQXTJe"
                              jscontroller="WlNQGd"
                              role="menu"
                              tabIndex={-1}
                              jsaction="PSl28c;focus:h06R8;keydown:uYT2Vb;mouseenter:WOQqYb;mouseleave:Tx5Rb;mouseover:IgJl9c"
                            >
                              <g-menu-item
                                jsname="NNJLud"
                                jscontroller="CnSW2d"
                                className="EpPYLd GZnQqe"
                                role="none"
                                data-short-label=""
                                jsdata="zPXzie;_;Asauk8"
                              >
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      ".EpPYLd{display:block;position:relative}.YpcDnf{padding:0 16px;vertical-align:middle}.YpcDnf.HG1dvd{padding:0}.HG1dvd>*{padding:0 16px}.WtV5nd .YpcDnf{padding-left:28px}.Zt0a5e .YpcDnf{line-height:48px}.GZnQqe .YpcDnf{line-height:23px}.EpPYLd:hover{cursor:pointer}.EpPYLd,.CB8nDe:hover{cursor:default}.LGiluc,.EpPYLd[disabled]{pointer-events:none;cursor:default}.LGiluc{border-top:1px solid;height:0;margin:5px 0}.Zt0a5e.CB8nDe{background:no-repeat left 8px center;background-image:url(//ssl.gstatic.com/images/icons/material/system/1x/done_black_16dp.png)}.GZnQqe.CB8nDe{background:no-repeat left center;background-image:url(//ssl.gstatic.com/ui/v1/menu/checkmark2.png)}.GZnQqe.LGiluc,.GZnQqe.EpPYLd[disabled]{color:#dadce0 !important}.GZnQqe.LGiluc{border-top-color:#dadce0;}"
                                  }}
                                />
                                <div
                                  jsname="ibnC6b"
                                  className="YpcDnf OSrXXb HG1dvd"
                                  role="none"
                                >
                                  <a
                                    className="K1yPdf"
                                    href="/search?q=google+random+number+generator&sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&tbm=isch&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&source=lnms&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0pQJKAB6BAgCEAM"
                                    role="menuitem"
                                    tabIndex={-1}
                                  >
                                    <span>Картинки</span>
                                  </a>
                                </div>
                              </g-menu-item>
                              <g-menu-item
                                jsname="NNJLud"
                                jscontroller="CnSW2d"
                                className="EpPYLd GZnQqe"
                                role="none"
                                data-short-label=""
                                jsdata="zPXzie;_;Asauk8"
                              >
                                <div
                                  jsname="ibnC6b"
                                  className="YpcDnf OSrXXb HG1dvd"
                                  role="none"
                                >
                                  <a
                                    className="K1yPdf"
                                    href="/search?q=google+random+number+generator&sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&tbm=vid&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&source=lnms&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0pQJKAF6BAgCEAQ"
                                    role="menuitem"
                                    tabIndex={-1}
                                  >
                                    <span>Видео</span>
                                  </a>
                                </div>
                              </g-menu-item>
                              <g-menu-item
                                jsname="NNJLud"
                                jscontroller="CnSW2d"
                                className="EpPYLd GZnQqe"
                                role="none"
                                data-short-label=""
                                jsdata="zPXzie;_;Asauk8"
                              >
                                <div
                                  jsname="ibnC6b"
                                  className="YpcDnf OSrXXb HG1dvd"
                                  role="none"
                                >
                                  <a
                                    className="K1yPdf"
                                    href="/search?q=google+random+number+generator&sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&tbm=nws&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&source=lnms&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0pQJKAJ6BAgCEAU"
                                    role="menuitem"
                                    tabIndex={-1}
                                  >
                                    <span>Новости</span>
                                  </a>
                                </div>
                              </g-menu-item>
                              <g-menu-item
                                jsname="NNJLud"
                                jscontroller="CnSW2d"
                                className="EpPYLd GZnQqe"
                                role="none"
                                data-short-label=""
                                jsdata="zPXzie;_;Asauk8"
                              >
                                <div
                                  jsname="ibnC6b"
                                  className="YpcDnf OSrXXb HG1dvd"
                                  role="none"
                                >
                                  <a
                                    className="K1yPdf"
                                    href="/search?q=google+random+number+generator&sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&tbm=bks&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&source=lnms&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0pQJKAN6BAgCEAY"
                                    role="menuitem"
                                    tabIndex={-1}
                                  >
                                    <span>Книги</span>
                                  </a>
                                </div>
                              </g-menu-item>
                              <g-menu-item
                                jsname="NNJLud"
                                jscontroller="CnSW2d"
                                className="EpPYLd GZnQqe"
                                role="none"
                                data-short-label=""
                                jsdata="zPXzie;_;Asauk8"
                              >
                                <div
                                  jsname="ibnC6b"
                                  className="YpcDnf OSrXXb HG1dvd"
                                  role="none"
                                >
                                  <a
                                    className="K1yPdf"
                                    href="https://www.google.com/finance?sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0pQJKAR6BAgCEAc"
                                    role="menuitem"
                                    tabIndex={-1}
                                  >
                                    <span>Финансы</span>
                                  </a>
                                </div>
                              </g-menu-item>
                            </g-menu>
                          </div>
                        </g-popup>
                      </span>
                      <div className="IDFSOe" />
                      <div className="PuHHbb">
                        <div
                          className="nfSF8e"
                          id="hdtb-tls"
                          aria-controls="hdtbMenus"
                          aria-expanded="false"
                          role="button"
                          tabIndex={0}
                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ2x96BAgCEAg"
                        >
                          Инструменты
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="WRhYSc VDgVie" id="abss-dropdown_1">
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          ".pdswFd{z-index:3}.pdswFd .hdtb-mitem{display:inline-block}.cdtWk{display:inline-block;line-height:29px}.Doo7xc{line-height:40px;width:120px}"
                      }}
                    />
                    <ol className="pdswFd" role="none">
                      <li className="hdtb-mitem">
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              '.fFI3rb{padding:13px 6px 8px 12px;border-radius:8px}.F75bid{color:#5f6368;display:inline-block}.fFI3rb{padding-top:8px}.nr7I6e div[aria-haspopup="true"]{padding-bottom:8px}.F75bid{color:#70757a}div[aria-expanded="true"] .fFI3rb{background-color:#e8f0fe}div[aria-expanded="true"] .fFI3rb:hover{background-color:#d2e3fc}.nr7I6e div[aria-expanded="true"] .F75bid,.nr7I6e div[aria-expanded="true"]:hover .fFI3rb .F75bid{color:#1a73e8}.nr7I6e div[aria-haspopup="true"]:hover .F75bid{color:#202124}.RVRNTb div[role="none"]{line-height:36px;padding:0}.RVRNTb .z4R3Z{padding-right:26px;text-align:left;color:#202124}.RVRNTb .z4R3Z.yb2zA{color:#1a0dab}.RVRNTb a.kQyaVc,.RVRNTb a.kQyaVc:visited{padding:0;color:#202124}.RVRNTb a.kQyaVc:hover{text-decoration:none;color:#202124}'
                          }}
                        />
                        <div className="nr7I6e">
                          <span
                            jscontroller="nabPbb"
                            data-ffp="false"
                            jsaction="KyPa0e:Y0y4c;BVfjhf:VFzweb;wjOG7e:gDkf4c;"
                          >
                            <g-popup
                              jsname="V68bde"
                              jscontroller="DPreE"
                              jsaction="A05xBd:IYtByb;EOZ57e:WFrRFb;"
                              jsdata="mVjAjf;_;Asauk4"
                            >
                              <div
                                jsname="oYxtQd"
                                className="CcNe6e"
                                aria-expanded="false"
                                aria-haspopup="true"
                                role="button"
                                tabIndex={0}
                                jsaction="WFrRFb;keydown:uYT2Vb"
                              >
                                <div
                                  jsname="LgbsSe"
                                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ7KcKegQIAhAK"
                                >
                                  <g-dropdown-button className="fFI3rb NkCsjc">
                                    <style
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          ".NkCsjc{position:relative;display:block;outline:none}.BslMec{cursor:pointer;color:#70757a;font-size:12px;display:block}.S7TGef{font-size:14px;height:24px;line-height:24px;margin-right:1px;white-space:nowrap;display:inline}.S7TGef,.BpGBNe{font-weight:bold;color:#202124}.BpGBNe{vertical-align:top}#lb .S7TGef,#lb .BpGBNe{color:#4285f4}"
                                      }}
                                    />
                                    <g-dropdown-menu-button-caption
                                      className="S7TGef BBwThe"
                                      style={{ fontWeight: "normal" }}
                                      jscontroller="EbPKJf"
                                      data-ddph=""
                                      jsaction="rcuQ6b:npT2md"
                                    >
                                      <span jsname="vs0Yb">
                                        <style
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              ".MmOzS{vertical-align:middle;padding-bottom:2px;padding-left:4px}"
                                          }}
                                        />
                                        <div className="F75bid">
                                          Безопасный поиск
                                          <span
                                            className="MmOzS z1asCe K1bG5d"
                                            style={{
                                              height: 20,
                                              lineHeight: 20,
                                              width: 20
                                            }}
                                          >
                                            <svg
                                              focusable="false"
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24 24"
                                            >
                                              <path d="M7 10l5 5 5-5z" />
                                            </svg>
                                          </span>
                                        </div>
                                      </span>
                                    </g-dropdown-menu-button-caption>
                                  </g-dropdown-button>
                                </div>
                              </div>
                              <div
                                jsname="V68bde"
                                className="UjBGL pkWBse iRQHZe"
                                style={{ display: "none", zIndex: 200 }}
                                id="_w4sBZYmTHJ_RwPAPx5aZiAo_20"
                              >
                                <g-menu
                                  jsname="xl07Ob"
                                  className="cF4V5c yTik0 wplJBd PBn44e iQXTJe"
                                  jscontroller="WlNQGd"
                                  role="menu"
                                  tabIndex={-1}
                                  jsaction="PSl28c;focus:h06R8;keydown:uYT2Vb;mouseenter:WOQqYb;mouseleave:Tx5Rb;mouseover:IgJl9c"
                                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQtvsKegQIAhAM"
                                >
                                  <g-menu-item
                                    jsname="NNJLud"
                                    className="RVRNTb EpPYLd Zt0a5e"
                                    jscontroller="CnSW2d"
                                    role="none"
                                    data-short-label=""
                                    jsdata="zPXzie;_;Asauk8"
                                  >
                                    <div
                                      jsname="ibnC6b"
                                      className="YpcDnf OSrXXb"
                                      role="none"
                                    >
                                      <a
                                        className="kQyaVc"
                                        href="/setprefs?sig=0_cb5RwzmgjYD4WzHdOfwtSrok_1o%3D&prev=https://www.google.com/search?q%3Dgoogle%2Brandom%2Bnumber%2Bgenerator%26rlz%3D1C5CHFA_enUZ1068UZ1068%26oq%3Dgoogle%2B%26aqs%3Dchrome.0.69i59l3j69i60l4j69i65%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8&safeui=on"
                                        role="menuitem"
                                        tabIndex={-1}
                                        ping="/url?sa=t&source=web&rct=j&opi=89978449&url=/setprefs%3Fsig%3D0_cb5RwzmgjYD4WzHdOfwtSrok_1o%253D%26prev%3Dhttps://www.google.com/search%3Fq%253Dgoogle%252Brandom%252Bnumber%252Bgenerator%2526rlz%253D1C5CHFA_enUZ1068UZ1068%2526oq%253Dgoogle%252B%2526aqs%253Dchrome.0.69i59l3j69i60l4j69i65%2526pf%253Dcs%2526sourceid%253Dchrome%2526ie%253DUTF-8%26safeui%3Don&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ3roKegQIAhAO&sqi=2"
                                      >
                                        <div className="z4R3Z">
                                          <style
                                            dangerouslySetInnerHTML={{
                                              __html:
                                                ".L3FBEc{width:26px;display:inline-block}.wWjvRd{vertical-align:text-bottom;padding:0 5px}"
                                            }}
                                          />
                                          <span className="L3FBEc" />
                                          Не показывать результаты сексуального
                                          характера
                                        </div>
                                      </a>
                                    </div>
                                  </g-menu-item>
                                  <g-menu-item
                                    jsname="NNJLud"
                                    className="RVRNTb EpPYLd Zt0a5e"
                                    jscontroller="CnSW2d"
                                    role="none"
                                    data-short-label=""
                                    jsdata="zPXzie;_;Asauk8"
                                  >
                                    <div
                                      jsname="ibnC6b"
                                      className="YpcDnf OSrXXb"
                                      role="none"
                                    >
                                      <a
                                        className="kQyaVc"
                                        href="/setprefs?sig=0_cb5RwzmgjYD4WzHdOfwtSrok_1o%3D&prev=https://www.google.com/search?q%3Dgoogle%2Brandom%2Bnumber%2Bgenerator%26rlz%3D1C5CHFA_enUZ1068UZ1068%26oq%3Dgoogle%2B%26aqs%3Dchrome.0.69i59l3j69i60l4j69i65%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8&safeui=images"
                                        role="menuitem"
                                        tabIndex={-1}
                                        ping="/url?sa=t&source=web&rct=j&opi=89978449&url=/setprefs%3Fsig%3D0_cb5RwzmgjYD4WzHdOfwtSrok_1o%253D%26prev%3Dhttps://www.google.com/search%3Fq%253Dgoogle%252Brandom%252Bnumber%252Bgenerator%2526rlz%253D1C5CHFA_enUZ1068UZ1068%2526oq%253Dgoogle%252B%2526aqs%253Dchrome.0.69i59l3j69i60l4j69i65%2526pf%253Dcs%2526sourceid%253Dchrome%2526ie%253DUTF-8%26safeui%3Dimages&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ3boKegQIAhAP&sqi=2"
                                      >
                                        <div className="z4R3Z">
                                          <span className="L3FBEc" />
                                          Размывать изображения для взрослых
                                        </div>
                                      </a>
                                    </div>
                                  </g-menu-item>
                                  <g-menu-item
                                    jsname="NNJLud"
                                    className="RVRNTb EpPYLd Zt0a5e"
                                    jscontroller="CnSW2d"
                                    role="none"
                                    data-short-label=""
                                    jsdata="zPXzie;_;Asauk8"
                                  >
                                    <div
                                      jsname="ibnC6b"
                                      className="YpcDnf OSrXXb"
                                      role="none"
                                    >
                                      <a
                                        className="kQyaVc"
                                        data-nohref={1}
                                        href="#"
                                        aria-label="Выключить, выбрано"
                                        role="menuitem"
                                        tabIndex={-1}
                                        ping="/url?sa=t&source=web&rct=j&opi=89978449&url=%23&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ37oKegQIAhAQ&sqi=2"
                                      >
                                        <div className="z4R3Z">
                                          <span
                                            className="wWjvRd z1asCe rH6l6"
                                            style={{
                                              height: 16,
                                              lineHeight: 16,
                                              width: 16
                                            }}
                                          >
                                            <svg
                                              focusable="false"
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24 24"
                                            >
                                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                            </svg>
                                          </span>
                                          Выключить
                                        </div>
                                      </a>
                                    </div>
                                  </g-menu-item>
                                  <g-menu-item
                                    jsname="NNJLud"
                                    style={{ margin: 0 }}
                                    jscontroller="CnSW2d"
                                    className="EpPYLd GZnQqe LGiluc"
                                    aria-hidden="true"
                                    role="separator"
                                    data-short-label=""
                                    jsdata="zPXzie;_;AsaulY"
                                  />
                                  <g-menu-item
                                    jsname="NNJLud"
                                    className="RVRNTb EpPYLd Zt0a5e"
                                    jscontroller="CnSW2d"
                                    role="none"
                                    data-short-label=""
                                    jsdata="zPXzie;_;Asauk8"
                                  >
                                    <div
                                      jsname="ibnC6b"
                                      className="YpcDnf OSrXXb"
                                      role="none"
                                    >
                                      <a
                                        className="kQyaVc"
                                        href="/safesearch?hl=ru-UZ&prev=https://www.google.com/search?q%3Dgoogle%2Brandom%2Bnumber%2Bgenerator%26rlz%3D1C5CHFA_enUZ1068UZ1068%26oq%3Dgoogle%2B%26aqs%3Dchrome.0.69i59l3j69i60l4j69i65%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ3fwIegQIAhAR"
                                        role="menuitem"
                                        tabIndex={-1}
                                      >
                                        <div className="z4R3Z yb2zA">
                                          <span className="L3FBEc" />О Безопасном
                                          поиске
                                        </div>
                                      </a>
                                    </div>
                                  </g-menu-item>
                                </g-menu>
                              </div>
                            </g-popup>
                          </span>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html: ".wtAAQb{display:none;visibility:hidden}"
              }}
            />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".Lj8KXd{background-color:transparent;top:0;width:100%;white-space:nowrap;height:22px;position:absolute;-webkit-transition:top 220ms ease-in-out;}.p4DDCd{display:none}.gTMtLb{z-index:1001;position:absolute;top:-1000px}@keyframes ghost-card-shimmering {0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}"
              }}
            />
            <div
              jscontroller="HYSCof"
              className="gke0pe"
              id="top_nav"
              jsdata="Z1JpA;_;AsaulA"
              jsaction="rcuQ6b:npT2md"
            >
              <div className="GLcBOb" id="hdtb">
                <div
                  className="Lj8KXd p4DDCd"
                  data-st-cnt="stb"
                  id="hdtbMenus"
                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ3B96BAgDEAE"
                >
                  <div className="muaC1e eTnfyc" id="tn_1">
                    <div className="LkcePc" />
                    <span
                      jscontroller="nabPbb"
                      data-ffp="false"
                      jsaction="KyPa0e:Y0y4c;BVfjhf:VFzweb;wjOG7e:gDkf4c;"
                    >
                      <g-popup
                        jsname="V68bde"
                        jscontroller="DPreE"
                        jsaction="A05xBd:IYtByb;EOZ57e:WFrRFb;"
                        jsdata="mVjAjf;_;Asauk4"
                      >
                        <div
                          jsname="oYxtQd"
                          className="CcNe6e"
                          aria-expanded="false"
                          aria-haspopup="true"
                          role="button"
                          tabIndex={0}
                          jsaction="WFrRFb;keydown:uYT2Vb"
                        >
                          <div jsname="LgbsSe">
                            <div className="hdtb-mn-hd Yg3U7e">
                              <div className="KTBKoe">На всех языках</div>
                              <span className="gTl8xb" />
                            </div>
                          </div>
                        </div>
                        <div
                          jsname="V68bde"
                          className="UjBGL pkWBse iRQHZe"
                          style={{ display: "none", zIndex: 200 }}
                        >
                          <g-menu
                            jsname="xl07Ob"
                            className="cF4V5c Tlae9d yTik0 wplJBd PBn44e iQXTJe"
                            jscontroller="WlNQGd"
                            role="menu"
                            tabIndex={-1}
                            jsaction="PSl28c;focus:h06R8;keydown:uYT2Vb;mouseenter:WOQqYb;mouseleave:Tx5Rb;mouseover:IgJl9c"
                          >
                            <g-menu-item
                              jsname="NNJLud"
                              className="nvELY EpPYLd GZnQqe"
                              jscontroller="CnSW2d"
                              role="none"
                              data-short-label=""
                              jsdata="zPXzie;_;Asauk8"
                            >
                              <div
                                jsname="ibnC6b"
                                className="YpcDnf OSrXXb HG1dvd"
                                role="none"
                              >
                                <div
                                  className="y0fQ9c"
                                  aria-checked="true"
                                  role="menuitemradio"
                                  tabIndex={0}
                                >
                                  На всех языках
                                </div>
                              </div>
                            </g-menu-item>
                            <g-menu-item
                              jsname="NNJLud"
                              jscontroller="CnSW2d"
                              className="EpPYLd GZnQqe"
                              role="none"
                              data-short-label=""
                              jsdata="zPXzie;_;Asauk8"
                            >
                              <div
                                jsname="ibnC6b"
                                className="YpcDnf OSrXXb HG1dvd"
                                role="none"
                              >
                                <a
                                  href="/search?q=google+random+number+generator&sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&source=lnt&tbs=lr:lang_1ru&lr=lang_ru&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQpwV6BAgDEAc"
                                  aria-checked="false"
                                  role="menuitemradio"
                                >
                                  Только на русский
                                </a>
                              </div>
                            </g-menu-item>
                          </g-menu>
                        </div>
                      </g-popup>
                    </span>
                    <span
                      jscontroller="nabPbb"
                      data-ffp="false"
                      jsaction="KyPa0e:Y0y4c;BVfjhf:VFzweb;wjOG7e:gDkf4c;"
                    >
                      <g-popup
                        jsname="V68bde"
                        jscontroller="DPreE"
                        jsaction="A05xBd:IYtByb;EOZ57e:WFrRFb;"
                        jsdata="mVjAjf;_;Asauk4"
                      >
                        <div
                          jsname="oYxtQd"
                          className="CcNe6e"
                          aria-expanded="false"
                          aria-haspopup="true"
                          role="button"
                          tabIndex={0}
                          jsaction="WFrRFb;keydown:uYT2Vb"
                        >
                          <div jsname="LgbsSe">
                            <div className="hdtb-mn-hd">
                              <div className="KTBKoe">За всё время</div>
                              <span className="gTl8xb" />
                            </div>
                          </div>
                        </div>
                        <div
                          jsname="V68bde"
                          className="UjBGL pkWBse iRQHZe"
                          style={{ display: "none", zIndex: 200 }}
                        >
                          <g-menu
                            jsname="xl07Ob"
                            className="cF4V5c Tlae9d yTik0 wplJBd PBn44e iQXTJe"
                            jscontroller="WlNQGd"
                            role="menu"
                            tabIndex={-1}
                            jsaction="PSl28c;focus:h06R8;keydown:uYT2Vb;mouseenter:WOQqYb;mouseleave:Tx5Rb;mouseover:IgJl9c"
                          >
                            <g-menu-item
                              jsname="NNJLud"
                              className="nvELY EpPYLd GZnQqe"
                              jscontroller="CnSW2d"
                              role="none"
                              data-short-label=""
                              jsdata="zPXzie;_;Asauk8"
                            >
                              <div
                                jsname="ibnC6b"
                                className="YpcDnf OSrXXb HG1dvd"
                                role="none"
                              >
                                <div
                                  className="y0fQ9c"
                                  aria-checked="true"
                                  role="menuitemradio"
                                  tabIndex={0}
                                >
                                  За всё время
                                </div>
                              </div>
                            </g-menu-item>
                            <g-menu-item
                              jsname="NNJLud"
                              jscontroller="CnSW2d"
                              className="EpPYLd GZnQqe"
                              role="none"
                              data-short-label=""
                              jsdata="zPXzie;_;Asauk8"
                            >
                              <div
                                jsname="ibnC6b"
                                className="YpcDnf OSrXXb HG1dvd"
                                role="none"
                              >
                                <a
                                  href="/search?q=google+random+number+generator&sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&source=lnt&tbs=qdr:h&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQpwV6BAgDEAw"
                                  aria-checked="false"
                                  role="menuitemradio"
                                >
                                  {" "}
                                  За час
                                </a>
                              </div>
                            </g-menu-item>
                            <g-menu-item
                              jsname="NNJLud"
                              jscontroller="CnSW2d"
                              className="EpPYLd GZnQqe"
                              role="none"
                              data-short-label=""
                              jsdata="zPXzie;_;Asauk8"
                            >
                              <div
                                jsname="ibnC6b"
                                className="YpcDnf OSrXXb HG1dvd"
                                role="none"
                              >
                                <a
                                  href="/search?q=google+random+number+generator&sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&source=lnt&tbs=qdr:d&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQpwV6BAgDEA0"
                                  aria-checked="false"
                                  role="menuitemradio"
                                >
                                  {" "}
                                  За 24 часа
                                </a>
                              </div>
                            </g-menu-item>
                            <g-menu-item
                              jsname="NNJLud"
                              jscontroller="CnSW2d"
                              className="EpPYLd GZnQqe"
                              role="none"
                              data-short-label=""
                              jsdata="zPXzie;_;Asauk8"
                            >
                              <div
                                jsname="ibnC6b"
                                className="YpcDnf OSrXXb HG1dvd"
                                role="none"
                              >
                                <a
                                  href="/search?q=google+random+number+generator&sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&source=lnt&tbs=qdr:w&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQpwV6BAgDEA4"
                                  aria-checked="false"
                                  role="menuitemradio"
                                >
                                  {" "}
                                  За неделю
                                </a>
                              </div>
                            </g-menu-item>
                            <g-menu-item
                              jsname="NNJLud"
                              jscontroller="CnSW2d"
                              className="EpPYLd GZnQqe"
                              role="none"
                              data-short-label=""
                              jsdata="zPXzie;_;Asauk8"
                            >
                              <div
                                jsname="ibnC6b"
                                className="YpcDnf OSrXXb HG1dvd"
                                role="none"
                              >
                                <a
                                  href="/search?q=google+random+number+generator&sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&source=lnt&tbs=qdr:m&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQpwV6BAgDEA8"
                                  aria-checked="false"
                                  role="menuitemradio"
                                >
                                  {" "}
                                  За месяц
                                </a>
                              </div>
                            </g-menu-item>
                            <g-menu-item
                              jsname="NNJLud"
                              jscontroller="CnSW2d"
                              className="EpPYLd GZnQqe"
                              role="none"
                              data-short-label=""
                              jsdata="zPXzie;_;Asauk8"
                            >
                              <div
                                jsname="ibnC6b"
                                className="YpcDnf OSrXXb HG1dvd"
                                role="none"
                              >
                                <a
                                  href="/search?q=google+random+number+generator&sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&source=lnt&tbs=qdr:y&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQpwV6BAgDEBA"
                                  aria-checked="false"
                                  role="menuitemradio"
                                >
                                  {" "}
                                  За год
                                </a>
                              </div>
                            </g-menu-item>
                            <g-menu-item
                              jsname="NNJLud"
                              jscontroller="CnSW2d"
                              className="EpPYLd GZnQqe"
                              role="none"
                              data-short-label=""
                              jsdata="zPXzie;_;Asauk8"
                            >
                              <div
                                jsname="ibnC6b"
                                className="YpcDnf OSrXXb HG1dvd"
                                role="none"
                              >
                                <div
                                  className="y0fQ9c"
                                  jscontroller="VD4Qme"
                                  data-m="false"
                                >
                                  <span
                                    role="menuitem"
                                    tabIndex={-1}
                                    jsaction="EEGHee"
                                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQpwV6BAgDEBE"
                                  >
                                    За период...
                                  </span>
                                  <div className="n5Ug4b" style={{ display: "none" }}>
                                    <div className="vOvh1b" jsaction="xp3IKd" />
                                    <div
                                      className="J6UZg"
                                      aria-modal="true"
                                      role="dialog"
                                    >
                                      <div className="Jy9Ore" role="heading">
                                        За период
                                      </div>
                                      <label
                                        className="Qtsmnf tmDYm"
                                        htmlFor="OouJcb"
                                      >
                                        c
                                      </label>
                                      <label
                                        className="Qtsmnf iWBKNe"
                                        htmlFor="rzG2be"
                                      >
                                        по
                                      </label>
                                      <div
                                        className="Gwgzqd"
                                        aria-label="Закрыть"
                                        role="button"
                                        tabIndex={0}
                                        jsaction="xp3IKd"
                                      />
                                      <div className="NwEGxd">
                                        <div className="qomYCd" />
                                        <form
                                          action="/search"
                                          className="T3kYXe"
                                          id="T3kYXe"
                                          method="get"
                                        >
                                          <input
                                            name="q"
                                            defaultValue="google random number generator"
                                            type="hidden"
                                          />
                                          <input
                                            name="sca_esv"
                                            defaultValue={564974394}
                                            type="hidden"
                                          />
                                          <input
                                            name="rlz"
                                            defaultValue="1C5CHFA_enUZ1068UZ1068"
                                            type="hidden"
                                          />
                                          <input
                                            name="sxsrf"
                                            defaultValue="AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468"
                                            type="hidden"
                                          />
                                          <input
                                            name="source"
                                            type="hidden"
                                            defaultValue="lnt"
                                          />
                                          <input
                                            defaultValue="cdr:1,cd_min:x,cd_max:x"
                                            id="HjtPBb"
                                            name="tbs"
                                            type="hidden"
                                          />
                                          <input
                                            defaultValue=""
                                            name="tbm"
                                            type="hidden"
                                          />
                                          <input
                                            className="OouJcb"
                                            type="text"
                                            defaultValue=""
                                            autoComplete="off"
                                            id="OouJcb"
                                            jsaction="focus:daRB0b"
                                          />
                                          <input
                                            className="rzG2be"
                                            type="text"
                                            defaultValue=""
                                            autoComplete="off"
                                            id="rzG2be"
                                            jsaction="focus:daRB0b"
                                          />
                                          <g-button
                                            className="Ru1Ao BwGU8e fE5Rge"
                                            jsaction="hNEEAb"
                                            role="button"
                                            tabIndex={0}
                                          >
                                            Поиск
                                          </g-button>
                                          <input
                                            type="submit"
                                            jsaction="zbvklb"
                                            style={{ display: "none" }}
                                          />
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </g-menu-item>
                          </g-menu>
                        </div>
                      </g-popup>
                    </span>
                    <span
                      jscontroller="nabPbb"
                      data-ffp="false"
                      jsaction="KyPa0e:Y0y4c;BVfjhf:VFzweb;wjOG7e:gDkf4c;"
                    >
                      <g-popup
                        jsname="V68bde"
                        jscontroller="DPreE"
                        jsaction="A05xBd:IYtByb;EOZ57e:WFrRFb;"
                        jsdata="mVjAjf;_;Asauk4"
                      >
                        <div
                          jsname="oYxtQd"
                          className="CcNe6e"
                          aria-expanded="false"
                          aria-haspopup="true"
                          role="button"
                          tabIndex={0}
                          jsaction="WFrRFb;keydown:uYT2Vb"
                        >
                          <div jsname="LgbsSe">
                            <div className="hdtb-mn-hd">
                              <div className="KTBKoe">Все результаты</div>
                              <span className="gTl8xb" />
                            </div>
                          </div>
                        </div>
                        <div
                          jsname="V68bde"
                          className="UjBGL pkWBse iRQHZe"
                          style={{ display: "none", zIndex: 200 }}
                        >
                          <g-menu
                            jsname="xl07Ob"
                            className="cF4V5c Tlae9d yTik0 wplJBd PBn44e iQXTJe"
                            jscontroller="WlNQGd"
                            role="menu"
                            tabIndex={-1}
                            jsaction="PSl28c;focus:h06R8;keydown:uYT2Vb;mouseenter:WOQqYb;mouseleave:Tx5Rb;mouseover:IgJl9c"
                          >
                            <g-menu-item
                              jsname="NNJLud"
                              className="nvELY EpPYLd GZnQqe"
                              jscontroller="CnSW2d"
                              role="none"
                              data-short-label=""
                              jsdata="zPXzie;_;Asauk8"
                            >
                              <div
                                jsname="ibnC6b"
                                className="YpcDnf OSrXXb HG1dvd"
                                role="none"
                              >
                                <div
                                  className="y0fQ9c"
                                  aria-checked="true"
                                  role="menuitemradio"
                                  tabIndex={0}
                                >
                                  Все результаты
                                </div>
                              </div>
                            </g-menu-item>
                            <g-menu-item
                              jsname="NNJLud"
                              jscontroller="CnSW2d"
                              className="EpPYLd GZnQqe"
                              role="none"
                              data-short-label=""
                              jsdata="zPXzie;_;Asauk8"
                            >
                              <div
                                jsname="ibnC6b"
                                className="YpcDnf OSrXXb HG1dvd"
                                role="none"
                              >
                                <a
                                  href="/search?q=google+&sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&source=lnt&tbs=li:1&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQpwV6BAgDEBc"
                                  aria-checked="false"
                                  role="menuitemradio"
                                >
                                  Точное соответствие
                                </a>
                              </div>
                            </g-menu-item>
                          </g-menu>
                        </div>
                      </g-popup>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div id="before-appbar" />
            <div className="gTMtLb fp-nh" id="lb" />
            <div className="appbar" data-st-cnt="top" id="appbar">
              <div data-st-tgt="top">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".WE0UJf{height:43px}.LHJvCe{color:#70757a;display:flex;justify-content:space-between;-webkit-transition:all 220ms ease-in-out;line-height:43px;min-width:652px;position:absolute;top:0}#result-stats{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Google Sans,arial,sans-serif;padding-top:0px;padding-bottom:0;padding-right:8px;}@keyframes loading-pulse {from{opacity:0.2}to{opacity:1}}.OvQkSb{border-radius:9999px}sentinel{}"
                  }}
                />
                <div id="extabar">
                  <div style={{ position: "relative" }}>
                    <div className="WE0UJf" id="slim_appbar">
                      <div className="LHJvCe">
                        <div id="result-stats">
                          Результатов: примерно 147&nbsp;000&nbsp;000
                          <nobr> (0,37 сек.)&nbsp;</nobr>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  jscontroller="sYEX8b"
                  jsname="GGAcbc"
                  className="AeB7Sc"
                  data-cssl="/setprefs?hl=ru&prev=https://www.google.com/search?q%3Dgoogle%2Brandom%2Bnumber%2Bgenerator%26rlz%3D1C5CHFA_enUZ1068UZ1068%26oq%3Dgoogle%2B%26aqs%3Dchrome.0.69i59l3j69i60l4j69i65%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8%26pccc%3D1&sig=0_cb5RwzmgjYD4WzHdOfwtSrok_1o%3D&cs=2"
                  data-eif={1}
                  data-eqd={1}
                  data-escd={1}
                  id="spic_1"
                  role="dialog"
                  tabIndex={-1}
                  jsaction="rcuQ6b:npT2md;Lhx8ef:hZ2GLc;UVNdjb;keydown:mivSOc"
                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQzNQJegQIBBAC"
                >
                  <div
                    jsname="TItCJc"
                    className="CbAZb"
                    id="elPddd"
                    role="dialog"
                    tabIndex={-1}
                    jsaction="mLt3mc"
                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQzpwIegQIBBAD"
                  >
                    <div className="cQ2awd">
                      <h1 className="S8wJ3">Быстрые настройки</h1>
                      <span
                        className="bepeF z1asCe wuXmqc"
                        aria-label="Close"
                        role="button"
                        tabIndex={0}
                        jsaction="UVNdjb"
                        data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQy9QJegQIBBAE"
                      >
                        <svg
                          focusable="false"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                      </span>
                      <a
                        className="tGS0Nc"
                        href="/preferences?hl=ru&prev=https://www.google.com/search?q%3Dgoogle%2Brandom%2Bnumber%2Bgenerator%26rlz%3D1C5CHFA_enUZ1068UZ1068%26oq%3Dgoogle%2B%26aqs%3Dchrome.0.69i59l3j69i60l4j69i65%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8"
                        tabIndex={0}
                        ping="/url?sa=t&source=web&rct=j&opi=89978449&url=/preferences%3Fhl%3Dru%26prev%3Dhttps://www.google.com/search%3Fq%253Dgoogle%252Brandom%252Bnumber%252Bgenerator%2526rlz%253D1C5CHFA_enUZ1068UZ1068%2526oq%253Dgoogle%252B%2526aqs%253Dchrome.0.69i59l3j69i60l4j69i65%2526pf%253Dcs%2526sourceid%253Dchrome%2526ie%253DUTF-8&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ65sIegQIBBAF&sqi=2"
                      >
                        Посмотреть все настройки Поиска
                      </a>
                    </div>
                    <div className="m0uvVb">
                      <h2 className="kwWBYc">Ваши действия</h2>
                      <div className="q0yked">
                        <a
                          href="https://myactivity.google.com/product/search?utm_source=google&utm_campaign=quick_settings&hl=ru"
                          ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://myactivity.google.com/product/search%3Futm_source%3Dgoogle%26utm_campaign%3Dquick_settings%26hl%3Dru&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ7JsIegQIBBAG&sqi=2"
                        >
                          <span className="ZI7elf">История поиска</span>
                          <div className="ogD9ue">
                            <span className="rhJQGd tkWDZc">
                              <span data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQoZYJegQIBBAH">
                                Сохранение
                              </span>
                            </span>
                            <span
                              style={{ color: "#5f6368" }}
                              className="z1asCe eznrjd"
                            >
                              <svg
                                focusable="false"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                              </svg>
                            </span>
                          </div>
                        </a>
                      </div>
                      <div
                        jsname="zbZtjd"
                        className="W3aG6d"
                        data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ1tcJegQIBBAI"
                      >
                        <c-wiz
                          jsrenderer="KEME6e"
                          className="b29FWc"
                          jsshadow=""
                          jsdata="deferred-c0"
                          data-p="%.@.0]"
                          data-node-index="0;0"
                          jsmodel="hc6Ubd"
                          c-wiz=""
                        >
                          <div
                            jscontroller="rFNHyc"
                            data-ved="0CAAQxMIJahcKEwjw6dm3raeBAxUAAAAAHQAAAAAQAg"
                          >
                            <div
                              jsname="itaskb"
                              data-ved="0CAEQgtkJahcKEwjw6dm3raeBAxUAAAAAHQAAAAAQAg"
                              data-kre="false"
                            >
                              <button
                                jsname="rQmgr"
                                className="Oz5Rbb"
                                jsaction="click:vuShse"
                                data-ved="0CAIQ4tgJahcKEwjw6dm3raeBAxUAAAAAHQAAAAAQAg"
                              >
                                <div className="JTvJue">
                                  <div className="l7xYUb">
                                    <div className="U4UTCf">
                                      Удалить историю за последние 15 минут
                                    </div>
                                    <div className="xXGrCd">
                                      <div className="hpMlJf" />
                                      <div className="N9Jyue">
                                        <div className="u0wZ6e">
                                          <span style={{}} className="z1asCe y47dGf">
                                            <svg
                                              focusable="false"
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24 24"
                                            >
                                              <path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z" />
                                              <path d="M9 8h2v9H9zm4 0h2v9h-2z" />
                                            </svg>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="amIkpf" jsname="ECXp9b" />
                                </div>
                              </button>
                            </div>
                            <div
                              jsname="MV7cDd"
                              data-ved="0CAMQstgJahcKEwjw6dm3raeBAxUAAAAAHQAAAAAQAg"
                            />
                          </div>
                          <c-data id="c0" />
                        </c-wiz>
                      </div>
                      <div>
                        <a
                          className="SknMB"
                          href="https://myactivity.google.com/privacyadvisor/search?utm_source=googlemenu"
                          ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://myactivity.google.com/privacyadvisor/search%3Futm_source%3Dgooglemenu&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ7ZsIegQIBBAJ&sqi=2"
                        >
                          <span className="tkWDZc">
                            Подробнее о ваших данных в Поиске…
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="m0uvVb">
                      <h2 className="kwWBYc">Использование Поиска</h2>
                      <div className="q0yked fmxhfc">
                        <a href="/safesearch?prev=https://www.google.com/search?q%3Dgoogle%2Brandom%2Bnumber%2Bgenerator%26rlz%3D1C5CHFA_enUZ1068UZ1068%26oq%3Dgoogle%2B%26aqs%3Dchrome.0.69i59l3j69i60l4j69i65%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ8JsIegQIBBAK">
                          <span className="XRZSle">
                            <span className="ZI7elf">Безопасный поиск</span>
                            <span className="Z48xed">
                              Помогает скрывать контент для взрослых
                            </span>
                          </span>
                          <span
                            style={{ color: "#5f6368" }}
                            className="z1asCe eznrjd"
                          >
                            <svg
                              focusable="false"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                            </svg>
                          </span>
                        </a>
                      </div>
                      <div className="q0yked">
                        <a
                          href="/preferences?lang=1&hl=ru&prev=https://www.google.com/search?q%3Dgoogle%2Brandom%2Bnumber%2Bgenerator%26rlz%3D1C5CHFA_enUZ1068UZ1068%26oq%3Dgoogle%2B%26aqs%3Dchrome.0.69i59l3j69i60l4j69i65%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8#languages"
                          style={{ display: "flex" }}
                          ping="/url?sa=t&source=web&rct=j&opi=89978449&url=/preferences%3Flang%3D1%26hl%3Dru%26prev%3Dhttps://www.google.com/search%3Fq%253Dgoogle%252Brandom%252Bnumber%252Bgenerator%2526rlz%253D1C5CHFA_enUZ1068UZ1068%2526oq%253Dgoogle%252B%2526aqs%253Dchrome.0.69i59l3j69i60l4j69i65%2526pf%253Dcs%2526sourceid%253Dchrome%2526ie%253DUTF-8%23languages&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ8ZsIegQIBBAL&sqi=2"
                        >
                          <div className="ZI7elf UCGAnb">
                            <span>Языки</span>
                            <span style={{ fontSize: 12 }}> (Languages)</span>
                          </div>
                          <span className="kQEH5b" style={{ color: "#70757a" }}>
                            русский
                          </span>
                        </a>
                      </div>
                      <div className="q0yked">
                        <a
                          href="/advanced_search?q=google+random+number+generator&sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&hl=ru"
                          ping="/url?sa=t&source=web&rct=j&opi=89978449&url=/advanced_search%3Fq%3Dgoogle%2Brandom%2Bnumber%2Bgenerator%26sca_esv%3D564974394%26rlz%3D1C5CHFA_enUZ1068UZ1068%26sxsrf%3DAB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468%26hl%3Dru&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ7psIegQIBBAM&sqi=2"
                        >
                          <span className="ZI7elf">Расширенный поиск</span>
                          <span
                            style={{ color: "#5f6368" }}
                            className="z1asCe eznrjd"
                          >
                            <svg
                              focusable="false"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="m0uvVb" jsaction="ivUr0:rJpNrc">
                      <h2 className="kwWBYc">Вид</h2>
                      <g-radio-button-group
                        jsname="sUvgTb"
                        className="uWNHce H8eL7d j0iFNe"
                        jscontroller="SZXsif"
                        aria-disabled="false"
                        data-rwl={1}
                        role="radiogroup"
                        jsaction="keydown:uYT2Vb;focus:h06R8;blur:zjh6rb;rcuQ6b:npT2md"
                      >
                        <div
                          jsname="GCYh9b"
                          className="de2Dud"
                          aria-checked="false"
                          aria-labelledby="_w4sBZYmTHJ_RwPAPx5aZiAo_22"
                          data-index={0}
                          tabIndex={-1}
                          role="radio"
                          jsaction="g6cJHd"
                        >
                          <div className="dsLpHe OvQkSb" />
                          <div className="kaAgDc OvQkSb" />
                          <div className="wT0tpe OvQkSb" />
                          <div className="dluk7e" id="_w4sBZYmTHJ_RwPAPx5aZiAo_22">
                            <label
                              className="GZcH3e LZTko"
                              jsname="rWsIUb"
                              style={{ display: "flex" }}
                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ9JsIegQIBBAN"
                            >
                              <div className="UCGAnb">Светлая тема</div>
                              <img
                                className="UCAEse"
                                src="https://www.gstatic.com/ui/v1/menu/light_thumbnail2.png"
                                alt=""
                              />
                            </label>
                          </div>
                        </div>
                        <div
                          jsname="GCYh9b"
                          className="de2Dud"
                          aria-checked="false"
                          aria-labelledby="_w4sBZYmTHJ_RwPAPx5aZiAo_23"
                          data-index={1}
                          tabIndex={-1}
                          role="radio"
                          jsaction="g6cJHd"
                        >
                          <div className="dsLpHe OvQkSb" />
                          <div className="kaAgDc OvQkSb" />
                          <div className="wT0tpe OvQkSb" />
                          <div className="dluk7e" id="_w4sBZYmTHJ_RwPAPx5aZiAo_23">
                            <label
                              className="GZcH3e LZTko"
                              jsname="I7WXBf"
                              style={{ display: "flex" }}
                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ9ZsIegQIBBAO"
                            >
                              <div className="UCGAnb">Тёмная тема</div>
                              <img
                                className="UCAEse"
                                src="https://www.gstatic.com/ui/v1/menu/dark_thumbnail2.png"
                                alt=""
                              />
                            </label>
                          </div>
                        </div>
                        <div
                          jsname="GCYh9b"
                          className="de2Dud RvdoFd"
                          aria-checked="true"
                          aria-labelledby="_w4sBZYmTHJ_RwPAPx5aZiAo_24"
                          data-index={2}
                          tabIndex={0}
                          role="radio"
                          jsaction="g6cJHd"
                        >
                          <div className="dsLpHe OvQkSb" />
                          <div className="kaAgDc OvQkSb" />
                          <div className="wT0tpe OvQkSb" />
                          <div className="dluk7e" id="_w4sBZYmTHJ_RwPAPx5aZiAo_24">
                            <label
                              className="GZcH3e LZTko"
                              jsname="qk0sxc"
                              style={{ display: "flex" }}
                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ9psIegQIBBAP"
                            >
                              <div className="UCGAnb">Вариант по умолчанию</div>
                              <img
                                className="UCAEse"
                                src="https://www.gstatic.com/ui/v1/menu/device_default_thumbnail2.png"
                                alt=""
                              />
                            </label>
                          </div>
                        </div>
                      </g-radio-button-group>
                    </div>
                    <div className="m0uvVb">
                      <h2 className="kwWBYc">Служба поддержки</h2>
                      <div className="q0yked">
                        <a
                          href="https://support.google.com/websearch/?p=dsrp_search_hc&hl=ru-UZ"
                          ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://support.google.com/websearch/%3Fp%3Ddsrp_search_hc%26hl%3Dru-UZ&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ8psIegQIBBAQ&sqi=2"
                        >
                          <span className="ZI7elf">Поиск в справке</span>
                          <span
                            style={{ color: "#5f6368" }}
                            className="z1asCe eznrjd"
                          >
                            <svg
                              focusable="false"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                            </svg>
                          </span>
                        </a>
                      </div>
                      <div className="q0yked">
                        <div
                          jsname="QTykS"
                          className="S4xgid"
                          role="button"
                          tabIndex={0}
                          jsaction="VsgDoc"
                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ85sIegQIBBAR"
                        >
                          <span className="ZI7elf">Отправить отзыв</span>
                          <span className="kQEH5b dVmoif">
                            <span className="aztjNb RVVZab">Новинка!</span>
                            <span
                              style={{ color: "#5f6368" }}
                              className="z1asCe dC6Tmc"
                            >
                              <svg
                                focusable="false"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12z" />
                                <path d="M11 12h2v2h-2zm0-6h2v4h-2z" />
                              </svg>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="q0yked">
                        <a
                          href="https://policies.google.com/privacy?hl=ru-UZ&fg=1"
                          ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://policies.google.com/privacy%3Fhl%3Dru-UZ%26fg%3D1&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQxZEKegQIBBAS&sqi=2"
                        >
                          <span className="ZI7elf">Конфиденциальность</span>
                          <span
                            style={{ color: "#5f6368" }}
                            className="z1asCe eznrjd"
                          >
                            <svg
                              focusable="false"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                            </svg>
                          </span>
                        </a>
                      </div>
                      <div className="q0yked">
                        <a
                          href="https://policies.google.com/terms?hl=ru-UZ&fg=1"
                          ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://policies.google.com/terms%3Fhl%3Dru-UZ%26fg%3D1&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQu58KegQIBBAT&sqi=2"
                        >
                          <span className="ZI7elf">Условия использования</span>
                          <span
                            style={{ color: "#5f6368" }}
                            className="z1asCe eznrjd"
                          >
                            <svg
                              focusable="false"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div id="_w4sBZYmTHJ_RwPAPx5aZiAo_25">
              {" "}
              <div jsname="rSAM5d">
                {" "}
                <div
                  style={{ opacity: 0 }}
                  id="arc-stev"
                  data-jiis="up"
                  data-async-type="arc"
                  data-async-context-required="arc_id,q"
                  className="yp"
                  data-async-rclass="search"
                />{" "}
              </div>{" "}
              <div
                jsname="UefMMd"
                className="Lm68h s6JM6d"
                style={{ display: "none" }}
              >
                {" "}
                <div
                  className="rskU3c"
                  aria-valuetext="Загрузка..."
                  role="progressbar"
                >
                  <div className="G8qI4b Ww4FFb vt6azd">
                    <div className="DYiTxe">
                      <div className="N6dG3e" />
                      <div className="e4XSEd" />
                    </div>
                    <div className="AMbnUc">
                      <div className="ysLSm" />
                    </div>
                  </div>
                  <div className="G8qI4b Ww4FFb vt6azd">
                    <div className="DYiTxe">
                      <div className="N6dG3e" />
                      <div className="e4XSEd" />
                    </div>
                    <div className="AMbnUc">
                      <div className="ysLSm" />
                    </div>
                  </div>
                  <div className="G8qI4b Ww4FFb vt6azd">
                    <div className="DYiTxe">
                      <div className="N6dG3e" />
                      <div className="e4XSEd" />
                    </div>
                    <div className="AMbnUc">
                      <div className="ysLSm" />
                    </div>
                  </div>
                  <div className="G8qI4b Ww4FFb vt6azd">
                    <div className="DYiTxe">
                      <div className="N6dG3e" />
                      <div className="e4XSEd" />
                    </div>
                    <div className="AMbnUc">
                      <div className="ysLSm" />
                    </div>
                  </div>
                  <div className="G8qI4b Ww4FFb vt6azd">
                    <div className="DYiTxe">
                      <div className="N6dG3e" />
                      <div className="e4XSEd" />
                    </div>
                    <div className="AMbnUc">
                      <div className="ysLSm" />
                    </div>
                  </div>
                  <div className="G8qI4b Ww4FFb vt6azd">
                    <div className="DYiTxe">
                      <div className="N6dG3e" />
                      <div className="e4XSEd" />
                    </div>
                    <div className="AMbnUc">
                      <div className="ysLSm" />
                    </div>
                  </div>
                  <div className="bOiwif" />
                </div>{" "}
              </div>{" "}
              <div
                jsname="Ei53Y"
                style={{ display: "none" }}
                data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQsMoFegQIAhAS"
              >
                {" "}
              </div>{" "}
            </div>{" "}
            <div
              data-spl="/setprefs?hl=ru&prev=https://www.google.com/search?q%3Dgoogle%2Brandom%2Bnumber%2Bgenerator%26rlz%3D1C5CHFA_enUZ1068UZ1068%26oq%3Dgoogle%2B%26aqs%3Dchrome.0.69i59l3j69i60l4j69i65%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8%26pccc%3D1&sig=0_cb5RwzmgjYD4WzHdOfwtSrok_1o%3D&cs=2"
              id="YUIDDb"
              style={{ display: "none" }}
            />
            <div data-iatvcap={1} data-st-cnt="atvcap" id="atvcap" />
            <div className="GyAeWb" id="rcnt">
              <div className="s6JM6d" id="center_col">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".bqHHPb{line-height:initial;}header .bqHHPb,[data-isc] .bqHHPb{padding-top:3px;height:40px;box-shadow:0px 1px 3px rgba(60,64,67,0.08)}.qAsqQe{border-right:1px solid #dadce0;height:30px;margin-right:7px;margin-left:2px}.nPDzT{align-items:center;display:inline-flex;}a.nPDzT{border-radius:20px;text-decoration:none}"
                  }}
                />
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '.ULSxyf{margin-bottom:44px}.g-blk{position:relative}.dG2XIf a{text-decoration:none}.dG2XIf .wDYxhc:first-child{padding-top:16px;border-radius:8px}.dG2XIf .match-mod-horizontal-padding,.dG2XIf .wDYxhc:not(.NFQFxe){padding-left:16px;padding-right:16px;}.dG2XIf.c2xzTb .match-mod-horizontal-padding,.dG2XIf.c2xzTb .wDYxhc:not(.NFQFxe){padding-left:0;padding-right:0}.dG2XIf{box-shadow:none;background:#fff;border:1px solid #dadce0;border-radius:8px;}.XzTjhb,.XzTjhb.dG2XIf{border:none}.kno-kp.wF4fFd.g,.g-blk.g{width:652px}.s6JM6d .dG2XIf{position:relative}.dG2XIf .g:not(.g-blk){margin:0}.dG2XIf>.vk_arc,.dG2XIf>div>.vk_arc{margin:0}.dG2XIf .g{margin-bottom:0}.wDYxhc{clear:both}.cUnQKe .wDYxhc,.related-question-pair .wDYxhc,.M8OgIe .fm06If .wDYxhc{clear:none}html .dG2XIf .xpdclose .LKPcQc,html .dG2XIf .xpdopen .viOShc{padding-top:0}.xpdclose .a84NUc:not(:empty),.xpdopen .CQKTwc:not(:empty){border-top:solid 1px #ebebeb;border-radius:0}.xpdclose .pmYXee .a84NUc:not(:empty),.xpdopen .pmYXee .CQKTwc:not(:empty){border-top:none}.xpdclose .TOfaBb.SHa8ve,.xpdopen .LL5J7d.SHa8ve{display:block}.xpdclose .oHglmf,.xpdopen .xzPb7d{padding-bottom:16px}.xpdclose .kp-header .oHglmf,.xpdopen .kp-header .xzPb7d{padding-bottom:0}.c2xzTb .xpdclose .oHglmf,.c2xzTb .xpdopen .xzPb7d{padding-bottom:0}.HSryR .xpdclose .oHglmf,.HSryR .xpdopen .xzPb7d{padding-bottom:0}.Wnoohf .xpdopen .yp1CPe,.OJXvsb .xpdclose .siXlze{padding-bottom:16px}.Wnoohf .xpdclose .wDYxhc.xsZWvb,.Wnoohf .xpdopen .wDYxhc.EfDVh{padding-bottom:0}#rhs .dG2XIf .xpdclose .LKPcQc,#rhs .dG2XIf .xpdopen .viOShc{padding-top:0}#rhs .Wnoohf .xpdopen .yp1CPe,#rhs .OJXvsb .xpdclose .siXlze{padding-bottom:15px}#rhs .Wnoohf .xpdclose .wDYxhc.xsZWvb,#rhs .Wnoohf .xpdopen .wDYxhc.EfDVh{padding-bottom:0}#rhs .Wnoohf .xpdclose .wDYxhc.xsZWvb.ecRggb,#rhs .Wnoohf .xpdopen .wDYxhc.EfDVh.ecRggb,#rhs .dG2XIf .ecRggb{padding-bottom:15px}#hn0tFe{margin:-16px -16px;text-align:center}.Fsep0b,.jZi29b{padding-bottom:10px}.VqbxPc,.cMfSSd{display:table-row;color:#70757a}.gws-csf-randomnumber__minVal,.gws-csf-randomnumber__maxVal{width:10em}.gws-csf-randomnumber__result{color:#bdc1c6;font-size:48px;display:table-cell;position:absolute;top:50%;transform:translateY(-50%)}#Zv1Nfb{margin:20px 16px 16px 16px;position:relative;text-align:right}.eWckJ{display:inline-block}.b0WUz{margin-top:17px;right:0;z-index:11}#zdOWce{background-color:#1a73e8;border:0;color:#fff;font:normal normal 500 12px \'Roboto-Medium\',sans-serif;outline:none;overflow:hidden;padding:0;text-transform:uppercase;width:100%;text-align:center;position:relative;left:0;z-index:10}#vMxoHf{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-transform:uppercase}#ZdzlKb{cursor:pointer;height:48px;width:100%;text-align:center;position:relative;font-size:14px}.KvQClf{background:#fff;color:#202124;height:30px;font-size:18px;border:none}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.gws-csf-randomnumber__maxVal:focus,.gws-csf-randomnumber__minVal:focus{border-bottom-color:#1a73e8;outline:none}.gws-csf-randomnumber__maxVal,.gws-csf-randomnumber__minVal{border-style:none;border-bottom:1px solid #dadce0;border-bottom-width:medium;border-radius:0}.aKptLe{position:absolute;display:block}.UfSy3c{margin-top:-26px;cursor:pointer}.UfSy3c{float:right;margin-right:14px;padding:8px 10px;transform:translateY(-8px)}.IH9Dqe{color:#70757a}.yQOdGb{border-radius:0 0 8px 8px}.LXjnqc{display:flex}.WtIZZb{cursor:pointer}.Gldprb{font-size:0px}hr{border:0;border-bottom:1px solid #dadce0;margin:0}g-tabbed-carousel{display:block}g-tabs{display:block;color:#fff;position:relative;z-index:0;}.H1HQf{font-family:arial,sans-serif-medium,sans-serif;font-size:14px;text-transform:uppercase;overflow:hidden;font-weight:400;}.H1HQf::-webkit-scrollbar{display:none}.crFiYc{white-space:nowrap;position:relative;z-index:1}.KYeOtb{box-sizing:border-box;cursor:pointer;display:inline-block;text-align:center;text-overflow:ellipsis;-webkit-tap-highlight-color:rgba(0,0,0,0)}.KYeOtb:active{background:rgba(0,0,0,.1)}.P0eHqb{display:inline-block;vertical-align:middle}.SVWlSe{display:inline-block;vertical-align:middle}.jtEFhd .KYeOtb,.jtEFhd .KYeOtb:link,.jtEFhd .KYeOtb:visited{color:#202124}.M5I6Ce{background-color:white;bottom:0;position:absolute}.JiGF4b{display:inline-block;position:relative}.UAN5bf{background-color:white;bottom:0;left:0;position:absolute}.KYeOtb.M4n04{white-space:normal}.M4n04 .SVWlSe{display:-webkit-inline-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;line-height:16px;word-break:break-word}.OKv0rd{display:block;position:relative}.LacTVd{width:100%}.SbQ21c{display:none;float:left;margin:0px;padding:0px;width:100%}.SbQ21c:focus{outline:none}.wooVsc{width:100%;position:relative}.l0Y8Ue .ImU5bf{display:inherit;position:absolute;transform:translate3d(-100%,0px,0px)}.wooVsc.WAFss .SbQ21c,.SbQ21c.epKwIc{display:inherit}.TjPuwe{overflow:hidden}.zNmbpe{display:none}.P962We{color:#4d5156;font-family:arial,sans-serif;font-size:14px;line-height:18px;overflow:hidden;text-overflow:ellipsis}.dl4X9b{width:100%;height:100%}.XNfAUb{display:block;position:relative;}.RyIFgf{display:block;overflow-x:auto;overflow-y:hidden;position:relative;transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.RyIFgf::-webkit-scrollbar{display:none}.HG5ZQb{display:flex}.XRVJtc.CLLuUd{background-color:#fff;display:flex;flex-direction:column;flex:none}.CLLuUd>.VqeGe{display:flex;flex-direction:column;flex:auto}.XRVJtc.KAt2X>.VqeGe{margin-right:20px}.XRVJtc.KAt2X:not(.q2ch8c):last-of-type>.VqeGe{margin-right:0px}.taJbee{position:relative}.taJbee.Wp0Vac.CLLuUd{border-radius:8px;overflow:hidden}.BYbUcd{overflow:hidden;}.BYbUcd img{height:100%;width:100%}.UkEzBc{display:flex;flex-direction:column;flex:auto}.UkEzBc.Wp0Vac.CLLuUd{padding-top:8px}.cB4NFc{padding-top:16px}sentinel{}.GUHazd{padding-bottom:12px}sentinel{}.OdBhM{padding-top:8px}sentinel{}.yMNJR .qk7LXc{max-width:100%}.cJFqsd .qk7LXc{height:100%}.rfx2Y .qk7LXc{width:100%}@media (min-height:576px){.uSolm .qk7LXc{height:100%}.uSolm{padding:64px 0px}}@media (max-height:575px){.uSolm .qk7LXc{height:100%;max-height:448px}}.BhUHze .qk7LXc{width:75%}@media (min-height:496px){.GeOznc .qk7LXc{height:100%}.GeOznc{padding:24px 0px}}@media (max-height:495px){.GeOznc .qk7LXc{height:100%;max-height:448px}}.dgVGnc .qk7LXc{width:90%}.KUf18.ivkdbf{background-color:rgba(0,0,0,0.6);opacity:1;visibility:inherit}.VfsLpf.ivkdbf{background-color:#000;opacity:.4;visibility:inherit}.J3Hnlf.ivkdbf{background-color:#202124;opacity:.7;visibility:inherit}.X46m8.ivkdbf{background-color:#000;opacity:.8;visibility:inherit}.cBoDed.ivkdbf{background-color:#f8f9fa;opacity:.85;visibility:inherit}.kyk7qb.ivkdbf{background-color:#202124;opacity:.6;visibility:inherit}.qk7LXc.ivkdbf{opacity:1}.mcPPZ.ivkdbf{opacity:1;visibility:inherit}.mcPPZ.nP0TDe{cursor:pointer}.mcPPZ.nP0TDe .qk7LXc{cursor:default}.kJFf0c{position:fixed;z-index:9997;right:0;bottom:-200px;top:0;left:0;-webkit-transition:opacity .25s;transition:opacity .25s;opacity:0;visibility:hidden}.qk7LXc{display:inline-block;z-index:9997;background-color:#fff;opacity:0;white-space:normal;overflow:hidden}.qk7LXc{border-radius:8px}.qk7LXc{box-shadow:0px 5px 26px 0px rgba(0,0,0,0.22),0px 20px 28px 0px rgba(0,0,0,0.3)}.qk7LXc.DJEOfc{background-color:transparent}.qk7LXc.DJEOfc{box-shadow:none}.qk7LXc.Fb1AKc{position:relative;vertical-align:middle}.qk7LXc.ulWzbd{position:absolute}.qk7LXc.P1WYLb{border:1px solid #dadce0;box-shadow:#dadce0}.mcPPZ{position:fixed;right:0;bottom:0;top:0;left:0;z-index:9997;vertical-align:middle;visibility:hidden;white-space:nowrap;max-height:100%;max-width:100%;overflow-x:hidden;overflow-y:auto}.mcPPZ.xg7rAe{text-align:center}.mcPPZ::after{content:"";display:inline-block;height:100%;vertical-align:middle}.mcPPZ{tap-highlight-color:rgba(0,0,0,0)}.LjfRsf{height:0;opacity:0;position:absolute;width:0}.VH47ed{visibility:hidden}.TaoyYc{overflow:hidden}.qk7LXc.aJPx6e{overflow:visible}.vAJJzd{opacity:.999}sentinel{}.xTWltf{margin-right:24px}sentinel{}.TkZZsf{padding-bottom:4px;padding-top:4px}sentinel{}.TBC9ub{margin-left:0px;margin-right:0px}.G0vQrb{padding-bottom:2px}g-expandable-container{display:block}.ejaUje{background:#fff;height:1px;position:absolute;-webkit-transform-origin:0 0;width:1px;z-index:-1}.qyI4x{display:none;margin-top:-2px;margin-bottom:-2px;overflow:hidden}.G6LvIe{box-shadow:none;height:2px}sentinel{}.xTWr4e{overflow:hidden;-webkit-transition:max-height .3s;transition:max-height .3s}g-expandable-content{display:block}sentinel{}.HbX59e{margin-left:0px}sentinel{}.Y7Np1.kEUnfb{color:#fff}.Y7Np1.kEUnfb .eU4qJc{background:#dadce0;box-shadow:0px 1px 3px rgba(60,64,67,0.08)}.Y7Np1.kEUnfb .epKwIc{background:currentColor}.Y7Np1.WJlIqb{color:#fff}.Y7Np1.WJlIqb .eU4qJc{background:rgba(255,255,255,0.5)}.Y7Np1.WJlIqb .epKwIc{background:currentColor}sentinel{}.Qlb37c{margin-left:2px;margin-right:2px}sentinel{}.tzM4td{margin-bottom:8px;margin-top:8px}sentinel{}.Nngxpe{border-left:1px solid transparent;border-right:1px solid transparent;height:100%;left:0;right:0;position:absolute;top:0;-webkit-transition:border-color .5s;transition:border-color .5s;pointer-events:none}.Nngxpe g-right-button,.Nngxpe g-left-button{pointer-events:auto}.lUmTWd{z-index:1}.JkSare{border-left:1px solid rgba(218,220,224,0.7)}.zl1zf{border-right:1px solid rgba(218,220,224,0.7)}.Nngxpe,.mb6V8{min-height:98px}.Nngxpe.P7d91{border:0}.P7d91 .lUmTWd:not(:focus){opacity:0;pointer-events:none}sentinel{}.uhHOwf{position:relative}.uhHOwf::after{background-color:rgba(0,0,0,0.03);bottom:0;content:"";display:block;left:0;pointer-events:none;position:absolute;right:0;top:0}.uhHOwf img{display:block}sentinel{}.TBC9ub{margin-left:0px;margin-right:0px}.OZ5bRd{margin-bottom:auto;margin-top:auto}.wgbRNb{cursor:pointer;height:72px;position:absolute;display:block;visibility:inherit;width:36px;bottom:0;opacity:.8;top:0;z-index:101}.wgbRNb.tHT0l{-webkit-transition:opacity .5s,visibility .5s;transition:opacity .5s,visibility .5s}.wgbRNb:hover{opacity:.9}.wgbRNb.pQXcHc,.wgbRNb.pQXcHc:hover{cursor:default;opacity:0;visibility:hidden}.b5K9zd{bottom:0;display:block;position:absolute!important;top:0}.wgbRNb.ENJHPd:hover g-fab{color:#202124!important}.bCwlI.ENJHPd g-fab,.VdehBf.ENJHPd g-fab{box-shadow:0 7px 15px rgba(0,0,0,0.2)}.wgbRNb.ENJHPd{height:50px;width:50px;opacity:1}.wgbRNb.ENJHPd.pQXcHc,.wgbRNb.ENJHPd.pQXcHc:hover{opacity:0}.bCwlI.ENJHPd g-fab,.VdehBf.ENJHPd g-fab{cursor:pointer;height:50px;width:50px}.bCwlI.ENJHPd{left:-25px}.VdehBf.ENJHPd{right:-25px}.wgbRNb.HEeAqe:hover g-fab{color:#202124!important}.wgbRNb.HEeAqe{height:48px;width:48px;opacity:.9}.wgbRNb.HEeAqe:hover{opacity:1}.wgbRNb.HEeAqe.pQXcHc,.wgbRNb.HEeAqe.pQXcHc:hover{opacity:0}.bCwlI.HEeAqe g-fab,.VdehBf.HEeAqe g-fab{box-shadow:0 7px 15px rgba(0,0,0,0.2);cursor:pointer;height:48px;width:48px}.bCwlI.HEeAqe{left:20px}.VdehBf.HEeAqe{right:20px}.wgbRNb.TVgFVb:hover g-fab{color:#202124!important}.wgbRNb.TVgFVb{height:40px;width:40px}.bCwlI.TVgFVb g-fab,.VdehBf.TVgFVb g-fab{box-shadow:0 4px 4px rgba(0,0,0,0.3),0 0 4px rgba(0,0,0,0.2);cursor:pointer}.bCwlI.TVgFVb{left:-58px}.VdehBf.TVgFVb{right:-58px}.bCwlI.Yze26d .vWtmKf,.VdehBf.Yze26d .PFY4o{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAuCAYAAAAcEfjaAAABV0lEQVRIx+2VsW7CQBBEDwTpIkXICMuyJdtfQsGXQUVFlSpVmjTESOn4BAoXLigsueAvaM2MBAht7g6v06ZYwNK8893ezGLatjV5ni9QO2PMC599ZdI0nWdZdgbQ4vsH0NgLQLSn+FZ4/gY0cgJBELxCdHiEUF+AhlaAH9jWG0SleNOnDbr/iON4AlEloA9AAyvAiqIogPAooHcnwIJghqrFmTZOgJUkSQRRI6C1E7huL8GbTmJ7Ky2w/PuWVIcOw3Daua2qi1NZQ20+i723XnurA/QQ0aJTRJ8J/oEuAFvNqcjWPwV4ibzM66Weeck+8YhTUNhm7xIPaUAhPtCoVjGtLdxbMgK/zsCwMDRi5YrhsnaJcRQrHzkNrW1l0MXKNQeCy95rsXLDUeNK3EqsfOIQ8/0DLVWAeku9Du1rK6ehE1BfnNoavcwn7L3tZO9eARIRLW4RvQA0+6DNwTHW6QAAAABJRU5ErkJggg==);background-repeat:no-repeat;height:20px;opacity:.56;width:12px}.bCwlI.Yze26d,.VdehBf.Yze26d{opacity:.9;width:80px}.bCwlI.Yze26d .vWtmKf{background-position:0 -26px;left:2px}.VdehBf.Yze26d .PFY4o{background-position:0 0;right:2px}.bCwlI.Yze26d{background:linear-gradient(90deg,#fff 50%,rgba(255,255,255,0.09) 100%);left:0}.VdehBf.Yze26d{background:linear-gradient(270deg,#fff 50%,rgba(255,255,255,0.09) 100%);right:0}.wgbRNb.T9Wh5:hover g-fab{color:#202124!important;box-shadow:0 0 0 1px rgba(0,0,0,0.04),0 4px 8px 0 rgba(0,0,0,0.2)}.wgbRNb.T9Wh5{height:36px;width:36px;opacity:1}.wgbRNb.T9Wh5.pQXcHc,.wgbRNb.T9Wh5.pQXcHc:hover{opacity:0}.bCwlI.T9Wh5 g-fab,.VdehBf.T9Wh5 g-fab{cursor:pointer;height:36px;width:36px}.bCwlI.T9Wh5{left:-18px}.VdehBf.T9Wh5{right:-18px}.bCwlI.SL0Gp .vWtmKf,.VdehBf.SL0Gp .PFY4o{background-repeat:no-repeat;opacity:.54;width:24px}.bCwlI.SL0Gp .vWtmKf{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAQ0lEQVR4AWNABaNAAQhJUv4ACGVJUf6f4TADDw2VHyFN+VEGXmJdfwCo/AeDNIhJqQ2E/UBLLYiApVFMI9ISWWAUAAAy1x3G3j1wxQAAAABJRU5ErkJggg==)}.VdehBf.SL0Gp .PFY4o{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAUElEQVR4AWOAgFHAAYQkKd8BhCRoUWZ4wfCfNC1aDC/poEWb4RWpWnQYfgK1bCBWOSPDFKDyHwwexCqfTFPlkyDKiQ/SH2DlJAAPIKQIjAIADAMd5ce1j0IAAAAASUVORK5CYII=)}.VdehBf.SL0Gp,.bCwlI.SL0Gp{width:24px}.wgbRNb.SL0Gp.pQXcHc,.wgbRNb.SL0Gp.pQXcHc:hover{cursor:default;opacity:1;visibility:inherit}.wgbRNb.SL0Gp.pQXcHc .vWtmKf,.wgbRNb.SL0Gp.pQXcHc .PFY4o{opacity:.2}.wgbRNb.SL0Gp{height:24px;margin:0}.wgbRNb.SL0Gp:hover{opacity:1}.wgbRNb.zfpUke:hover g-fab{color:#202124!important}.wgbRNb.zfpUke{height:36px;width:36px;opacity:0}.z1Mm0e:hover .wgbRNb.zfpUke{opacity:.9}.z1Mm0e .wgbRNb.zfpUke:hover,.z1Mm0e .wgbRNb.zfpUke:focus-visible{opacity:1}.wgbRNb.zfpUke.pQXcHc,.wgbRNb.zfpUke.pQXcHc:hover{opacity:0}.bCwlI.zfpUke g-fab,.VdehBf.zfpUke g-fab{box-shadow:0 0 0 1px rgba(0,0,0,0.04),0 4px 8px 0 rgba(0,0,0,0.2);cursor:pointer;height:36px;width:36px}.bCwlI.zfpUke{left:16px}.VdehBf.zfpUke{right:16px}.bCwlI.ENpXyb .vWtmKf,.VdehBf.ENpXyb .PFY4o{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAuCAYAAAAcEfjaAAABV0lEQVRIx+2VsW7CQBBEDwTpIkXICMuyJdtfQsGXQUVFlSpVmjTESOn4BAoXLigsueAvaM2MBAht7g6v06ZYwNK8893ezGLatjV5ni9QO2PMC599ZdI0nWdZdgbQ4vsH0NgLQLSn+FZ4/gY0cgJBELxCdHiEUF+AhlaAH9jWG0SleNOnDbr/iON4AlEloA9AAyvAiqIogPAooHcnwIJghqrFmTZOgJUkSQRRI6C1E7huL8GbTmJ7Ky2w/PuWVIcOw3Daua2qi1NZQ20+i723XnurA/QQ0aJTRJ8J/oEuAFvNqcjWPwV4ibzM66Weeck+8YhTUNhm7xIPaUAhPtCoVjGtLdxbMgK/zsCwMDRi5YrhsnaJcRQrHzkNrW1l0MXKNQeCy95rsXLDUeNK3EqsfOIQ8/0DLVWAeku9Du1rK6ehE1BfnNoavcwn7L3tZO9eARIRLW4RvQA0+6DNwTHW6QAAAABJRU5ErkJggg==);background-repeat:no-repeat;height:20px;width:12px}.bCwlI.ENpXyb .vWtmKf{background-position:0 -26px;left:8px}.VdehBf.ENpXyb .PFY4o{background-position:0 0;right:8px}.bCwlI.ENpXyb{left:0}.VdehBf.ENpXyb{right:0}.bCwlI.ENpXyb{border-bottom-right-radius:36px;border-top-right-radius:36px;box-shadow:1px 0 2px rgba(0,0,0,0.5)}.VdehBf.ENpXyb{border-bottom-left-radius:36px;border-top-left-radius:36px;box-shadow:-1px 0 2px rgba(0,0,0,0.5)}.bCwlI.AoT6sc .vWtmKf{left:2px}.VdehBf.AoT6sc .PFY4o{right:2px}.bCwlI.AoT6sc{left:-32px;border:1px solid #f8f9fa;border-radius:2px 0 0 2px}.VdehBf.AoT6sc{right:-32px;border:1px solid #f8f9fa;border-radius:0 2px 2px 0}.wgbRNb.AoT6sc{background-image:-webkit-gradient(linear,left top,left bottom,from(#f8f9fa),to(#f8f9fa));background-image:-webkit-linear-gradient(top,#f8f9fa,#f8f9fa);background-image:linear-gradient(top,#f8f9fa,#f8f9fa);height:50px;width:30px}.wgbRNb.AoT6sc:hover{background-image:-webkit-gradient(linear,left top,left bottom,from(#f8f9fa),to(#f8f9fa));background-image:-webkit-linear-gradient(top,#f8f9fa,#f8f9fa);background-image:linear-gradient(top,#f8f9fa,#f8f9fa)}.wgbRNb.btpNFe:hover g-fab{color:#202124!important}.wgbRNb.btpNFe{height:36px;width:36px;opacity:.9}.wgbRNb.btpNFe:hover{opacity:1}.wgbRNb.btpNFe.pQXcHc,.wgbRNb.btpNFe.pQXcHc:hover{opacity:0}.bCwlI.btpNFe g-fab,.VdehBf.btpNFe g-fab{box-shadow:0 0 0 1px rgba(0,0,0,0.04),0 4px 8px 0 rgba(0,0,0,0.2);cursor:pointer;height:36px;width:36px}.bCwlI.btpNFe{left:-18px}.VdehBf.btpNFe{right:-18px}.wgbRNb.jSZMre:hover g-fab{color:#202124!important}.wgbRNb.jSZMre{height:32px;width:32px;opacity:.9;padding:8px}.wgbRNb.jSZMre:hover{opacity:1}.wgbRNb.jSZMre.pQXcHc,.wgbRNb.jSZMre.pQXcHc:hover{opacity:0}.bCwlI.jSZMre g-fab,.VdehBf.jSZMre g-fab{box-shadow:0 7px 15px rgba(0,0,0,0.2);cursor:pointer;height:32px;width:32px}.bCwlI.jSZMre{left:20px}.VdehBf.jSZMre{right:20px}.wgbRNb.vkcLib{height:40px;width:40px;opacity:0}.z1Mm0e:hover .wgbRNb.vkcLib,.z1Mm0e .wgbRNb.vkcLib:hover,.z1Mm0e .wgbRNb.vkcLib:focus-visible{opacity:1}.wgbRNb.vkcLib.pQXcHc,.wgbRNb.vkcLib.pQXcHc:hover{opacity:0}.bCwlI.vkcLib g-fab,.VdehBf.vkcLib g-fab{box-shadow:0 0 0 1px rgba(0,0,0,0.04),0 4px 8px 0 rgba(0,0,0,0.2);cursor:pointer;height:24px;width:24px;position:relative;top:8px;left:8px}.bCwlI.vkcLib{left:4px}.VdehBf.vkcLib{right:4px}sentinel{}.S3PB2d{margin:auto}.sr9hec{display:block;position:relative;z-index:0}.sr9hec{cursor:pointer}.sr9hec{border:1px solid #dadce0}.sr9hec:focus{outline:none}.sr9hec .U8v51e{position:absolute;left:0;right:0;top:0;bottom:0;width:24px;height:24px}.s3IB3{width:40px;height:40px}.a11Pr{width:56px;height:56px}.MKCV1b{width:28px;height:28px}.sr9hec.MKCV1b .U8v51e{width:22px;height:22px}.OZQDWd{width:18px;height:18px}.sr9hec.OZQDWd .U8v51e{width:12px;height:12px}sentinel{}.HbX59e{margin-left:0px}.xTWltf{margin-right:24px}.FIfWIe{margin-left:4px}.nlNnsd{margin-top:12px}.yG4QQe{margin-top:0px}.u60jwe{margin-right:0px}.hfoBFd{margin-left:24px;margin-right:24px}.wdcVy{margin-bottom:16px;margin-top:16px}.omo2Xc.ulf8de.ulf8de{cursor:unset;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;overflow:visible}.omo2Xc.ulf8de .mCs3Sb{display:none}.omo2Xc .uSRDAc{background:#f1f3f4;border:1px solid rgba(255,255,255,0);box-sizing:border-box;cursor:pointer;display:inline-block;font-size:14px;height:36px;line-height:20px;padding:7px 11px;position:relative;width:300px;border-radius:18px}.omo2Xc .uSRDAc:hover{background:#d8d7dc}.omo2Xc .CClGEd{background-color:#dadce0;border:0;height:1px;left:0;margin-top:18px;position:absolute;width:100%}.omo2Xc .uSRDAc .yycysc{left:12px;position:absolute;height:20px;width:20px}.omo2Xc .uSRDAc .ihkv8b{display:inline-block;max-width:220px;white-space:nowrap}.W2Pfe.nUwiEe{border:1px solid #dadce0;border-radius:20px;height:40px;line-height:40px}.W2Pfe.nUwiEe::before{bottom:-4px;content:"";left:0;position:absolute;right:0;top:-4px}.mlJE4e.y5SJFc.y5SJFc{border-bottom-right-radius:8px;border-bottom-left-radius:8px;height:52px;overflow:visible;position:relative}.mlJE4e .oyEy3e{left:50%;margin-left:-20px;top:-20px}.mlJE4e.y5SJFc .oyEy3e{cursor:pointer;position:absolute}.mlJE4e.y5SJFc .mjkhcd.mjkhcd{bottom:8px;left:0;right:0}.cjSy4c.p8Ujvb{border-top:1px solid #dadce0}.cjSy4c.bZm3Db{height:48px;line-height:48px}.cjSy4c .zoCvae{color:#70757a;top:50%;margin-top:-12px;left:0}.cjSy4c.viNgib .zoCvae{left:50%;margin-left:-12px}.cjSy4c.p8Ujvb .zoCvae{position:absolute}.cjSy4c.p8Ujvb .mjkhcd{color:#202124;font-size:14px;left:64px}.cjSy4c.mlPvXc.p8Ujvb .mjkhcd{left:48px}.BGDPf.piiScb{border-top:1px solid #dadce0;height:40px;line-height:40px}.BGDPf .rG44rf{top:50%;position:absolute;left:0}.BGDPf .rG44rf{margin-left:15px;margin-right:15px}.BGDPf .MagSve{margin-top:-12px}.BGDPf .pjkUHd{margin-top:6px}.BGDPf.piiScb .mjkhcd{color:#70757a}.BGDPf.piiScb .mjkhcd{font-size:16px}.BGDPf.piiScb .mjkhcd{left:94px}.TKZwpe .mCs3Sb{opacity:0;visibility:hidden}.TKZwpe .mjkhcd{white-space:nowrap}.TKZwpe .mjkhcd{position:absolute}g-inline-expansion-bar.TKZwpe{cursor:pointer;display:block;overflow:hidden;position:relative}html:not(.zAoYTe) g-inline-expansion-bar.TKZwpe:focus{outline:none}sentinel{}.kno-ftr{clear:both;color:#70757a;font-size:12px;line-height:1.34;overflow:hidden}.kno-ftr a{color:#70757a;text-decoration:none}.OwRFvb{float:right;margin-left:2em}.kno-ftr a:hover{text-decoration:underline}.kno-ftr{margin-left:0px;padding:4px 16px 0}'
                  }}
                />
                <div id="taw">
                  <div
                    id="oFNiHe"
                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQL3oECAIQFA"
                  />
                  <div id="tvcap" />
                </div>
                <div className="eqAnXb" id="res" role="main">
                  <div id="topstuff" />
                  <div id="search">
                    <div
                      data-hveid="CAIQFg"
                      data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQGnoECAIQFg"
                    >
                      <h1
                        className="bNg8Rb OhScic zsYMMe BBwThe"
                        style={{
                          clip: "rect(1px,1px,1px,1px)",
                          height: 1,
                          overflow: "hidden",
                          position: "absolute",
                          whiteSpace: "nowrap",
                          width: 1,
                          zIndex: -1000,
                          WebkitUserSelect: "none"
                        }}
                      >
                        Результаты поиска
                      </h1>
                      <div
                        className="v7W49e"
                        eid="w4sBZYmTHJ_RwPAPx5aZiAo"
                        data-async-context="query:google%20random%20number%20generator"
                        id="rso"
                      >
                        <div className="ULSxyf">
                          <div className="MjjYud">
                            <block-component>
                              <div
                                className="g wF4fFd g-blk"
                                data-hveid="CA4QAA"
                                data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQijYoAHoECA4QAA"
                              >
                                <div className="dG2XIf Wnoohf OJXvsb">
                                  <div>
                                    <div>
                                      <div className="xpdopen rYczAc">
                                        <div className="ifM9O">
                                          <div>
                                            <div>
                                              <div
                                                className="yp1CPe wDYxhc"
                                                data-md={137}
                                                data-hveid="CA0QAA"
                                                data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ2XJ6BAgNEAA"
                                              >
                                                <div
                                                  jscontroller="EWP8Df"
                                                  id="hn0tFe"
                                                  jsaction="rcuQ6b:npT2md"
                                                >
                                                  <csf-share
                                                    className="b0WUz aKptLe"
                                                    jsshadow=""
                                                  >
                                                    <div
                                                      jsname="mHKF6e"
                                                      className="UfSy3c"
                                                      jscontroller="Wct42"
                                                      data-ld={1}
                                                      role="button"
                                                      tabIndex={0}
                                                      aria-label="Отправить"
                                                      jsdata="B34zmc;_;Asaulc"
                                                      jsaction="KjsqPd;rcuQ6b:npT2md;yoKyEf:CLN7sd;nVW9lb:HR5wBe;tfcxtb:ImCKxc"
                                                      data-hveid="CA0QAg"
                                                      data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQuPICegQIDRAC"
                                                    >
                                                      <span className="IH9Dqe z1asCe Fp7My">
                                                        <svg
                                                          focusable="false"
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          viewBox="0 0 24 24"
                                                        >
                                                          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                                                        </svg>
                                                      </span>
                                                      <div id="_w4sBZYmTHJ_RwPAPx5aZiAo_27">
                                                        <div
                                                          jsname="Sx9Kwc"
                                                          className="wb5ZZc"
                                                          jscontroller="uLYJpc"
                                                          jsaction="SJu0Rc:SlAvWb"
                                                        >
                                                          <g-dialog
                                                            jsname="Sx9Kwc"
                                                            jscontroller="VEbNoe"
                                                            data-id="_w4sBZYmTHJ_RwPAPx5aZiAo_29"
                                                            jsaction="jxvro:Imgh9b"
                                                            jsdata="gctHtc;_;AsaulQ"
                                                            jsshadow=""
                                                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQy4IEegQIDRAD"
                                                          >
                                                            <div
                                                              jsname="XKSfm"
                                                              id="_w4sBZYmTHJ_RwPAPx5aZiAo_29"
                                                              jsaction="dBhwS:TvD9Pc;mLt3mc"
                                                            >
                                                              <div
                                                                jsname="bF1uUb"
                                                                className="kJFf0c KUf18"
                                                              />
                                                              <div
                                                                className="mcPPZ nP0TDe xg7rAe"
                                                                jsaction="trigger.dBhwS"
                                                              >
                                                                <div
                                                                  className="LjfRsf"
                                                                  aria-hidden="true"
                                                                  role="button"
                                                                  tabIndex={0}
                                                                  jsaction="focus:sT2f3e"
                                                                />
                                                                <span
                                                                  jsslot=""
                                                                  jsaction="mLt3mc"
                                                                >
                                                                  <div
                                                                    className="qk7LXc TUOsUe Fb1AKc E1kGSe wok5vf cB4NFc"
                                                                    aria-label="Share"
                                                                    role="dialog"
                                                                  >
                                                                    <span
                                                                      jsname="tqp7ud"
                                                                      className="lZC9wd bvSTKc z1asCe wuXmqc"
                                                                      aria-label="Закрыть"
                                                                      role="button"
                                                                      tabIndex={0}
                                                                      jsaction="trigger.dBhwS"
                                                                      data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQzIIEegQIDRAF"
                                                                    >
                                                                      <svg
                                                                        focusable="false"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                      >
                                                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                                                      </svg>
                                                                    </span>
                                                                    <div
                                                                      jsname="OGvssd"
                                                                      className="aNrSe v0rrvd"
                                                                    >
                                                                      Отправить
                                                                    </div>
                                                                    <div
                                                                      jsname="Sy6N1c"
                                                                      className="BjWz4c OdBhM GUHazd"
                                                                    />
                                                                    <div
                                                                      jsname="b0t70b"
                                                                      jscontroller="HPGtmd"
                                                                    >
                                                                      <a
                                                                        jsname="RgELLe"
                                                                        className="DQc04b wHYlTd eJtrMc Wt5Tfe"
                                                                        href="#"
                                                                        role="link"
                                                                        tabIndex={0}
                                                                        jsaction="rT2OA"
                                                                      >
                                                                        <div className="bQkCTc xTWltf">
                                                                          <img
                                                                            className="fTE6nf"
                                                                            src="https://www.gstatic.com/kpui/social/fb_32x32.png"
                                                                            alt=""
                                                                          />
                                                                        </div>
                                                                        Facebook
                                                                      </a>
                                                                      <a
                                                                        jsname="P8lkFb"
                                                                        className="DQc04b wHYlTd eJtrMc Wt5Tfe"
                                                                        href="#"
                                                                        role="link"
                                                                        tabIndex={0}
                                                                        jsaction="re2RZb"
                                                                      >
                                                                        <div className="bQkCTc xTWltf">
                                                                          <img
                                                                            className="fTE6nf"
                                                                            src="https://www.gstatic.com/kpui/social/twitter_32x32.png"
                                                                            alt=""
                                                                          />
                                                                        </div>
                                                                        Twitter
                                                                      </a>
                                                                      <a
                                                                        jsname="bVp1N"
                                                                        className="DQc04b wHYlTd Q7PwXb eJtrMc Wt5Tfe"
                                                                        href="#"
                                                                        role="link"
                                                                        tabIndex={0}
                                                                        jsaction="NmUBTc"
                                                                      >
                                                                        <div className="bQkCTc xTWltf">
                                                                          <img
                                                                            className="fTE6nf"
                                                                            src="/images/icons/material/system/1x/email_grey600_24dp.png"
                                                                            alt=""
                                                                          />
                                                                        </div>
                                                                        <span className="tW0dvd">
                                                                          По
                                                                          электронной
                                                                          почте
                                                                        </span>
                                                                      </a>
                                                                      <div
                                                                        jsname="GIN7Bd"
                                                                        jscontroller="n7qy6d"
                                                                      >
                                                                        <div jsname="rTZwQe">
                                                                          <div jsname="uu7Hed">
                                                                            <div
                                                                              className="HYsXi ApHyTb OdBhM zUdppc"
                                                                              role="button"
                                                                              tabIndex={
                                                                                0
                                                                              }
                                                                              jsaction="ScPJh"
                                                                            >
                                                                              Нажмите,
                                                                              чтобы
                                                                              скопировать
                                                                              ссылку
                                                                            </div>
                                                                          </div>
                                                                          <div jsname="axr9cd">
                                                                            <div className="ApHyTb OdBhM zUdppc">
                                                                              Поделиться
                                                                              ссылкой
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                        <div
                                                                          jsname="pAZ6Ed"
                                                                          className="ApHyTb OdBhM zUdppc"
                                                                          aria-live="polite"
                                                                          style={{
                                                                            display:
                                                                              "none"
                                                                          }}
                                                                        >
                                                                          Ссылка
                                                                          скопирована
                                                                        </div>
                                                                        <div className="HmofF OSrXXb">
                                                                          <div jsaction="aiBUrb">
                                                                            <g-text-field
                                                                              jsname="zgnjS"
                                                                              className="OhScic rysuG LXtP0 Pqkn2e K56Jue"
                                                                              jscontroller="LiBxPe"
                                                                              jsshadow=""
                                                                              jsaction="rcuQ6b:npT2md"
                                                                            >
                                                                              <div className="kp85vc">
                                                                                <div>
                                                                                  <input
                                                                                    className="ZXb90b OhScic Wt5Tfe TkZZsf qKoqyc"
                                                                                    jsaction="focus:daRB0b;blur:kDTLMd"
                                                                                    aria-label="Поделиться ссылкой"
                                                                                    readOnly=""
                                                                                    type="url"
                                                                                  />
                                                                                </div>
                                                                              </div>
                                                                              <div
                                                                                jsname="NowJzb"
                                                                                className="xqPsfb"
                                                                              />
                                                                            </g-text-field>
                                                                          </div>
                                                                        </div>
                                                                        <div
                                                                          jsname="tQ9n1c"
                                                                          className="Cnzagc"
                                                                          aria-hidden="true"
                                                                        />
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </span>
                                                                <div
                                                                  className="LjfRsf"
                                                                  aria-hidden="true"
                                                                  role="button"
                                                                  tabIndex={0}
                                                                  jsaction="focus:tuePCd"
                                                                />
                                                              </div>
                                                            </div>
                                                          </g-dialog>
                                                        </div>
                                                        <div
                                                          jsname="PHQQPc"
                                                          style={{ display: "none" }}
                                                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQqfkDegQIDRAH"
                                                        >
                                                          <a
                                                            jsname="NlZIeb"
                                                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQrPkDegQIDRAI"
                                                          />
                                                          <a
                                                            jsname="Qoiwbb"
                                                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQrvkDegQIDRAJ"
                                                          />
                                                          <a
                                                            jsname="IyZ18e"
                                                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQq_kDegQIDRAK"
                                                          />
                                                          <a
                                                            jsname="k3Pg4"
                                                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQqvkDegQIDRAL"
                                                          />
                                                        </div>
                                                        <div
                                                          jsname="qMPrxc"
                                                          style={{ display: "none" }}
                                                          data-csrsve={177463}
                                                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQt-oKegQIDRAM"
                                                        >
                                                          <div
                                                            jsname="vOr6ad"
                                                            style={{
                                                              display: "none"
                                                            }}
                                                            data-csrsve={155781}
                                                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQhcEJegQIDRAN"
                                                          />
                                                          <div
                                                            jsname="LVWe7b"
                                                            style={{
                                                              display: "none"
                                                            }}
                                                            data-csrsve={155747}
                                                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ48AJegQIDRAO"
                                                          />
                                                          <div
                                                            jsname="WZfLqc"
                                                            style={{
                                                              display: "none"
                                                            }}
                                                            data-csrsve={155748}
                                                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ5MAJegQIDRAP"
                                                          />
                                                          <div
                                                            jsname="Igko6d"
                                                            style={{
                                                              display: "none"
                                                            }}
                                                            data-csrsve={158666}
                                                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQytcJegQIDRAQ"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </csf-share>
                                                  <div id="kHe7nc">
                                                    <div id="Zv1Nfb">
                                                      <div className="gws-csf-randomnumber__result">
                                                        8
                                                      </div>
                                                      <div className="eWckJ">
                                                        <div className="VqbxPc">
                                                          Минимум
                                                        </div>
                                                        <div className="Fsep0b">
                                                          <input
                                                            className="KvQClf gws-csf-randomnumber__minVal"
                                                            defaultValue={1}
                                                            id="UMy8j"
                                                            max={9999999999}
                                                            min={-9999999999}
                                                            type="number"
                                                          />
                                                        </div>
                                                        <div className="cMfSSd">
                                                          Максимум
                                                        </div>
                                                        <div className="jZi29b">
                                                          <input
                                                            className="KvQClf gws-csf-randomnumber__maxVal"
                                                            defaultValue={10}
                                                            id="nU5Yvb"
                                                            max={9999999999}
                                                            min={-9999999999}
                                                            type="number"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div id="zdOWce">
                                                    <div
                                                      jsname="wl2F8e"
                                                      id="ZdzlKb"
                                                      role="button"
                                                      tabIndex={0}
                                                      jsaction="HPsmF"
                                                    >
                                                      <div id="vMxoHf">
                                                        Сгенерировать
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div
                                                    jscontroller="MC0Gmc"
                                                    className="yQOdGb"
                                                    data-parent-funbox="Random Number Generator"
                                                    role="menu"
                                                    jsaction="rcuQ6b:npT2md;nnMuPb:JhW48;iJE3Ge:tQwMlb;DmzWq:QqKrT"
                                                  >
                                                    <g-expandable-container
                                                      jsname="JTivif"
                                                      data-nlvc={1}
                                                      jscontroller="QE1bwd"
                                                      data-anim=""
                                                      data-fcss=""
                                                      data-npd={1}
                                                      data-slct="mnr-c"
                                                      jsshadow=""
                                                      jsaction="C7xow:Z6bwpe;xNpQtd:Nh5q2c;U6VCqe:GsRPff;Ep2Mgc:AgioGc;BDs6B:fW2qAb;ep03Ne:AvkpRc;gvA4Rc:yELBLe"
                                                      data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQoLIEegQIDRAR"
                                                    >
                                                      <div jsname="gI9xcc" jsslot={1}>
                                                        <g-expandable-content
                                                          jsname="jrbfOd"
                                                          jscontroller="Ah7cLd"
                                                          jsaction=";rcuQ6b:npT2md"
                                                          jsshadow=""
                                                          aria-hidden="true"
                                                          className="xTWr4e"
                                                          data-ead={1}
                                                          data-eb={0}
                                                          data-li=""
                                                          data-mt={4}
                                                          data-npd={1}
                                                          style={{
                                                            maxHeight: 0,
                                                            display: "none"
                                                          }}
                                                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQmu8CegQIDRAT"
                                                        >
                                                          <span
                                                            jsname="zXitYb"
                                                            jsslot=""
                                                          >
                                                            <hr />
                                                            <g-tabbed-carousel
                                                              jsname="hyR3tb"
                                                              jscontroller="wjrpBd"
                                                              jsshadow=""
                                                              jsaction="D2wIvb:f20zue;EKXOFe:OZ0lMc;aNWwib:FKzK7;EEZOrb:mLt3mc;rcuQ6b:npT2md"
                                                            >
                                                              <span>
                                                                <span>
                                                                  <g-tabs
                                                                    jsname="uxAMZ"
                                                                    style={{
                                                                      borderBottom:
                                                                        "1px solid #e5e5e5"
                                                                    }}
                                                                    jscontroller="GIYigf"
                                                                    className="jtEFhd"
                                                                    data-adapt-width-with-js="false"
                                                                    data-unselected-text-color="#70757a"
                                                                    id="_w4sBZYmTHJ_RwPAPx5aZiAo_32"
                                                                    jsdata="oL2lDd;_;Asaulg"
                                                                    jsshadow=""
                                                                    role="tablist"
                                                                    jsaction="EormBc:HFYvKc;gEKQDb:yUtVib;OW9R3e:mhSdVe;keydown:uYT2Vb;focus:h06R8;blur:zjh6rb;rcuQ6b:npT2md"
                                                                  >
                                                                    <div
                                                                      jsname="jtW7Nb"
                                                                      className="H1HQf zbA8Me"
                                                                      style={{
                                                                        overflowX:
                                                                          "auto"
                                                                      }}
                                                                    >
                                                                      <div
                                                                        jsname="xNyui"
                                                                        className="crFiYc m6Mfvb"
                                                                        style={{
                                                                          color:
                                                                            "#202124"
                                                                        }}
                                                                      >
                                                                        <div
                                                                          jsname="H8bAhd"
                                                                          className="UAN5bf"
                                                                          style={{
                                                                            backgroundColor:
                                                                              "rgb(32, 33, 36)",
                                                                            height: 4,
                                                                            width: 8,
                                                                            borderRadius:
                                                                              "4px 4px 0px 0px",
                                                                            transform:
                                                                              "translate3d(429.32px, 0px, 0px)"
                                                                          }}
                                                                        />
                                                                        <div
                                                                          jsname="wwzVaf"
                                                                          className="UAN5bf"
                                                                          style={{
                                                                            backgroundColor:
                                                                              "rgb(32, 33, 36)",
                                                                            width: 32,
                                                                            height: 4,
                                                                            transform:
                                                                              "translate3d(471.32px, 0px, 0px) scale3d(3.375, 1, 1)"
                                                                          }}
                                                                        />
                                                                        <div
                                                                          jsname="r8toic"
                                                                          className="UAN5bf"
                                                                          style={{
                                                                            backgroundColor:
                                                                              "rgb(32, 33, 36)",
                                                                            height: 4,
                                                                            width: 8,
                                                                            borderRadius:
                                                                              "4px 4px 0px 0px",
                                                                            transform:
                                                                              "translate3d(537.32px, 0px, 0px)"
                                                                          }}
                                                                        />
                                                                        <a
                                                                          jsname="AznF2e"
                                                                          className="KYeOtb rWAMad M4n04"
                                                                          aria-selected="false"
                                                                          data-index={
                                                                            0
                                                                          }
                                                                          style={{
                                                                            minHeight: 48,
                                                                            color:
                                                                              "#70757a",
                                                                            width:
                                                                              "50%",
                                                                            borderColor:
                                                                              "#202124",
                                                                            padding:
                                                                              "0 16px"
                                                                          }}
                                                                          tabIndex={
                                                                            -1
                                                                          }
                                                                          jsaction="h5M12e"
                                                                          role="tab"
                                                                        >
                                                                          <div
                                                                            className="SVWlSe t35a5d"
                                                                            jsslot=""
                                                                          >
                                                                            <span jsslot="">
                                                                              <div
                                                                                aria-controls="_w4sBZYmTHJ_RwPAPx5aZiAo_31_0"
                                                                                id="_w4sBZYmTHJ_RwPAPx5aZiAo_30_0"
                                                                              >
                                                                                ИГРЫ И
                                                                                ИГРУШКИ
                                                                              </div>
                                                                            </span>
                                                                          </div>
                                                                          <div
                                                                            className="P0eHqb"
                                                                            style={{
                                                                              minHeight: 48
                                                                            }}
                                                                          />
                                                                        </a>
                                                                        <a
                                                                          jsname="AznF2e"
                                                                          className="KYeOtb M4n04"
                                                                          aria-selected="true"
                                                                          data-index={
                                                                            1
                                                                          }
                                                                          data-uiis={
                                                                            1
                                                                          }
                                                                          style={{
                                                                            minHeight: 48,
                                                                            color:
                                                                              "#202124",
                                                                            width:
                                                                              "50%",
                                                                            borderColor:
                                                                              "#202124",
                                                                            padding:
                                                                              "0 16px"
                                                                          }}
                                                                          tabIndex={0}
                                                                          jsaction="h5M12e"
                                                                          role="tab"
                                                                        >
                                                                          <div
                                                                            className="JiGF4b"
                                                                            style={{
                                                                              minHeight: 48
                                                                            }}
                                                                          >
                                                                            <div
                                                                              className="SVWlSe t35a5d"
                                                                              jsslot=""
                                                                            >
                                                                              <span jsslot="">
                                                                                <div
                                                                                  aria-controls="_w4sBZYmTHJ_RwPAPx5aZiAo_31_1"
                                                                                  id="_w4sBZYmTHJ_RwPAPx5aZiAo_30_1"
                                                                                >
                                                                                  ИНСТРУМЕНТЫ
                                                                                </div>
                                                                              </span>
                                                                            </div>
                                                                            <div
                                                                              className="P0eHqb"
                                                                              style={{
                                                                                minHeight: 48
                                                                              }}
                                                                            />
                                                                          </div>
                                                                        </a>
                                                                      </div>
                                                                    </div>
                                                                  </g-tabs>
                                                                  <g-flippy-carousel
                                                                    jsname="GiFVrf"
                                                                    jscontroller="dpLmq"
                                                                    className="OKv0rd"
                                                                    jsdata="siX0qc;_;Asaulk"
                                                                    jsshadow=""
                                                                    jsaction="EormBc:HFYvKc;gEKQDb:yUtVib;GZOiOb:p8Bpjd;qJ508e:cwljjf;rcuQ6b:npT2md"
                                                                  >
                                                                    <div
                                                                      jsname="kTbXfc"
                                                                      className="TjPuwe hpdr6b"
                                                                    >
                                                                      <div
                                                                        jsname="fMohEc"
                                                                        className="wooVsc"
                                                                      >
                                                                        <ol
                                                                          jsname="vfHRxf"
                                                                          className="LacTVd OhScic zsYMMe"
                                                                        >
                                                                          <li
                                                                            jsname="sRYx7b"
                                                                            className="SbQ21c ImU5bf"
                                                                            role="group"
                                                                            tabIndex={
                                                                              -1
                                                                            }
                                                                            jsaction="focus:AZTNzb"
                                                                            aria-hidden="true"
                                                                            style={{
                                                                              position:
                                                                                "absolute",
                                                                              display:
                                                                                "block",
                                                                              transform:
                                                                                "translate3d(-100%, 0px, 0px)",
                                                                              visibility:
                                                                                "hidden"
                                                                            }}
                                                                          >
                                                                            <label
                                                                              className="zNmbpe"
                                                                              id="_w4sBZYmTHJ_RwPAPx5aZiAo_33_lbl"
                                                                            >
                                                                              1 из 2
                                                                            </label>
                                                                            <span jsslot="">
                                                                              <div aria-labelledby="_w4sBZYmTHJ_RwPAPx5aZiAo_33_lbl">
                                                                                <span jsslot="">
                                                                                  <div
                                                                                    aria-labelledby="_w4sBZYmTHJ_RwPAPx5aZiAo_30_0"
                                                                                    id="_w4sBZYmTHJ_RwPAPx5aZiAo_31_0"
                                                                                    role="tabpanel"
                                                                                  >
                                                                                    <div
                                                                                      jscontroller="s0j7C"
                                                                                      className="XNfAUb"
                                                                                      id="_w4sBZYmTHJ_RwPAPx5aZiAo_34"
                                                                                      jsdata="M2v9If;_;Asaulo"
                                                                                      jsshadow=""
                                                                                      jsaction="wbfeDd:EDKYjb;c2Q7He:aJ8u7;F9ekxb:nnsrCf;WGwvzc:Xj7hvb;sOvSJd:OR1BUb;a7JlDe:HFYvKc;keydown:uYT2Vb;rcuQ6b:npT2md;lnkFzb:jCOVSe"
                                                                                    >
                                                                                      <div
                                                                                        jsname="haAclf"
                                                                                        className="RyIFgf"
                                                                                        data-scca=""
                                                                                        data-hveid="CA0QFw"
                                                                                        data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQuckJegQIDRAX"
                                                                                        style={{
                                                                                          overflowX:
                                                                                            "auto"
                                                                                        }}
                                                                                      >
                                                                                        <div
                                                                                          jsname="s2gQvd"
                                                                                          className="EDblX HG5ZQb"
                                                                                          style={{
                                                                                            paddingTop: 20,
                                                                                            paddingBottom: 20,
                                                                                            paddingLeft: 20
                                                                                          }}
                                                                                          jsslot=""
                                                                                        >
                                                                                          <div
                                                                                            jsname="xl0Jqb"
                                                                                            className="LXjnqc"
                                                                                            role="list"
                                                                                          >
                                                                                            <div
                                                                                              className="WtIZZb XRVJtc Wp0Vac CLLuUd KAt2X"
                                                                                              data-name="Solitaire"
                                                                                              data-query="собрать пасьянс"
                                                                                              data-sbi-name="si"
                                                                                              data-sbi-value="ACFMAn_rDC6i9ZHK3aKR1iClEYgD6E1TSF5y7YE_T-85n8sOueG0d11aL9jS6ebS6ILPa1XsZdtp3HEVecwvzkTbJTLV1QPfXQ=="
                                                                                              jscontroller="A4IWTb"
                                                                                              role="listitem"
                                                                                              jsaction="rcuQ6b:npT2md"
                                                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQlcIJKAR6BAgNECQ"
                                                                                            >
                                                                                              <div
                                                                                                className="VqeGe"
                                                                                                style={{
                                                                                                  width: 106
                                                                                                }}
                                                                                              >
                                                                                                <a
                                                                                                  href="/search?q=собрать пасьянс&si=ACFMAn_rDC6i9ZHK3aKR1iClEYgD6E1TSF5y7YE_T-85n8sOueG0d11aL9jS6ebS6ILPa1XsZdtp3HEVecwvzkTbJTLV1QPfXQ=="
                                                                                                  ping="/url?sa=t&source=web&rct=j&opi=89978449&url=%23&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQme8CegQIDRAl&sqi=2"
                                                                                                >
                                                                                                  <div
                                                                                                    className="taJbee Wp0Vac CLLuUd"
                                                                                                    style={{
                                                                                                      width: 106,
                                                                                                      height: 106
                                                                                                    }}
                                                                                                  >
                                                                                                    <div
                                                                                                      className="uhHOwf BYbUcd"
                                                                                                      style={{
                                                                                                        height: 106,
                                                                                                        width: 106
                                                                                                      }}
                                                                                                    >
                                                                                                      <img
                                                                                                        alt=""
                                                                                                        data-src="//www.google.com/logos/fnbx/more_funbox/solitaire.png"
                                                                                                        jscontroller="R3fhkb"
                                                                                                        jsaction="rcuQ6b:npT2md;BUYwVb:QT8fkf;LsLGHf:iSvHDf;DdQV6c:QT8fkf"
                                                                                                        data-atf={
                                                                                                          0
                                                                                                        }
                                                                                                        data-frt={
                                                                                                          0
                                                                                                        }
                                                                                                      />
                                                                                                    </div>
                                                                                                  </div>
                                                                                                  <div className="P962We UkEzBc Wp0Vac CLLuUd">
                                                                                                    Пасьянс
                                                                                                  </div>
                                                                                                </a>
                                                                                              </div>
                                                                                            </div>
                                                                                            <div
                                                                                              className="WtIZZb XRVJtc Wp0Vac CLLuUd KAt2X"
                                                                                              data-name="Earth Day quiz"
                                                                                              data-query="День Земли: викторина"
                                                                                              data-sbi-name="si"
                                                                                              data-sbi-value="ACFMAn8z2PLFe3gSsj4sTW4wk9Bnoi8DZLnaR8LVkYbiy2ufjIY-sRdAaZNu1FHs0HXEPt0a54-D3WXSRQ00KR9Ghol7BhICPbKfF7o7xMNmVM3kiTdnc1QLqzBEJgRa51sZuC3GeHtz"
                                                                                              jscontroller="A4IWTb"
                                                                                              role="listitem"
                                                                                              jsaction="rcuQ6b:npT2md"
                                                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQlcIJKAZ6BAgNECo"
                                                                                            >
                                                                                              <div
                                                                                                className="VqeGe"
                                                                                                style={{
                                                                                                  width: 106
                                                                                                }}
                                                                                              >
                                                                                                <a
                                                                                                  href="/search?q=День Земли: викторина&si=ACFMAn8z2PLFe3gSsj4sTW4wk9Bnoi8DZLnaR8LVkYbiy2ufjIY-sRdAaZNu1FHs0HXEPt0a54-D3WXSRQ00KR9Ghol7BhICPbKfF7o7xMNmVM3kiTdnc1QLqzBEJgRa51sZuC3GeHtz"
                                                                                                  ping="/url?sa=t&source=web&rct=j&opi=89978449&url=%23&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQme8CegQIDRAr&sqi=2"
                                                                                                >
                                                                                                  <div
                                                                                                    className="taJbee Wp0Vac CLLuUd"
                                                                                                    style={{
                                                                                                      width: 106,
                                                                                                      height: 106
                                                                                                    }}
                                                                                                  >
                                                                                                    <div
                                                                                                      className="uhHOwf BYbUcd"
                                                                                                      style={{
                                                                                                        height: 106,
                                                                                                        width: 106
                                                                                                      }}
                                                                                                    >
                                                                                                      <img
                                                                                                        alt=""
                                                                                                        data-src="//www.google.com/logos/fnbx/more_funbox/earth_day_quiz.png"
                                                                                                        jscontroller="R3fhkb"
                                                                                                        jsaction="rcuQ6b:npT2md;BUYwVb:QT8fkf;LsLGHf:iSvHDf;DdQV6c:QT8fkf"
                                                                                                        data-atf={
                                                                                                          0
                                                                                                        }
                                                                                                        data-frt={
                                                                                                          0
                                                                                                        }
                                                                                                      />
                                                                                                    </div>
                                                                                                  </div>
                                                                                                  <div className="P962We UkEzBc Wp0Vac CLLuUd">
                                                                                                    День
                                                                                                    Земли:
                                                                                                    викторина
                                                                                                  </div>
                                                                                                </a>
                                                                                              </div>
                                                                                            </div>
                                                                                            <div
                                                                                              className="WtIZZb XRVJtc Wp0Vac CLLuUd KAt2X"
                                                                                              data-name="Memory game"
                                                                                              data-query="игра на запоминание от Google"
                                                                                              data-sbi-name="si"
                                                                                              data-sbi-value="ACFMAn-T_vBB0WTGhI3gtTgHJSGWDD5Z8zknOJr0XQnWoUid6RcEYrZMJgmIWNd-zIWHcUZummOnGkPrDM4j4oDuORMGSMJkXrlLmezyQZLxJ3ye61fv7PiiHFRHBcE77w6VWHAAWG6m"
                                                                                              jscontroller="A4IWTb"
                                                                                              role="listitem"
                                                                                              jsaction="rcuQ6b:npT2md"
                                                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQlcIJKAl6BAgNEDM"
                                                                                            >
                                                                                              <div
                                                                                                className="VqeGe"
                                                                                                style={{
                                                                                                  width: 106
                                                                                                }}
                                                                                              >
                                                                                                <a
                                                                                                  href="/search?q=игра на запоминание от Google&si=ACFMAn-T_vBB0WTGhI3gtTgHJSGWDD5Z8zknOJr0XQnWoUid6RcEYrZMJgmIWNd-zIWHcUZummOnGkPrDM4j4oDuORMGSMJkXrlLmezyQZLxJ3ye61fv7PiiHFRHBcE77w6VWHAAWG6m"
                                                                                                  ping="/url?sa=t&source=web&rct=j&opi=89978449&url=%23&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQme8CegQIDRA0&sqi=2"
                                                                                                >
                                                                                                  <div
                                                                                                    className="taJbee Wp0Vac CLLuUd"
                                                                                                    style={{
                                                                                                      width: 106,
                                                                                                      height: 106
                                                                                                    }}
                                                                                                  >
                                                                                                    <div
                                                                                                      className="uhHOwf BYbUcd"
                                                                                                      style={{
                                                                                                        height: 106,
                                                                                                        width: 106
                                                                                                      }}
                                                                                                    >
                                                                                                      <img
                                                                                                        alt=""
                                                                                                        data-src="//www.google.com/logos/fnbx/more_funbox/memory_game.2.png"
                                                                                                        jscontroller="R3fhkb"
                                                                                                        jsaction="rcuQ6b:npT2md;BUYwVb:QT8fkf;LsLGHf:iSvHDf;DdQV6c:QT8fkf"
                                                                                                        data-atf={
                                                                                                          0
                                                                                                        }
                                                                                                        data-frt={
                                                                                                          0
                                                                                                        }
                                                                                                      />
                                                                                                    </div>
                                                                                                  </div>
                                                                                                  <div className="P962We UkEzBc Wp0Vac CLLuUd">
                                                                                                    Игра
                                                                                                    на
                                                                                                    запоминание
                                                                                                  </div>
                                                                                                </a>
                                                                                              </div>
                                                                                            </div>
                                                                                            <div
                                                                                              className="WtIZZb XRVJtc Wp0Vac CLLuUd KAt2X"
                                                                                              data-name="Spin a dreidel"
                                                                                              data-query="Дрейдл"
                                                                                              data-sbi-name="si"
                                                                                              data-sbi-value="ACFMAn9IGgLI52BqQUd8X6X3OT7DavqOV9IOfYytfRtidc34tCbDU2cnQx7EpxkpwO5UDJXTQTy9rEpu34JD6FUekozbQ9AnLg=="
                                                                                              jscontroller="A4IWTb"
                                                                                              role="listitem"
                                                                                              jsaction="rcuQ6b:npT2md"
                                                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQlcIJKAN6BAgNECE"
                                                                                            >
                                                                                              <div
                                                                                                className="VqeGe"
                                                                                                style={{
                                                                                                  width: 106
                                                                                                }}
                                                                                              >
                                                                                                <a
                                                                                                  href="/search?q=Дрейдл&si=ACFMAn9IGgLI52BqQUd8X6X3OT7DavqOV9IOfYytfRtidc34tCbDU2cnQx7EpxkpwO5UDJXTQTy9rEpu34JD6FUekozbQ9AnLg=="
                                                                                                  ping="/url?sa=t&source=web&rct=j&opi=89978449&url=%23&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQme8CegQIDRAi&sqi=2"
                                                                                                >
                                                                                                  <div
                                                                                                    className="taJbee Wp0Vac CLLuUd"
                                                                                                    style={{
                                                                                                      width: 106,
                                                                                                      height: 106
                                                                                                    }}
                                                                                                  >
                                                                                                    <div
                                                                                                      className="uhHOwf BYbUcd"
                                                                                                      style={{
                                                                                                        height: 106,
                                                                                                        width: 106
                                                                                                      }}
                                                                                                    >
                                                                                                      <img
                                                                                                        alt=""
                                                                                                        data-src="//www.google.com/logos/fnbx/more_funbox/spin_a_dreidel.png"
                                                                                                        jscontroller="R3fhkb"
                                                                                                        jsaction="rcuQ6b:npT2md;BUYwVb:QT8fkf;LsLGHf:iSvHDf;DdQV6c:QT8fkf"
                                                                                                        data-atf={
                                                                                                          0
                                                                                                        }
                                                                                                        data-frt={
                                                                                                          0
                                                                                                        }
                                                                                                      />
                                                                                                    </div>
                                                                                                  </div>
                                                                                                  <div className="P962We UkEzBc Wp0Vac CLLuUd">
                                                                                                    Дрейдл
                                                                                                  </div>
                                                                                                </a>
                                                                                              </div>
                                                                                            </div>
                                                                                            <div
                                                                                              className="WtIZZb XRVJtc Wp0Vac CLLuUd KAt2X"
                                                                                              data-name="Minesweeper"
                                                                                              data-query="играть в сапера"
                                                                                              data-sbi-name="si"
                                                                                              data-sbi-value="ACFMAn-AKggx77pe6QYM3Sp1gGosqAaTKtuWlw9B9DYreON0EvuK3qDrBfv2qk9m_8k41p3Zhw_gHD2lRFUqO0R_ArVG4bpcBQ=="
                                                                                              jscontroller="A4IWTb"
                                                                                              role="listitem"
                                                                                              jsaction="rcuQ6b:npT2md"
                                                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQlcIJKAh6BAgNEDA"
                                                                                            >
                                                                                              <div
                                                                                                className="VqeGe"
                                                                                                style={{
                                                                                                  width: 106
                                                                                                }}
                                                                                              >
                                                                                                <a
                                                                                                  href="/search?q=играть в сапера&si=ACFMAn-AKggx77pe6QYM3Sp1gGosqAaTKtuWlw9B9DYreON0EvuK3qDrBfv2qk9m_8k41p3Zhw_gHD2lRFUqO0R_ArVG4bpcBQ=="
                                                                                                  ping="/url?sa=t&source=web&rct=j&opi=89978449&url=%23&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQme8CegQIDRAx&sqi=2"
                                                                                                >
                                                                                                  <div
                                                                                                    className="taJbee Wp0Vac CLLuUd"
                                                                                                    style={{
                                                                                                      width: 106,
                                                                                                      height: 106
                                                                                                    }}
                                                                                                  >
                                                                                                    <div
                                                                                                      className="uhHOwf BYbUcd"
                                                                                                      style={{
                                                                                                        height: 106,
                                                                                                        width: 106
                                                                                                      }}
                                                                                                    >
                                                                                                      <img
                                                                                                        alt=""
                                                                                                        data-src="//www.google.com/logos/fnbx/more_funbox/minesweeper.png"
                                                                                                        jscontroller="R3fhkb"
                                                                                                        jsaction="rcuQ6b:npT2md;BUYwVb:QT8fkf;LsLGHf:iSvHDf;DdQV6c:QT8fkf"
                                                                                                        data-atf={
                                                                                                          0
                                                                                                        }
                                                                                                        data-frt={
                                                                                                          0
                                                                                                        }
                                                                                                      />
                                                                                                    </div>
                                                                                                  </div>
                                                                                                  <div className="P962We UkEzBc Wp0Vac CLLuUd">
                                                                                                    Сапер
                                                                                                  </div>
                                                                                                </a>
                                                                                              </div>
                                                                                            </div>
                                                                                            <div
                                                                                              className="WtIZZb XRVJtc Wp0Vac CLLuUd KAt2X"
                                                                                              data-name="Tic tac toe"
                                                                                              data-query="играть в крестики-нолики"
                                                                                              data-sbi-name="si"
                                                                                              data-sbi-value="ACFMAn8QjPM1JHjm2T_DiqP-nMtpdkURFT1z6JD02E5erUZbZc3JJfzy00X5VcWEREzR9_h2OYR7ldNq2HJCcpb8VngQ7KmZochzP3UZluE0HQ__olahFxQ="
                                                                                              jscontroller="A4IWTb"
                                                                                              role="listitem"
                                                                                              jsaction="rcuQ6b:npT2md"
                                                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQlcIJKAV6BAgNECc"
                                                                                            >
                                                                                              <div
                                                                                                className="VqeGe"
                                                                                                style={{
                                                                                                  width: 106
                                                                                                }}
                                                                                              >
                                                                                                <a
                                                                                                  href="/search?q=играть в крестики-нолики&si=ACFMAn8QjPM1JHjm2T_DiqP-nMtpdkURFT1z6JD02E5erUZbZc3JJfzy00X5VcWEREzR9_h2OYR7ldNq2HJCcpb8VngQ7KmZochzP3UZluE0HQ__olahFxQ="
                                                                                                  ping="/url?sa=t&source=web&rct=j&opi=89978449&url=%23&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQme8CegQIDRAo&sqi=2"
                                                                                                >
                                                                                                  <div
                                                                                                    className="taJbee Wp0Vac CLLuUd"
                                                                                                    style={{
                                                                                                      width: 106,
                                                                                                      height: 106
                                                                                                    }}
                                                                                                  >
                                                                                                    <div
                                                                                                      className="uhHOwf BYbUcd"
                                                                                                      style={{
                                                                                                        height: 106,
                                                                                                        width: 106
                                                                                                      }}
                                                                                                    >
                                                                                                      <img
                                                                                                        alt=""
                                                                                                        data-src="//www.google.com/logos/fnbx/more_funbox/tic_tac_toe.png"
                                                                                                        jscontroller="R3fhkb"
                                                                                                        jsaction="rcuQ6b:npT2md;BUYwVb:QT8fkf;LsLGHf:iSvHDf;DdQV6c:QT8fkf"
                                                                                                        data-atf={
                                                                                                          0
                                                                                                        }
                                                                                                        data-frt={
                                                                                                          0
                                                                                                        }
                                                                                                      />
                                                                                                    </div>
                                                                                                  </div>
                                                                                                  <div className="P962We UkEzBc Wp0Vac CLLuUd">
                                                                                                    Крестики-нолики
                                                                                                  </div>
                                                                                                </a>
                                                                                              </div>
                                                                                            </div>
                                                                                            <div
                                                                                              className="WtIZZb XRVJtc Wp0Vac CLLuUd KAt2X"
                                                                                              data-name="Fun facts"
                                                                                              data-query="Интересные факты"
                                                                                              data-sbi-name="si"
                                                                                              data-sbi-value="ACFMAn9MmKj63yeWjXh0GgwqUdevtKPaDPlp3GSxsnFVxDHD4C76aOANpHJCF9fORDyMqobxT-Epkrkuhk7DlN23GFjiB8TAzmk-o674iDDIu7BmD3ogVbs="
                                                                                              jscontroller="A4IWTb"
                                                                                              role="listitem"
                                                                                              jsaction="rcuQ6b:npT2md"
                                                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQlcIJKAd6BAgNEC0"
                                                                                            >
                                                                                              <div
                                                                                                className="VqeGe"
                                                                                                style={{
                                                                                                  width: 106
                                                                                                }}
                                                                                              >
                                                                                                <a
                                                                                                  href="/search?q=Интересные факты&si=ACFMAn9MmKj63yeWjXh0GgwqUdevtKPaDPlp3GSxsnFVxDHD4C76aOANpHJCF9fORDyMqobxT-Epkrkuhk7DlN23GFjiB8TAzmk-o674iDDIu7BmD3ogVbs="
                                                                                                  ping="/url?sa=t&source=web&rct=j&opi=89978449&url=%23&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQme8CegQIDRAu&sqi=2"
                                                                                                >
                                                                                                  <div
                                                                                                    className="taJbee Wp0Vac CLLuUd"
                                                                                                    style={{
                                                                                                      width: 106,
                                                                                                      height: 106
                                                                                                    }}
                                                                                                  >
                                                                                                    <div
                                                                                                      className="uhHOwf BYbUcd"
                                                                                                      style={{
                                                                                                        height: 106,
                                                                                                        width: 106
                                                                                                      }}
                                                                                                    >
                                                                                                      <img
                                                                                                        alt=""
                                                                                                        data-src="//www.google.com/logos/fnbx/more_funbox/im_feeling_curious.png"
                                                                                                        jscontroller="R3fhkb"
                                                                                                        jsaction="rcuQ6b:npT2md;BUYwVb:QT8fkf;LsLGHf:iSvHDf;DdQV6c:QT8fkf"
                                                                                                        data-atf={
                                                                                                          0
                                                                                                        }
                                                                                                        data-frt={
                                                                                                          0
                                                                                                        }
                                                                                                      />
                                                                                                    </div>
                                                                                                  </div>
                                                                                                  <div className="P962We UkEzBc Wp0Vac CLLuUd">
                                                                                                    Интересные
                                                                                                    факты
                                                                                                  </div>
                                                                                                </a>
                                                                                              </div>
                                                                                            </div>
                                                                                            <div
                                                                                              className="WtIZZb XRVJtc Wp0Vac CLLuUd KAt2X"
                                                                                              data-name="Animal sounds"
                                                                                              data-query="Звуки животных"
                                                                                              data-sbi-name="si"
                                                                                              data-sbi-value="ACFMAn9GhQtkZwH1lWYQx8pNBV8YDUkYTwY1KrbBv7v-flwY64GSCrjmF5E74Kr61cioJMJC-WIjZ8rIX6-oLXf9zyqUiuWkIfhlZlaA1_ZGD0DMCOPGivc="
                                                                                              jscontroller="A4IWTb"
                                                                                              role="listitem"
                                                                                              jsaction="rcuQ6b:npT2md"
                                                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQlcIJKAB6BAgNEBg"
                                                                                            >
                                                                                              <div
                                                                                                className="VqeGe"
                                                                                                style={{
                                                                                                  width: 106
                                                                                                }}
                                                                                              >
                                                                                                <a
                                                                                                  href="/search?q=Звуки животных&si=ACFMAn9GhQtkZwH1lWYQx8pNBV8YDUkYTwY1KrbBv7v-flwY64GSCrjmF5E74Kr61cioJMJC-WIjZ8rIX6-oLXf9zyqUiuWkIfhlZlaA1_ZGD0DMCOPGivc="
                                                                                                  ping="/url?sa=t&source=web&rct=j&opi=89978449&url=%23&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQme8CegQIDRAZ&sqi=2"
                                                                                                >
                                                                                                  <div
                                                                                                    className="taJbee Wp0Vac CLLuUd"
                                                                                                    style={{
                                                                                                      width: 106,
                                                                                                      height: 106
                                                                                                    }}
                                                                                                  >
                                                                                                    <div
                                                                                                      className="uhHOwf BYbUcd"
                                                                                                      style={{
                                                                                                        height: 106,
                                                                                                        width: 106
                                                                                                      }}
                                                                                                    >
                                                                                                      <img
                                                                                                        alt=""
                                                                                                        data-src="//www.google.com/logos/fnbx/more_funbox/animal_sounds.png"
                                                                                                        jscontroller="R3fhkb"
                                                                                                        jsaction="rcuQ6b:npT2md;BUYwVb:QT8fkf;LsLGHf:iSvHDf;DdQV6c:QT8fkf"
                                                                                                        data-atf={
                                                                                                          0
                                                                                                        }
                                                                                                        data-frt={
                                                                                                          0
                                                                                                        }
                                                                                                      />
                                                                                                    </div>
                                                                                                  </div>
                                                                                                  <div className="P962We UkEzBc Wp0Vac CLLuUd">
                                                                                                    Звуки
                                                                                                    животных
                                                                                                  </div>
                                                                                                </a>
                                                                                              </div>
                                                                                            </div>
                                                                                            <div
                                                                                              className="WtIZZb XRVJtc Wp0Vac CLLuUd KAt2X"
                                                                                              data-name="Snake"
                                                                                              data-query="играть в змейку"
                                                                                              data-sbi-name="si"
                                                                                              data-sbi-value="ACFMAn8o89t-IHW0jJ4LFrbKM39rFdtPKUPvH_W9Ws-HX-FBLPnf5dC6E4ss5bfl_RfDRH_3HzgXPIgOfXGgwSeyBnrjuP0S4g=="
                                                                                              jscontroller="A4IWTb"
                                                                                              role="listitem"
                                                                                              jsaction="rcuQ6b:npT2md"
                                                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQlcIJKAF6BAgNEBs"
                                                                                            >
                                                                                              <div
                                                                                                className="VqeGe"
                                                                                                style={{
                                                                                                  width: 106
                                                                                                }}
                                                                                              >
                                                                                                <a
                                                                                                  href="/search?q=играть в змейку&si=ACFMAn8o89t-IHW0jJ4LFrbKM39rFdtPKUPvH_W9Ws-HX-FBLPnf5dC6E4ss5bfl_RfDRH_3HzgXPIgOfXGgwSeyBnrjuP0S4g=="
                                                                                                  ping="/url?sa=t&source=web&rct=j&opi=89978449&url=%23&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQme8CegQIDRAc&sqi=2"
                                                                                                >
                                                                                                  <div
                                                                                                    className="taJbee Wp0Vac CLLuUd"
                                                                                                    style={{
                                                                                                      width: 106,
                                                                                                      height: 106
                                                                                                    }}
                                                                                                  >
                                                                                                    <div
                                                                                                      className="uhHOwf BYbUcd"
                                                                                                      style={{
                                                                                                        height: 106,
                                                                                                        width: 106
                                                                                                      }}
                                                                                                    >
                                                                                                      <img
                                                                                                        alt=""
                                                                                                        data-src="//www.google.com/logos/fnbx/more_funbox/snake.png"
                                                                                                        jscontroller="R3fhkb"
                                                                                                        jsaction="rcuQ6b:npT2md;BUYwVb:QT8fkf;LsLGHf:iSvHDf;DdQV6c:QT8fkf"
                                                                                                        data-atf={
                                                                                                          0
                                                                                                        }
                                                                                                        data-frt={
                                                                                                          0
                                                                                                        }
                                                                                                      />
                                                                                                    </div>
                                                                                                  </div>
                                                                                                  <div className="P962We UkEzBc Wp0Vac CLLuUd">
                                                                                                    Змейка
                                                                                                  </div>
                                                                                                </a>
                                                                                              </div>
                                                                                            </div>
                                                                                            <div
                                                                                              className="WtIZZb XRVJtc Wp0Vac CLLuUd KAt2X"
                                                                                              data-name="PAC-MAN"
                                                                                              data-query="играть в пакман"
                                                                                              data-sbi-name="si"
                                                                                              data-sbi-value="ACFMAn9FSHc9Gfo_vbRWRlT8IuBbT6X0sO_oUdapnn-r7DsMTCd6P_sYHrmdjJ6A8I4g70PJGNNLxO9xMAZQyyHbliVQTtHniw=="
                                                                                              jscontroller="A4IWTb"
                                                                                              role="listitem"
                                                                                              jsaction="rcuQ6b:npT2md"
                                                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQlcIJKAJ6BAgNEB4"
                                                                                            >
                                                                                              <div
                                                                                                className="VqeGe"
                                                                                                style={{
                                                                                                  width: 106
                                                                                                }}
                                                                                              >
                                                                                                <a
                                                                                                  href="/search?q=играть в пакман&si=ACFMAn9FSHc9Gfo_vbRWRlT8IuBbT6X0sO_oUdapnn-r7DsMTCd6P_sYHrmdjJ6A8I4g70PJGNNLxO9xMAZQyyHbliVQTtHniw=="
                                                                                                  ping="/url?sa=t&source=web&rct=j&opi=89978449&url=%23&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQme8CegQIDRAf&sqi=2"
                                                                                                >
                                                                                                  <div
                                                                                                    className="taJbee Wp0Vac CLLuUd"
                                                                                                    style={{
                                                                                                      width: 106,
                                                                                                      height: 106
                                                                                                    }}
                                                                                                  >
                                                                                                    <div
                                                                                                      className="uhHOwf BYbUcd"
                                                                                                      style={{
                                                                                                        height: 106,
                                                                                                        width: 106
                                                                                                      }}
                                                                                                    >
                                                                                                      <img
                                                                                                        alt=""
                                                                                                        data-src="//www.google.com/logos/fnbx/more_funbox/pacman.png"
                                                                                                        jscontroller="R3fhkb"
                                                                                                        jsaction="rcuQ6b:npT2md;BUYwVb:QT8fkf;LsLGHf:iSvHDf;DdQV6c:QT8fkf"
                                                                                                        data-atf={
                                                                                                          0
                                                                                                        }
                                                                                                        data-frt={
                                                                                                          0
                                                                                                        }
                                                                                                      />
                                                                                                    </div>
                                                                                                  </div>
                                                                                                  <div className="P962We UkEzBc Wp0Vac CLLuUd">
                                                                                                    ПАКМАН
                                                                                                  </div>
                                                                                                </a>
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                          <div
                                                                                            style={{
                                                                                              minWidth: 20,
                                                                                              padding: 0,
                                                                                              margin: 0
                                                                                            }}
                                                                                          />
                                                                                        </div>
                                                                                      </div>
                                                                                      <div jsname="Y5ANHe">
                                                                                        <g-left-button
                                                                                          jsname="sIJmDf"
                                                                                          className="pQXcHc wgbRNb bCwlI tHT0l OZ5bRd btpNFe"
                                                                                          style={{
                                                                                            top: 0,
                                                                                            left: 6
                                                                                          }}
                                                                                          aria-hidden="true"
                                                                                          jsaction="PfjCMb"
                                                                                          aria-label="Предыдущая"
                                                                                          role="button"
                                                                                        >
                                                                                          <g-fab
                                                                                            className="sr9hec OvQkSb s3IB3"
                                                                                            style={{
                                                                                              backgroundColor:
                                                                                                "#fff",
                                                                                              color:
                                                                                                "#70757a"
                                                                                            }}
                                                                                          >
                                                                                            <span className="U8v51e S3PB2d z1asCe">
                                                                                              <svg
                                                                                                focusable="false"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                viewBox="0 0 24 24"
                                                                                              >
                                                                                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                                                                              </svg>
                                                                                            </span>
                                                                                          </g-fab>
                                                                                        </g-left-button>
                                                                                      </div>
                                                                                      <div jsname="AK6yne">
                                                                                        <g-right-button
                                                                                          jsname="IHFM4"
                                                                                          style={{
                                                                                            top: 0,
                                                                                            right: 6
                                                                                          }}
                                                                                          aria-hidden="true"
                                                                                          jsaction="sYPGdb"
                                                                                          className="wgbRNb VdehBf tHT0l OZ5bRd btpNFe"
                                                                                          aria-label="Следующая"
                                                                                          role="button"
                                                                                        >
                                                                                          <g-fab
                                                                                            className="sr9hec OvQkSb s3IB3"
                                                                                            style={{
                                                                                              backgroundColor:
                                                                                                "#fff",
                                                                                              color:
                                                                                                "#70757a"
                                                                                            }}
                                                                                          >
                                                                                            <span className="U8v51e S3PB2d z1asCe">
                                                                                              <svg
                                                                                                focusable="false"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                viewBox="0 0 24 24"
                                                                                              >
                                                                                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                                                                              </svg>
                                                                                            </span>
                                                                                          </g-fab>
                                                                                        </g-right-button>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </span>
                                                                              </div>
                                                                            </span>
                                                                          </li>
                                                                          <li
                                                                            jsname="sRYx7b"
                                                                            className="SbQ21c epKwIc"
                                                                            role="group"
                                                                            tabIndex={
                                                                              -1
                                                                            }
                                                                            jsaction="focus:AZTNzb"
                                                                            aria-hidden="false"
                                                                            style={{
                                                                              position:
                                                                                "static",
                                                                              display:
                                                                                "block"
                                                                            }}
                                                                          >
                                                                            <label
                                                                              className="zNmbpe"
                                                                              id="_w4sBZYmTHJ_RwPAPx5aZiAo_35_lbl"
                                                                            >
                                                                              2 из 2
                                                                            </label>
                                                                            <span jsslot="">
                                                                              <div aria-labelledby="_w4sBZYmTHJ_RwPAPx5aZiAo_35_lbl">
                                                                                <span jsslot="">
                                                                                  <div
                                                                                    aria-labelledby="_w4sBZYmTHJ_RwPAPx5aZiAo_30_1"
                                                                                    id="_w4sBZYmTHJ_RwPAPx5aZiAo_31_1"
                                                                                    role="tabpanel"
                                                                                  >
                                                                                    <div
                                                                                      jscontroller="s0j7C"
                                                                                      className="XNfAUb"
                                                                                      id="_w4sBZYmTHJ_RwPAPx5aZiAo_36"
                                                                                      jsdata="M2v9If;_;Asaulo"
                                                                                      jsshadow=""
                                                                                      jsaction="wbfeDd:EDKYjb;c2Q7He:aJ8u7;F9ekxb:nnsrCf;WGwvzc:Xj7hvb;sOvSJd:OR1BUb;a7JlDe:HFYvKc;keydown:uYT2Vb;rcuQ6b:npT2md;lnkFzb:jCOVSe"
                                                                                    >
                                                                                      <div
                                                                                        jsname="haAclf"
                                                                                        className="RyIFgf"
                                                                                        data-scca=""
                                                                                        data-hveid="CA0QOA"
                                                                                        data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQuckJegQIDRA4"
                                                                                        style={{
                                                                                          overflowX:
                                                                                            "auto"
                                                                                        }}
                                                                                      >
                                                                                        <div
                                                                                          jsname="s2gQvd"
                                                                                          className="EDblX HG5ZQb"
                                                                                          style={{
                                                                                            paddingTop: 20,
                                                                                            paddingBottom: 20,
                                                                                            paddingLeft: 20
                                                                                          }}
                                                                                          jsslot=""
                                                                                        >
                                                                                          <div
                                                                                            jsname="xl0Jqb"
                                                                                            className="LXjnqc"
                                                                                            role="list"
                                                                                          >
                                                                                            <div
                                                                                              className="WtIZZb XRVJtc Wp0Vac CLLuUd KAt2X"
                                                                                              data-name="Meditate"
                                                                                              data-query="Медитация"
                                                                                              data-sbi-name="si"
                                                                                              data-sbi-value="ACFMAn-xLWFmY1uvByldE3Xo0dUlvMTOfuLdZhADydV3nE0mCjpKbLkmnKyLMOUq-cQerhD7zalkgnBi4_L3xybktZS_4W0Sv-jNta9LN20DTLVNew_B0NTgDc-Syae3BQcgP5s_vc-C"
                                                                                              jscontroller="A4IWTb"
                                                                                              role="listitem"
                                                                                              jsaction="rcuQ6b:npT2md"
                                                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQlcIJKAd6BAgNEEc"
                                                                                            >
                                                                                              <div
                                                                                                className="VqeGe"
                                                                                                style={{
                                                                                                  width: 106
                                                                                                }}
                                                                                              >
                                                                                                <a
                                                                                                  href="/search?q=Медитация&si=ACFMAn-xLWFmY1uvByldE3Xo0dUlvMTOfuLdZhADydV3nE0mCjpKbLkmnKyLMOUq-cQerhD7zalkgnBi4_L3xybktZS_4W0Sv-jNta9LN20DTLVNew_B0NTgDc-Syae3BQcgP5s_vc-C"
                                                                                                  ping="/url?sa=t&source=web&rct=j&opi=89978449&url=%23&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQme8CegQIDRBI&sqi=2"
                                                                                                >
                                                                                                  <div
                                                                                                    className="taJbee Wp0Vac CLLuUd"
                                                                                                    style={{
                                                                                                      width: 106,
                                                                                                      height: 106
                                                                                                    }}
                                                                                                  >
                                                                                                    <img
                                                                                                      className="dl4X9b"
                                                                                                      id="fbximg_15"
                                                                                                      src="data:image/png;base64,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"
                                                                                                      alt=""
                                                                                                      data-atf={
                                                                                                        0
                                                                                                      }
                                                                                                      data-frt={
                                                                                                        0
                                                                                                      }
                                                                                                    />
                                                                                                  </div>
                                                                                                  <div className="P962We UkEzBc Wp0Vac CLLuUd">
                                                                                                    Медитация
                                                                                                  </div>
                                                                                                </a>
                                                                                              </div>
                                                                                            </div>
                                                                                            <div
                                                                                              className="WtIZZb XRVJtc Wp0Vac CLLuUd KAt2X"
                                                                                              data-name="Spinner"
                                                                                              data-query="Спиннер"
                                                                                              data-sbi-name="si"
                                                                                              data-sbi-value="ACFMAn8L4xQs6RoMEKsUnyd634PLfQprt3Mcs6YjxrKYafd70Va-OloRXNcehwOyuGEIb49Pv7ZWz6eBS5NycJ_CrEbfU-CDFg=="
                                                                                              jscontroller="A4IWTb"
                                                                                              role="listitem"
                                                                                              jsaction="rcuQ6b:npT2md"
                                                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQlcIJKAJ6BAgNED0"
                                                                                            >
                                                                                              <div
                                                                                                className="VqeGe"
                                                                                                style={{
                                                                                                  width: 106
                                                                                                }}
                                                                                              >
                                                                                                <a
                                                                                                  href="/search?q=Спиннер&si=ACFMAn8L4xQs6RoMEKsUnyd634PLfQprt3Mcs6YjxrKYafd70Va-OloRXNcehwOyuGEIb49Pv7ZWz6eBS5NycJ_CrEbfU-CDFg=="
                                                                                                  ping="/url?sa=t&source=web&rct=j&opi=89978449&url=%23&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQme8CegQIDRA-&sqi=2"
                                                                                                >
                                                                                                  <div
                                                                                                    className="taJbee Wp0Vac CLLuUd"
                                                                                                    style={{
                                                                                                      width: 106,
                                                                                                      height: 106
                                                                                                    }}
                                                                                                  >
                                                                                                    <img
                                                                                                      className="dl4X9b"
                                                                                                      id="fbximg_5"
                                                                                                      src="data:image/png;base64,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"
                                                                                                      alt=""
                                                                                                      data-atf={
                                                                                                        0
                                                                                                      }
                                                                                                      data-frt={
                                                                                                        0
                                                                                                      }
                                                                                                    />
                                                                                                  </div>
                                                                                                  <div className="P962We UkEzBc Wp0Vac CLLuUd">
                                                                                                    Спиннер
                                                                                                  </div>
                                                                                                </a>
                                                                                              </div>
                                                                                            </div>
                                                                                            <div
                                                                                              className="WtIZZb XRVJtc Wp0Vac CLLuUd KAt2X"
                                                                                              data-name="Tuner"
                                                                                              data-query="google тюнер"
                                                                                              data-sbi-name="si"
                                                                                              data-sbi-value="ACFMAn-hedKUA6f38ZVv3RwOP7ZJEvMp2nsuE8SOz5I5UAv-bKsxKyPXeGLJpEtbCpypLYX4qiLB"
                                                                                              jscontroller="A4IWTb"
                                                                                              role="listitem"
                                                                                              jsaction="rcuQ6b:npT2md"
                                                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQlcIJKAB6BAgNEDk"
                                                                                            >
                                                                                              <div
                                                                                                className="VqeGe"
                                                                                                style={{
                                                                                                  width: 106
                                                                                                }}
                                                                                              >
                                                                                                <a
                                                                                                  href="/search?q=google тюнер&si=ACFMAn-hedKUA6f38ZVv3RwOP7ZJEvMp2nsuE8SOz5I5UAv-bKsxKyPXeGLJpEtbCpypLYX4qiLB"
                                                                                                  ping="/url?sa=t&source=web&rct=j&opi=89978449&url=%23&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQme8CegQIDRA6&sqi=2"
                                                                                                >
                                                                                                  <div
                                                                                                    className="taJbee Wp0Vac CLLuUd"
                                                                                                    style={{
                                                                                                      width: 106,
                                                                                                      height: 106
                                                                                                    }}
                                                                                                  >
                                                                                                    <img
                                                                                                      className="dl4X9b"
                                                                                                      id="fbximg_1"
                                                                                                      src="data:image/png;base64,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"
                                                                                                      alt=""
                                                                                                      data-atf={
                                                                                                        0
                                                                                                      }
                                                                                                      data-frt={
                                                                                                        0
                                                                                                      }
                                                                                                    />
                                                                                                  </div>
                                                                                                  <div className="P962We UkEzBc Wp0Vac CLLuUd">
                                                                                                    Тюнер
                                                                                                  </div>
                                                                                                </a>
                                                                                              </div>
                                                                                            </div>
                                                                                            <div
                                                                                              className="WtIZZb XRVJtc Wp0Vac CLLuUd KAt2X"
                                                                                              data-name="Calculator"
                                                                                              data-query="Калькулятор"
                                                                                              data-sbi-name=""
                                                                                              data-sbi-value=""
                                                                                              jscontroller="A4IWTb"
                                                                                              role="listitem"
                                                                                              jsaction="rcuQ6b:npT2md"
                                                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQlcIJKAV6BAgNEEM"
                                                                                            >
                                                                                              <div
                                                                                                className="VqeGe"
                                                                                                style={{
                                                                                                  width: 106
                                                                                                }}
                                                                                              >
                                                                                                <a
                                                                                                  href="/search?q=Калькулятор"
                                                                                                  ping="/url?sa=t&source=web&rct=j&opi=89978449&url=%23&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQme8CegQIDRBE&sqi=2"
                                                                                                >
                                                                                                  <div
                                                                                                    className="taJbee Wp0Vac CLLuUd"
                                                                                                    style={{
                                                                                                      width: 106,
                                                                                                      height: 106
                                                                                                    }}
                                                                                                  >
                                                                                                    <img
                                                                                                      className="dl4X9b"
                                                                                                      id="fbximg_11"
                                                                                                      src="data:image/png;base64,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"
                                                                                                      alt=""
                                                                                                      data-atf={
                                                                                                        0
                                                                                                      }
                                                                                                      data-frt={
                                                                                                        0
                                                                                                      }
                                                                                                    />
                                                                                                  </div>
                                                                                                  <div className="P962We UkEzBc Wp0Vac CLLuUd">
                                                                                                    Калькулятор
                                                                                                  </div>
                                                                                                </a>
                                                                                              </div>
                                                                                            </div>
                                                                                            <div
                                                                                              className="WtIZZb XRVJtc Wp0Vac CLLuUd KAt2X"
                                                                                              data-name="Flip a coin"
                                                                                              data-query="Орел или решка"
                                                                                              data-sbi-name="si"
                                                                                              data-sbi-value="ACFMAn-5RxLfRtWr01RlmLzygGt1l73yJTq6v9WXzsDmWwemwNln2ca2vQrOPkcziwQ_fVkpld1cehY-ZhYvaFG2-xAKhZUQi7MLrcvUotp2rfKxzVaeyB4="
                                                                                              jscontroller="A4IWTb"
                                                                                              role="listitem"
                                                                                              jsaction="rcuQ6b:npT2md"
                                                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQlcIJKAF6BAgNEDs"
                                                                                            >
                                                                                              <div
                                                                                                className="VqeGe"
                                                                                                style={{
                                                                                                  width: 106
                                                                                                }}
                                                                                              >
                                                                                                <a
                                                                                                  href="/search?q=Орел или решка&si=ACFMAn-5RxLfRtWr01RlmLzygGt1l73yJTq6v9WXzsDmWwemwNln2ca2vQrOPkcziwQ_fVkpld1cehY-ZhYvaFG2-xAKhZUQi7MLrcvUotp2rfKxzVaeyB4="
                                                                                                  ping="/url?sa=t&source=web&rct=j&opi=89978449&url=%23&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQme8CegQIDRA8&sqi=2"
                                                                                                >
                                                                                                  <div
                                                                                                    className="taJbee Wp0Vac CLLuUd"
                                                                                                    style={{
                                                                                                      width: 106,
                                                                                                      height: 106
                                                                                                    }}
                                                                                                  >
                                                                                                    <img
                                                                                                      className="dl4X9b"
                                                                                                      id="fbximg_3"
                                                                                                      src="data:image/png;base64,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"
                                                                                                      alt=""
                                                                                                      data-atf={
                                                                                                        0
                                                                                                      }
                                                                                                      data-frt={
                                                                                                        0
                                                                                                      }
                                                                                                    />
                                                                                                  </div>
                                                                                                  <div className="P962We UkEzBc Wp0Vac CLLuUd">
                                                                                                    Орел
                                                                                                    или
                                                                                                    решка
                                                                                                  </div>
                                                                                                </a>
                                                                                              </div>
                                                                                            </div>
                                                                                            <div
                                                                                              className="WtIZZb XRVJtc Wp0Vac CLLuUd KAt2X"
                                                                                              data-name="Color picker"
                                                                                              data-query="Палитра"
                                                                                              data-sbi-name="si"
                                                                                              data-sbi-value="ACFMAn8Lg3Ms5V---_eacp8gPk_aH7oNjAHLtcMEQSWkGMmBAJp6eDdoOITT7qMRhCTeJcK5kSQJj1HDJ5DGHY6r6mmUGwR7wA=="
                                                                                              jscontroller="A4IWTb"
                                                                                              role="listitem"
                                                                                              jsaction="rcuQ6b:npT2md"
                                                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQlcIJKAR6BAgNEEE"
                                                                                            >
                                                                                              <div
                                                                                                className="VqeGe"
                                                                                                style={{
                                                                                                  width: 106
                                                                                                }}
                                                                                              >
                                                                                                <a
                                                                                                  href="/search?q=Палитра&si=ACFMAn8Lg3Ms5V---_eacp8gPk_aH7oNjAHLtcMEQSWkGMmBAJp6eDdoOITT7qMRhCTeJcK5kSQJj1HDJ5DGHY6r6mmUGwR7wA=="
                                                                                                  ping="/url?sa=t&source=web&rct=j&opi=89978449&url=%23&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQme8CegQIDRBC&sqi=2"
                                                                                                >
                                                                                                  <div
                                                                                                    className="taJbee Wp0Vac CLLuUd"
                                                                                                    style={{
                                                                                                      width: 106,
                                                                                                      height: 106
                                                                                                    }}
                                                                                                  >
                                                                                                    <img
                                                                                                      className="dl4X9b"
                                                                                                      id="fbximg_9"
                                                                                                      src="data:image/png;base64,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"
                                                                                                      alt=""
                                                                                                      data-atf={
                                                                                                        0
                                                                                                      }
                                                                                                      data-frt={
                                                                                                        0
                                                                                                      }
                                                                                                    />
                                                                                                  </div>
                                                                                                  <div className="P962We UkEzBc Wp0Vac CLLuUd">
                                                                                                    Палитра
                                                                                                  </div>
                                                                                                </a>
                                                                                              </div>
                                                                                            </div>
                                                                                            <div
                                                                                              className="WtIZZb XRVJtc Wp0Vac CLLuUd KAt2X"
                                                                                              data-name="Roll a die"
                                                                                              data-query="Игральная кость"
                                                                                              data-sbi-name="si"
                                                                                              data-sbi-value="ACFMAn-4ElRw0Exu-uMHHhLlSHiFtsOhWyGsJ4CQSHQrD--adRrfNPnPHAcKiEgW0-v6KKGWACsHsEO1PCyRaI8nOv_RUOVU7ky0G-sbPqf9ov2vnMLXE5Q="
                                                                                              jscontroller="A4IWTb"
                                                                                              role="listitem"
                                                                                              jsaction="rcuQ6b:npT2md"
                                                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQlcIJKAZ6BAgNEEU"
                                                                                            >
                                                                                              <div
                                                                                                className="VqeGe"
                                                                                                style={{
                                                                                                  width: 106
                                                                                                }}
                                                                                              >
                                                                                                <a
                                                                                                  href="/search?q=Игральная кость&si=ACFMAn-4ElRw0Exu-uMHHhLlSHiFtsOhWyGsJ4CQSHQrD--adRrfNPnPHAcKiEgW0-v6KKGWACsHsEO1PCyRaI8nOv_RUOVU7ky0G-sbPqf9ov2vnMLXE5Q="
                                                                                                  ping="/url?sa=t&source=web&rct=j&opi=89978449&url=%23&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQme8CegQIDRBG&sqi=2"
                                                                                                >
                                                                                                  <div
                                                                                                    className="taJbee Wp0Vac CLLuUd"
                                                                                                    style={{
                                                                                                      width: 106,
                                                                                                      height: 106
                                                                                                    }}
                                                                                                  >
                                                                                                    <img
                                                                                                      className="dl4X9b"
                                                                                                      id="fbximg_13"
                                                                                                      src="data:image/png;base64,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"
                                                                                                      alt=""
                                                                                                      data-atf={
                                                                                                        0
                                                                                                      }
                                                                                                      data-frt={
                                                                                                        0
                                                                                                      }
                                                                                                    />
                                                                                                  </div>
                                                                                                  <div className="P962We UkEzBc Wp0Vac CLLuUd">
                                                                                                    Игральная
                                                                                                    кость
                                                                                                  </div>
                                                                                                </a>
                                                                                              </div>
                                                                                            </div>
                                                                                            <div
                                                                                              className="WtIZZb XRVJtc Wp0Vac CLLuUd KAt2X"
                                                                                              data-name="Metronome"
                                                                                              data-query="Метроном"
                                                                                              data-sbi-name="si"
                                                                                              data-sbi-value="ACFMAn_3UjzVMNzWcrvcpol2mMAZmzTBJfD9FM3aE7-_3QSQRyaYyGhlg0WYysJdUMJAgMA6bZAyvZNAxdUMviv-kJtsz_3c_Q=="
                                                                                              jscontroller="A4IWTb"
                                                                                              role="listitem"
                                                                                              jsaction="rcuQ6b:npT2md"
                                                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQlcIJKAN6BAgNED8"
                                                                                            >
                                                                                              <div
                                                                                                className="VqeGe"
                                                                                                style={{
                                                                                                  width: 106
                                                                                                }}
                                                                                              >
                                                                                                <a
                                                                                                  href="/search?q=Метроном&si=ACFMAn_3UjzVMNzWcrvcpol2mMAZmzTBJfD9FM3aE7-_3QSQRyaYyGhlg0WYysJdUMJAgMA6bZAyvZNAxdUMviv-kJtsz_3c_Q=="
                                                                                                  ping="/url?sa=t&source=web&rct=j&opi=89978449&url=%23&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQme8CegQIDRBA&sqi=2"
                                                                                                >
                                                                                                  <div
                                                                                                    className="taJbee Wp0Vac CLLuUd"
                                                                                                    style={{
                                                                                                      width: 106,
                                                                                                      height: 106
                                                                                                    }}
                                                                                                  >
                                                                                                    <img
                                                                                                      className="dl4X9b"
                                                                                                      id="fbximg_7"
                                                                                                      src="data:image/png;base64,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"
                                                                                                      alt=""
                                                                                                      data-atf={
                                                                                                        0
                                                                                                      }
                                                                                                      data-frt={
                                                                                                        0
                                                                                                      }
                                                                                                    />
                                                                                                  </div>
                                                                                                  <div className="P962We UkEzBc Wp0Vac CLLuUd">
                                                                                                    Метроном
                                                                                                  </div>
                                                                                                </a>
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                          <div
                                                                                            style={{
                                                                                              minWidth: 20,
                                                                                              padding: 0,
                                                                                              margin: 0
                                                                                            }}
                                                                                          />
                                                                                        </div>
                                                                                      </div>
                                                                                      <div jsname="Y5ANHe">
                                                                                        <g-left-button
                                                                                          jsname="sIJmDf"
                                                                                          className="pQXcHc wgbRNb bCwlI OZ5bRd btpNFe tHT0l"
                                                                                          style={{
                                                                                            top: 0,
                                                                                            left: 6
                                                                                          }}
                                                                                          aria-hidden="true"
                                                                                          jsaction="PfjCMb"
                                                                                          aria-label="Предыдущая"
                                                                                          role="button"
                                                                                        >
                                                                                          <g-fab
                                                                                            className="sr9hec OvQkSb s3IB3"
                                                                                            style={{
                                                                                              backgroundColor:
                                                                                                "#fff",
                                                                                              color:
                                                                                                "#70757a"
                                                                                            }}
                                                                                          >
                                                                                            <span className="U8v51e S3PB2d z1asCe">
                                                                                              <svg
                                                                                                focusable="false"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                viewBox="0 0 24 24"
                                                                                              >
                                                                                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                                                                              </svg>
                                                                                            </span>
                                                                                          </g-fab>
                                                                                        </g-left-button>
                                                                                      </div>
                                                                                      <div jsname="AK6yne">
                                                                                        <g-right-button
                                                                                          jsname="IHFM4"
                                                                                          style={{
                                                                                            top: 0,
                                                                                            right: 6
                                                                                          }}
                                                                                          aria-hidden="true"
                                                                                          jsaction="sYPGdb"
                                                                                          className="wgbRNb VdehBf OZ5bRd btpNFe tHT0l"
                                                                                          aria-label="Следующая"
                                                                                          role="button"
                                                                                        >
                                                                                          <g-fab
                                                                                            className="sr9hec OvQkSb s3IB3"
                                                                                            style={{
                                                                                              backgroundColor:
                                                                                                "#fff",
                                                                                              color:
                                                                                                "#70757a"
                                                                                            }}
                                                                                          >
                                                                                            <span className="U8v51e S3PB2d z1asCe">
                                                                                              <svg
                                                                                                focusable="false"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                viewBox="0 0 24 24"
                                                                                              >
                                                                                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                                                                              </svg>
                                                                                            </span>
                                                                                          </g-fab>
                                                                                        </g-right-button>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </span>
                                                                              </div>
                                                                            </span>
                                                                          </li>
                                                                        </ol>
                                                                      </div>
                                                                    </div>
                                                                  </g-flippy-carousel>
                                                                </span>
                                                              </span>
                                                            </g-tabbed-carousel>
                                                          </span>
                                                        </g-expandable-content>
                                                        <g-inline-expansion-bar
                                                          className="JPXuV TKZwpe cjSy4c p8Ujvb bZm3Db viNgib"
                                                          jscontroller="vJ1l0"
                                                          aria-expanded="false"
                                                          aria-labelledby="_w4sBZYmTHJ_RwPAPx5aZiAo_37"
                                                          role="button"
                                                          tabIndex={0}
                                                          jsaction="yELBLe;rcuQ6b:npT2md"
                                                          aria-controls=""
                                                        >
                                                          <div jsname="mKTrKf">
                                                            <div
                                                              jsname="GTrWA"
                                                              className="mjkhcd OSrXXb"
                                                              id="_w4sBZYmTHJ_RwPAPx5aZiAo_37"
                                                            >
                                                              <span className="Gldprb">
                                                                Больше игр, игрушек и
                                                                инструментов
                                                              </span>
                                                            </div>
                                                            <span className="zoCvae AB4Wff xTWltf z1asCe">
                                                              <svg
                                                                focusable="false"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                              >
                                                                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                                                              </svg>
                                                            </span>
                                                          </div>
                                                          <div
                                                            jsname="f3VNIf"
                                                            className="mCs3Sb"
                                                          >
                                                            <div
                                                              jsname="r2H3vf"
                                                              className="mCs3Sb mjkhcd OSrXXb"
                                                              id="_w4sBZYmTHJ_RwPAPx5aZiAo_38"
                                                            >
                                                              <span className="Gldprb">
                                                                Больше игр, игрушек и
                                                                инструментов
                                                              </span>
                                                            </div>
                                                            <span className="zoCvae AB4Wff xTWltf z1asCe">
                                                              <svg
                                                                focusable="false"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                              >
                                                                <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
                                                              </svg>
                                                            </span>
                                                          </div>
                                                        </g-inline-expansion-bar>
                                                      </div>
                                                    </g-expandable-container>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div style={{ clear: "both" }} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="AuP6le kno-ftr">
                                    <div className="OwRFvb kno-fb">
                                      <div data-async-context="async_id:duf3-36-9;authority:0;card_id:;entry_point:0;feature_id:;ftoe:0;header:0;is_jobs_spam_form:0;open:0;preselect_answer_index:-1;suggestions:;suggestions_subtypes:;suggestions_types:;surface:0;title:;type:36">
                                        <div
                                          jscontroller="EkevXb"
                                          style={{ display: "none" }}
                                          jsaction="rcuQ6b:npT2md"
                                        />
                                        <div
                                          id="duf3-36-9"
                                          data-jiis="up"
                                          data-async-type="duffy3"
                                          data-async-context-required="type,open,feature_id,async_id,entry_point,authority,card_id,ftoe,title,header,suggestions,surface,suggestions_types,suggestions_subtypes,preselect_answer_index,is_jobs_spam_form"
                                          className="yp"
                                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ-0F6BAgOEAE"
                                        />
                                        <a
                                          className="oBa0Fe"
                                          href="#"
                                          data-async-trigger="duf3-36-9"
                                          aria-label="Оставить отзыв об этом результате"
                                          role="button"
                                          jsaction="trigger.szjOR"
                                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQtw96BAgOEAI"
                                        >
                                          Оставить отзыв
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </block-component>
                            <span id="z9PoV" />
                          </div>
                        </div>
                        <div className="MjjYud">
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                ".rsGxI.Ww4FFb,.Ww4FFb{background-color:#fff;border-size:0px;border-radius:0px;box-shadow:0px}.Ww4FFb .mnr-c,.mnr-c .Ww4FFb,.Ww4FFb .Ww4FFb{box-shadow:none;margin-bottom:0px}.vt6azd{margin:0px 0px 8px;margin:0px 0px 30px;}.tF2Cxc.asEBEc{margin-bottom:30px}.N54PNb{position:relative}.cvP2Ce{contain:layout paint;overflow:hidden;}.kb0PBd{display:block;flex:0 0 auto}.byrV5b{-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.sBJG1d{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.kDmHO{-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.lR4vec{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.xTEyc{-webkit-box-align:start;-webkit-align-items:start;align-items:start;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.OjFzvd{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:start;justify-content:start}.YIPhrb{-webkit-box-align:start;-webkit-align-items:start;align-items:start;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.BToiNc{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:start;justify-content:start}.E4bmEc .Va021{-webkit-box-flex:1;-webkit-flex:1 1 100%;flex:1 1 100%}.E4bmEc .Y76LGf{-webkit-box-flex:1;-webkit-flex:1 1 calc(50% - 4px);flex:1 1 calc(50% - 4px)}sentinel{}a:hover h3.LC20lb{text-decoration:underline}.M8OgIe .dG2XIf .fm06If .LC20lb,.n6SJS h3.LC20lb{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.LC20lb{display:inline-block;line-height:1.3;margin-bottom:3px;}.DKV0Md{padding-top:4px;padding-top:5px;}.DKV0Md{margin-top:18px;}.VjDLd .TieM1d .tjvcx,.IVvPP .tjvcx,.kno-kp .tjvcx,.VjDLd .kp-wholepage-osrp .tjvcx,#rhs .ss6qqb .tjvcx,#rhs .trNcde .tjvcx{display:inline-block;height:19px;overflow-y:hidden}.TbwUpd.ojE3Fb{display:flex;padding:0;align-items:center;padding-bottom:0}.GvPZzd{font-size:12px;line-height:18px;}.VuuXrf{color:#202124;font-size:14px;display:block;line-height:20px;white-space:nowrap;}.H9lube{background-color:#f1f3f4;border:1px solid #ecedef;border-radius:50%;display:inline-flex;justify-content:center;align-items:center;height:26px;width:26px;margin-right:12px;vertical-align:middle;}.eqA2re.NjwKYd{margin-right:0}.Vwoesf:not(.oRVWZ){display:inline-block}.Vwoesf{vertical-align:middle}.XNo5Ab.XNo5Ab{display:block;}.B6fmyf{position:absolute;top:0;height:0;visibility:hidden;white-space:nowrap}.B6fmyf.Mg1HEd{height:auto}.csDOgf{display:inline;visibility:visible}.csDOgf.BCF2pd.ezY6nb,.csDOgf.L48a4c{height:18px}.csDOgf{margin-left:8px;position:relative}.csDOgf.L48a4c{margin-top:16px}.IjabWd{margin-left:2px}.xTFaxe{top:2px}.xTFaxe{color:#4d5156}.D6lY4c{height:22px;width:22px;position:absolute;border-radius:11px}.iTPLzd{cursor:pointer;top:0;line-height:16px}.iTPLzd{left:0;width:28px}.iTPLzd{z-index:1}sentinel{}.rNSxBe{padding-bottom:20px}sentinel{}.eY4mx{padding-left:12px}sentinel{}.lUn2nc{padding-right:12px}sentinel{}.yXK7lf em{color:#5f6368}.yXK7lf a:visited em,.yXK7lf a em{color:inherit}.W8l4ac{padding-top:0;margin-bottom:0}.lEBKkf{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.yDYNvb.lyLwlc{color:#4d5156}.yDYNvb.lyLwlc b{color:#5f6368}.HiHjCd{color:#70757a}.ob9lvb{color:#4d5156}.dyjrff{color:#4d5156}"
                            }}
                          />
                          <div
                            jscontroller="SC7lYd"
                            className="g Ww4FFb vt6azd tF2Cxc asEBEc"
                            lang="en"
                            style={{ width: 600 }}
                            jsaction="QyLbLe:OMITjf;ewaord:qsYrDe;xd28Mb:A6j43c"
                            data-hveid="CBEQAA"
                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFSgAegQIERAA"
                          >
                            <div
                              className="N54PNb BToiNc cvP2Ce"
                              data-snc="ih6Jnb_uXrbCd"
                            >
                              <div
                                className="kb0PBd cvP2Ce jGGQ5e"
                                data-snf="x5WNvb"
                                data-snhf={0}
                              >
                                <div className="yuRUbf">
                                  <div>
                                    <span
                                      jscontroller="msmzHf"
                                      jsaction="rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc"
                                    >
                                      <a
                                        jsname="UWckNb"
                                        href="https://www.random.org/"
                                        jscontroller="M9mgyc"
                                        jsaction="rcuQ6b:npT2md"
                                        data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECBAQAQ"
                                        ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.random.org/&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECBAQAQ&sqi=2"
                                      >
                                        <br />
                                        <h3 className="LC20lb MBeuO DKV0Md">
                                          RANDOM.ORG - True Random Number Service
                                        </h3>
                                        <div className="TbwUpd NJjxre iUh30 ojE3Fb">
                                          <span className="H9lube">
                                            <div
                                              className="eqA2re NjwKYd Vwoesf"
                                              aria-hidden="true"
                                            >
                                              <img
                                                className="XNo5Ab"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAYFBMVEUpKSkPDw4AAAAnJyeys7TR0tXP0NKmp6gvLzAjIyMICAe7vL3X2Nra293e3+Hd3uC1trd/gIGFhYaXmJmfoKEZGRm+v8Dp6ux2dncdHRxhYWJtbm6UlJZPT1ATExOio6STDPx5AAAAqElEQVR4AcXONwKAIAxAUSB2k9h7u/8txTIZmP2LwqOpP9PmTYO0IIye4iT9YpYj8RUVDCCQyqq2NUixFli0prOZtsgzB+r7x4NZetWTAxHpimkYJ4lEiGxrMiWQ4h55nufkeat4LWNkUlBuXAZeM+VGbQIattSDyhDi7sN0G4rYeFBlK/MyeVCZCFliXxwXQsJU6g/u7VB11083Do14066tXU36st86AbdcC24OpiSAAAAAAElFTkSuQmCC"
                                                style={{ height: 18, width: 18 }}
                                                alt=""
                                                data-atf={1}
                                                data-frt={0}
                                              />
                                            </div>
                                          </span>
                                          <div>
                                            <span className="VuuXrf">Random.org</span>
                                            <div className="byrV5b">
                                              <cite
                                                className="tjvcx GvPZzd cHaqb"
                                                role="text"
                                              >
                                                https://www.random.org
                                              </cite>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                    </span>
                                    <div className="B6fmyf byrV5b Mg1HEd">
                                      <div className="TbwUpd iUh30 ojE3Fb">
                                        <span className="H9lube">
                                          <div
                                            className="eqA2re NjwKYd"
                                            style={{ height: 18, width: 18 }}
                                          />
                                        </span>
                                        <div>
                                          <span className="VuuXrf">Random.org</span>
                                          <div className="byrV5b">
                                            <cite
                                              className="tjvcx GvPZzd cHaqb"
                                              role="text"
                                            >
                                              https://www.random.org
                                            </cite>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="csDOgf BCF2pd ezY6nb L48a4c">
                                        <div
                                          jscontroller="exgaYe"
                                          data-bsextraheight={0}
                                          data-isdesktop="true"
                                          data-movewtractions="true"
                                          jsdata="l7Bhpb;_;Asaulw cECq7c;_;Asaul4"
                                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ2esEegQIEBAH"
                                        >
                                          <div
                                            role="button"
                                            tabIndex={0}
                                            jsaction="RvIhPd"
                                            jsname="I3kE2c"
                                            className="iTPLzd rNSxBe lUn2nc"
                                            style={{ position: "absolute" }}
                                            aria-label="Об этом результате"
                                          >
                                            <span
                                              jsname="czHhOd"
                                              className="D6lY4c mBswFe"
                                            >
                                              <span
                                                jsname="Bil8Ae"
                                                className="xTFaxe z1asCe"
                                                style={{
                                                  height: 18,
                                                  lineHeight: 18,
                                                  width: 18
                                                }}
                                              >
                                                <svg
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 24 24"
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                                </svg>
                                              </span>
                                            </span>
                                          </div>
                                          <span
                                            jsname="zOVa8"
                                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQh-4GegQIEBAI"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="kb0PBd cvP2Ce"
                                data-sncf={1}
                                data-snf="nke7rc"
                              >
                                <div
                                  className="VwiC3b yXK7lf yDYNvb W8l4ac lyLwlc lEBKkf"
                                  style={{ WebkitLineClamp: 2 }}
                                >
                                  <span>
                                    List Randomizer will randomize a list of anything
                                    you have (names, phone <em>numbers</em>, etc.)
                                    String <em>Generator</em> makes <em>random</em>{" "}
                                    alphanumeric strings. Password <em>Generator</em>
                                    &nbsp;...
                                  </span>
                                </div>
                              </div>
                              <div
                                className="kb0PBd cvP2Ce"
                                data-sncf={2}
                                data-snf="mCCBcf"
                              >
                                <div className="fG8Fp uo4vr" />
                              </div>
                              <div
                                className="kb0PBd cvP2Ce"
                                data-sncf={3}
                                data-snf="gdePb"
                              >
                                <div className="HiHjCd">
                                  ‎
                                  <a
                                    href="https://www.random.org/integers/"
                                    ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.random.org/integers/&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0gIoAHoECA8QAQ&sqi=2"
                                  >
                                    Integer Generator
                                  </a>{" "}
                                  · ‎
                                  <a
                                    href="https://www.random.org/sequences/"
                                    ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.random.org/sequences/&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0gIoAXoECA8QAg&sqi=2"
                                  >
                                    Sequence Generator
                                  </a>{" "}
                                  · ‎
                                  <a
                                    href="https://www.random.org/integer-sets/"
                                    ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.random.org/integer-sets/&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0gIoAnoECA8QAw&sqi=2"
                                  >
                                    Integer Set Generator
                                  </a>{" "}
                                  · ‎
                                  <a
                                    href="https://www.random.org/bytes/"
                                    ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.random.org/bytes/&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ0gIoA3oECA8QBA&sqi=2"
                                  >
                                    Byte Generator
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="MjjYud">
                          <div
                            jscontroller="SC7lYd"
                            className="g Ww4FFb vt6azd tF2Cxc asEBEc"
                            lang="en"
                            style={{ width: 600 }}
                            jsaction="QyLbLe:OMITjf;ewaord:qsYrDe;xd28Mb:A6j43c"
                            data-hveid="CBMQAA"
                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFSgAegQIExAA"
                          >
                            <div
                              className="N54PNb BToiNc cvP2Ce"
                              data-snc="ih6Jnb_RMrY4"
                            >
                              <div
                                className="kb0PBd cvP2Ce jGGQ5e"
                                data-snf="x5WNvb"
                                data-snhf={0}
                              >
                                <div className="yuRUbf">
                                  <div>
                                    <span
                                      jscontroller="msmzHf"
                                      jsaction="rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc"
                                    >
                                      <a
                                        jsname="UWckNb"
                                        href="https://www.calculator.net/random-number-generator.html"
                                        jscontroller="M9mgyc"
                                        jsaction="rcuQ6b:npT2md"
                                        data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECBIQAQ"
                                        ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.calculator.net/random-number-generator.html&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECBIQAQ&sqi=2"
                                      >
                                        <br />
                                        <h3 className="LC20lb MBeuO DKV0Md">
                                          Random Number Generator
                                        </h3>
                                        <div className="TbwUpd NJjxre iUh30 ojE3Fb">
                                          <span className="H9lube">
                                            <div
                                              className="eqA2re NjwKYd Vwoesf"
                                              aria-hidden="true"
                                            >
                                              <img
                                                className="XNo5Ab"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEWOjZD///8zZpkICAigNjHGAAAALUlEQVR4AWPABKyhYBCAxFgFBsQxELowGfXX/9ZfW4mHQV1dWdNW4mVg6sIAAO03ZZtajO/RAAAAAElFTkSuQmCC"
                                                style={{ height: 18, width: 18 }}
                                                alt=""
                                                data-atf={5}
                                                data-frt={0}
                                              />
                                            </div>
                                          </span>
                                          <div>
                                            <span className="VuuXrf">
                                              Calculator.net
                                            </span>
                                            <div className="byrV5b">
                                              <cite
                                                className="qLRx3b tjvcx GvPZzd cHaqb"
                                                role="text"
                                              >
                                                https://www.calculator.net
                                                <span
                                                  className="dyjrff ob9lvb"
                                                  role="text"
                                                >
                                                  {" "}
                                                  › r...
                                                </span>
                                              </cite>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                    </span>
                                    <div className="B6fmyf byrV5b Mg1HEd">
                                      <div className="TbwUpd iUh30 ojE3Fb">
                                        <span className="H9lube">
                                          <div
                                            className="eqA2re NjwKYd"
                                            style={{ height: 18, width: 18 }}
                                          />
                                        </span>
                                        <div>
                                          <span className="VuuXrf">
                                            Calculator.net
                                          </span>
                                          <div className="byrV5b">
                                            <cite
                                              className="qLRx3b tjvcx GvPZzd cHaqb"
                                              role="text"
                                            >
                                              https://www.calculator.net
                                              <span
                                                className="dyjrff ob9lvb"
                                                role="text"
                                              >
                                                {" "}
                                                › r...
                                              </span>
                                            </cite>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="csDOgf BCF2pd ezY6nb L48a4c">
                                        <div
                                          jscontroller="exgaYe"
                                          data-bsextraheight={0}
                                          data-isdesktop="true"
                                          data-movewtractions="true"
                                          jsdata="l7Bhpb;_;Asauls cECq7c;_;Asaul0"
                                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ2esEegQIEhAJ"
                                        >
                                          <div
                                            role="button"
                                            tabIndex={0}
                                            jsaction="RvIhPd"
                                            jsname="I3kE2c"
                                            className="iTPLzd rNSxBe lUn2nc"
                                            style={{ position: "absolute" }}
                                            aria-label="Об этом результате"
                                          >
                                            <span
                                              jsname="czHhOd"
                                              className="D6lY4c mBswFe"
                                            >
                                              <span
                                                jsname="Bil8Ae"
                                                className="xTFaxe z1asCe"
                                                style={{
                                                  height: 18,
                                                  lineHeight: 18,
                                                  width: 18
                                                }}
                                              >
                                                <svg
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 24 24"
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                                </svg>
                                              </span>
                                            </span>
                                          </div>
                                          <span
                                            jsname="zOVa8"
                                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQh-4GegQIEhAK"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="kb0PBd cvP2Ce"
                                data-sncf={1}
                                data-snf="nke7rc"
                              >
                                <div
                                  className="VwiC3b yXK7lf yDYNvb W8l4ac lyLwlc lEBKkf"
                                  style={{ WebkitLineClamp: 2 }}
                                >
                                  <span>
                                    Two free <em>random number generators</em> that
                                    work in user-defined min and max range. Both
                                    random integers and decimal numbers can be
                                    generated with high&nbsp;...
                                  </span>
                                </div>
                              </div>
                              <div
                                className="kb0PBd cvP2Ce"
                                data-sncf={2}
                                data-snf="mCCBcf"
                              >
                                <div className="fG8Fp uo4vr" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="MjjYud">
                          <span className="oUAcPd" id="fld_2" />
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                ".xvfwl{margin-top:4px}.csDOgf.I5pXif{position:absolute}.csDOgf.Pyz0Gd{margin-top:2px}.MUxGbd{padding-top:0;margin-bottom:0;}.wuQ4Ob{color:#70757a}.WZ8Tjf{color:#70757a;}.d4rhi .LC20lb{margin-bottom:0px}.z3HNkc{background-image:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.44 19'><polygon fill='%23dadce0' points='10,15.27 16.18,19 14.54,11.97 20,7.24 12.81,6.63 10,0 7.19,6.63 0,7.24 5.46,11.97 3.82,19'/></svg>\");background-repeat:repeat-x;display:inline-block;overflow:hidden;position:relative}.z3HNkc span{background-image:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.44 19'><polygon fill='%23fbbc04' points='10,15.27 16.18,19 14.54,11.97 20,7.24 12.81,6.63 10,0 7.19,6.63 0,7.24 5.46,11.97 3.82,19'/></svg>\");background-repeat:repeat-x;display:block}.aNmOgc .z3HNkc span{background-color:currentcolor;background-image:unset;-webkit-mask-image:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.44 19'><polygon points='10,15.27 16.18,19 14.54,11.97 20,7.24 12.81,6.63 10,0 7.19,6.63 0,7.24 5.46,11.97 3.82,19'/></svg>\");mask-image:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.44 19'><polygon points='10,15.27 16.18,19 14.54,11.97 20,7.24 12.81,6.63 10,0 7.19,6.63 0,7.24 5.46,11.97 3.82,19'/></svg>\");-webkit-mask-repeat:repeat-x;mask-repeat:repeat-x;-webkit-mask-size:14px 11.4px;mask-size:14px 11.4px}.z3HNkc,.z3HNkc span{background-size:14px 11.4px;height:11.4px;width:68px}sentinel{}.FxLDp{box-sizing:border-box;display:flex;flex-direction:column;list-style-type:none;margin:0;padding:18px 0 0 16px;width:100%;padding-left:18px}.MYVUIe{margin-bottom:18px;display:flex}.MYVUIe:last-child{margin-bottom:0}.XN9cAe{flex:1;box-sizing:border-box}.Wt5Tfe{padding-left:0px;padding-right:0px}.cUnQKe{margin-bottom:44px;position:relative}.cUnQKe.wHYlTd{line-height:20px}.RTaUke{display:none;opacity:0}.eJH8qe.eJH8qe{padding:0 0 8px}.adDDi{display:flex;position:relative;flex-wrap:wrap;padding:0 16px 12px}.T6zPgb{min-width:0}.mgAbYb{display:block;white-space:nowrap}.YR2tRd{position:relative;align-self:center;height:20px}.uKh9yc{padding:9px}.ouy7Mc{padding-left:16px;padding-right:16px}sentinel{}.s8bAkb{padding-bottom:0px;padding-top:0px}sentinel{}.VCOFK{margin-left:8px;margin-right:8px}sentinel{}.gduDCb{margin-left:12px}sentinel{}.dG2XIf.cUnQKe .related-question-pair .wDYxhc:not(.NFQFxe),.cUnQKe .related-question-pair .g{padding-left:0px;padding-right:0px}.related-question-pair .kno-ftr{margin:0px;padding-top:0px}.wQiwMc .g{margin-bottom:4px;clear:both}.CSkcDe,.related-question-pair div.iDjcJe{color:#202124;font-family:Google Sans,arial,sans-serif;font-size:16px;font-weight:400;line-height:24px}.ilulF .JCzEY,.ilulF .WltAjf{-webkit-line-clamp:unset !important}.oST1qe .JCzEY{color:#202124}.g7pt6d .JCzEY{font-family:arial,sans-serif;font-size:16px;}.aj35ze{background-image:url('data:image/svg+xml,\\00003csvg focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\\00003cpath fill=\"%2370757a\" d=\"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z\">\\00003c/path>\\00003c/svg>');display:inline-block;height:24px;width:24px}.XBlWIe .aj35ze{background-image:url('data:image/svg+xml,\\00003csvg focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\\00003cpath fill=\"%23747878\" d=\"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z\">\\00003c/path>\\00003c/svg>');}.h373nd{overflow:hidden;position:relative}.dnXCYb{align-items:center;box-sizing:border-box;display:flex;max-height:none;position:relative;width:100%;cursor:pointer}html:not(.zAoYTe) .dnXCYb{outline:0}.JlqpRe{flex:1;margin:12px 0;overflow:hidden}.JCzEY{color:#4d5156;}.ru2Kjc{display:none}.L3Ezfd{position:absolute;height:100%;width:100%;left:0;top:0}.JCzEY,.WltAjf,.bJi8Dd{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.JCzEY{-webkit-line-clamp:2}.iRPzcb{border-bottom:1px solid #dadce0}sentinel{}g-img{display:block}g-img{height:100%}.YQ4gaf{display:block;border:0}.u9wH7d .YQ4gaf{object-fit:fill}.mNsIhb .YQ4gaf{object-fit:cover}.tb08Pd .YQ4gaf{object-fit:contain}sentinel{}#res .Jb0Zif .qDOt0b h3,.IVvPP .qDOt0b h3{font-size:16px;line-height:1.375}.Jb0Zif .qDOt0b .iUh30,.IVvPP .qDOt0b .iUh30{font-size:14px;line-height:1.58}.cUnQKe .ILfuVd,.cUnQKe .UiGGAb.ILfuVd{color:#4d5156;font-family:Google Sans,arial,sans-serif;font-size:16px;line-height:24px}.cUnQKe .ILfuVd b{background-color:rgba(80, 151, 255, 0.18);color:#040c28;font-weight:500;}@media (forced-colors:active){.cUnQKe .ILfuVd b{background-color:Mark;color:MarkText}}.XVdSCb{height:16px}.xKf9F{margin-top:16px}#rhs .KFFQ0c,.xpd-wa .KFFQ0c{display:none}.KFFQ0c{align-items:center;display:flex;margin-bottom:0px;width:652px}.akqY6{background:#dadce0;height:1px;width:100%}.KFFQ0c .YfftMc,.KFFQ0c .YfftMc span,.KFFQ0c .YfftMc div,.KFFQ0c .YfftMc a{align-items:center;color:#70757a;display:flex;font-size:12px;font-style:normal;margin:0;padding:0;white-space:nowrap}.KFFQ0c .YfftMc{flex-shrink:0;margin-left:14px}.ky4hfd{display:none}g-section-with-header{display:block;margin-bottom:0}.U7izfe{padding-left:0px;padding-right:0px;padding-bottom:12px}.e2BEnf{font-size:20px;line-height:1.3}.EQdXxd{font-family:Google Sans,arial,sans-serif}title-with-lhs-icon:hover .ekf0x h3{color:#1a0dab}title-with-lhs-icon .ekf0x{color:#202124;display:block;margin-left:-53px}title-with-lhs-icon .hSQtef.ekf0x{display:inline;margin-left:0}title-with-lhs-icon:hover .hSQtef.ekf0x{color:#1a0dab}#rcnt .ekf0x:hover h3{text-decoration:none}.iJ1Kvb{display:inline-block;line-height:24px}.GmE3X{color:#202124;display:inline-block;margin-right:12px;position:relative;top:-3px}.s6JM6d #res .GmE3X{font-size:22px}.s6JM6d .GmE3X{font-size:22px}.s6JM6d #res .GmE3X{line-height:28px}.s6JM6d .GmE3X{line-height:28px}.s6JM6d .GmE3X{max-width:608px;overflow:hidden;text-overflow:ellipsis;vertical-align:text-top;white-space:nowrap}.s6JM6d .GmE3X.kWYf3c{max-width:568px}.iv236{color:#70757a;display:inline-block;margin-right:12px}.dtIg1b{display:none;margin-right:12px}title-with-lhs-icon:hover .kNmTT{display:none}title-with-lhs-icon:hover .dtIg1b{display:inline-block}.iJddsb{display:inline-block;fill:currentColor}.iJddsb img,.iJddsb svg{display:block;height:100%;width:100%}.ouRJZc{display:inline-block;position:relative;top:1px}.WE2xI{position:relative}.Kq2KUc{margin-top:-6px;padding-bottom:4px}.BdG8Xe .dgdd6c{padding:3px 0 5px}.DZjrpb{position:relative}.pIuSUd{float:right;height:36px;margin:0;position:static;width:36px;visibility:hidden}.fwWsFc{overflow:hidden;position:relative;width:calc(100% - 36px);float:left}.oBlg4e{display:inline-block}.gymTod{background-color:rgba(0,0,0,.3)}.gymTod img{object-fit:cover}.dgdd6c{display:inline-block;margin-right:6px;outline:none;padding:6px 0}.dgdd6c:last-child{margin-right:8px}.ZZGZKb{display:inline-block;vertical-align:top;margin:auto}.j4hJ8c{min-width:150px;height:100%;display:-webkit-box;display:flex;align-items:center;justify-content:center;}.BlGWBd g-more-button div{transition:opacity 300ms}.hWIMdd{padding-top:0px}sentinel{}.I7Y2H{padding-right:0px}sentinel{}.DO6Sie{width:100%}.anQree{left:24px;right:24px}.nfoSTb{display:block}.xKXaGf{display:none}.s8GVIe{position:absolute}.qYw5ad{position:relative}g-inline-toggler{cursor:pointer;display:block;overflow:hidden;position:relative}sentinel{}.ZkkK1e.ZkkK1e{line-height:normal;font-family:arial,sans-serif}.ZkkK1e{box-sizing:border-box;border-radius:18px;cursor:pointer;display:inline-block;height:36px;min-width:36px;position:relative;background:#fff;border:1px solid #dadce0;color:#3c4043}.ZkkK1e:after{bottom:-7px;content:\"\";left:-1px;position:absolute;right:-1px;top:-7px}.ZkkK1e:hover{background:#f8f9fa}.xaNsfc:focus .ZkkK1e,a:focus .ZkkK1e,.ZkkK1e:focus{background:#f8f9fa;border-color:#9aa0a6;color:#e8eaed}.xaNsfc:focus .ZkkK1e:hover:not(:active),a:focus .ZkkK1e:hover:not(:active),.ZkkK1e:hover:focus:not(:active){background:#dadce0;border-color:#9aa0a6}.xaNsfc:active .ZkkK1e:not([disabled]),a:active .ZkkK1e:not([disabled]),.ZkkK1e:active:not([disabled]){box-shadow:0 1px 2px rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);border-color:transparent;background:#fff}.ZkkK1e:hover,.xaNsfc:focus .ZkkK1e,a:focus .ZkkK1e,.xaNsfc:active .ZkkK1e,a:active .ZkkK1e,.ZkkK1e:focus,.ZkkK1e:active{color:#202124}.ZkkK1e[disabled]{background:#f1f3f4;border-color:#f1f3f4;color:#bdc1c6;cursor:default;opacity:.38}.L0N73c:after{left:-7px;right:-7px}.HNJ8Yc.ZkkK1e{border-radius:24px;height:48px;min-width:50px}.HNJ8Yc .xlY4q{line-height:46px}.HNJ8Yc .xlY4q,.HNJ8Yc .POUQwd,.HNJ8Yc .XqKfz{height:46px}.HNJ8Yc .POUQwd.z27Mgd{margin:3px 0 3px 3px;height:40px;width:40px}.ZkkK1e[selected]{color:#1558d6;border-color:#d2e3fc;background:#e8f0fe}@-webkit-keyframes forced-chip-animation{50%{border-color:#8ab4f8;background:#d2e3fc}}@keyframes forced-chip-animation{50%{border-color:#8ab4f8;background:#d2e3fc}}.ZkkK1e[forced]{-webkit-animation:forced-chip-animation .75s linear alternate 1;animation:forced-chip-animation .75s linear alternate 1}.zAoYTe .ZkkK1e[selected]:not(:focus),html:not(.zAoYTe) .ZkkK1e[selected]{outline:1px solid transparent}.xaNsfc:focus .ZkkK1e[selected],a:focus .ZkkK1e[selected],.ZkkK1e[selected]:focus{border-color:#8ab4f8;color:#174ea6;background:#d2e3fc}.xaNsfc:active .ZkkK1e[selected],a:active .ZkkK1e[selected],.ZkkK1e[selected]:active{box-shadow:0 1px 2px rgba(66,133,244,0.3),0 1px 3px 1px rgba(66,133,244,0.15)}.xaNsfc:active .ZkkK1e[selected],a:active .ZkkK1e[selected],.ZkkK1e[selected]:active{color:#174ea6;background:#e8f0fe}.ZkkK1e[selected]:hover{color:#174ea6;border-color:#d2e3fc;background:#d2e3fc}.xaNsfc:focus .ZkkK1e[selected]:hover:not(:active),a:focus .ZkkK1e[selected]:hover:not(:active),.ZkkK1e[selected]:hover:focus:not(:active){border-color:#d2e3fc;background:#aecbfa}.LrSIhd.ZkkK1e{border-radius:20px;height:40px;min-width:40px}.LrSIhd .xlY4q{line-height:38px}.LrSIhd .xlY4q,.LrSIhd .POUQwd,.LrSIhd .XqKfz{height:38px}.LrSIhd .POUQwd.z27Mgd{height:36px;width:36px}sentinel{}.xlY4q{line-height:34px;padding:0 8px}.xlY4q{font-size:14px}.xlY4q,.POUQwd,.XqKfz{box-sizing:border-box;display:inline-block;height:34px;vertical-align:bottom}.xlY4q.q3N1vb{min-width:46px;padding:0 11px}.xlY4q.VIZLse{padding-right:11px}.POUQwd.WN4Zxc{padding:7px 0 7px 11px}.POUQwd.Rubttd{padding:7px}.POUQwd.z27Mgd{padding:0;margin:1px 0 1px 1px;height:32px;width:32px;border-radius:50%;overflow:hidden}.XqKfz{padding:7px 11px 7px 0}.xlY4q.tClzdc{padding-left:11px}sentinel{}.V8fWH{border:0;clip:rect(0 0 0 0);-webkit-clip-path:polygon(0 0,0 0,0 0);clip-path:polygon(0 0,0 0,0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;-webkit-appearance:none;appearance:none;z-index:-1000;-webkit-user-select:none;user-select:none}sentinel{}.gTewb{padding-left:8px;padding-right:8px}g-scrolling-carousel{display:block;position:relative}g-scrolling-carousel.tJJouf{overflow-y:visible}g-scrolling-carousel.tJJouf .acCJ4b{position:static}.acCJ4b{display:block;overflow-x:auto;overflow-y:hidden;position:relative;white-space:nowrap}.acCJ4b{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.MGlaC{border-radius:12px}.acCJ4b::-webkit-scrollbar{display:none}.AXejN{overflow-x:hidden}.GpHuwc{display:inline-block}.kjqWgb{display:-webkit-box;display:-webkit-flex;display:flex}.r95t{border-radius:2px;height:24px;background-color:#4285f4;color:#fff;top:50%;position:absolute;margin-top:-12px;box-shadow:0 2px 3px rgba(0,0,0,0.2);opacity:1;visibility:inherit;box-sizing:border-box;-webkit-transition:opacity .3s,visibility .3s;transition:opacity .3s,visibility .3s}.r95t.YdJLG{opacity:0;visibility:hidden}.u1Rise{padding-right:11px;background-position:0 6px;background-size:11px 8px;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAYAAAAS7Y8mAAAAAXNSR0IArs4c6QAAAH5JREFUOBG11N0KgDAIBWDpxft96m7sWBgiuAt1whpr7EPoNKJBMfM62M5tAb0w7tzp4BTAE0OqDwZ2vOT36IEdKnQdBrKL5KoGA9scWF7SDFS6WhAMDsJRfz2j678r4P0fT3XgNsNYNsQtwGtxU1RndNr/Sxu8/xIyePrafABR75/ci3snRwAAAABJRU5ErkJggg==)}.acCJ4b.mecbob{-webkit-transform:none;transform:none}.kNfbm{margin-top:-2px}.kNfbm{margin-left:0;margin-right:0}.EDblX.y74B4{padding-top:2px}.EDblX.y74B4{padding-left:16px;padding-right:16px}.EDblX.k0YrJf{padding-left:0;padding-right:0}.EDblX.Ke2Pl{padding-top:16px}.EDblX.ifNoke{padding-bottom:16px}sentinel{}.eA0Zlc{vertical-align:top;display:inline-block;margin:0;position:relative}.JX86yc{display:inline-block}.eA0Zlc:not(.JX86yc){overflow:hidden}.M8OgIe .ifM9O .GMCzAd,.hvs42d .GMCzAd{border-radius:0}.WghbWd{cursor:pointer}g-inner-card.xIfh4d{margin-right:4px;position:relative;border-radius:0;border:none;}div.eA0Zlc:first-child g-inner-card.xIfh4d,div.eA0Zlc:first-child g-inner-card.xIfh4d video{-webkit-border-top-left-radius:8px;-webkit-border-bottom-left-radius:8px;}div.eA0Zlc:last-of-type g-inner-card.xIfh4d,div.eA0Zlc:last-of-type g-inner-card.xIfh4d video{-webkit-border-top-right-radius:8px;-webkit-border-bottom-right-radius:8px;}.s6JM6d .ifM9O .GMCzAd,.cUnQKe .GMCzAd{border-radius:12px;margin:16px}.BfmEZb{box-sizing:border-box;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.XOEbc img{transition:transform 200ms}.dB3j8 .XOEbc img,.FnEtTd:focus-within .XOEbc img{transform:scale(1.15)}.FnEtTd:focus-within{outline:none}g-inner-card{background-color:#fff;border-radius:8px;display:block;overflow:hidden}.wdQNof{border:1px solid #dadce0;border-radius:8px;box-shadow:none}.B68O1d{background-color:rgba(0,0,0,0.54)}sentinel{}.yOdbtf{position:relative}sentinel{}.wr8GYd{align-items:center;position:absolute;display:flex;height:12px;text-decoration:none;border-radius:0 11px 11px 0;bottom:4px;left:0;padding:5px 8px 5px 6px;background:#f8f9fa;color:#70757a;font-size:11px}.c2xzTb .wr8GYd{background:rgba(60,64,67,.8);border-radius:0;bottom:0;color:#fff;font-size:11px;right:0;padding:3px 4px 4px;position:absolute}.g-blk .wr8GYd{left:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.GQDPdd{align-items:center;display:flex;float:left}.S2Caaf{float:left;height:12px;width:12px}.seDAFe{margin-right:4px}.S2Caaf.kPUX1c{margin:-1px 2px -1px -3px}.czzyk:hover .CrkfKf,.czzyk:focus .CrkfKf{display:initial}.czzyk:hover .seDAFe,.czzyk:focus .seDAFe{margin-right:4px}.YB4h9{background-color:#1a73e8;color:#fff;padding:18px 60px 18px 12px;position:relative}.C85rO{font-size:20px}.YB4h9 .Job8vb{padding:20px;position:absolute;right:0;top:0}.EIqaib{padding-top:6px;position:relative}.QjI2jc{color:#70757a;font-style:italic;margin-right:16px;font-size:12px}.QjI2jc:hover{text-decoration:underline}.Fra4pb{margin-top:4px}.NhRr3b{cursor:pointer;position:relative;}.aBOYt{display:inline-block}.UVSIcb{word-wrap:break-word}.UVSIcb.a0KVvb{margin-top:8px}sentinel{}.X3BRhe{margin-left:auto;margin-right:auto}.NN3tNd:hover{background:#fafafa!important}.V9UyDb{box-shadow:0 5px 13px 2px rgba(66,133,244,0.22)!important}g-fab.v8uxXb{box-shadow:none}g-fab.v8uxXb{border:1px solid #aecbfa}sentinel{}.O4tmq{height:24px;pointer-events:none;position:absolute;top:0;width:24px}.O4tmq.tl8m7c{left:0}.O4tmq.tl8m7c{background-image:-webkit-gradient(linear,right top,left top,from(rgba(255,255,255,0)),to(#fff));background-image:-webkit-linear-gradient(right,rgba(255,255,255,0),#fff);background-image:linear-gradient(-90deg,rgba(255,255,255,0),#fff)}.O4tmq.pd818b{right:48px}.O4tmq.pd818b{background-image:-webkit-gradient(linear,left top,right top,from(rgba(255,255,255,0)),to(#fff));background-image:-webkit-linear-gradient(left,rgba(255,255,255,0),#fff);background-image:linear-gradient(90deg,rgba(255,255,255,0),#fff)}sentinel{}.FbkHNd{margin-top:24px}.rhHIGd.L4oZf{background-color:transparent}.oYWfcb{cursor:pointer;display:block;font-weight:400;line-height:18px;white-space:nowrap}.oYWfcb.RB2q5e{overflow:visible}.oYWfcb.QeBzl{padding:10px 0px}.p8VO6e{color:#70757a;margin-top:-2px;margin-bottom:-2px}.p8VO6e{height:20px}.Z4Cazf{white-space:nowrap;width:auto}.Z4Cazf{margin-right:8px}.S8ee5.CwbYXd{color:#202124;line-height:22px}.oYWfcb{font-size:16px;line-height:1.43}.p8VO6e{-webkit-box-flex:0;-webkit-flex:none;flex:none}.Z4Cazf{white-space:normal}a.CHn7Qb:hover{text-decoration:none}g-more-link a.pYouzb{-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex}g-more-link.RB2q5e{cursor:auto;text-align:center}g-more-link.RB2q5e a.pYouzb{display:inline-block;pointer-events:none}g-more-link.RB2q5e a.pYouzb{color:#202124}g-more-link.lQi8Fc{height:30px;top:12px;position:relative}sentinel{}.S8ee5{box-sizing:border-box;cursor:pointer;background:#f1f3f4;border:1px solid transparent;font-size:14px;line-height:20px;pointer-events:auto;position:relative;width:300px}.S8ee5{padding:7px 11px}.S8ee5{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-left:auto;margin-right:auto}.S8ee5{height:36px;border-radius:18px}.S8ee5:hover{background-color:#d8d7dc}.S8ee5:hover{background:#d8d7dc}.rhHIGd{background-color:#dadce0;border:0;height:1px;left:0;position:absolute;width:100%}.rhHIGd{margin-top:18px}.S8ee5 .p8VO6e{margin-top:0px}.S8ee5 .z1asCe{height:20px;width:20px}.S8ee5 .Z4Cazf{display:inline-block;max-width:220px;white-space:nowrap}#rhs .lQi8Fc{height:auto;top:0}#rhs .S8ee5{max-width:336px;width:100%;border-color:rgba(255,255,255,0)}#rhs .S8ee5 .Z4Cazf{max-width:73.33%}#rhs .oYWfcb .rhHIGd{display:none}.Zeeake{font-family:arial,sans-serif-medium,sans-serif}.Zeeake .p8VO6e{width:20px;height:20px}sentinel{}.oYWfcb{cursor:pointer;display:block;font-weight:400;line-height:18px;white-space:nowrap}.oYWfcb.RB2q5e{overflow:visible}.oYWfcb.QeBzl{padding:10px 0px}.p8VO6e{color:#70757a;margin-top:-2px;margin-bottom:-2px}.p8VO6e{height:20px}.Z4Cazf{white-space:nowrap;width:auto}.Z4Cazf{margin-right:8px}.S8ee5.CwbYXd{color:#202124;line-height:22px}.oYWfcb{font-size:16px;line-height:1.43}.p8VO6e{-webkit-box-flex:0;-webkit-flex:none;flex:none}.Z4Cazf{white-space:normal}a.CHn7Qb:hover{text-decoration:none}g-more-link a.pYouzb{-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex}g-more-link.RB2q5e{cursor:auto;text-align:center}g-more-link.RB2q5e a.pYouzb{display:inline-block;pointer-events:none}g-more-link.RB2q5e a.pYouzb{color:#202124}g-more-link.lQi8Fc{height:30px;top:12px;position:relative}.U56OG{margin-right:8px}sentinel{}.hlcw0c{margin-bottom:44px}.oIk2Cb{margin:0}.y6Uyqe{margin-left:-8px;margin-right:-8px;padding:6px 0 0 0}.kfsfbe.kfsfbe{padding:0 0 8px}.EIaa9b{display:flex}.AJLUJb{display:flex;flex:1;flex-direction:column}.R0xfCb{margin-bottom:4px;margin-top:4px}.k8XOCe{align-items:center;background-color:#f1f3f4;border-radius:100px;box-sizing:border-box;display:flex;max-height:none;min-height:48px;padding-left:17px;padding-right:17px;position:relative}.k8XOCe:hover,.k8XOCe:active{color:#202124}.s75CSd{-webkit-box-orient:vertical;color:#202124;display:-webkit-box;flex:1;font-size:16px;-webkit-line-clamp:2;max-width:227px;overflow-wrap:break-word;overflow:hidden}.unhzXb{border-radius:4px}.aXBZVd{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='rgba(0,0,0,.54)' d='M20.49 19l-5.73-5.73C15.53 12.2 16 10.91 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z'/%3E%3C/svg%3E\");background-position:center;background-repeat:no-repeat;background-size:20px;height:20px;padding:10px;width:20px}.z1asCe.kQdGHd,.WqQeqc.kQdGHd{position:absolute}.WZH4jc{text-align:center}.WZH4jc .VknLRd{pointer-events:none}.WZH4jc .VknLRd:hover,.WZH4jc .VknLRd:hover h3{text-decoration:none}.WZH4jc .GNJvt{background:#f1f3f4;border:1px solid rgba(255,255,255,0);box-sizing:border-box;cursor:pointer;font-size:14px;line-height:20px;pointer-events:auto;position:relative;width:300px;padding:7px 11px;margin:0;flex-direction:row-reverse;align-items:center;display:flex;justify-content:center;margin-left:auto;margin-right:auto;height:36px;border-radius:18px}.WZH4jc .VknLRd:hover .GNJvt{background:#D8D7DC}.WZH4jc .kQdGHd{position:relative;left:0}.WZH4jc .OTvAmd{display:block}.WZH4jc .RVQdVd{line-height:20px;margin-right:8px}.KXbwLb{background-color:#dadce0;border:0;height:1px;left:0;margin-top:18px;position:absolute;width:100%}.QjmzCd{text-align:center;margin:25px 0;height:30px}.w7LJsc{height:45px;margin-bottom:28px}.GNJvt{display:block;background-color:#f1f3f4;text-align:center;font-size:14px;color:#202124;border-radius:20px;height:24px;line-height:24px;border:1px solid rgba(255,255,255,0);padding:8px 13px;margin:16px 16px 40px 16px;}.RVQdVd{line-height:24px}.kQdGHd{color:#70757a;left:13px;position:absolute}.GNJvt:active{background:#e6e6e6}.VknLRd{-webkit-tap-highlight-color:transparent;display:block}.ipz2Oe{position:relative}"
                            }}
                          />
                          <div
                            jscontroller="SC7lYd"
                            className="g Ww4FFb vt6azd tF2Cxc asEBEc"
                            lang="en"
                            style={{ width: 600 }}
                            jsaction="QyLbLe:OMITjf;ewaord:qsYrDe;xd28Mb:A6j43c"
                            data-hveid="CCUQAA"
                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFSgAegQIJRAA"
                          >
                            <div
                              className="N54PNb BToiNc cvP2Ce"
                              data-snc="ih6Jnb_w7NmEc"
                            >
                              <div
                                className="kb0PBd cvP2Ce jGGQ5e"
                                data-snf="x5WNvb"
                                data-snhf={0}
                              >
                                <div className="yuRUbf">
                                  <div>
                                    <span
                                      jscontroller="msmzHf"
                                      jsaction="rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc"
                                    >
                                      <a
                                        jsname="UWckNb"
                                        href="https://chrome.google.com/webstore/detail/random-number-generator/ckdkgoogioikcpmpmoecocgfdangpecg"
                                        jscontroller="M9mgyc"
                                        jsaction="rcuQ6b:npT2md"
                                        data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECBoQAQ"
                                        ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://chrome.google.com/webstore/detail/random-number-generator/ckdkgoogioikcpmpmoecocgfdangpecg&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECBoQAQ&sqi=2"
                                      >
                                        <br />
                                        <h3 className="LC20lb MBeuO DKV0Md">
                                          Random Number Generator
                                        </h3>
                                        <div className="TbwUpd NJjxre iUh30 ojE3Fb">
                                          <span className="H9lube">
                                            <div
                                              className="eqA2re NjwKYd Vwoesf"
                                              aria-hidden="true"
                                            >
                                              <img
                                                className="XNo5Ab"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAxlBMVEVHcEz8wh3iOCz7wBYonUkomUYnmkfiOSziOCz9whniNyv8wRf4wyQklUP8wRYpnEn8xSPiMS8vok4nmEVGlkPp9unFtirlPTDeNir8xysac+jcMib8vgsonEjgNirkOy4gkkH8wx78wRUjlkQvok7////9xyj8wADG2vvnPzEAaefeHQ4FjzbmLzMzgeoRcOgAbOf/8+P8///+346YufMcpk+bvPRhijypXDSDvovquZqvzrHhQznphH6HpjbALADfvSqrsDQae4/FAAAAGnRSTlMAKeXH5VwpVifmxF/6y4SEUNS/dP79/oSFumkCldQAAAFuSURBVCiRZdLpdoIwFEbRIM5jdaltxSBgAmGoIiLWqcP7v1RvbkDQnv7c64uahpCi9lu3Zq5q3dc2ea5VM6GVzK+1Hqg9NkxEZN/vVtYtAzKLqQ/qt6pmPixLbUurLBX66uSuoU41Quwjbyyt8Wmo6fW843y3d728HmD9iMvwxhORZiLhe2+JdQhpsgNOb1xsgjgONqJQTyMjxqZgVy6C7QLaBoLbSodkwuQ0PCcbNNBNkk91UmeQEe5EsMgLxM7LP1QaPYY8iwuMU+45qIjs8M3TEjNAZwkOx1JG6fHpWAeCYydAlEYX/vCFJDo6GVGcsupPcdGcIWlSzDqVl3D2bEQNrk9pdOJcZKng/OTZMqcjLx5kDX8Wu8x4Mrus58psefFkIFUWYUdbpeP/swmk1JL9uLYL1tfUU2isFUmMvlwI+KV4RI37zFr30fp3g5MHiqzoVw5dXXt4uY064lRSp/fvzTdHg3o077wPy9UfzBpSHfkOcUQAAAAASUVORK5CYII="
                                                style={{ height: 18, width: 18 }}
                                                alt=""
                                                data-atf={4}
                                                data-frt={0}
                                              />
                                            </div>
                                          </span>
                                          <div>
                                            <span className="VuuXrf">Google</span>
                                            <div className="byrV5b">
                                              <cite
                                                className="qLRx3b tjvcx GvPZzd cHaqb"
                                                role="text"
                                              >
                                                https://chrome.google.com
                                                <span
                                                  className="dyjrff ob9lvb"
                                                  role="text"
                                                >
                                                  {" "}
                                                  › ...
                                                </span>
                                              </cite>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                    </span>
                                    <div className="B6fmyf byrV5b Mg1HEd">
                                      <div className="TbwUpd iUh30 ojE3Fb">
                                        <span className="H9lube">
                                          <div
                                            className="eqA2re NjwKYd"
                                            style={{ height: 18, width: 18 }}
                                          />
                                        </span>
                                        <div>
                                          <span className="VuuXrf">Google</span>
                                          <div className="byrV5b">
                                            <cite
                                              className="qLRx3b tjvcx GvPZzd cHaqb"
                                              role="text"
                                            >
                                              https://chrome.google.com
                                              <span
                                                className="dyjrff ob9lvb"
                                                role="text"
                                              >
                                                {" "}
                                                › ...
                                              </span>
                                            </cite>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="csDOgf BCF2pd ezY6nb L48a4c">
                                        <div
                                          jscontroller="exgaYe"
                                          data-bsextraheight={0}
                                          data-isdesktop="true"
                                          data-movewtractions="true"
                                          jsdata="l7Bhpb;_;AsaumQ cECq7c;_;Asaumk"
                                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ2esEegQIGhAJ"
                                        >
                                          <div
                                            role="button"
                                            tabIndex={0}
                                            jsaction="RvIhPd"
                                            jsname="I3kE2c"
                                            className="iTPLzd rNSxBe lUn2nc"
                                            style={{ position: "absolute" }}
                                            aria-label="Об этом результате"
                                          >
                                            <span
                                              jsname="czHhOd"
                                              className="D6lY4c mBswFe"
                                            >
                                              <span
                                                jsname="Bil8Ae"
                                                className="xTFaxe z1asCe"
                                                style={{
                                                  height: 18,
                                                  lineHeight: 18,
                                                  width: 18
                                                }}
                                              >
                                                <svg
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 24 24"
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                                </svg>
                                              </span>
                                            </span>
                                          </div>
                                          <span
                                            jsname="zOVa8"
                                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQh-4GegQIGhAK"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="kb0PBd cvP2Ce"
                                data-sncf={1}
                                data-snf="nke7rc"
                              >
                                <div
                                  className="VwiC3b yXK7lf yDYNvb W8l4ac lyLwlc lEBKkf"
                                  style={{ WebkitLineClamp: 2 }}
                                >
                                  <span className="MUxGbd wuQ4Ob WZ8Tjf">
                                    <span>20 мар. 2021 г.</span> —{" "}
                                  </span>
                                  <span>
                                    A <em>random number generator</em>. Type in
                                    maximum and minimum parameters and watch as the
                                    gods of computer programming convene.
                                  </span>
                                </div>
                              </div>
                              <div
                                className="kb0PBd cvP2Ce"
                                data-sncf={2}
                                data-snf="mCCBcf"
                              >
                                <div className="fG8Fp uo4vr" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="MjjYud">
                          <div
                            jscontroller="SC7lYd"
                            className="g Ww4FFb vt6azd tF2Cxc asEBEc"
                            lang="en"
                            style={{ width: 600 }}
                            jsaction="QyLbLe:OMITjf;ewaord:qsYrDe;xd28Mb:A6j43c"
                            data-hveid="CCYQAA"
                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFSgAegQIJhAA"
                          >
                            <div
                              className="N54PNb BToiNc cvP2Ce"
                              data-snc="ih6Jnb_dj10M"
                            >
                              <div
                                className="kb0PBd cvP2Ce jGGQ5e"
                                data-snf="x5WNvb"
                                data-snhf={0}
                              >
                                <div className="yuRUbf">
                                  <div>
                                    <span
                                      jscontroller="msmzHf"
                                      jsaction="rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc"
                                    >
                                      <a
                                        jsname="UWckNb"
                                        href="https://www.calculatorsoup.com/calculators/statistics/random-number-generator.php"
                                        jscontroller="M9mgyc"
                                        jsaction="rcuQ6b:npT2md"
                                        data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECBwQAQ"
                                        ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.calculatorsoup.com/calculators/statistics/random-number-generator.php&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECBwQAQ&sqi=2"
                                      >
                                        <br />
                                        <h3 className="LC20lb MBeuO DKV0Md">
                                          Random Number Generator
                                        </h3>
                                        <div className="TbwUpd NJjxre iUh30 ojE3Fb">
                                          <span className="H9lube">
                                            <div
                                              className="eqA2re NjwKYd Vwoesf"
                                              aria-hidden="true"
                                            >
                                              <img
                                                className="XNo5Ab"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAA40lEQVR4AaXSIQzCMBCF4eeTWbxA1uPrpmsmpmrmsbgmJJNz09j5YLHoGVTNdE1VxUQ5GCTXBmb2q0u+5HJpirjSRnSmTTKOod8hrXNsrQVQ1O2ZMo0A5Mgw3kl3tzlQ3lYoE4xX0v1jmW2OcSAVdpkPOcaeVE7vcTQ5xpZUuWWxyzGeSLX/80JzQ3oMHFle08nDzDFZLKo+cOQm6879XDsfIXX/+6DQoNQXZgxDDaUvYVk/pugVVPM9VJwtR1+irDs7vbI9qjtDdwAKFAU+SYaTAC9FgxUMg6rSGEY/ZYWNn/oJTj1kLwya89IAAAAASUVORK5CYII="
                                                style={{ height: 18, width: 18 }}
                                                alt=""
                                                data-atf={4}
                                                data-frt={0}
                                              />
                                            </div>
                                          </span>
                                          <div>
                                            <span className="VuuXrf">
                                              Calculator Soup
                                            </span>
                                            <div className="byrV5b">
                                              <cite
                                                className="qLRx3b tjvcx GvPZzd cHaqb"
                                                role="text"
                                              >
                                                https://www.calculatorsoup.com
                                                <span
                                                  className="dyjrff ob9lvb"
                                                  role="text"
                                                >
                                                  {" "}
                                                  › ...
                                                </span>
                                              </cite>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                    </span>
                                    <div className="B6fmyf byrV5b Mg1HEd">
                                      <div className="TbwUpd iUh30 ojE3Fb">
                                        <span className="H9lube">
                                          <div
                                            className="eqA2re NjwKYd"
                                            style={{ height: 18, width: 18 }}
                                          />
                                        </span>
                                        <div>
                                          <span className="VuuXrf">
                                            Calculator Soup
                                          </span>
                                          <div className="byrV5b">
                                            <cite
                                              className="qLRx3b tjvcx GvPZzd cHaqb"
                                              role="text"
                                            >
                                              https://www.calculatorsoup.com
                                              <span
                                                className="dyjrff ob9lvb"
                                                role="text"
                                              >
                                                {" "}
                                                › ...
                                              </span>
                                            </cite>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="csDOgf BCF2pd ezY6nb L48a4c">
                                        <div
                                          jscontroller="exgaYe"
                                          data-bsextraheight={0}
                                          data-isdesktop="true"
                                          data-movewtractions="true"
                                          jsdata="l7Bhpb;_;Asaumc cECq7c;_;Asaumo"
                                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ2esEegQIHBAJ"
                                        >
                                          <div
                                            role="button"
                                            tabIndex={0}
                                            jsaction="RvIhPd"
                                            jsname="I3kE2c"
                                            className="iTPLzd rNSxBe lUn2nc"
                                            style={{ position: "absolute" }}
                                            aria-label="Об этом результате"
                                          >
                                            <span
                                              jsname="czHhOd"
                                              className="D6lY4c mBswFe"
                                            >
                                              <span
                                                jsname="Bil8Ae"
                                                className="xTFaxe z1asCe"
                                                style={{
                                                  height: 18,
                                                  lineHeight: 18,
                                                  width: 18
                                                }}
                                              >
                                                <svg
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 24 24"
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                                </svg>
                                              </span>
                                            </span>
                                          </div>
                                          <span
                                            jsname="zOVa8"
                                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQh-4GegQIHBAK"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="kb0PBd cvP2Ce"
                                data-sncf={1}
                                data-snf="nke7rc"
                              >
                                <div
                                  className="VwiC3b yXK7lf yDYNvb W8l4ac lyLwlc lEBKkf"
                                  style={{ WebkitLineClamp: 2 }}
                                >
                                  <span className="MUxGbd wuQ4Ob WZ8Tjf">
                                    <span>24 янв. 2022 г.</span> —{" "}
                                  </span>
                                  <span>
                                    <em>Random number generator</em> for numbers 0 to
                                    10000. Generate positive or negative pseudo-
                                    <em>random numbers</em> in your custom min-max
                                    range with&nbsp;...
                                  </span>
                                </div>
                              </div>
                              <div
                                className="kb0PBd cvP2Ce"
                                data-sncf={2}
                                data-snf="mCCBcf"
                              >
                                <div className="fG8Fp uo4vr" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="MjjYud">
                          <div
                            jscontroller="SC7lYd"
                            className="g Ww4FFb vt6azd tF2Cxc asEBEc"
                            lang="en"
                            style={{ width: 600 }}
                            jsaction="QyLbLe:OMITjf;ewaord:qsYrDe;xd28Mb:A6j43c"
                            data-hveid="CCIQAA"
                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFSgAegQIIhAA"
                          >
                            <div
                              className="N54PNb BToiNc cvP2Ce"
                              data-snc="ih6Jnb_Yhis0c"
                            >
                              <div
                                className="kb0PBd cvP2Ce jGGQ5e"
                                data-snf="x5WNvb"
                                data-snhf={0}
                              >
                                <div className="yuRUbf">
                                  <div>
                                    <span
                                      jscontroller="msmzHf"
                                      jsaction="rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc"
                                    >
                                      <a
                                        jsname="UWckNb"
                                        href="https://randomwordgenerator.com/number.php"
                                        jscontroller="M9mgyc"
                                        jsaction="rcuQ6b:npT2md"
                                        data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECBsQAQ"
                                        ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://randomwordgenerator.com/number.php&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECBsQAQ&sqi=2"
                                      >
                                        <br />
                                        <h3 className="LC20lb MBeuO DKV0Md">
                                          Random Number Generator — Easy Number Picker
                                        </h3>
                                        <div className="TbwUpd NJjxre iUh30 ojE3Fb">
                                          <span className="H9lube">
                                            <div
                                              className="eqA2re NjwKYd Vwoesf"
                                              aria-hidden="true"
                                            >
                                              <img
                                                className="XNo5Ab"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAAavJz69ffxzvd1AAAAAXRSTlMAQObYZgAAADJJREFUeAFjEA0NDWEIBQKGsFVTQcRSIDE1E0GAxWCys0DENLCSlSAiC0REhYINABsFACsPGn+4N5vnAAAAAElFTkSuQmCC"
                                                style={{ height: 18, width: 18 }}
                                                alt=""
                                                data-atf={4}
                                                data-frt={0}
                                              />
                                            </div>
                                          </span>
                                          <div>
                                            <span className="VuuXrf">
                                              Random Word Generator
                                            </span>
                                            <div className="byrV5b">
                                              <cite
                                                className="qLRx3b tjvcx GvPZzd cHaqb"
                                                role="text"
                                              >
                                                https://randomwordgenerator.com
                                                <span
                                                  className="dyjrff ob9lvb"
                                                  role="text"
                                                >
                                                  {" "}
                                                  › ...
                                                </span>
                                              </cite>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                    </span>
                                    <div className="B6fmyf byrV5b Mg1HEd">
                                      <div className="TbwUpd iUh30 ojE3Fb">
                                        <span className="H9lube">
                                          <div
                                            className="eqA2re NjwKYd"
                                            style={{ height: 18, width: 18 }}
                                          />
                                        </span>
                                        <div>
                                          <span className="VuuXrf">
                                            Random Word Generator
                                          </span>
                                          <div className="byrV5b">
                                            <cite
                                              className="qLRx3b tjvcx GvPZzd cHaqb"
                                              role="text"
                                            >
                                              https://randomwordgenerator.com
                                              <span
                                                className="dyjrff ob9lvb"
                                                role="text"
                                              >
                                                {" "}
                                                › ...
                                              </span>
                                            </cite>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="csDOgf BCF2pd ezY6nb L48a4c">
                                        <div
                                          jscontroller="exgaYe"
                                          data-bsextraheight={0}
                                          data-isdesktop="true"
                                          data-movewtractions="true"
                                          jsdata="l7Bhpb;_;AsaumY cECq7c;_;Asaumg"
                                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ2esEegQIGxAJ"
                                        >
                                          <div
                                            role="button"
                                            tabIndex={0}
                                            jsaction="RvIhPd"
                                            jsname="I3kE2c"
                                            className="iTPLzd rNSxBe lUn2nc"
                                            style={{ position: "absolute" }}
                                            aria-label="Об этом результате"
                                          >
                                            <span
                                              jsname="czHhOd"
                                              className="D6lY4c mBswFe"
                                            >
                                              <span
                                                jsname="Bil8Ae"
                                                className="xTFaxe z1asCe"
                                                style={{
                                                  height: 18,
                                                  lineHeight: 18,
                                                  width: 18
                                                }}
                                              >
                                                <svg
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 24 24"
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                                </svg>
                                              </span>
                                            </span>
                                          </div>
                                          <span
                                            jsname="zOVa8"
                                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQh-4GegQIGxAK"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="kb0PBd cvP2Ce"
                                data-sncf={1}
                                data-snf="nke7rc"
                              >
                                <div
                                  className="VwiC3b yXK7lf yDYNvb W8l4ac lyLwlc lEBKkf"
                                  style={{ WebkitLineClamp: 2 }}
                                >
                                  <span>
                                    The <em>Random Number Generator</em> produces{" "}
                                    <em>random numbers</em> within a chosen range.
                                    Pick a number with this <em>random number</em>{" "}
                                    picker.
                                  </span>
                                </div>
                              </div>
                              <div
                                className="kb0PBd cvP2Ce"
                                data-sncf={2}
                                data-snf="mCCBcf"
                              >
                                <div className="fG8Fp uo4vr" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hlcw0c">
                          <div className="MjjYud">
                            <div data-hveid="CEkQAA">
                              <div className="g">
                                <div>
                                  <div
                                    jscontroller="SC7lYd"
                                    lang="en"
                                    style={{ width: 600 }}
                                    jsaction="QyLbLe:OMITjf;ewaord:qsYrDe;xd28Mb:A6j43c"
                                    data-hveid="CDgQAA"
                                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFSgAegQIOBAA"
                                  >
                                    <div
                                      className="N54PNb BToiNc cvP2Ce"
                                      data-snc="ih6Jnb_xLefuf"
                                    >
                                      <div
                                        className="kb0PBd cvP2Ce jGGQ5e"
                                        data-snf="x5WNvb"
                                        data-snhf={0}
                                      >
                                        <div className="yuRUbf">
                                          <div>
                                            <span
                                              jscontroller="msmzHf"
                                              jsaction="rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc"
                                            >
                                              <a
                                                jsname="UWckNb"
                                                href="https://play.google.com/store/apps/details?id=io.kodular.snake_1s.NumberGenerator&hl=en_US"
                                                jscontroller="M9mgyc"
                                                jsaction="rcuQ6b:npT2md"
                                                data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECCcQAQ"
                                                ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://play.google.com/store/apps/details%3Fid%3Dio.kodular.snake_1s.NumberGenerator%26hl%3Den_US&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECCcQAQ&sqi=2"
                                              >
                                                <br />
                                                <h3 className="LC20lb MBeuO DKV0Md">
                                                  Random Number Generator - Apps on
                                                  Google Play
                                                </h3>
                                                <div className="TbwUpd NJjxre iUh30 ojE3Fb">
                                                  <span className="H9lube">
                                                    <div
                                                      className="eqA2re NjwKYd Vwoesf"
                                                      aria-hidden="true"
                                                    >
                                                      <img
                                                        className="XNo5Ab"
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADNklEQVR4AcXUA4wdURiG4VPbtu32mmvUtm3bts2gnNq2bbtBbSzn3n79M8nZrvdcZZO8yUTzPUMGIFmLOlBJTXhtqcPUUaoDxRwp16aObORuHcNpxmwnUjM5/uICam0PyKza2miJSmoGOlH0HlIGjwPUm9tOqrXdD6qt9RANEb39VEGPAXym/5YMK9ehxu5ahKgbH4I3m0rjdoDfBEj+EwDDyrUiiO9UR7ffAd8pMvzHAyJ3Ivr74R7AtD8SIRATURO1ttWBakuCCN4BqrDLAApRiAmAcflm1NilJUSwCAJqqcm8nBs7pRu4y+gCIAoRqdwJ07LtdCfUSSLUlEZqjBQbevwctVvX1QUA7zd8pkYIIfh41o2d0Xh7ICJOpAFOsic0ZHYBIIZQKynjaLQtCPLJVKCrRyQhaAjUYaqIMCBxxA5CqAgRRIjmUMapzBu7oHG0cZmPx2welU4AkARi6T7U3KWHanuAgshCV952hy/sJ1MmNs77Q5mcAHBEuIKwLD6Mmrv1yCS1QMftfsApJjLO+0A1cxjAEb5TwxRE/uX30PmkFrjAgJPRn7lQklMAXwL4TAtB8UVA927PIA8sBNxikC+mhHzMgwA+7j0tFEWXAN1GXkGksSzkMpXxdWBZ/L3LYLvMRBHfqLbCAD7uNT0MJRYDfYedQ4S5FOymonjvbcD7Slb86Fsa9psM9itJIuxUsPhLGG282BJg8ODjgL4QbKbieO+nxyc/NT55a/CughXfu5dLCrGGyir2GcYzPoTGYSiESFNJGtfhk69aSUH4qPG+YoKIc1Q58R+R+Hj8iJ5lYbuUArazKd/QkL9Tv2Lfqb9hpfGiSYzHh3hXxjv05/Di/e23GB8TB/Bxy4xw5YUbMfAwjRdJajw6Yun7KpaM37uWY/YbBDjpIICP023HxH47AV0ehJtLi4wfp0pR7H01M6OvwnGA/9Rf0v/xHTSeF2GWMviQ+PhzykoxJVcA1eZBKh5jvGxi47+oHnzULYCacyFN7is0Po9KRzG3Am7XbzopxFoeoZZyCY0foIrwIbcDZFPxzN+9qy2JZ/whZeADngJEP0k76gB1kOooOuwKIFn7B3LHHIJtp64TAAAAAElFTkSuQmCC"
                                                        style={{
                                                          height: 18,
                                                          width: 18
                                                        }}
                                                        alt=""
                                                        data-atf={4}
                                                        data-frt={0}
                                                      />
                                                    </div>
                                                  </span>
                                                  <div>
                                                    <span className="VuuXrf">
                                                      Google
                                                    </span>
                                                    <div className="byrV5b">
                                                      <cite
                                                        className="qLRx3b tjvcx GvPZzd cHaqb"
                                                        role="text"
                                                      >
                                                        https://play.google.com
                                                        <span
                                                          className="dyjrff ob9lvb"
                                                          role="text"
                                                        >
                                                          {" "}
                                                          › apps
                                                        </span>
                                                      </cite>
                                                    </div>
                                                  </div>
                                                </div>
                                              </a>
                                            </span>
                                            <div className="B6fmyf byrV5b Mg1HEd">
                                              <div className="TbwUpd iUh30 ojE3Fb">
                                                <span className="H9lube">
                                                  <div
                                                    className="eqA2re NjwKYd"
                                                    style={{ height: 18, width: 18 }}
                                                  />
                                                </span>
                                                <div>
                                                  <span className="VuuXrf">
                                                    Google
                                                  </span>
                                                  <div className="byrV5b">
                                                    <cite
                                                      className="qLRx3b tjvcx GvPZzd cHaqb"
                                                      role="text"
                                                    >
                                                      https://play.google.com
                                                      <span
                                                        className="dyjrff ob9lvb"
                                                        role="text"
                                                      >
                                                        {" "}
                                                        › apps
                                                      </span>
                                                    </cite>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="csDOgf BCF2pd ezY6nb L48a4c">
                                                <div
                                                  jscontroller="exgaYe"
                                                  data-bsextraheight={0}
                                                  data-isdesktop="true"
                                                  data-movewtractions="true"
                                                  jsdata="l7Bhpb;_;AsaunM cECq7c;_;AsaunQ"
                                                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ2esEegQIJxAJ"
                                                >
                                                  <div
                                                    role="button"
                                                    tabIndex={0}
                                                    jsaction="RvIhPd"
                                                    jsname="I3kE2c"
                                                    className="iTPLzd rNSxBe lUn2nc"
                                                    style={{ position: "absolute" }}
                                                    aria-label="Об этом результате"
                                                  >
                                                    <span
                                                      jsname="czHhOd"
                                                      className="D6lY4c mBswFe"
                                                    >
                                                      <span
                                                        jsname="Bil8Ae"
                                                        className="xTFaxe z1asCe"
                                                        style={{
                                                          height: 18,
                                                          lineHeight: 18,
                                                          width: 18
                                                        }}
                                                      >
                                                        <svg
                                                          focusable="false"
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          viewBox="0 0 24 24"
                                                        >
                                                          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                                        </svg>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <span
                                                    jsname="zOVa8"
                                                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQh-4GegQIJxAK"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="kb0PBd cvP2Ce"
                                        data-sncf={1}
                                        data-snf="nke7rc"
                                      >
                                        <div
                                          className="VwiC3b yXK7lf yDYNvb W8l4ac lyLwlc lEBKkf"
                                          style={{ WebkitLineClamp: 2 }}
                                        >
                                          <span>
                                            It's a simple{" "}
                                            <em>random number generator</em> app! This
                                            number <em>generator</em> is very simple
                                            and easy to use. To search for a{" "}
                                            <em>random number</em>, you need to select
                                            an&nbsp;...
                                          </span>
                                        </div>
                                      </div>
                                      <div
                                        className="kb0PBd cvP2Ce"
                                        data-sncf={2}
                                        data-snf="mCCBcf"
                                      >
                                        <div className="fG8Fp uo4vr">
                                          <span
                                            aria-hidden="true"
                                            className="z3HNkc"
                                            aria-label="Оценка: 4,0 из 5,"
                                            role="img"
                                          >
                                            <span style={{ width: 56 }} />
                                          </span>{" "}
                                          <span>Рейтинг: 4,1</span> · ‎
                                          <span>966&nbsp;голосов</span> · ‎
                                          <span>Бесплатно</span> · ‎
                                          <span>Android</span> · ‎
                                          <span>Инструменты и утилиты</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="d4rhi">
                                  <ul className="FxLDp">
                                    <li className="MYVUIe">
                                      <div className="XN9cAe">
                                        <div
                                          jscontroller="SC7lYd"
                                          lang="en"
                                          style={{ width: 600 }}
                                          jsaction="QyLbLe:OMITjf;ewaord:qsYrDe;xd28Mb:A6j43c"
                                          data-hveid="CEUQAA"
                                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQtJkDKAB6BAhFEAA"
                                        >
                                          <div
                                            className="N54PNb BToiNc cvP2Ce"
                                            data-snc="ih6Jnb_nEX9Pb"
                                          >
                                            <div
                                              className="kb0PBd cvP2Ce jGGQ5e"
                                              data-snf="x5WNvb"
                                              data-snhf={0}
                                            >
                                              <div className="yuRUbf">
                                                <div>
                                                  <span
                                                    jscontroller="msmzHf"
                                                    jsaction="rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc"
                                                  >
                                                    <a
                                                      jsname="UWckNb"
                                                      href="https://play.google.com/store/apps/details?id=ru.uxapps.random&hl=en_IE"
                                                      jscontroller="M9mgyc"
                                                      jsaction="rcuQ6b:npT2md"
                                                      data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECD0QAQ"
                                                      ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://play.google.com/store/apps/details%3Fid%3Dru.uxapps.random%26hl%3Den_IE&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECD0QAQ&sqi=2"
                                                    >
                                                      <br />
                                                      <h3 className="LC20lb MBeuO xvfwl">
                                                        Random number generator – Apps
                                                        on Google Play
                                                      </h3>
                                                      <div className="TbwUpd NJjxre">
                                                        <div>
                                                          <cite
                                                            className="iUh30 qLRx3b tjvcx"
                                                            role="text"
                                                          >
                                                            https://play.google.com
                                                            <span
                                                              className="dyjrff ob9lvb"
                                                              role="text"
                                                            >
                                                              {" "}
                                                              › apps
                                                            </span>
                                                          </cite>
                                                        </div>
                                                      </div>
                                                    </a>
                                                  </span>
                                                  <div className="B6fmyf">
                                                    <div className="TbwUpd">
                                                      <div>
                                                        <cite
                                                          className="iUh30 qLRx3b tjvcx"
                                                          role="text"
                                                        >
                                                          https://play.google.com
                                                          <span
                                                            className="dyjrff ob9lvb"
                                                            role="text"
                                                          >
                                                            {" "}
                                                            › apps
                                                          </span>
                                                        </cite>
                                                      </div>
                                                    </div>
                                                    <div className="csDOgf I5pXif ezY6nb Pyz0Gd">
                                                      <div
                                                        jscontroller="exgaYe"
                                                        data-bsextraheight={0}
                                                        data-isdesktop="true"
                                                        data-movewtractions="true"
                                                        jsdata="l7Bhpb;_;Asauno cECq7c;_;Asauns"
                                                        data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ2esEegQIPRAE"
                                                      >
                                                        <div
                                                          role="button"
                                                          tabIndex={0}
                                                          jsaction="RvIhPd"
                                                          jsname="I3kE2c"
                                                          className="iTPLzd rNSxBe lUn2nc"
                                                          style={{
                                                            position: "absolute"
                                                          }}
                                                          aria-label="Об этом результате"
                                                        >
                                                          <span
                                                            jsname="czHhOd"
                                                            className="D6lY4c mBswFe"
                                                          >
                                                            <span
                                                              jsname="Bil8Ae"
                                                              className="xTFaxe z1asCe"
                                                              style={{
                                                                height: 18,
                                                                lineHeight: 18,
                                                                width: 18
                                                              }}
                                                            >
                                                              <svg
                                                                focusable="false"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                              >
                                                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                                              </svg>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <span
                                                          jsname="zOVa8"
                                                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQh-4GegQIPRAF"
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="kb0PBd cvP2Ce"
                                              data-sncf={1}
                                              data-snf="nke7rc"
                                            >
                                              <div
                                                className="VwiC3b yXK7lf yDYNvb W8l4ac lyLwlc lEBKkf"
                                                style={{ WebkitLineClamp: 2 }}
                                              >
                                                <span>
                                                  Need powerful random app? Our
                                                  randomizer can be used as: -{" "}
                                                  <em>random number generator</em>{" "}
                                                  (very small, very big and decimal
                                                  numbers supported, no limitations)
                                                </span>
                                              </div>
                                            </div>
                                            <div
                                              className="kb0PBd cvP2Ce"
                                              data-sncf={2}
                                              data-snf="mCCBcf"
                                            >
                                              <div className="fG8Fp uo4vr">
                                                <span
                                                  aria-hidden="true"
                                                  className="z3HNkc"
                                                  aria-label="Оценка: 4,5 из 5,"
                                                  role="img"
                                                >
                                                  <span style={{ width: 62 }} />
                                                </span>{" "}
                                                <span>Рейтинг: 4,6</span> · ‎
                                                <span>9&nbsp;943&nbsp;голоса</span> ·
                                                ‎<span>Бесплатно</span> · ‎
                                                <span>Android</span> · ‎
                                                <span>Инструменты и утилиты</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="MjjYud">
                          <div
                            jscontroller="Da4hkd"
                            jsname="bq0EGf"
                            className="cUnQKe"
                            data-initq="google random number generator"
                            data-qc="Ch5nb29nbGUgcmFuZG9tIG51bWJlciBnZW5lcmF0b3IQAH0DuQs_"
                            data-smqc={4}
                            data-ulkwtsb={1}
                            jsdata="Dmybpc;_;Asaul8"
                            jsaction="HUiaHb:mlZWMd;FmigO:OKc46b;rcuQ6b:QyrbTd"
                            data-hveid="CDAQAA"
                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQuU4oAHoECDAQAA"
                          >
                            <div className="Wt5Tfe">
                              <div className="eJH8qe adDDi">
                                <div className="T6zPgb">
                                  <div aria-level={2} role="heading">
                                    <span className="mgAbYb OSrXXb RES9jf IFnjPb">
                                      Вопросы по теме
                                    </span>
                                  </div>
                                </div>
                                <span className="YR2tRd">
                                  <div
                                    jscontroller="exgaYe"
                                    data-bsextraheight={0}
                                    data-isdesktop="true"
                                    jsdata="l7Bhpb;_;AsaumA cECq7c;_;AsaumE"
                                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ2esEegQIMBAC"
                                  >
                                    <div jsaction="KyPa0e:RvIhPd;wjOG7e:edHC5b;al5F3e:edHC5b;">
                                      <div
                                        role="button"
                                        tabIndex={0}
                                        jsaction="RvIhPd"
                                        jsname="I3kE2c"
                                        className="iTPLzd rNSxBe lUn2nc eY4mx"
                                        style={{
                                          paddingRight: 5,
                                          position: "absolute"
                                        }}
                                        aria-label="Об этом результате"
                                      >
                                        <span
                                          jsname="czHhOd"
                                          className="D6lY4c IjabWd"
                                        >
                                          <span
                                            jsname="Bil8Ae"
                                            className="xTFaxe z1asCe"
                                            style={{
                                              height: 18,
                                              lineHeight: 18,
                                              width: 18
                                            }}
                                          >
                                            <svg
                                              focusable="false"
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24 24"
                                            >
                                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                            </svg>
                                          </span>
                                        </span>
                                      </div>
                                      <span
                                        jsname="zOVa8"
                                        data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQh-4GegQIMBAD"
                                      />
                                    </div>
                                    <g-snackbar
                                      jsname="t1F84b"
                                      jscontroller="OZLguc"
                                      style={{ display: "none" }}
                                      jsshadow=""
                                      jsaction="rcuQ6b:npT2md"
                                      id="ow101"
                                      __is_owner="true"
                                    >
                                      <div
                                        jsname="Ng57nc"
                                        className="yK6jqe"
                                        data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ4G96BAgwEAQ"
                                        jsowner="ow101"
                                      >
                                        <div className="b77HKf">
                                          <div className="rIxsve" jsslot="">
                                            <span className="Txngnb wHYlTd yUTMj">
                                              Теперь мы будем показывать больше
                                              информации на английском.
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        jsname="sM5MNb"
                                        aria-live="polite"
                                        className="LH3wG"
                                      />
                                    </g-snackbar>
                                  </div>
                                </span>
                              </div>
                              <div
                                jsname="N760b"
                                data-bs="c-My5NLxyC9XSMlX8FRITy1RcM_PT89JVSjJVyjITM5WSFQoSsxLyc9VyCvNTUotspeYVMylzqUUnlGpkFmsYGiuUJKRqpCTmlhcgq5wtQCXEpesZ7GCMURRbj6mmiVqXHpcmkA1UFtRpIHOyUstSizJL4KK20tsMhFgBAA"
                                id="_w4sBZYmTHJ_RwPAPx5aZiAo_48"
                              >
                                <div jsname="yEVEwb">
                                  <div id="w4sBZYmTHJ_RwPAPx5aZiAo__76">
                                    <div
                                      className="wQiwMc related-question-pair"
                                      jscontroller="xfmZMb"
                                      data-lk="Gitob3cgZG8gaSBnZXQgZ29vZ2xlIHRvIHBpY2sgYSByYW5kb20gbnVtYmVy"
                                      data-q="How do I get Google to pick a random number?"
                                      decode-data-ved={1}
                                      jsaction="rcuQ6b:npT2md;aVMkAb:o7YQ2;uUCWgf:NlNJyb"
                                      data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQq7kBKAB6BAgvEAA"
                                    >
                                      <div
                                        jsname="YrZdPb"
                                        className="HYvwY ilulF roMIYb oST1qe g7pt6d h373nd"
                                        jscontroller="aD8OEe"
                                        data-dic=""
                                        data-g=""
                                        data-ullb=""
                                        jsshadow=""
                                        jsaction="rcuQ6b:npT2md;C0pONd:mhSdVe;A0VnDe:rXa5ib;IKGI6b:VrL1hd"
                                        style={{ height: 48 }}
                                      >
                                        <div
                                          jsname="clz4Ic"
                                          className="ysxiae iRPzcb"
                                        />
                                        <div>
                                          <div
                                            role="button"
                                            tabIndex={0}
                                            jsaction="AWEk5c"
                                            jsname="tJHJj"
                                            className="dnXCYb"
                                            aria-controls="_w4sBZYmTHJ_RwPAPx5aZiAo_41"
                                            aria-expanded="false"
                                            data-hveid="CC8QAQ"
                                          >
                                            <div jsname="lN6iy" className="JlqpRe">
                                              <span className="JCzEY ZwRhJd">
                                                <span className="CSkcDe">
                                                  How do I get Google to pick a random
                                                  number?
                                                </span>
                                              </span>
                                            </div>
                                            <div jsname="Q8Kwad" className="aj35ze" />
                                            <div
                                              jsname="pcRaIe"
                                              className="L3Ezfd"
                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQuk56BAgvEAI"
                                            />
                                            <div
                                              jsname="gwzXIc"
                                              className="ru2Kjc"
                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ36YDegQILxAD"
                                            />
                                          </div>
                                        </div>
                                        <div
                                          jsname="NRdf4c"
                                          className="bCOlv"
                                          id="_w4sBZYmTHJ_RwPAPx5aZiAo_41"
                                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ7NUEegQILxAE"
                                        >
                                          <div className="IZE3Td" jsslot="">
                                            <div
                                              jsname="oQYOj"
                                              className="t0bRye r2fjmd"
                                              data-hveid="CC8QBQ"
                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQu04oAHoECC8QBQ"
                                            >
                                              <div id="w4sBZYmTHJ_RwPAPx5aZiAo__77">
                                                <div
                                                  className="wDYxhc NFQFxe"
                                                  data-md={294}
                                                >
                                                  <div
                                                    jscontroller="vvvZqd"
                                                    jsdata="QeZRUb;_;Asaunc"
                                                    jsaction="rcuQ6b:npT2md;lQqO9c:TvD9Pc;sYd32b:kv4lH;BUYwVb:kv4lH"
                                                  >
                                                    <div>
                                                      <div
                                                        className="L2AgXb"
                                                        data-hveid="CDsQAA"
                                                      >
                                                        <div className="qvSLpc dnEV5c">
                                                          <a
                                                            jsname="JUCs7e"
                                                            style={{
                                                              display: "none"
                                                            }}
                                                            href="https://m.youtube.com/watch?v=UrNIz7_J5Gc"
                                                            jsaction="ti6hGc"
                                                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQg_QBegQIOxAC"
                                                            ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://m.youtube.com/watch%3Fv%3DUrNIz7_J5Gc&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQg_QBegQIOxAC&sqi=2"
                                                          />
                                                          <div
                                                            role="button"
                                                            tabIndex={0}
                                                            jsaction="ti6hGc"
                                                            className="aavBce"
                                                            aria-label="A span of a video titled Google Sheets - Random Number, Array & Item from a List - YouTube. The suggested span starts from 12 second and ends at 71 second, with duration of 59 seconds"
                                                          >
                                                            <div
                                                              className="vfO4k"
                                                              style={{
                                                                width: "100%"
                                                              }}
                                                            >
                                                              <div
                                                                style={{
                                                                  width: "100%",
                                                                  paddingTop: "56.25%"
                                                                }}
                                                              />
                                                              <div
                                                                className="MnwSrc"
                                                                style={{
                                                                  position:
                                                                    "absolute",
                                                                  top: 0,
                                                                  left: 0,
                                                                  right: 0,
                                                                  bottom: 0,
                                                                  overflow: "hidden",
                                                                  display: "flex",
                                                                  alignItems: "center"
                                                                }}
                                                              >
                                                                <div
                                                                  style={{
                                                                    display: "flex",
                                                                    flexDirection:
                                                                      "column",
                                                                    alignItems:
                                                                      "center",
                                                                    width: "100%"
                                                                  }}
                                                                >
                                                                  <g-img
                                                                    style={{
                                                                      width: "100%"
                                                                    }}
                                                                  >
                                                                    <img
                                                                      data-src=""
                                                                      className="YQ4gaf zr758c"
                                                                      alt="Part of a video titled Google Sheets - Random Number, Array & Item from a List - YouTube"
                                                                    />
                                                                  </g-img>
                                                                </div>
                                                              </div>
                                                              <div className="fi3CNb" />
                                                              <div className="Do1FMc">
                                                                <span
                                                                  style={{
                                                                    height: 48,
                                                                    lineHeight: 48,
                                                                    width: 48
                                                                  }}
                                                                  className="z1asCe UIgqBe"
                                                                >
                                                                  <svg
                                                                    focusable="false"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                  >
                                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                                                                  </svg>
                                                                </span>
                                                              </div>
                                                              <div
                                                                style={{
                                                                  position:
                                                                    "absolute",
                                                                  left: 0,
                                                                  right: 0,
                                                                  padding: "0 16px",
                                                                  verticalAlign:
                                                                    "center",
                                                                  display: "flex",
                                                                  bottom: 0,
                                                                  color: "#fff"
                                                                }}
                                                              >
                                                                <div className="kAoFgd">
                                                                  <div
                                                                    style={{
                                                                      paddingBottom: 1,
                                                                      paddingLeft:
                                                                        "calc(2.79% - 19px)",
                                                                      lineHeight: 12
                                                                    }}
                                                                  >
                                                                    <div
                                                                      style={{
                                                                        position:
                                                                          "relative"
                                                                      }}
                                                                    >
                                                                      <div className="NWd2Ib">
                                                                        <span className="MF6MAc">
                                                                          0:12
                                                                        </span>
                                                                      </div>
                                                                      <svg
                                                                        overflow="visible"
                                                                        style={{
                                                                          position:
                                                                            "absolute",
                                                                          top: 17,
                                                                          left:
                                                                            "15.5px",
                                                                          height: 6,
                                                                          width: 9
                                                                        }}
                                                                      >
                                                                        <polygon
                                                                          fill="#fff"
                                                                          points="0 0, 4.5 6, 9 0"
                                                                        />
                                                                      </svg>
                                                                    </div>
                                                                  </div>
                                                                  <svg
                                                                    height={26}
                                                                    width="100%"
                                                                  >
                                                                    <g opacity="0.54">
                                                                      <rect
                                                                        fill="#fff"
                                                                        height={4}
                                                                        rx={2}
                                                                        ry={2}
                                                                        stroke="none"
                                                                        width="100%"
                                                                        y={3}
                                                                      />
                                                                    </g>
                                                                    <g>
                                                                      <rect
                                                                        fill="#fff"
                                                                        x="2.79%"
                                                                        height={10}
                                                                        stroke="none"
                                                                        width={2}
                                                                        y={0}
                                                                      />
                                                                      <rect
                                                                        fill="#fff"
                                                                        x="-16.51%"
                                                                        height={10}
                                                                        stroke="none"
                                                                        transform="scale(-1 1)"
                                                                        width={2}
                                                                        y={0}
                                                                      />
                                                                      <rect
                                                                        fill="#fff"
                                                                        height={4}
                                                                        width="13.52%"
                                                                        x="2.89%"
                                                                        y={3}
                                                                        stroke="none"
                                                                      />
                                                                    </g>
                                                                    <svg
                                                                      x="9.65%"
                                                                      overflow="visible"
                                                                      y={14}
                                                                    >
                                                                      <polygon
                                                                        fill="#e8f0fe"
                                                                        points="0,0 10,12 10,14, -10,14 -10,12"
                                                                      />
                                                                    </svg>
                                                                  </svg>
                                                                </div>
                                                                <div className="ClE1Nc">
                                                                  <span className="yp0ec">
                                                                    7:10
                                                                  </span>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div>
                                                            <g-lightbox
                                                              jscontroller="ggQ0Zb"
                                                              data-df="false"
                                                              jsshadow=""
                                                              jsaction="rcuQ6b:npT2md"
                                                            >
                                                              <div>
                                                                <div
                                                                  jsname="jt9vfc"
                                                                  aria-hidden="true"
                                                                  role="button"
                                                                  tabIndex={0}
                                                                  jsaction="focus:sT2f3e"
                                                                  style={{
                                                                    display: "none"
                                                                  }}
                                                                />
                                                                <div
                                                                  jsname="AHe6Kc"
                                                                  className="ynlwjd VDgVie DvHOIf xUZ4Hc"
                                                                  style={{
                                                                    display: "none",
                                                                    outline: "none"
                                                                  }}
                                                                  role="dialog"
                                                                  tabIndex={-1}
                                                                  jsaction="klllfd:hfClUb;QFR3de:vhMcte;pD9K6e:FL9aIe;KbF57e:DlGmce;mLt3mc"
                                                                >
                                                                  <div
                                                                    className="dtCYCd VDgVie"
                                                                    jsaction="yZGKvf"
                                                                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ-UN6BAg7EAQ"
                                                                  >
                                                                    <g-loading-icon
                                                                      jsname="aZ2wEe"
                                                                      className="Xfh32"
                                                                      style={{
                                                                        display:
                                                                          "none",
                                                                        height: 24,
                                                                        width: 24
                                                                      }}
                                                                    >
                                                                      <img
                                                                        height={24}
                                                                        src="//www.gstatic.com/ui/v1/activityindicator/loading_24.gif"
                                                                        width={24}
                                                                        alt="Загрузка..."
                                                                        role="progressbar"
                                                                      />
                                                                    </g-loading-icon>
                                                                  </div>
                                                                  <div
                                                                    className="Xvesr BV6uAb"
                                                                    aria-label="Закрыть"
                                                                    role="button"
                                                                    tabIndex={0}
                                                                    jsaction="yZGKvf"
                                                                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ-EN6BAg7EAY"
                                                                  />
                                                                  <div
                                                                    jsname="Sx9Kwc"
                                                                    className="AU64fe zsYMMe TUOsUe"
                                                                    style={{
                                                                      display: "none"
                                                                    }}
                                                                  >
                                                                    <span jsslot="">
                                                                      <div className="VFlF2c">
                                                                        <div className="pE7Yzc">
                                                                          <div className="tBZiXd">
                                                                            <div className="jTSIHb">
                                                                              <div>
                                                                                <a
                                                                                  href="https://m.youtube.com/watch?v=UrNIz7_J5Gc"
                                                                                  ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://m.youtube.com/watch%3Fv%3DUrNIz7_J5Gc&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ-4ACegQIOxAH&sqi=2"
                                                                                >
                                                                                  <div>
                                                                                    <span>
                                                                                      Google
                                                                                      Sheets
                                                                                      -
                                                                                      Random
                                                                                      Number,
                                                                                      Array
                                                                                      &amp;
                                                                                      Item
                                                                                      from
                                                                                      a
                                                                                      List
                                                                                      -
                                                                                      YouTube
                                                                                    </span>
                                                                                  </div>
                                                                                  <div
                                                                                    style={{
                                                                                      opacity:
                                                                                        "0.7"
                                                                                    }}
                                                                                  >
                                                                                    YouTube
                                                                                  </div>
                                                                                </a>
                                                                              </div>
                                                                            </div>
                                                                            <div
                                                                              jsname="haAclf"
                                                                              data-ves={
                                                                                71
                                                                              }
                                                                              data-vid="UrNIz7_J5Gc"
                                                                              data-vss={
                                                                                12
                                                                              }
                                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQpfQBegQIOxAI"
                                                                              style={{
                                                                                width: 853,
                                                                                height: 479
                                                                              }}
                                                                            >
                                                                              <iframe
                                                                                jsname="vLxpee"
                                                                                allow="autoplay ;fullscreen"
                                                                                frameBorder={
                                                                                  0
                                                                                }
                                                                                height="100%"
                                                                                width="100%"
                                                                              />
                                                                            </div>
                                                                            <div
                                                                              style={{
                                                                                flexGrow: 1
                                                                              }}
                                                                            >
                                                                              <div
                                                                                jsname="OGEiTb"
                                                                                className="GoIRO"
                                                                              >
                                                                                <div jsname="zVT96b">
                                                                                  Начало
                                                                                  рекомендуемого
                                                                                  клипа
                                                                                </div>
                                                                                <div
                                                                                  jsname="Me5Zx"
                                                                                  style={{
                                                                                    display:
                                                                                      "none"
                                                                                  }}
                                                                                >
                                                                                  Конец
                                                                                  рекомендуемого
                                                                                  клипа
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </span>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  jsname="qngMid"
                                                                  aria-hidden="true"
                                                                  role="button"
                                                                  tabIndex={0}
                                                                  jsaction="focus:tuePCd"
                                                                  style={{
                                                                    display: "none"
                                                                  }}
                                                                />
                                                              </div>
                                                            </g-lightbox>
                                                          </div>
                                                        </div>
                                                        <div
                                                          className="jRFvfe"
                                                          style={{
                                                            backgroundColor: "#e8f0fe"
                                                          }}
                                                        >
                                                          <div
                                                            className="UAMSo"
                                                            data-hveid="CDsQCQ"
                                                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQmdMFegQIOxAJ"
                                                          >
                                                            <div>
                                                              <div className="iMCzjd">
                                                                <div jscontroller="EAZJjb">
                                                                  <span jsname="pQcl6">
                                                                    <span
                                                                      className="XdBtEc"
                                                                      aria-label="A part of the suggested span transcript before expanded is As you change something in a spreadsheet. Those random numbers are gonna update. And it&#39;s going to. You can view more by clicking More button at the end of this text"
                                                                    >
                                                                      As you change
                                                                      something in a
                                                                      spreadsheet.
                                                                      Those random
                                                                      numbers are
                                                                      gonna update.
                                                                      And it's going
                                                                      to
                                                                    </span>
                                                                    <span
                                                                      jsname="FZud5"
                                                                      className="w90itc"
                                                                      role="button"
                                                                      tabIndex={0}
                                                                      jsaction="JzCzbc"
                                                                      data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQwJ0GegQIOxAK"
                                                                    >
                                                                      More
                                                                      <span
                                                                        style={{
                                                                          marginLeft: 1,
                                                                          height: 12,
                                                                          lineHeight: 12,
                                                                          width: 12
                                                                        }}
                                                                        className="z1asCe QFl0Ff"
                                                                      >
                                                                        <svg
                                                                          focusable="false"
                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                          viewBox="0 0 24 24"
                                                                        >
                                                                          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                                                                        </svg>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                  <span
                                                                    jsname="EVvVid"
                                                                    className="CTkDab"
                                                                  >
                                                                    <span
                                                                      className="XdBtEc"
                                                                      aria-label="A part of the suggested span transcript after expanded is As you change something in a spreadsheet. Those random numbers are gonna update. And it&#39;s going to generate a new number."
                                                                    >
                                                                      As you change
                                                                      something in a
                                                                      spreadsheet.
                                                                      Those random
                                                                      numbers are
                                                                      gonna update.
                                                                      And it's going
                                                                      to generate a
                                                                      new number.
                                                                    </span>
                                                                  </span>
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
                                              <div id="w4sBZYmTHJ_RwPAPx5aZiAo__78">
                                                <div className="g">
                                                  <div
                                                    data-hveid="CCkQAA"
                                                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFSgAegQIKRAA"
                                                  >
                                                    <div className="tF2Cxc">
                                                      <div className="yuRUbf">
                                                        <div>
                                                          <span
                                                            jscontroller="msmzHf"
                                                            jsaction="rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc"
                                                          >
                                                            <a
                                                              jsname="UWckNb"
                                                              href="https://m.youtube.com/watch?v=UrNIz7_J5Gc"
                                                              jscontroller="M9mgyc"
                                                              jsaction="rcuQ6b:npT2md"
                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECCkQAw"
                                                              ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://m.youtube.com/watch%3Fv%3DUrNIz7_J5Gc&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECCkQAw&sqi=2"
                                                            >
                                                              <br />
                                                              <h3 className="LC20lb MBeuO DKV0Md">
                                                                Google Sheets - Random
                                                                Number, Array &amp;
                                                                Item from a List -
                                                                YouTube
                                                              </h3>
                                                              <div className="TbwUpd NJjxre iUh30 ojE3Fb">
                                                                <span className="H9lube">
                                                                  <div
                                                                    className="eqA2re NjwKYd Vwoesf"
                                                                    aria-hidden="true"
                                                                  >
                                                                    <img
                                                                      className="XNo5Ab"
                                                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdElEQVR4AWP4//8/RZh6BgCZAkDsAMUNWDFCXgDFACCVAGKSiBPABgCRAYgiExuADAigwIAEkAENOBU8ePD/v4MDPgMa8BoABxs2/P+voECBAQcOkGwAwgsBAXi9gD8QBQQIBiLF0UhRQsKXlAuITcoDnxsBPl4957WudCUAAAAASUVORK5CYII="
                                                                      style={{
                                                                        height: 18,
                                                                        width: 18
                                                                      }}
                                                                      alt=""
                                                                    />
                                                                  </div>
                                                                </span>
                                                                <div>
                                                                  <span className="VuuXrf">
                                                                    youtube.com
                                                                  </span>
                                                                  <div className="byrV5b">
                                                                    <cite
                                                                      className="qLRx3b tjvcx GvPZzd cHaqb"
                                                                      role="text"
                                                                    >
                                                                      https://m.youtube.com
                                                                      <span
                                                                        className="dyjrff ob9lvb"
                                                                        role="text"
                                                                      >
                                                                        {" "}
                                                                        › watch
                                                                      </span>
                                                                    </cite>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </a>
                                                          </span>
                                                          <div className="B6fmyf byrV5b Mg1HEd">
                                                            <div className="TbwUpd iUh30 ojE3Fb">
                                                              <span className="H9lube">
                                                                <div
                                                                  className="eqA2re NjwKYd"
                                                                  style={{
                                                                    height: 18,
                                                                    width: 18
                                                                  }}
                                                                />
                                                              </span>
                                                              <div>
                                                                <span className="VuuXrf">
                                                                  youtube.com
                                                                </span>
                                                                <div className="byrV5b">
                                                                  <cite
                                                                    className="qLRx3b tjvcx GvPZzd cHaqb"
                                                                    role="text"
                                                                  >
                                                                    https://m.youtube.com
                                                                    <span
                                                                      className="dyjrff ob9lvb"
                                                                      role="text"
                                                                    >
                                                                      {" "}
                                                                      › watch
                                                                    </span>
                                                                  </cite>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="IsZvec">
                                                        <span
                                                          className="aCOpRe ljeAnf"
                                                          style={{
                                                            WebkitLineClamp: 2
                                                          }}
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            jsname="MgN2vf"
                                            className="GdN4W d0fCJc BOZ6hd"
                                          >
                                            Искать:{" "}
                                            <a href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=How+do+I+get+Google+to+pick+a+random+number%3F&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQzmd6BAgvEAY">
                                              How do I get Google to pick a random
                                              number?
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div jsname="yEVEwb">
                                  <div id="w4sBZYmTHJ_RwPAPx5aZiAo__79">
                                    <div
                                      className="wQiwMc related-question-pair"
                                      jscontroller="xfmZMb"
                                      data-lk="GiF3aHkgaXMgMTcgdGhlIGxlYXN0IHJhbmRvbSBudW1iZXI"
                                      data-q="Why is 17 the least random number?"
                                      decode-data-ved={1}
                                      jsaction="rcuQ6b:npT2md;aVMkAb:o7YQ2;uUCWgf:NlNJyb"
                                      data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQq7kBKAB6BAg8EAA"
                                    >
                                      <div
                                        jsname="YrZdPb"
                                        className="HYvwY ilulF roMIYb oST1qe g7pt6d h373nd"
                                        jscontroller="aD8OEe"
                                        data-dic=""
                                        data-g=""
                                        data-ullb=""
                                        jsshadow=""
                                        jsaction="rcuQ6b:npT2md;C0pONd:mhSdVe;A0VnDe:rXa5ib;IKGI6b:VrL1hd"
                                        style={{ height: 48 }}
                                      >
                                        <div
                                          jsname="clz4Ic"
                                          className="ysxiae iRPzcb"
                                        />
                                        <div>
                                          <div
                                            role="button"
                                            tabIndex={0}
                                            jsaction="AWEk5c"
                                            jsname="tJHJj"
                                            className="dnXCYb"
                                            aria-controls="_w4sBZYmTHJ_RwPAPx5aZiAo_49"
                                            aria-expanded="false"
                                            data-hveid="CDwQAQ"
                                          >
                                            <div jsname="lN6iy" className="JlqpRe">
                                              <span className="JCzEY ZwRhJd">
                                                <span className="CSkcDe">
                                                  Why is 17 the least random number?
                                                </span>
                                              </span>
                                            </div>
                                            <div jsname="Q8Kwad" className="aj35ze" />
                                            <div
                                              jsname="pcRaIe"
                                              className="L3Ezfd"
                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQuk56BAg8EAI"
                                            />
                                            <div
                                              jsname="gwzXIc"
                                              className="ru2Kjc"
                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ36YDegQIPBAD"
                                            />
                                          </div>
                                        </div>
                                        <div
                                          jsname="NRdf4c"
                                          className="bCOlv"
                                          id="_w4sBZYmTHJ_RwPAPx5aZiAo_49"
                                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ7NUEegQIPBAE"
                                        >
                                          <div className="IZE3Td" jsslot="">
                                            <div
                                              jsname="oQYOj"
                                              className="t0bRye r2fjmd"
                                              data-hveid="CDwQBQ"
                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQu04oAHoECDwQBQ"
                                            >
                                              <div id="w4sBZYmTHJ_RwPAPx5aZiAo__80">
                                                <div
                                                  className="wDYxhc"
                                                  data-md={61}
                                                  style={{ clear: "none" }}
                                                >
                                                  <div
                                                    className="LGOjhe"
                                                    data-attrid="wa:/description"
                                                    aria-level={3}
                                                    role="heading"
                                                    data-hveid="CEIQAA"
                                                  >
                                                    <span
                                                      className="ILfuVd"
                                                      lang="en"
                                                    >
                                                      <span className="hgKElc">
                                                        Seventeen is: Described at MIT
                                                        as 'the least random number',
                                                        according to the Jargon File.
                                                        This is supposedly because{" "}
                                                        <b>
                                                          in a study where respondents
                                                          were asked to choose a
                                                          random number from 1 to 20,
                                                          17 was the most common
                                                          choice
                                                        </b>
                                                        . This study has been repeated
                                                        a number of times.
                                                      </span>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div id="w4sBZYmTHJ_RwPAPx5aZiAo__81">
                                                <div className="g">
                                                  <div
                                                    data-hveid="CDEQAA"
                                                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFSgAegQIMRAA"
                                                  >
                                                    <div className="tF2Cxc">
                                                      <div className="yuRUbf">
                                                        <div>
                                                          <span
                                                            jscontroller="msmzHf"
                                                            jsaction="rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc"
                                                          >
                                                            <a
                                                              jsname="UWckNb"
                                                              href="https://en.wikipedia.org/wiki/17_(number)#:~:text=Seventeen%20is%3A,repeated%20a%20number%20of%20times."
                                                              jscontroller="M9mgyc"
                                                              jsaction="rcuQ6b:npT2md"
                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECDEQAw"
                                                              ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://en.wikipedia.org/wiki/17_(number)%23:~:text%3DSeventeen%2520is%253A,repeated%2520a%2520number%2520of%2520times.&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECDEQAw&sqi=2"
                                                            >
                                                              <br />
                                                              <h3 className="LC20lb MBeuO DKV0Md">
                                                                17 (number) -
                                                                Wikipedia
                                                              </h3>
                                                              <div className="TbwUpd NJjxre iUh30 ojE3Fb">
                                                                <span className="H9lube">
                                                                  <div
                                                                    className="eqA2re NjwKYd Vwoesf"
                                                                    aria-hidden="true"
                                                                  >
                                                                    <img
                                                                      className="XNo5Ab"
                                                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAM1BMVEUAAAD+/v7MzMw7OzsAAACVlZVJSUnm5uampqYXFxfZ2dkBAQGzs7MnJyeGhoZpaWl5eXkOJSOoAAAAAXRSTlMAQObYZgAAAGpJREFUeAFtz7UBxEAQBMHtgwXpKP9kn/k13pTXIsLH5OfD74d/SLlUtFTL2Tx0E2xvWL+gQQYBzeDRBni9QSoJegeUG6AKMyCtB7R9Q8OZ9gD6anV0mzzBd8X2nF5AVJjKGzYAO4yRv/wzhDIC9UYsU1MAAAAASUVORK5CYII="
                                                                      style={{
                                                                        height: 18,
                                                                        width: 18
                                                                      }}
                                                                      alt=""
                                                                    />
                                                                  </div>
                                                                </span>
                                                                <div>
                                                                  <span className="VuuXrf">
                                                                    wikipedia.org
                                                                  </span>
                                                                  <div className="byrV5b">
                                                                    <cite
                                                                      className="qLRx3b tjvcx GvPZzd cHaqb"
                                                                      role="text"
                                                                    >
                                                                      https://en.wikipedia.org
                                                                      <span
                                                                        className="dyjrff ob9lvb"
                                                                        role="text"
                                                                      >
                                                                        {" "}
                                                                        › wiki ›
                                                                        17_(number)
                                                                      </span>
                                                                    </cite>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </a>
                                                          </span>
                                                          <div className="B6fmyf byrV5b Mg1HEd">
                                                            <div className="TbwUpd iUh30 ojE3Fb">
                                                              <span className="H9lube">
                                                                <div
                                                                  className="eqA2re NjwKYd"
                                                                  style={{
                                                                    height: 18,
                                                                    width: 18
                                                                  }}
                                                                />
                                                              </span>
                                                              <div>
                                                                <span className="VuuXrf">
                                                                  wikipedia.org
                                                                </span>
                                                                <div className="byrV5b">
                                                                  <cite
                                                                    className="qLRx3b tjvcx GvPZzd cHaqb"
                                                                    role="text"
                                                                  >
                                                                    https://en.wikipedia.org
                                                                    <span
                                                                      className="dyjrff ob9lvb"
                                                                      role="text"
                                                                    >
                                                                      {" "}
                                                                      › wiki ›
                                                                      17_(number)
                                                                    </span>
                                                                  </cite>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="IsZvec">
                                                        <span
                                                          className="aCOpRe ljeAnf"
                                                          style={{
                                                            WebkitLineClamp: 2
                                                          }}
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            jsname="MgN2vf"
                                            className="GdN4W d0fCJc BOZ6hd"
                                          >
                                            Искать:{" "}
                                            <a href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=Why+is+17+the+least+random+number%3F&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQzmd6BAg8EAY">
                                              Why is 17 the least random number?
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div jsname="yEVEwb">
                                  <div id="w4sBZYmTHJ_RwPAPx5aZiAo__82">
                                    <div
                                      className="wQiwMc related-question-pair"
                                      jscontroller="xfmZMb"
                                      data-lk="GhxpcyAzNyB0aGUgbW9zdCByYW5kb20gbnVtYmVy"
                                      data-q="Is 37 the most random number?"
                                      decode-data-ved={1}
                                      jsaction="rcuQ6b:npT2md;aVMkAb:o7YQ2;uUCWgf:NlNJyb"
                                      data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQq7kBKAB6BAg0EAA"
                                    >
                                      <div
                                        jsname="YrZdPb"
                                        className="HYvwY ilulF roMIYb oST1qe g7pt6d h373nd"
                                        jscontroller="aD8OEe"
                                        data-dic=""
                                        data-g=""
                                        data-ullb=""
                                        jsshadow=""
                                        jsaction="rcuQ6b:npT2md;C0pONd:mhSdVe;A0VnDe:rXa5ib;IKGI6b:VrL1hd"
                                        style={{ height: 48 }}
                                      >
                                        <div
                                          jsname="clz4Ic"
                                          className="ysxiae iRPzcb"
                                        />
                                        <div>
                                          <div
                                            role="button"
                                            tabIndex={0}
                                            jsaction="AWEk5c"
                                            jsname="tJHJj"
                                            className="dnXCYb"
                                            aria-controls="_w4sBZYmTHJ_RwPAPx5aZiAo_45"
                                            aria-expanded="false"
                                            data-hveid="CDQQAQ"
                                          >
                                            <div jsname="lN6iy" className="JlqpRe">
                                              <span className="JCzEY ZwRhJd">
                                                <span className="CSkcDe">
                                                  Is 37 the most random number?
                                                </span>
                                              </span>
                                            </div>
                                            <div jsname="Q8Kwad" className="aj35ze" />
                                            <div
                                              jsname="pcRaIe"
                                              className="L3Ezfd"
                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQuk56BAg0EAI"
                                            />
                                            <div
                                              jsname="gwzXIc"
                                              className="ru2Kjc"
                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ36YDegQINBAD"
                                            />
                                          </div>
                                        </div>
                                        <div
                                          jsname="NRdf4c"
                                          className="bCOlv"
                                          id="_w4sBZYmTHJ_RwPAPx5aZiAo_45"
                                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ7NUEegQINBAE"
                                        >
                                          <div className="IZE3Td" jsslot="">
                                            <div
                                              jsname="oQYOj"
                                              className="t0bRye r2fjmd"
                                              data-hveid="CDQQBQ"
                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQu04oAHoECDQQBQ"
                                            >
                                              <div id="w4sBZYmTHJ_RwPAPx5aZiAo__83">
                                                <div
                                                  className="wDYxhc"
                                                  data-md={61}
                                                  style={{ clear: "none" }}
                                                >
                                                  <div
                                                    className="LGOjhe"
                                                    data-attrid="wa:/description"
                                                    aria-level={3}
                                                    role="heading"
                                                    data-hveid="CEEQAA"
                                                  >
                                                    <span
                                                      className="ILfuVd"
                                                      lang="en"
                                                    >
                                                      <span className="hgKElc">
                                                        <b>
                                                          The most random two-digit
                                                          number is 37
                                                        </b>
                                                        , When groups of people are
                                                        polled to pick a “random
                                                        number between 1 and 100”, the
                                                        most commonly chosen number is
                                                        37. The Answer to the Ultimate
                                                        Question of Life, the
                                                        Universe, and Everything
                                                        (“what is 6 times 9”, correct
                                                        in base 13).
                                                      </span>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div id="w4sBZYmTHJ_RwPAPx5aZiAo__84">
                                                <div className="g">
                                                  <div
                                                    data-hveid="CDIQAA"
                                                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFSgAegQIMhAA"
                                                  >
                                                    <div className="tF2Cxc">
                                                      <div className="yuRUbf">
                                                        <div>
                                                          <span
                                                            jscontroller="msmzHf"
                                                            jsaction="rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc"
                                                          >
                                                            <a
                                                              jsname="UWckNb"
                                                              href="http://www.catb.org/jargon/html/R/random-numbers.html#:~:text=The%20most%20random%20two%2Ddigit,commonly%20chosen%20number%20is%2037.&text=The%20Answer%20to%20the%20Ultimate,%2C%20correct%20in%20base%2013)."
                                                              jscontroller="M9mgyc"
                                                              jsaction="rcuQ6b:npT2md"
                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECDIQAw"
                                                              ping="/url?sa=t&source=web&rct=j&opi=89978449&url=http://www.catb.org/jargon/html/R/random-numbers.html%23:~:text%3DThe%2520most%2520random%2520two%252Ddigit,commonly%2520chosen%2520number%2520is%252037.%26text%3DThe%2520Answer%2520to%2520the%2520Ultimate,%252C%2520correct%2520in%2520base%252013).&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECDIQAw&sqi=2"
                                                            >
                                                              <br />
                                                              <h3 className="LC20lb MBeuO DKV0Md">
                                                                random numbers -
                                                                Catb.org
                                                              </h3>
                                                              <div className="TbwUpd NJjxre iUh30 ojE3Fb">
                                                                <span className="H9lube">
                                                                  <div
                                                                    className="eqA2re NjwKYd Vwoesf"
                                                                    aria-hidden="true"
                                                                  >
                                                                    <img
                                                                      className="XNo5Ab"
                                                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAABsUlEQVR4AX2RA4wlQRCG++zorNjJ2QrOto3wbNu279a2bVszb207zlpf0rNGp1Jb+6MwT/R4fn4+RJ//9vEkFxv7JSjInggMdImPfwvStyckxIocHm4SE/MdT3r6OXJ09E+cGDB32mQVF/dRp7tDTkh4rSiP0tIuKcpDDAyJiNCD6jYqMNCZTqgRoWCai4tnaKhFTMznhIRXivJYbijkoyJojJSWIObmkZMm1ZqYRFGDJCa+hBUdT05kdThvbz+QHTsKhGjevLmIGoRGsOwZFfW708PcsDB96l+/IlEPG9RA/v4tCgQclu+h3cAftu8wLJxfgVTG7NnVIByjqve1rTw9g7AylONUVf/BwxR0iwdF7ReW6wZ7U9+6nQ6uqtfxsIj2CwQH21C4uwVNmN54Tby+P+jpUhFOvj/o2bjprZ5u/nJtzSDnkM+czqDl28E3/4vTn8VFa7H38GBzEHBYD48wcueztAwdNbJRnssyrLRKBM0UBSAjRzaZmnRR+/j4kvmIksMghrR0xLBhTeBr1pTKT6wtI28dOB4+VIQ0ke/e1e3bl3f8eM7Ro30EOCwalG1ItEeTg5XEIAAAAABJRU5ErkJggg=="
                                                                      style={{
                                                                        height: 18,
                                                                        width: 18
                                                                      }}
                                                                      alt=""
                                                                    />
                                                                  </div>
                                                                </span>
                                                                <div>
                                                                  <span className="VuuXrf">
                                                                    catb.org
                                                                  </span>
                                                                  <div className="byrV5b">
                                                                    <cite
                                                                      className="qLRx3b tjvcx GvPZzd cHaqb"
                                                                      role="text"
                                                                    >
                                                                      http://www.catb.org
                                                                      <span
                                                                        className="dyjrff ob9lvb"
                                                                        role="text"
                                                                      >
                                                                        {" "}
                                                                        › jargon ›
                                                                        html ›
                                                                        random-numbers
                                                                      </span>
                                                                    </cite>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </a>
                                                          </span>
                                                          <div className="B6fmyf byrV5b Mg1HEd">
                                                            <div className="TbwUpd iUh30 ojE3Fb">
                                                              <span className="H9lube">
                                                                <div
                                                                  className="eqA2re NjwKYd"
                                                                  style={{
                                                                    height: 18,
                                                                    width: 18
                                                                  }}
                                                                />
                                                              </span>
                                                              <div>
                                                                <span className="VuuXrf">
                                                                  catb.org
                                                                </span>
                                                                <div className="byrV5b">
                                                                  <cite
                                                                    className="qLRx3b tjvcx GvPZzd cHaqb"
                                                                    role="text"
                                                                  >
                                                                    http://www.catb.org
                                                                    <span
                                                                      className="dyjrff ob9lvb"
                                                                      role="text"
                                                                    >
                                                                      {" "}
                                                                      › jargon › html
                                                                      › random-numbers
                                                                    </span>
                                                                  </cite>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="IsZvec">
                                                        <span
                                                          className="aCOpRe ljeAnf"
                                                          style={{
                                                            WebkitLineClamp: 2
                                                          }}
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            jsname="MgN2vf"
                                            className="GdN4W d0fCJc BOZ6hd"
                                          >
                                            Искать:{" "}
                                            <a href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=Is+37+the+most+random+number%3F&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQzmd6BAg0EAY">
                                              Is 37 the most random number?
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div jsname="yEVEwb">
                                  <div id="w4sBZYmTHJ_RwPAPx5aZiAo__85">
                                    <div
                                      className="wQiwMc related-question-pair"
                                      jscontroller="xfmZMb"
                                      data-lk="c5PSyCxWSM_PT89JVShKzEvJz1XIK81NSi1SSE_NSy1KLMkvgooDAA"
                                      data-q="Is Google random number generator random?"
                                      decode-data-ved={1}
                                      jsaction="rcuQ6b:npT2md;aVMkAb:o7YQ2;uUCWgf:NlNJyb"
                                      data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQq7kBKAB6BAg5EAA"
                                    >
                                      <div
                                        jsname="YrZdPb"
                                        className="HYvwY ilulF roMIYb oST1qe g7pt6d h373nd"
                                        jscontroller="aD8OEe"
                                        data-dic=""
                                        data-g=""
                                        data-ullb=""
                                        jsshadow=""
                                        jsaction="rcuQ6b:npT2md;C0pONd:mhSdVe;A0VnDe:rXa5ib;IKGI6b:VrL1hd"
                                        style={{ height: 48 }}
                                      >
                                        <div
                                          jsname="clz4Ic"
                                          className="ysxiae iRPzcb"
                                        />
                                        <div>
                                          <div
                                            role="button"
                                            tabIndex={0}
                                            jsaction="AWEk5c"
                                            jsname="tJHJj"
                                            className="dnXCYb"
                                            aria-controls="_w4sBZYmTHJ_RwPAPx5aZiAo_47"
                                            aria-expanded="false"
                                            data-hveid="CDkQAQ"
                                          >
                                            <div jsname="lN6iy" className="JlqpRe">
                                              <span className="JCzEY ZwRhJd">
                                                <span className="CSkcDe">
                                                  Is Google random number generator
                                                  random?
                                                </span>
                                              </span>
                                            </div>
                                            <div jsname="Q8Kwad" className="aj35ze" />
                                            <div
                                              jsname="pcRaIe"
                                              className="L3Ezfd"
                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQuk56BAg5EAI"
                                            />
                                            <div
                                              jsname="gwzXIc"
                                              className="ru2Kjc"
                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ36YDegQIORAD"
                                            />
                                          </div>
                                        </div>
                                        <div
                                          jsname="NRdf4c"
                                          className="bCOlv"
                                          id="_w4sBZYmTHJ_RwPAPx5aZiAo_47"
                                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ7NUEegQIORAE"
                                        >
                                          <div className="IZE3Td" jsslot="">
                                            <div
                                              jsname="oQYOj"
                                              className="t0bRye r2fjmd"
                                              data-hveid="CDkQBQ"
                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQu04oAHoECDkQBQ"
                                            >
                                              <div id="w4sBZYmTHJ_RwPAPx5aZiAo__86">
                                                <div
                                                  className="wDYxhc"
                                                  data-md={61}
                                                  style={{ clear: "none" }}
                                                >
                                                  <div
                                                    className="LGOjhe"
                                                    data-attrid="wa:/description"
                                                    aria-level={3}
                                                    role="heading"
                                                    data-hveid="CEAQAA"
                                                  >
                                                    <span
                                                      className="ILfuVd"
                                                      lang="en"
                                                    >
                                                      <span className="hgKElc">
                                                        Random number generators are
                                                        typically software, pseudo
                                                        random number generators.{" "}
                                                        <b>
                                                          Their outputs are not truly
                                                          random numbers
                                                        </b>
                                                        . Instead they rely on
                                                        algorithms to mimic the
                                                        selection of a value to
                                                        approximate true randomness.
                                                      </span>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div id="w4sBZYmTHJ_RwPAPx5aZiAo__87">
                                                <div className="g">
                                                  <div
                                                    data-hveid="CDMQAA"
                                                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFSgAegQIMxAA"
                                                  >
                                                    <div className="tF2Cxc">
                                                      <div className="yuRUbf">
                                                        <div>
                                                          <span
                                                            jscontroller="msmzHf"
                                                            jsaction="rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc"
                                                          >
                                                            <a
                                                              jsname="UWckNb"
                                                              href="https://www.hypr.com/security-encyclopedia/random-number-generator#:~:text=Random%20number%20generators%20are%20typically,value%20to%20approximate%20true%20randomness."
                                                              jscontroller="M9mgyc"
                                                              jsaction="rcuQ6b:npT2md"
                                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECDMQAw"
                                                              ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.hypr.com/security-encyclopedia/random-number-generator%23:~:text%3DRandom%2520number%2520generators%2520are%2520typically,value%2520to%2520approximate%2520true%2520randomness.&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECDMQAw&sqi=2"
                                                            >
                                                              <br />
                                                              <h3 className="LC20lb MBeuO DKV0Md">
                                                                How does a Random
                                                                Number Generator work?
                                                                | Encyclopedia
                                                              </h3>
                                                              <div className="TbwUpd NJjxre iUh30 ojE3Fb">
                                                                <span className="H9lube">
                                                                  <div
                                                                    className="eqA2re NjwKYd Vwoesf"
                                                                    aria-hidden="true"
                                                                  >
                                                                    <img
                                                                      className="XNo5Ab"
                                                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAflBMVEUkHY4jHY4QHYxSIZVOJJYaGIuqI6WxJad8Gp14L6OMRrJ4VLbGJaxAHpEAB4iXmsIuKZETFoowJpNxeMgkFYwkHI4AAIjNzd9PfcMgD4oWC4tBj8mFKKEtdrYoUqMkF4zFxNrX1+UjfLckWKQhr9MkL5MkAIl6dK8gyuMnbrMq/LyBAAAAi0lEQVR4AXWMAxbEQBBEO7ZtjO9/wU2vlf9YhBO0g3ep64ZpWdpL247r+QE6Nx1GcZJmeVFWgOh2pNVNWllp290Kjg5oQD+UFRrGiEZf1/U0L2iYngb1uh3spETD8q1bI6a3VyvIK/woGeWAaFaRcpFzJrsKbs7SDmqntFvgTtUtM1l4BS+qBf/+cgFhswoMevIW2gAAAABJRU5ErkJggg=="
                                                                      style={{
                                                                        height: 18,
                                                                        width: 18
                                                                      }}
                                                                      alt=""
                                                                    />
                                                                  </div>
                                                                </span>
                                                                <div>
                                                                  <span className="VuuXrf">
                                                                    hypr.com
                                                                  </span>
                                                                  <div className="byrV5b">
                                                                    <cite
                                                                      className="qLRx3b tjvcx GvPZzd cHaqb"
                                                                      role="text"
                                                                    >
                                                                      https://www.hypr.com
                                                                      <span
                                                                        className="dyjrff ob9lvb"
                                                                        role="text"
                                                                      >
                                                                        {" "}
                                                                        ›
                                                                        security-encyclopedia
                                                                        › random...
                                                                      </span>
                                                                    </cite>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </a>
                                                          </span>
                                                          <div className="B6fmyf byrV5b Mg1HEd">
                                                            <div className="TbwUpd iUh30 ojE3Fb">
                                                              <span className="H9lube">
                                                                <div
                                                                  className="eqA2re NjwKYd"
                                                                  style={{
                                                                    height: 18,
                                                                    width: 18
                                                                  }}
                                                                />
                                                              </span>
                                                              <div>
                                                                <span className="VuuXrf">
                                                                  hypr.com
                                                                </span>
                                                                <div className="byrV5b">
                                                                  <cite
                                                                    className="qLRx3b tjvcx GvPZzd cHaqb"
                                                                    role="text"
                                                                  >
                                                                    https://www.hypr.com
                                                                    <span
                                                                      className="dyjrff ob9lvb"
                                                                      role="text"
                                                                    >
                                                                      {" "}
                                                                      ›
                                                                      security-encyclopedia
                                                                      › random...
                                                                    </span>
                                                                  </cite>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="IsZvec">
                                                        <span
                                                          className="aCOpRe ljeAnf"
                                                          style={{
                                                            WebkitLineClamp: 2
                                                          }}
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            jsname="MgN2vf"
                                            className="GdN4W d0fCJc BOZ6hd"
                                          >
                                            Искать:{" "}
                                            <a href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=Is+Google+random+number+generator+random%3F&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQzmd6BAg5EAY">
                                              Is Google random number generator
                                              random?
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  jsname="grQLgb"
                                  className="yp"
                                  data-async-fc="EosBCkxBTWsybGxLd243eHRPSGozZElpQi1OZ041aV9tM2NoSFliTUxvbXROVnN6c0UzNFg4OEkwZEJoeXZVdWNRSFNSVWVkOXo4MW5IZ1g2Ehd3NHNCWlltVEhKX1J3UEFQeDVhWmlBbxoiQUxFUzl1UFFxX01Ub1lTMVFyMTY5TEZ6ZWVGUWpUdzlIQQ"
                                  data-async-fcv={3}
                                  data-async-ons={10041}
                                  id="fc_2"
                                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQzOMHKAF6BAgwEAU"
                                />
                                <g-loading-icon
                                  jsname="aZ2wEe"
                                  className="uKh9yc S3PB2d"
                                  style={{ display: "none", height: 24, width: 24 }}
                                >
                                  <img
                                    height={24}
                                    src="//www.gstatic.com/ui/v1/activityindicator/loading_24.gif"
                                    width={24}
                                    alt="Загрузка..."
                                    role="progressbar"
                                    data-atf={0}
                                    data-frt={0}
                                  />
                                </g-loading-icon>
                              </div>
                              <div
                                className="XVdSCb KFFQ0c xKf9F"
                                style={{ marginTop: 0 }}
                              >
                                <div className="akqY6" />
                                <div className="YfftMc">
                                  <div data-async-context="async_id:duf3-44;authority:0;card_id:;entry_point:0;feature_id:;ftoe:0;header:0;is_jobs_spam_form:0;open:0;preselect_answer_index:-1;suggestions:;suggestions_subtypes:;suggestions_types:;surface:0;title:;type:44">
                                    <div
                                      jscontroller="EkevXb"
                                      style={{ display: "none" }}
                                      jsaction="rcuQ6b:npT2md"
                                    />
                                    <div
                                      id="duf3-44"
                                      data-jiis="up"
                                      data-async-type="duffy3"
                                      data-async-context-required="type,open,feature_id,async_id,entry_point,authority,card_id,ftoe,title,header,suggestions,surface,suggestions_types,suggestions_subtypes,preselect_answer_index,is_jobs_spam_form"
                                      className="yp"
                                      data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ-0F6BAgwEAc"
                                    />
                                    <a
                                      className="oBa0Fe"
                                      href="#"
                                      data-async-trigger="duf3-44"
                                      aria-label="Оставить отзыв об этом результате"
                                      role="button"
                                      jsaction="trigger.szjOR"
                                      data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQtw96BAgwEAg"
                                    >
                                      Оставить отзыв
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hlcw0c">
                          <div className="MjjYud">
                            <div
                              jscontroller="SC7lYd"
                              className="g Ww4FFb vt6azd tF2Cxc asEBEc"
                              lang="en"
                              style={{ width: 600 }}
                              jsaction="QyLbLe:OMITjf;ewaord:qsYrDe;xd28Mb:A6j43c"
                              data-hveid="CCMQAA"
                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFSgAegQIIxAA"
                            >
                              <div
                                className="N54PNb BToiNc cvP2Ce"
                                data-snc="ih6Jnb_efEihb"
                              >
                                <div
                                  className="kb0PBd cvP2Ce jGGQ5e"
                                  data-snf="x5WNvb"
                                  data-snhf={0}
                                >
                                  <div className="yuRUbf">
                                    <div>
                                      <span
                                        jscontroller="msmzHf"
                                        jsaction="rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc"
                                      >
                                        <a
                                          jsname="UWckNb"
                                          href="https://www.gigacalculator.com/calculators/random-number-generator.php"
                                          jscontroller="M9mgyc"
                                          jsaction="rcuQ6b:npT2md"
                                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECBkQAQ"
                                          ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.gigacalculator.com/calculators/random-number-generator.php&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECBkQAQ&sqi=2"
                                        >
                                          <br />
                                          <h3 className="LC20lb MBeuO DKV0Md">
                                            True Random Number Generator / Picker
                                          </h3>
                                          <div className="TbwUpd NJjxre iUh30 ojE3Fb">
                                            <span className="H9lube">
                                              <div
                                                className="eqA2re NjwKYd Vwoesf"
                                                aria-hidden="true"
                                              >
                                                <img
                                                  className="XNo5Ab"
                                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAmVBMVEX////24KvtxETruwPvyFXquADptQDqtgDvymL35Lf4577++vD09/n++/LwzWzuxkz679Z2lK8AOnYAMnIAT4Kvv87pyYT58N6Tqr41bJP57c5sjanQ2eKmuMkAKG7Dz9rrzIsAN3W7yNXi6O2AnLTq7vJEdJlehaQnY44AVYUATID68+bjt0/kulvgry3///ubr8IAP3kUXovlKMjnAAABD0lEQVR4AXTSBZLDIABA0V+h7t6GGMTrvf/dVhiGNfaPRF4UAFrtjqd2C6ArRM+T6A9g2Bejsaeh6I8YiBbABIApLlpixry/gOVqvdkCuz3A4Qhw6ncNBhs5CaMYkr84SRWgpBf1SqOCLPRinkpkWJRepCpgUgd+1E1zXJWlw+o7QqxytEVy/R1dyRmbw/Plaru5vcvYInfuJpI9d5vnsXtcDlVRBbnDLPiOj/ShylVuMX9u4m/4DIFga/FQHsqfY6tVLC1uYr2e8B23xavEoHxKXYcOaTKgCjAYbDabusKhWpeHl71zspYwiaRDdLZUuTLLRD8AwtjgQAwxeRaYWZpTTyPRH/2/qEWX9+HNDgCNKCaVYVGjXgAAAABJRU5ErkJggg=="
                                                  style={{ height: 18, width: 18 }}
                                                  alt=""
                                                  data-atf={4}
                                                  data-frt={0}
                                                />
                                              </div>
                                            </span>
                                            <div>
                                              <span className="VuuXrf">
                                                GIGACalculator.com
                                              </span>
                                              <div className="byrV5b">
                                                <cite
                                                  className="qLRx3b tjvcx GvPZzd cHaqb"
                                                  role="text"
                                                >
                                                  https://www.gigacalculator.com
                                                  <span
                                                    className="dyjrff ob9lvb"
                                                    role="text"
                                                  >
                                                    {" "}
                                                    › ...
                                                  </span>
                                                </cite>
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </span>
                                      <div className="B6fmyf byrV5b Mg1HEd">
                                        <div className="TbwUpd iUh30 ojE3Fb">
                                          <span className="H9lube">
                                            <div
                                              className="eqA2re NjwKYd"
                                              style={{ height: 18, width: 18 }}
                                            />
                                          </span>
                                          <div>
                                            <span className="VuuXrf">
                                              GIGACalculator.com
                                            </span>
                                            <div className="byrV5b">
                                              <cite
                                                className="qLRx3b tjvcx GvPZzd cHaqb"
                                                role="text"
                                              >
                                                https://www.gigacalculator.com
                                                <span
                                                  className="dyjrff ob9lvb"
                                                  role="text"
                                                >
                                                  {" "}
                                                  › ...
                                                </span>
                                              </cite>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="csDOgf BCF2pd ezY6nb L48a4c">
                                          <div
                                            jscontroller="exgaYe"
                                            data-bsextraheight={0}
                                            data-isdesktop="true"
                                            data-movewtractions="true"
                                            jsdata="l7Bhpb;_;AsaumU cECq7c;_;Asaums"
                                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ2esEegQIGRAJ"
                                          >
                                            <div
                                              role="button"
                                              tabIndex={0}
                                              jsaction="RvIhPd"
                                              jsname="I3kE2c"
                                              className="iTPLzd rNSxBe lUn2nc"
                                              style={{ position: "absolute" }}
                                              aria-label="Об этом результате"
                                            >
                                              <span
                                                jsname="czHhOd"
                                                className="D6lY4c mBswFe"
                                              >
                                                <span
                                                  jsname="Bil8Ae"
                                                  className="xTFaxe z1asCe"
                                                  style={{
                                                    height: 18,
                                                    lineHeight: 18,
                                                    width: 18
                                                  }}
                                                >
                                                  <svg
                                                    focusable="false"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                  >
                                                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                                  </svg>
                                                </span>
                                              </span>
                                            </div>
                                            <span
                                              jsname="zOVa8"
                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQh-4GegQIGRAK"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="kb0PBd cvP2Ce"
                                  data-sncf={1}
                                  data-snf="nke7rc"
                                >
                                  <div
                                    className="VwiC3b yXK7lf yDYNvb W8l4ac lyLwlc lEBKkf"
                                    style={{ WebkitLineClamp: 2 }}
                                  >
                                    <span>
                                      Free online <em>random number generator</em>{" "}
                                      with true <em>random numbers</em>. ➤ Can be used
                                      to pick a number for giveaways, sweepstakes,
                                      charity lotteries, etc. to draw a&nbsp;...
                                    </span>
                                  </div>
                                </div>
                                <div
                                  className="kb0PBd cvP2Ce"
                                  data-sncf={2}
                                  data-snf="mCCBcf"
                                >
                                  <div className="fG8Fp uo4vr" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ULSxyf">
                          <div className="MjjYud">
                            <div className="EyBRub">
                              <div
                                jscontroller="Wo3n8"
                                jsname="aadvhe"
                                jsmodel="d5EhJe"
                                data-eas=""
                                data-fhs=""
                                data-kes=""
                                jsdata="vST7rb;_;Asaung zEIyGd;_;"
                                jsaction="kPzEO:MlP2je;w8f1fc:hRwSgb;aIJAdf:UhDUnd;BqbTbe:naa5ve;kYAKrf:CqUGrf;hwhRRe:KyxjCd;rcuQ6b:npT2md"
                              >
                                <div
                                  jsname="GkjeIf"
                                  id="_w4sBZYmTHJ_RwPAPx5aZiAo_51"
                                  data-jiis="up"
                                  data-async-type="kp_feedback"
                                  className="yp"
                                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ68cEegQISBAA"
                                />
                              </div>
                              <div
                                jsmodel="Wn3aEc"
                                className="Lv2Cle"
                                data-count={11}
                                style={{ position: "relative" }}
                                data-iu={1}
                                data-hveid="CEgQAQ"
                                data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQyA0oAHoECEgQAQ"
                              >
                                <g-section-with-header className="yG4QQe TBC9ub">
                                  <div className="e2BEnf U7izfe hWIMdd EQdXxd">
                                    <title-with-lhs-icon>
                                      <a
                                        className="ekf0x hSQtef"
                                        href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=google+random+number+generator&tbm=isch&source=univ&fir=Qs_pHbbKKx83BM%252CW4lJfWLipanUvM%252C_%253BVbajZH3nvuc00M%252C_nCVHY4-eEqcGM%252C_%253BEdgHA_8_VBe88M%252Chjz50wJVTyUznM%252C_%253BxtRLE7Syh4C_9M%252CaZ2Gz53IFlRlzM%252C_%253B_ik9zkAckcgTMM%252Crcaa9Xe2H45eCM%252C_%253BeYUjpM2V7ix4mM%252CiXrQVLFVng53dM%252C_%253BHFb66nBQTXjalM%252CXMqd58TTvAq49M%252C_%253BdpIA3zPAxROBnM%252C93-bzgIUl5T4MM%252C_%253BmuI5DpvahcK89M%252C96jVk-JHqxpqZM%252C_%253BTTXsYX2_v0JiqM%252CL2grixsIOJEmeM%252C_&usg=AI4_-kQ9ldyGFdu7S1nv0ghtJF5K3_kAuw&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQjJkEegQISBAC"
                                      >
                                        <div className="iv236 kNmTT">
                                          <span
                                            className="iJddsb"
                                            style={{ height: 20, width: 20 }}
                                          >
                                            <svg
                                              focusable="false"
                                              viewBox="0 0 24 24"
                                            >
                                              <path d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5" />
                                            </svg>
                                          </span>
                                        </div>
                                        <div className="dtIg1b">
                                          <span
                                            className="iJddsb"
                                            style={{ height: 20, width: 20 }}
                                          >
                                            <svg
                                              clipRule="evenodd"
                                              fillRule="evenodd"
                                              focusable="false"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fill="#4285f4"
                                                d="M19 22h-7v-2h7c.55 0 1-.46 1-1V5a1 1 0 0 0-1-.99L12 4V2h7c1.66 0 3 1.36 3 3v14c0 1.65-1.35 3-3 3"
                                              />
                                              <path
                                                fill="#ea4335"
                                                d="M12 22H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h7v2H5c-.55 0-.99.45-.99 1L4 19c0 .55.45 1 1 1h7v2"
                                              />
                                              <path
                                                fill="#34a853"
                                                d="M14 13l-2.25 2.75L10 14l-4 4h12"
                                              />
                                              <path
                                                fill="#fbbc04"
                                                d="M10 8c0 1.1-.9 2-2 2s-2-.9-2-2c0-1.09.9-2 2-2s2 .9 2 2"
                                              />
                                            </svg>
                                          </span>
                                        </div>
                                        <div className="iJ1Kvb">
                                          <h3
                                            className="GmE3X kWYf3c"
                                            aria-level={2}
                                            role="heading"
                                          >
                                            Картинки по запросу google random number
                                            generator
                                          </h3>
                                        </div>
                                      </a>
                                    </title-with-lhs-icon>
                                    <div className="ouRJZc">
                                      <div
                                        jscontroller="exgaYe"
                                        data-bsextraheight={0}
                                        data-isdesktop="true"
                                        jsdata="l7Bhpb;_;Asaunw cECq7c;_;AsaumE"
                                        data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ2esEegQISBAD"
                                      >
                                        <div jsaction="KyPa0e:RvIhPd;wjOG7e:edHC5b;al5F3e:edHC5b;">
                                          <div
                                            role="button"
                                            tabIndex={0}
                                            jsaction="RvIhPd"
                                            jsname="I3kE2c"
                                            className="iTPLzd rNSxBe I7Y2H WE2xI eY4mx"
                                            aria-label="Об этом результате"
                                          >
                                            <span
                                              jsname="czHhOd"
                                              className="D6lY4c IjabWd"
                                            >
                                              <span
                                                jsname="Bil8Ae"
                                                className="xTFaxe z1asCe"
                                                style={{
                                                  height: 18,
                                                  lineHeight: 18,
                                                  width: 18
                                                }}
                                              >
                                                <svg
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 24 24"
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                                </svg>
                                              </span>
                                            </span>
                                          </div>
                                          <span
                                            jsname="zOVa8"
                                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQh-4GegQISBAE"
                                          />
                                        </div>
                                        <g-snackbar
                                          jsname="t1F84b"
                                          jscontroller="OZLguc"
                                          style={{ display: "none" }}
                                          jsshadow=""
                                          jsaction="rcuQ6b:npT2md"
                                          id="ow118"
                                          __is_owner="true"
                                        >
                                          <div
                                            jsname="Ng57nc"
                                            className="yK6jqe"
                                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ4G96BAhIEAU"
                                            jsowner="ow118"
                                          >
                                            <div className="b77HKf">
                                              <div className="rIxsve" jsslot="">
                                                <span className="Txngnb wHYlTd yUTMj">
                                                  Теперь мы будем показывать больше
                                                  информации на английском.
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            jsname="sM5MNb"
                                            aria-live="polite"
                                            className="LH3wG"
                                          />
                                        </g-snackbar>
                                      </div>
                                    </div>
                                  </div>
                                  <div id="iur">
                                    <div>
                                      <div className="Kq2KUc">
                                        <h3
                                          className="bNg8Rb OhScic zsYMMe BBwThe"
                                          style={{
                                            clip: "rect(1px,1px,1px,1px)",
                                            height: 1,
                                            overflow: "hidden",
                                            position: "absolute",
                                            whiteSpace: "nowrap",
                                            width: 1,
                                            zIndex: -1000,
                                            WebkitUserSelect: "none"
                                          }}
                                        >
                                          Фильтры с инструкциями
                                        </h3>
                                        <div
                                          className="BdG8Xe"
                                          jscontroller="b4xCIb"
                                          jsshadow=""
                                          jsaction="vjZ9gd:z9RAXb"
                                        >
                                          <g-expandable-container
                                            className="DZjrpb"
                                            id="_w4sBZYmTHJ_RwPAPx5aZiAo_53"
                                            jscontroller="QE1bwd"
                                            data-anim=""
                                            data-fcss=""
                                            data-npd={1}
                                            data-slct="mnr-c"
                                            jsshadow=""
                                            jsaction="C7xow:Z6bwpe;xNpQtd:Nh5q2c;U6VCqe:GsRPff;Ep2Mgc:AgioGc;BDs6B:fW2qAb;ep03Ne:AvkpRc;gvA4Rc:yELBLe"
                                          >
                                            <div jsname="gI9xcc" jsslot={1}>
                                              <div className="oBlg4e">
                                                <g-inline-toggler
                                                  jsname="BE25u"
                                                  className="pIuSUd"
                                                  style={{
                                                    marginTop: 3,
                                                    visibility: "inherit"
                                                  }}
                                                  jscontroller="WOJjZ"
                                                  aria-expanded="false"
                                                  aria-labelledby="_w4sBZYmTHJ_RwPAPx5aZiAo_54"
                                                  data-npd={1}
                                                  jsdata="T2y0jb;_;Asaun4"
                                                  jsshadow=""
                                                  role="button"
                                                  tabIndex={0}
                                                  jsaction="yELBLe;rcuQ6b:npT2md"
                                                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ55IGegQISBAK"
                                                  aria-controls="_w4sBZYmTHJ_RwPAPx5aZiAo_56"
                                                >
                                                  <div
                                                    jsname="OrQHOc"
                                                    className="nfoSTb s8GVIe"
                                                    id="_w4sBZYmTHJ_RwPAPx5aZiAo_54"
                                                  >
                                                    <span
                                                      className="DO6Sie"
                                                      jsslot=""
                                                    >
                                                      <div className="ZkkK1e yUTMj k1U36b L0N73c">
                                                        <div className="POUQwd Rubttd">
                                                          <div>
                                                            <div className="V8fWH">
                                                              Фильтр: функция
                                                            </div>
                                                          </div>
                                                          <span
                                                            style={{
                                                              height: 20,
                                                              lineHeight: 20,
                                                              width: 20
                                                            }}
                                                            className="z1asCe QFl0Ff"
                                                          >
                                                            <svg
                                                              focusable="false"
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              viewBox="0 0 24 24"
                                                            >
                                                              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                                                            </svg>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </span>
                                                  </div>
                                                  <div
                                                    jsname="Elsoj"
                                                    className="xKXaGf s8GVIe"
                                                    id="_w4sBZYmTHJ_RwPAPx5aZiAo_55"
                                                  >
                                                    <span
                                                      className="DO6Sie"
                                                      jsslot=""
                                                    >
                                                      <div className="ZkkK1e yUTMj k1U36b L0N73c">
                                                        <div className="POUQwd Rubttd">
                                                          <div>
                                                            <div className="V8fWH">
                                                              Фильтр: функция
                                                            </div>
                                                          </div>
                                                          <span
                                                            style={{
                                                              height: 20,
                                                              lineHeight: 20,
                                                              width: 20
                                                            }}
                                                            className="z1asCe PFI26e"
                                                          >
                                                            <svg
                                                              focusable="false"
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              viewBox="0 0 24 24"
                                                            >
                                                              <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
                                                            </svg>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </span>
                                                  </div>
                                                </g-inline-toggler>
                                                <g-expandable-content
                                                  className="fwWsFc xTWr4e"
                                                  id="_w4sBZYmTHJ_RwPAPx5aZiAo_56"
                                                  jscontroller="Ah7cLd"
                                                  jsaction=";rcuQ6b:npT2md"
                                                  jsshadow=""
                                                  aria-hidden="false"
                                                  data-cav=""
                                                  data-cmh={44}
                                                  data-ead={1}
                                                  data-eb={0}
                                                  data-li=""
                                                  data-mt={4}
                                                  data-npd={1}
                                                  data-wcn="BPrWId"
                                                  style={{ maxHeight: 44 }}
                                                >
                                                  <span jsname="zXitYb" jsslot="">
                                                    <div jsname="BPrWId" jsslot="">
                                                      <a
                                                        className="dgdd6c"
                                                        href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=google+random+number+generator&tbm=isch&chips=q:google+random+number+generator,online_chips:google+sheets:jnLex24tPaA%3D&usg=AI4_-kRzH46qq20_Hb1dUZlpCseCFuo_Uw&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQgIoDKAB6BAhIEBI"
                                                        role="button"
                                                        aria-hidden="false"
                                                      >
                                                        <div className="ZkkK1e yUTMj k1U36b">
                                                          <div className="POUQwd z27Mgd">
                                                            <g-img className="gymTod">
                                                              <img
                                                                id="dimg_9"
                                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                className="YQ4gaf zr758c"
                                                                height={34}
                                                                width={34}
                                                                alt=""
                                                                data-atf={4}
                                                              />
                                                            </g-img>
                                                          </div>
                                                          <div className="xlY4q VDgVie VIZLse">
                                                            google sheets
                                                          </div>
                                                        </div>
                                                      </a>
                                                      <a
                                                        className="dgdd6c"
                                                        href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=google+random+number+generator&tbm=isch&chips=q:google+random+number+generator,online_chips:skeppy:S57XTa-0LAY%3D&usg=AI4_-kQqiPOn5afK5DF2DgSCMidUtxqKxA&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQgIoDKAF6BAhIEBY"
                                                        role="button"
                                                        aria-hidden="false"
                                                      >
                                                        <div className="ZkkK1e yUTMj k1U36b">
                                                          <div className="POUQwd z27Mgd">
                                                            <g-img className="gymTod">
                                                              <img
                                                                id="dimg_11"
                                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                className="YQ4gaf zr758c"
                                                                height={34}
                                                                width={34}
                                                                alt=""
                                                                data-atf={4}
                                                              />
                                                            </g-img>
                                                          </div>
                                                          <div className="xlY4q VDgVie VIZLse">
                                                            skeppy
                                                          </div>
                                                        </div>
                                                      </a>
                                                      <a
                                                        className="dgdd6c"
                                                        href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=google+random+number+generator&tbm=isch&chips=q:google+random+number+generator,online_chips:number+between:lFeVaKNbuS0%3D&usg=AI4_-kRi0Ds6wwGpm27Y5gOAfdVgquzsCg&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQgIoDKAJ6BAhIEBo"
                                                        role="button"
                                                        aria-hidden="false"
                                                      >
                                                        <div className="ZkkK1e yUTMj k1U36b">
                                                          <div className="POUQwd z27Mgd">
                                                            <g-img className="gymTod">
                                                              <img
                                                                id="dimg_13"
                                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                className="YQ4gaf zr758c"
                                                                height={34}
                                                                width={34}
                                                                alt=""
                                                                data-atf={4}
                                                              />
                                                            </g-img>
                                                          </div>
                                                          <div className="xlY4q VDgVie VIZLse">
                                                            number between
                                                          </div>
                                                        </div>
                                                      </a>
                                                      <a
                                                        className="dgdd6c"
                                                        href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=google+random+number+generator&tbm=isch&chips=q:google+random+number+generator,online_chips:number+picker:zybd8S2VomQ%3D&usg=AI4_-kSlDpajbdTod0vcdFXk-OHFvBZi2g&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQgIoDKAN6BAhIEB4"
                                                        role="button"
                                                        aria-hidden="false"
                                                      >
                                                        <div className="ZkkK1e yUTMj k1U36b">
                                                          <div className="POUQwd z27Mgd">
                                                            <g-img className="gymTod">
                                                              <img
                                                                id="dimg_15"
                                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                className="YQ4gaf zr758c"
                                                                height={34}
                                                                width={34}
                                                                alt=""
                                                                data-atf={4}
                                                              />
                                                            </g-img>
                                                          </div>
                                                          <div className="xlY4q VDgVie VIZLse">
                                                            number picker
                                                          </div>
                                                        </div>
                                                      </a>
                                                      <a
                                                        className="dgdd6c"
                                                        href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=google+random+number+generator&tbm=isch&chips=q:google+random+number+generator,online_chips:youtube:F1Q__wMH2BE%3D&usg=AI4_-kRdeTqAv4Vz7gkhw2SYS7R_VWL5xA&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQgIoDKAR6BAhIECI"
                                                        role="button"
                                                        aria-hidden="true"
                                                      >
                                                        <div className="ZkkK1e yUTMj k1U36b">
                                                          <div className="POUQwd z27Mgd">
                                                            <g-img className="gymTod">
                                                              <img
                                                                id="dimg_17"
                                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                className="YQ4gaf zr758c"
                                                                height={34}
                                                                width={34}
                                                                alt=""
                                                                data-atf={0}
                                                              />
                                                            </g-img>
                                                          </div>
                                                          <div className="xlY4q VDgVie VIZLse">
                                                            youtube
                                                          </div>
                                                        </div>
                                                      </a>
                                                      <a
                                                        className="dgdd6c"
                                                        href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=google+random+number+generator&tbm=isch&chips=q:google+random+number+generator,online_chips:between+1&usg=AI4_-kTTyw0hkBMor5GNLcOVSI3bwG6IwA&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQgIoDKAV6BAhIECY"
                                                        role="button"
                                                        aria-hidden="true"
                                                      >
                                                        <div className="ZkkK1e yUTMj k1U36b">
                                                          <div className="xlY4q VDgVie q3N1vb">
                                                            between 1
                                                          </div>
                                                        </div>
                                                      </a>
                                                      <a
                                                        className="dgdd6c"
                                                        href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=google+random+number+generator&tbm=isch&chips=q:google+random+number+generator,online_chips:google+spreadsheet:HpO3xtPXw1w%3D&usg=AI4_-kSJwmKcDkMtkP0kI5xH6fR6PpIHXA&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQgIoDKAZ6BAhIECk"
                                                        role="button"
                                                        aria-hidden="true"
                                                      >
                                                        <div className="ZkkK1e yUTMj k1U36b">
                                                          <div className="POUQwd z27Mgd">
                                                            <g-img className="gymTod">
                                                              <img
                                                                id="dimg_19"
                                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                className="YQ4gaf zr758c"
                                                                height={34}
                                                                width={34}
                                                                alt=""
                                                                data-atf={0}
                                                              />
                                                            </g-img>
                                                          </div>
                                                          <div className="xlY4q VDgVie VIZLse">
                                                            google spreadsheet
                                                          </div>
                                                        </div>
                                                      </a>
                                                    </div>
                                                  </span>
                                                </g-expandable-content>
                                              </div>
                                            </div>
                                          </g-expandable-container>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <div
                                        jsmodel=""
                                        jscontroller="TcZDme"
                                        jsaction="PdWSXe:h5M12e;rcuQ6b:npT2md;"
                                        jsdata="X2sNs;_;Asaun8"
                                      >
                                        <div>
                                          <g-scrolling-carousel
                                            jsname="mILnFc"
                                            jscontroller="pgCXqb"
                                            id="_w4sBZYmTHJ_RwPAPx5aZiAo_58"
                                            jsdata="JcTXNb;_;AsauoA"
                                            jsshadow=""
                                            jsaction="OaAmdd:EDKYjb;JnGzAc:aJ8u7;qVN0Rc:nnsrCf;OW9R3e:Xj7hvb;EormBc:HFYvKc;gEKQDb:yUtVib;keydown:uYT2Vb;rcuQ6b:npT2md;lnkFzb:jCOVSe"
                                          >
                                            <div
                                              jsname="haAclf"
                                              className="acCJ4b mecbob MGlaC"
                                              jsaction="t3L5Dd:OR1BUb"
                                              data-hveid="CEgQLw"
                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ5m0oAHoECEgQLw"
                                              style={{ overflowX: "auto" }}
                                            >
                                              <div
                                                jsname="s2gQvd"
                                                className="EDblX kjqWgb"
                                                jsslot=""
                                              >
                                                <div
                                                  jsname="dTDiAc"
                                                  className="eA0Zlc WghbWd FnEtTd JX86yc ivg-i PZPZlf"
                                                  jscontroller="Um3BXb"
                                                  data-sd=""
                                                  jsdata="j0Opre;Qs_pHbbKKx83BM;AsaumI"
                                                  data-attrid="images universal"
                                                  data-docid="Qs_pHbbKKx83BM"
                                                  data-lpage="https://chrome.google.com/webstore/detail/random-number-generator/ckdkgoogioikcpmpmoecocgfdangpecg"
                                                  data-ref-docid="W4lJfWLipanUvM"
                                                  jsaction="rcuQ6b:npT2md;tuz4af:RrAr1;nptbHe:XEuVS;h5M12e;qWWJ8e:.CLIENT"
                                                  data-hveid="CBcQAA"
                                                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ9AF6BAgXEAA"
                                                >
                                                  <div jsname="IOBa3c">
                                                    <div
                                                      jsname="qQjpJ"
                                                      className="XOEbc"
                                                      role="button"
                                                      tabIndex={0}
                                                    >
                                                      <g-inner-card className="xIfh4d wdQNof">
                                                        <div>
                                                          <div
                                                            data-bla=""
                                                            className="uhHOwf BYbUcd"
                                                            style={{
                                                              height: 130,
                                                              width: 174
                                                            }}
                                                          >
                                                            <img
                                                              data-d=",208,,-17"
                                                              alt="Random Number Generator"
                                                              id="dimg_1"
                                                              src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                              data-atf={4}
                                                            />
                                                          </div>
                                                        </div>
                                                      </g-inner-card>
                                                    </div>
                                                    <div
                                                      jsname="tdeeNb"
                                                      className="BfmEZb"
                                                    />
                                                  </div>
                                                </div>
                                                <div
                                                  jsname="dTDiAc"
                                                  className="eA0Zlc WghbWd FnEtTd JX86yc ivg-i PZPZlf"
                                                  jscontroller="Um3BXb"
                                                  data-sd=""
                                                  jsdata="j0Opre;VbajZH3nvuc00M;Asaum0"
                                                  data-attrid="images universal"
                                                  data-docid="VbajZH3nvuc00M"
                                                  data-lpage="https://en.wikipedia.org/wiki/File:Google%27s_random_number_generator.png"
                                                  data-ref-docid="_nCVHY4-eEqcGM"
                                                  jsaction="rcuQ6b:npT2md;tuz4af:RrAr1;nptbHe:XEuVS;h5M12e;qWWJ8e:.CLIENT"
                                                  data-hveid="CCgQAA"
                                                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ9AF6BAgoEAA"
                                                >
                                                  <div jsname="IOBa3c">
                                                    <div
                                                      jsname="qQjpJ"
                                                      className="XOEbc"
                                                      role="button"
                                                      tabIndex={0}
                                                    >
                                                      <g-inner-card className="xIfh4d wdQNof">
                                                        <div>
                                                          <div
                                                            data-bla=""
                                                            className="uhHOwf BYbUcd"
                                                            style={{
                                                              height: 130,
                                                              width: 174
                                                            }}
                                                          >
                                                            <img
                                                              data-d=",241,,-33"
                                                              alt="File:Google's random number generator.png - Wikipedia"
                                                              id="dimg_3"
                                                              src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                              data-atf={4}
                                                            />
                                                          </div>
                                                        </div>
                                                      </g-inner-card>
                                                    </div>
                                                    <div
                                                      jsname="tdeeNb"
                                                      className="BfmEZb"
                                                    />
                                                  </div>
                                                </div>
                                                <div
                                                  jsname="dTDiAc"
                                                  className="eA0Zlc WghbWd FnEtTd JX86yc ivg-i PZPZlf"
                                                  jscontroller="Um3BXb"
                                                  data-sd=""
                                                  jsdata="j0Opre;EdgHA_8_VBe88M;AsaunE"
                                                  data-attrid="images universal"
                                                  data-docid="EdgHA_8_VBe88M"
                                                  data-lpage="https://www.youtube.com/watch?v=7fpGM08n7e8"
                                                  data-ref-docid="hjz50wJVTyUznM"
                                                  jsaction="rcuQ6b:npT2md;tuz4af:RrAr1;nptbHe:XEuVS;h5M12e;qWWJ8e:.CLIENT"
                                                  data-hveid="CC0QAA"
                                                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ9AF6BAgtEAA"
                                                >
                                                  <div jsname="IOBa3c">
                                                    <div
                                                      jsname="qQjpJ"
                                                      className="XOEbc"
                                                      role="button"
                                                      tabIndex={0}
                                                    >
                                                      <g-inner-card className="xIfh4d wdQNof">
                                                        <div>
                                                          <div
                                                            data-bla=""
                                                            className="uhHOwf BYbUcd"
                                                            style={{
                                                              height: 130,
                                                              width: 174
                                                            }}
                                                          >
                                                            <img
                                                              data-d=",232,,-29"
                                                              alt="Google Random Number Generator"
                                                              id="dimg_7"
                                                              src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                              data-atf={4}
                                                            />
                                                          </div>
                                                        </div>
                                                        <div className="wr8GYd">
                                                          <div className="GQDPdd">
                                                            <span
                                                              className="S2Caaf kPUX1c seDAFe z1asCe sPPjT"
                                                              style={{
                                                                height: 14,
                                                                lineHeight: 14,
                                                                width: 14
                                                              }}
                                                            >
                                                              <svg
                                                                focusable="false"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                              >
                                                                <path d="M8 5v14l11-7z" />
                                                              </svg>
                                                            </span>
                                                            <span className="CrkfKf">
                                                              Видео
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </g-inner-card>
                                                    </div>
                                                    <div
                                                      jsname="tdeeNb"
                                                      className="BfmEZb"
                                                    />
                                                  </div>
                                                </div>
                                                <div
                                                  jsname="dTDiAc"
                                                  className="eA0Zlc WghbWd FnEtTd JX86yc ivg-i PZPZlf"
                                                  jscontroller="Um3BXb"
                                                  data-sd=""
                                                  jsdata="j0Opre;xtRLE7Syh4C_9M;Asaum4"
                                                  data-attrid="images universal"
                                                  data-docid="xtRLE7Syh4C_9M"
                                                  data-lpage="https://chrome.google.com/webstore/detail/random-number-generator/gomjhfccinnpljfclcgoajmenaegampk"
                                                  data-ref-docid="aZ2Gz53IFlRlzM"
                                                  jsaction="rcuQ6b:npT2md;tuz4af:RrAr1;nptbHe:XEuVS;h5M12e;qWWJ8e:.CLIENT"
                                                  data-hveid="CCwQAA"
                                                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ9AF6BAgsEAA"
                                                >
                                                  <div jsname="IOBa3c">
                                                    <div
                                                      jsname="qQjpJ"
                                                      className="XOEbc"
                                                      role="button"
                                                      tabIndex={0}
                                                    >
                                                      <g-inner-card className="xIfh4d wdQNof">
                                                        <div>
                                                          <div
                                                            data-bla=""
                                                            className="uhHOwf BYbUcd"
                                                            style={{
                                                              height: 130,
                                                              width: 174
                                                            }}
                                                          >
                                                            <img
                                                              data-d=",208,,-17"
                                                              alt="Random number generator"
                                                              id="dimg_5"
                                                              src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                              data-atf={4}
                                                            />
                                                          </div>
                                                        </div>
                                                      </g-inner-card>
                                                    </div>
                                                    <div
                                                      jsname="tdeeNb"
                                                      className="BfmEZb"
                                                    />
                                                  </div>
                                                </div>
                                                <div
                                                  jsname="dTDiAc"
                                                  className="eA0Zlc WghbWd FnEtTd JX86yc ivg-i PZPZlf"
                                                  jscontroller="Um3BXb"
                                                  data-sd=""
                                                  jsdata="j0Opre;_ik9zkAckcgTMM;AsaunA"
                                                  aria-hidden="true"
                                                  data-attrid="images universal"
                                                  data-docid="_ik9zkAckcgTMM"
                                                  data-lpage="https://9to5google.com/2018/04/04/how-to-use-generate-random-number-google-homepage-android-basics/"
                                                  data-ni={1}
                                                  data-ref-docid="rcaa9Xe2H45eCM"
                                                  jsaction="rcuQ6b:npT2md;tuz4af:RrAr1;nptbHe:XEuVS;h5M12e;qWWJ8e:.CLIENT"
                                                  data-hveid="CCoQAA"
                                                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ9AF6BAgqEAA"
                                                >
                                                  <div jsname="IOBa3c">
                                                    <div
                                                      jsname="qQjpJ"
                                                      className="XOEbc"
                                                      role="button"
                                                      tabIndex={0}
                                                    >
                                                      <g-inner-card className="xIfh4d wdQNof">
                                                        <div>
                                                          <div
                                                            data-bla=""
                                                            className="uhHOwf BYbUcd"
                                                            style={{
                                                              height: 130,
                                                              width: 174
                                                            }}
                                                          >
                                                            <img
                                                              style={{
                                                                marginLeft: "-98px",
                                                                width: 370
                                                              }}
                                                              alt="How to generate a random number right from Google's homepage"
                                                              data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTgHg4y199YmIR5FCPXldoAhECMNgMiNa-e4Gkms-Bxg&s"
                                                              src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                                              jscontroller="R3fhkb"
                                                              jsaction="rcuQ6b:npT2md;BUYwVb:QT8fkf;LsLGHf:iSvHDf;DdQV6c:QT8fkf"
                                                              data-atf={12}
                                                              data-frt={0}
                                                            />
                                                          </div>
                                                        </div>
                                                      </g-inner-card>
                                                    </div>
                                                    <div
                                                      jsname="tdeeNb"
                                                      className="BfmEZb"
                                                    />
                                                  </div>
                                                </div>
                                                <div
                                                  jsname="dTDiAc"
                                                  className="eA0Zlc WghbWd FnEtTd JX86yc ivg-i PZPZlf"
                                                  jscontroller="Um3BXb"
                                                  data-sd=""
                                                  jsdata="j0Opre;eYUjpM2V7ix4mM;Asaum8"
                                                  aria-hidden="true"
                                                  data-attrid="images universal"
                                                  data-docid="eYUjpM2V7ix4mM"
                                                  data-lpage="https://www.reddit.com/r/Kanye/comments/6oglgs/google_random_number_generator_confirmed/"
                                                  data-ni={1}
                                                  data-ref-docid="iXrQVLFVng53dM"
                                                  jsaction="rcuQ6b:npT2md;tuz4af:RrAr1;nptbHe:XEuVS;h5M12e;qWWJ8e:.CLIENT"
                                                  data-hveid="CCsQAA"
                                                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ9AF6BAgrEAA"
                                                >
                                                  <div jsname="IOBa3c">
                                                    <div
                                                      jsname="qQjpJ"
                                                      className="XOEbc"
                                                      role="button"
                                                      tabIndex={0}
                                                    >
                                                      <g-inner-card className="xIfh4d wdQNof">
                                                        <div>
                                                          <div
                                                            data-bla=""
                                                            className="uhHOwf BYbUcd"
                                                            style={{
                                                              height: 130,
                                                              width: 174
                                                            }}
                                                          >
                                                            <img
                                                              style={{ width: 229 }}
                                                              alt="Google Random Number Generator Confirmed 🌊🌊🌊 : r/Kanye"
                                                              data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmkiEqneS-2j6O1QAEONLDy_gDGBpUU4EB8nU52EMSrA&s"
                                                              src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                                              jscontroller="R3fhkb"
                                                              jsaction="rcuQ6b:npT2md;BUYwVb:QT8fkf;LsLGHf:iSvHDf;DdQV6c:QT8fkf"
                                                              data-atf={12}
                                                              data-frt={0}
                                                            />
                                                          </div>
                                                        </div>
                                                      </g-inner-card>
                                                    </div>
                                                    <div
                                                      jsname="tdeeNb"
                                                      className="BfmEZb"
                                                    />
                                                  </div>
                                                </div>
                                                <div
                                                  jsname="dTDiAc"
                                                  className="eA0Zlc WghbWd FnEtTd JX86yc ivg-i PZPZlf"
                                                  jscontroller="Um3BXb"
                                                  data-sd=""
                                                  jsdata="j0Opre;HFb66nBQTXjalM;AsaunI"
                                                  aria-hidden="true"
                                                  data-attrid="images universal"
                                                  data-docid="HFb66nBQTXjalM"
                                                  data-lpage="https://www.calculatorsoup.com/calculators/statistics/random-number-generator.php"
                                                  data-ni={1}
                                                  data-ref-docid="XMqd58TTvAq49M"
                                                  jsaction="rcuQ6b:npT2md;tuz4af:RrAr1;nptbHe:XEuVS;h5M12e;qWWJ8e:.CLIENT"
                                                  data-hveid="CC4QAA"
                                                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ9AF6BAguEAA"
                                                >
                                                  <div jsname="IOBa3c">
                                                    <div
                                                      jsname="qQjpJ"
                                                      className="XOEbc"
                                                      role="button"
                                                      tabIndex={0}
                                                    >
                                                      <g-inner-card className="xIfh4d wdQNof">
                                                        <div>
                                                          <div
                                                            data-bla=""
                                                            className="uhHOwf BYbUcd"
                                                            style={{
                                                              height: 130,
                                                              width: 130
                                                            }}
                                                          >
                                                            <img
                                                              alt="Random Number Generator"
                                                              data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-G99XTQoWZ1xELivwAcRPh27E6y0CFqnBAgw9WpS5Cg&s"
                                                              src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                                              jscontroller="R3fhkb"
                                                              jsaction="rcuQ6b:npT2md;BUYwVb:QT8fkf;LsLGHf:iSvHDf;DdQV6c:QT8fkf"
                                                              data-atf={12}
                                                              data-frt={0}
                                                            />
                                                          </div>
                                                        </div>
                                                      </g-inner-card>
                                                    </div>
                                                    <div
                                                      jsname="tdeeNb"
                                                      className="BfmEZb"
                                                    />
                                                  </div>
                                                </div>
                                                <div
                                                  jsname="dTDiAc"
                                                  className="eA0Zlc WghbWd FnEtTd JX86yc ivg-i PZPZlf"
                                                  jscontroller="Um3BXb"
                                                  data-sd=""
                                                  jsdata="j0Opre;dpIA3zPAxROBnM;Asaun0"
                                                  aria-hidden="true"
                                                  data-attrid="images universal"
                                                  data-docid="dpIA3zPAxROBnM"
                                                  data-lpage="https://m.youtube.com/watch?v=mNkjP__KiMc"
                                                  data-ni={1}
                                                  data-ref-docid="93-bzgIUl5T4MM"
                                                  jsaction="rcuQ6b:npT2md;tuz4af:RrAr1;nptbHe:XEuVS;h5M12e;qWWJ8e:.CLIENT"
                                                  data-hveid="CE8QAA"
                                                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ9AF6BAhPEAA"
                                                >
                                                  <div jsname="IOBa3c">
                                                    <div
                                                      jsname="qQjpJ"
                                                      className="XOEbc"
                                                      role="button"
                                                      tabIndex={0}
                                                    >
                                                      <g-inner-card className="xIfh4d wdQNof">
                                                        <div>
                                                          <div
                                                            data-bla=""
                                                            className="uhHOwf BYbUcd"
                                                            style={{
                                                              height: 130,
                                                              width: 174
                                                            }}
                                                          >
                                                            <img
                                                              style={{
                                                                marginLeft: "-29px",
                                                                width: 232
                                                              }}
                                                              alt="I Trapped 100 Kids with Google Random Number Generator..."
                                                              data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm3563aKkxloH1nwUQpqosD-HJpwcCSsIF-Gfga9HgDQ&s"
                                                              src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                                              jscontroller="R3fhkb"
                                                              jsaction="rcuQ6b:npT2md;BUYwVb:QT8fkf;LsLGHf:iSvHDf;DdQV6c:QT8fkf"
                                                              data-atf={12}
                                                              data-frt={0}
                                                            />
                                                          </div>
                                                        </div>
                                                        <div className="wr8GYd">
                                                          <div className="GQDPdd">
                                                            <span
                                                              className="S2Caaf kPUX1c seDAFe z1asCe sPPjT"
                                                              style={{
                                                                height: 14,
                                                                lineHeight: 14,
                                                                width: 14
                                                              }}
                                                            >
                                                              <svg
                                                                focusable="false"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                              >
                                                                <path d="M8 5v14l11-7z" />
                                                              </svg>
                                                            </span>
                                                            <span className="CrkfKf">
                                                              Видео
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </g-inner-card>
                                                    </div>
                                                    <div
                                                      jsname="tdeeNb"
                                                      className="BfmEZb"
                                                    />
                                                  </div>
                                                </div>
                                                <div
                                                  jsname="dTDiAc"
                                                  className="eA0Zlc WghbWd FnEtTd JX86yc ivg-i PZPZlf"
                                                  jscontroller="Um3BXb"
                                                  data-sd=""
                                                  jsdata="j0Opre;muI5DpvahcK89M;Asaunk"
                                                  aria-hidden="true"
                                                  data-attrid="images universal"
                                                  data-docid="muI5DpvahcK89M"
                                                  data-lpage="https://www.benlcollins.com/spreadsheets/rand-function/"
                                                  data-ni={1}
                                                  data-ref-docid="96jVk-JHqxpqZM"
                                                  jsaction="rcuQ6b:npT2md;tuz4af:RrAr1;nptbHe:XEuVS;h5M12e;qWWJ8e:.CLIENT"
                                                  data-hveid="CEQQAA"
                                                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ9AF6BAhEEAA"
                                                >
                                                  <div jsname="IOBa3c">
                                                    <div
                                                      jsname="qQjpJ"
                                                      className="XOEbc"
                                                      role="button"
                                                      tabIndex={0}
                                                    >
                                                      <g-inner-card className="xIfh4d wdQNof">
                                                        <div>
                                                          <div
                                                            data-bla=""
                                                            className="uhHOwf BYbUcd"
                                                            style={{
                                                              height: 130,
                                                              width: 174
                                                            }}
                                                          >
                                                            <img
                                                              style={{
                                                                marginLeft: "-70px",
                                                                width: 315
                                                              }}
                                                              alt="How To Create A Random Number Generator In Google Sheets"
                                                              data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY01odBQlZHPiorTg-mLSHuMAjNG8OAwBj5EF5OqvW5g&s"
                                                              src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                                              jscontroller="R3fhkb"
                                                              jsaction="rcuQ6b:npT2md;BUYwVb:QT8fkf;LsLGHf:iSvHDf;DdQV6c:QT8fkf"
                                                              data-atf={12}
                                                              data-frt={0}
                                                            />
                                                          </div>
                                                        </div>
                                                      </g-inner-card>
                                                    </div>
                                                    <div
                                                      jsname="tdeeNb"
                                                      className="BfmEZb"
                                                    />
                                                  </div>
                                                </div>
                                                <div
                                                  jsname="dTDiAc"
                                                  className="eA0Zlc WghbWd FnEtTd JX86yc ivg-i PZPZlf"
                                                  jscontroller="Um3BXb"
                                                  data-sd=""
                                                  jsdata="j0Opre;TTXsYX2_v0JiqM;AsaunU"
                                                  aria-hidden="true"
                                                  data-attrid="images universal"
                                                  data-docid="TTXsYX2_v0JiqM"
                                                  data-lpage="https://www.reddit.com/r/google/comments/786n7z/google_even_has_a_random_number_generator/"
                                                  data-ni={1}
                                                  data-ref-docid="L2grixsIOJEmeM"
                                                  jsaction="rcuQ6b:npT2md;tuz4af:RrAr1;nptbHe:XEuVS;h5M12e;qWWJ8e:.CLIENT"
                                                  data-hveid="CDYQAA"
                                                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ9AF6BAg2EAA"
                                                >
                                                  <div jsname="IOBa3c">
                                                    <div
                                                      jsname="qQjpJ"
                                                      className="XOEbc"
                                                      role="button"
                                                      tabIndex={0}
                                                    >
                                                      <g-inner-card className="xIfh4d wdQNof">
                                                        <div>
                                                          <div
                                                            data-bla=""
                                                            className="uhHOwf BYbUcd"
                                                            style={{
                                                              height: 130,
                                                              width: 174
                                                            }}
                                                          >
                                                            <img
                                                              style={{
                                                                marginLeft: "-52px",
                                                                width: 279
                                                              }}
                                                              alt="Google even has a random number generator. : r/google"
                                                              data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYiok-HhaLKrsV72bOKsicUh0267ac_usT4wI5qrqjfw&s"
                                                              src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                                              jscontroller="R3fhkb"
                                                              jsaction="rcuQ6b:npT2md;BUYwVb:QT8fkf;LsLGHf:iSvHDf;DdQV6c:QT8fkf"
                                                              data-atf={12}
                                                              data-frt={0}
                                                            />
                                                          </div>
                                                        </div>
                                                      </g-inner-card>
                                                    </div>
                                                    <div
                                                      jsname="tdeeNb"
                                                      className="BfmEZb"
                                                    />
                                                  </div>
                                                </div>
                                                <a
                                                  jscontroller="Um3BXb"
                                                  className="ZZGZKb"
                                                  href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=google+random+number+generator&tbm=isch&source=univ&fir=Qs_pHbbKKx83BM%252CW4lJfWLipanUvM%252C_%253BVbajZH3nvuc00M%252C_nCVHY4-eEqcGM%252C_%253BEdgHA_8_VBe88M%252Chjz50wJVTyUznM%252C_%253BxtRLE7Syh4C_9M%252CaZ2Gz53IFlRlzM%252C_%253B_ik9zkAckcgTMM%252Crcaa9Xe2H45eCM%252C_%253BeYUjpM2V7ix4mM%252CiXrQVLFVng53dM%252C_%253BHFb66nBQTXjalM%252CXMqd58TTvAq49M%252C_%253BdpIA3zPAxROBnM%252C93-bzgIUl5T4MM%252C_%253BmuI5DpvahcK89M%252C96jVk-JHqxpqZM%252C_%253BTTXsYX2_v0JiqM%252CL2grixsIOJEmeM%252C_&usg=AI4_-kQ9ldyGFdu7S1nv0ghtJF5K3_kAuw&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ420oAHoECEgQMQ"
                                                  style={{ height: 130 }}
                                                  jsaction="rcuQ6b:npT2md;qWWJ8e:.CLIENT"
                                                >
                                                  <div className="j4hJ8c">
                                                    <g-more-button className="BlGWBd">
                                                      <g-fab
                                                        className="r2fjmd X3BRhe sr9hec OvQkSb a11Pr"
                                                        style={{
                                                          backgroundColor: "#fff",
                                                          color: "#4285f4"
                                                        }}
                                                      >
                                                        <span className="U8v51e S3PB2d">
                                                          <span className="z1asCe">
                                                            <svg
                                                              focusable="false"
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              viewBox="0 0 24 24"
                                                            >
                                                              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                                            </svg>
                                                          </span>
                                                        </span>
                                                      </g-fab>
                                                      <div className="UVSIcb nlNnsd VDgVie wHYlTd RES9jf">
                                                        Показать все
                                                      </div>
                                                    </g-more-button>
                                                  </div>
                                                </a>
                                              </div>
                                            </div>
                                            <div jsname="Y5ANHe">
                                              <g-left-button
                                                jsname="sIJmDf"
                                                className="pQXcHc wgbRNb bCwlI OZ5bRd T9Wh5 tHT0l"
                                                style={{ top: 0, left: "-19px" }}
                                                aria-hidden="true"
                                                jsaction="PfjCMb"
                                                aria-label="Предыдущая"
                                                role="button"
                                              >
                                                <g-fab
                                                  className="sr9hec OvQkSb s3IB3"
                                                  style={{
                                                    backgroundColor: "#fff",
                                                    color: "#70757a"
                                                  }}
                                                >
                                                  <span className="U8v51e S3PB2d z1asCe">
                                                    <svg
                                                      focusable="false"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 24 24"
                                                    >
                                                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                                    </svg>
                                                  </span>
                                                </g-fab>
                                              </g-left-button>
                                            </div>
                                            <div jsname="AK6yne">
                                              <g-right-button
                                                jsname="IHFM4"
                                                style={{ top: 0, right: "-19px" }}
                                                aria-hidden="true"
                                                jsaction="sYPGdb"
                                                className="wgbRNb VdehBf OZ5bRd T9Wh5 tHT0l"
                                                aria-label="Следующая"
                                                role="button"
                                              >
                                                <g-fab
                                                  className="sr9hec OvQkSb s3IB3"
                                                  style={{
                                                    backgroundColor: "#fff",
                                                    color: "#70757a"
                                                  }}
                                                >
                                                  <span className="U8v51e S3PB2d z1asCe">
                                                    <svg
                                                      focusable="false"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 24 24"
                                                    >
                                                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                                    </svg>
                                                  </span>
                                                </g-fab>
                                              </g-right-button>
                                            </div>
                                          </g-scrolling-carousel>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="Fra4pb YB4h9 ky4hfd"
                                    jscontroller="P10Owf"
                                    jsaction="kPzEO:MlP2je;w8f1fc:hRwSgb"
                                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQlokGegQISBA2"
                                  >
                                    <span
                                      className="Job8vb z1asCe wuXmqc"
                                      role="button"
                                      tabIndex={0}
                                      jsaction="kEOk4d"
                                      style={{
                                        height: 20,
                                        lineHeight: 20,
                                        width: 20
                                      }}
                                      data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQmIkGegQISBA3"
                                    >
                                      <svg
                                        focusable="false"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                      </svg>
                                    </span>
                                    <div
                                      className="C85rO"
                                      aria-level={1}
                                      role="heading"
                                    >
                                      Выберите изображение, чтобы добавить отзыв.
                                    </div>
                                  </div>
                                  <div className="EIqaib GTERze">
                                    <div>
                                      <div
                                        className="QjI2jc NnEaBd GTERze a-no-hover-decoration"
                                        jscontroller="gSZvdb"
                                        role="button"
                                        tabIndex={0}
                                        jsdata="vST7rb;_;Asaung"
                                        jsaction="i5KCU"
                                        data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ6scEegQISBA4"
                                      >
                                        <div className="NhRr3b aBOYt">
                                          <span>Отзыв</span>
                                        </div>
                                      </div>
                                    </div>
                                    <g-more-link className="GTERze oYWfcb OSrXXb RB2q5e">
                                      <a
                                        className="CHn7Qb pYouzb"
                                        href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=google+random+number+generator&tbm=isch&source=univ&fir=Qs_pHbbKKx83BM%252CW4lJfWLipanUvM%252C_%253BVbajZH3nvuc00M%252C_nCVHY4-eEqcGM%252C_%253BEdgHA_8_VBe88M%252Chjz50wJVTyUznM%252C_%253BxtRLE7Syh4C_9M%252CaZ2Gz53IFlRlzM%252C_%253B_ik9zkAckcgTMM%252Crcaa9Xe2H45eCM%252C_%253BeYUjpM2V7ix4mM%252CiXrQVLFVng53dM%252C_%253BHFb66nBQTXjalM%252CXMqd58TTvAq49M%252C_%253BdpIA3zPAxROBnM%252C93-bzgIUl5T4MM%252C_%253BmuI5DpvahcK89M%252C96jVk-JHqxpqZM%252C_%253BTTXsYX2_v0JiqM%252CL2grixsIOJEmeM%252C_&usg=AI4_-kQ9ldyGFdu7S1nv0ghtJF5K3_kAuw&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ7Al6BAhIEDo"
                                      >
                                        <hr className="rhHIGd" aria-hidden="true" />
                                        <div
                                          className="S8ee5 CwbYXd wHYlTd"
                                          aria-label="Другие картинки"
                                        >
                                          <span
                                            className="p8VO6e HbX59e"
                                            aria-hidden="true"
                                          >
                                            <span className="z1asCe">
                                              <svg
                                                focusable="false"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                              >
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                              </svg>
                                            </span>
                                          </span>
                                          <span className="Z4Cazf OSrXXb">
                                            Показать все
                                          </span>
                                        </div>
                                      </a>
                                    </g-more-link>
                                  </div>
                                </g-section-with-header>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hlcw0c">
                          <div className="MjjYud">
                            <div
                              jscontroller="SC7lYd"
                              className="g Ww4FFb vt6azd tF2Cxc asEBEc"
                              lang="en"
                              style={{ width: 600 }}
                              jsaction="QyLbLe:OMITjf;ewaord:qsYrDe;xd28Mb:A6j43c"
                              data-hveid="CCQQAA"
                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFSgAegQIJBAA"
                            >
                              <div
                                className="N54PNb BToiNc cvP2Ce"
                                data-snc="ih6Jnb_Yy6wbc"
                              >
                                <div
                                  className="kb0PBd cvP2Ce jGGQ5e"
                                  data-snf="x5WNvb"
                                  data-snhf={0}
                                >
                                  <div className="yuRUbf">
                                    <div>
                                      <span
                                        jscontroller="msmzHf"
                                        jsaction="rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc"
                                      >
                                        <a
                                          jsname="UWckNb"
                                          href="https://pickerwheel.com/tools/random-number-generator/"
                                          jscontroller="M9mgyc"
                                          jsaction="rcuQ6b:npT2md"
                                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECBgQAQ"
                                          ping="/url?sa=t&source=web&rct=j&opi=89978449&url=https://pickerwheel.com/tools/random-number-generator/&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQFnoECBgQAQ&sqi=2"
                                        >
                                          <br />
                                          <h3 className="LC20lb MBeuO DKV0Md">
                                            Number Picker Wheel - Pick Random Number
                                            by Spinning
                                          </h3>
                                          <div className="TbwUpd NJjxre iUh30 ojE3Fb">
                                            <span className="H9lube">
                                              <div
                                                className="eqA2re NjwKYd Vwoesf"
                                                aria-hidden="true"
                                              >
                                                <img
                                                  className="XNo5Ab"
                                                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6IyA/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzU1Njc1LzctNzc3NzcyLzU3Nzc3LTc1NTUtN//AABEIABwAHAMBEQACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAAFBgACBwT/xAAqEAACAgEBBgUFAQAAAAAAAAABAgMEEQAFBhIhMUEHEyIycSNRYYGhFf/EABoBAAIDAQEAAAAAAAAAAAAAAAMFAAEEBgL/xAAmEQACAgEDAwMFAAAAAAAAAAABAgADEgQhMQURUUGBkRMyM2Fx/9oADAMBAAIRAxEAPwDbLVmGpA89hwkaDJJ14ssWtSzHaWB3i2d7vMsBK9T6Zz6nfmf0Omk9/VygLInyZoqozYKTC+zdsQ3X8plMUvZSchvg6Pouq1apsCMW8ef4Zd+kaoZciEtNJliP4j7arbPejWtzGNZA0gHAx4iMDsO2f7pX1JXbFV4lixE+6C93JKW0ast6FblpInMZFWPmpwOoYZPuHT7HWBdELKz9QH27Q9V4DZJ6eYa/z7sUvFHH6kbKtxDt0PXSdtLfVYcRup2O3p7xoNRUy7nmOKklQSMEjprulPcAxIeYn+Je60u8eyYpKKhr9MlokJx5inHEuex5Aj4/OdCvqzXbmCsTIbTNPDxrlDfinSkaxVZzIs9diycWInIDL3weYzpY5ZFPbaDp/KBNthiMjDl6e50PT6drW/UYswUTv09maTUklGjjZ1dkUsvtYjmPjVEA8yS+rkk1JJ//2Q=="
                                                  style={{ height: 18, width: 18 }}
                                                  alt=""
                                                  data-atf={4}
                                                  data-frt={0}
                                                />
                                              </div>
                                            </span>
                                            <div>
                                              <span className="VuuXrf">
                                                Picker Wheel
                                              </span>
                                              <div className="byrV5b">
                                                <cite
                                                  className="qLRx3b tjvcx GvPZzd cHaqb"
                                                  role="text"
                                                >
                                                  https://pickerwheel.com
                                                  <span
                                                    className="dyjrff ob9lvb"
                                                    role="text"
                                                  >
                                                    {" "}
                                                    › tools
                                                  </span>
                                                </cite>
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </span>
                                      <div className="B6fmyf byrV5b Mg1HEd">
                                        <div className="TbwUpd iUh30 ojE3Fb">
                                          <span className="H9lube">
                                            <div
                                              className="eqA2re NjwKYd"
                                              style={{ height: 18, width: 18 }}
                                            />
                                          </span>
                                          <div>
                                            <span className="VuuXrf">
                                              Picker Wheel
                                            </span>
                                            <div className="byrV5b">
                                              <cite
                                                className="qLRx3b tjvcx GvPZzd cHaqb"
                                                role="text"
                                              >
                                                https://pickerwheel.com
                                                <span
                                                  className="dyjrff ob9lvb"
                                                  role="text"
                                                >
                                                  {" "}
                                                  › tools
                                                </span>
                                              </cite>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="csDOgf BCF2pd ezY6nb L48a4c">
                                          <div
                                            jscontroller="exgaYe"
                                            data-bsextraheight={0}
                                            data-isdesktop="true"
                                            data-movewtractions="true"
                                            jsdata="l7Bhpb;_;AsaumM cECq7c;_;Asaumw"
                                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ2esEegQIGBAJ"
                                          >
                                            <div
                                              role="button"
                                              tabIndex={0}
                                              jsaction="RvIhPd"
                                              jsname="I3kE2c"
                                              className="iTPLzd rNSxBe lUn2nc"
                                              style={{ position: "absolute" }}
                                              aria-label="Об этом результате"
                                            >
                                              <span
                                                jsname="czHhOd"
                                                className="D6lY4c mBswFe"
                                              >
                                                <span
                                                  jsname="Bil8Ae"
                                                  className="xTFaxe z1asCe"
                                                  style={{
                                                    height: 18,
                                                    lineHeight: 18,
                                                    width: 18
                                                  }}
                                                >
                                                  <svg
                                                    focusable="false"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                  >
                                                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                                  </svg>
                                                </span>
                                              </span>
                                            </div>
                                            <span
                                              jsname="zOVa8"
                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQh-4GegQIGBAK"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="kb0PBd cvP2Ce"
                                  data-sncf={1}
                                  data-snf="nke7rc"
                                >
                                  <div
                                    className="VwiC3b yXK7lf yDYNvb W8l4ac lyLwlc lEBKkf"
                                    style={{ WebkitLineClamp: 2 }}
                                  >
                                    <span>
                                      Number Picker Wheel is a specialized{" "}
                                      <em>random number generator</em>, rng tool which
                                      picks a <em>random number</em> differently by
                                      spinning a wheel. Free and easy to use.
                                    </span>
                                  </div>
                                </div>
                                <div
                                  className="kb0PBd cvP2Ce"
                                  data-sncf={2}
                                  data-snf="mCCBcf"
                                >
                                  <div className="fG8Fp uo4vr" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="bottomads" />
                <div id="botstuff">
                  <div
                    data-hveid="CAUQAA"
                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQCHoECAUQAA"
                  >
                    <div />
                    <div id="bres">
                      <div className="MjjYud">
                        <div
                          jscontroller="Da4hkd"
                          jsname="bq0EGf"
                          className="cUnQKe RTaUke"
                          data-initq="google random number generator"
                          data-ispaa={1}
                          data-qc="Ch5nb29nbGUgcmFuZG9tIG51bWJlciBnZW5lcmF0b3IQAH0DuQs_"
                          data-rppaabc={1}
                          data-smqc={4}
                          data-ulkwtsb={1}
                          jsdata="Dmybpc;_;Asaul8"
                          jsaction="HUiaHb:mlZWMd;FmigO:OKc46b;rcuQ6b:QyrbTd"
                          data-hveid="CBYQAA"
                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQuU4oAHoECBYQAA"
                        >
                          <div className="Wt5Tfe">
                            <div className="eJH8qe adDDi">
                              <div className="T6zPgb">
                                <div aria-level={2} role="heading">
                                  <span className="mgAbYb OSrXXb RES9jf IFnjPb">
                                    Вопросы по теме
                                  </span>
                                </div>
                              </div>
                              <span className="YR2tRd">
                                <div
                                  jscontroller="exgaYe"
                                  data-bsextraheight={0}
                                  data-isdesktop="true"
                                  jsdata="l7Bhpb;_;AsaumA cECq7c;_;AsaumE"
                                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ2esEegQIFhAC"
                                >
                                  <div jsaction="KyPa0e:RvIhPd;wjOG7e:edHC5b;al5F3e:edHC5b;">
                                    <div
                                      role="button"
                                      tabIndex={0}
                                      jsaction="RvIhPd"
                                      jsname="I3kE2c"
                                      className="iTPLzd rNSxBe lUn2nc eY4mx"
                                      style={{
                                        paddingRight: 5,
                                        position: "absolute"
                                      }}
                                      aria-label="Об этом результате"
                                    >
                                      <span jsname="czHhOd" className="D6lY4c IjabWd">
                                        <span
                                          jsname="Bil8Ae"
                                          className="xTFaxe z1asCe"
                                          style={{
                                            height: 18,
                                            lineHeight: 18,
                                            width: 18
                                          }}
                                        >
                                          <svg
                                            focusable="false"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                          >
                                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                          </svg>
                                        </span>
                                      </span>
                                    </div>
                                    <span
                                      jsname="zOVa8"
                                      data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQh-4GegQIFhAD"
                                    />
                                  </div>
                                  <g-snackbar
                                    jsname="t1F84b"
                                    jscontroller="OZLguc"
                                    style={{ display: "none" }}
                                    jsshadow=""
                                    jsaction="rcuQ6b:npT2md"
                                    id="ow150"
                                    __is_owner="true"
                                  >
                                    <div
                                      jsname="Ng57nc"
                                      className="yK6jqe"
                                      data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ4G96BAgWEAQ"
                                      jsowner="ow150"
                                    >
                                      <div className="b77HKf">
                                        <div className="rIxsve" jsslot="">
                                          <span className="Txngnb wHYlTd yUTMj">
                                            Теперь мы будем показывать больше
                                            информации на английском.
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      jsname="sM5MNb"
                                      aria-live="polite"
                                      className="LH3wG"
                                    />
                                  </g-snackbar>
                                </div>
                              </span>
                            </div>
                            <div jsname="N760b" id="_w4sBZYmTHJ_RwPAPx5aZiAo_39">
                              <div
                                jsname="grQLgb"
                                className="yp"
                                data-async-fc="EosBCkxBTWsybGxMeXd1SDM2ZXkyN2hrUHFpanhBWFRlWXczUTlNeDNkc0UydU50NmNfY0ViOGNVVzRZWVlJM1MwemFSbHBGdk5oMkFhbDJuEhd3NHNCWlltVEhKX1J3UEFQeDVhWmlBbxoiQUxFUzl1TmtmdUpwdVJLTU40VUpSV1IzTTB0NnFnOTJqdw"
                                data-async-fcv={3}
                                data-async-ons={10041}
                                id="fc_1"
                                data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQzOMHKAF6BAgWEAU"
                              />
                              <g-loading-icon
                                jsname="aZ2wEe"
                                className="uKh9yc S3PB2d"
                                style={{ display: "none", height: 24, width: 24 }}
                              >
                                <img
                                  height={24}
                                  src="//www.gstatic.com/ui/v1/activityindicator/loading_24.gif"
                                  width={24}
                                  alt="Загрузка..."
                                  role="progressbar"
                                  data-atf={0}
                                  data-frt={0}
                                />
                              </g-loading-icon>
                            </div>
                            <div
                              className="XVdSCb KFFQ0c xKf9F"
                              style={{ marginTop: 0 }}
                            >
                              <div className="akqY6" />
                              <div className="YfftMc">
                                <div data-async-context="async_id:duf3-44;authority:0;card_id:;entry_point:0;feature_id:;ftoe:0;header:0;is_jobs_spam_form:0;open:0;preselect_answer_index:-1;suggestions:;suggestions_subtypes:;suggestions_types:;surface:0;title:;type:44">
                                  <div
                                    jscontroller="EkevXb"
                                    style={{ display: "none" }}
                                    jsaction="rcuQ6b:npT2md"
                                  />
                                  <div
                                    id="duf3-44"
                                    data-jiis="up"
                                    data-async-type="duffy3"
                                    data-async-context-required="type,open,feature_id,async_id,entry_point,authority,card_id,ftoe,title,header,suggestions,surface,suggestions_types,suggestions_subtypes,preselect_answer_index,is_jobs_spam_form"
                                    className="yp"
                                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ-0F6BAgWEAc"
                                  />
                                  <a
                                    className="oBa0Fe"
                                    href="#"
                                    data-async-trigger="duf3-44"
                                    aria-label="Оставить отзыв об этом результате"
                                    role="button"
                                    jsaction="trigger.szjOR"
                                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQtw96BAgWEAg"
                                  >
                                    Оставить отзыв
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ULSxyf">
                        <div className="MjjYud">
                          <div
                            data-abe=""
                            data-hveid="CDUQAA"
                            data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ26YDegQINRAA"
                          >
                            <div className="oIk2Cb">
                              <div className="kfsfbe adDDi">
                                <div className="T6zPgb">
                                  <div aria-level={2} role="heading">
                                    <span className="mgAbYb OSrXXb RES9jf IFnjPb">
                                      Запросы по теме
                                    </span>
                                  </div>
                                </div>
                                <span className="YR2tRd">
                                  <div
                                    jscontroller="exgaYe"
                                    data-bsextraheight={0}
                                    data-isdesktop="true"
                                    jsdata="l7Bhpb;_;AsaunY cECq7c;_;AsaumE"
                                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ2esEegQINRAC"
                                  >
                                    <div jsaction="KyPa0e:RvIhPd;wjOG7e:edHC5b;al5F3e:edHC5b;">
                                      <div
                                        role="button"
                                        tabIndex={0}
                                        jsaction="RvIhPd"
                                        jsname="I3kE2c"
                                        className="iTPLzd rNSxBe lUn2nc eY4mx"
                                        style={{
                                          paddingRight: 5,
                                          position: "absolute"
                                        }}
                                        aria-label="Об этом результате"
                                      >
                                        <span
                                          jsname="czHhOd"
                                          className="D6lY4c IjabWd"
                                        >
                                          <span
                                            jsname="Bil8Ae"
                                            className="xTFaxe z1asCe"
                                            style={{
                                              height: 18,
                                              lineHeight: 18,
                                              width: 18
                                            }}
                                          >
                                            <svg
                                              focusable="false"
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24 24"
                                            >
                                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                            </svg>
                                          </span>
                                        </span>
                                      </div>
                                      <span
                                        jsname="zOVa8"
                                        data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQh-4GegQINRAD"
                                      />
                                    </div>
                                    <g-snackbar
                                      jsname="t1F84b"
                                      jscontroller="OZLguc"
                                      style={{ display: "none" }}
                                      jsshadow=""
                                      jsaction="rcuQ6b:npT2md"
                                      id="ow153"
                                      __is_owner="true"
                                    >
                                      <div
                                        jsname="Ng57nc"
                                        className="yK6jqe"
                                        data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ4G96BAg1EAQ"
                                        jsowner="ow153"
                                      >
                                        <div className="b77HKf">
                                          <div className="rIxsve" jsslot="">
                                            <span className="Txngnb wHYlTd yUTMj">
                                              Теперь мы будем показывать больше
                                              информации на английском.
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        jsname="sM5MNb"
                                        aria-live="polite"
                                        className="LH3wG"
                                      />
                                    </g-snackbar>
                                  </div>
                                </span>
                              </div>
                              <div className="y6Uyqe">
                                <div className="EIaa9b">
                                  <div className="AJLUJb">
                                    <div data-hveid="CE0QAA">
                                      <a
                                        className="k8XOCe R0xfCb VCOFK s8bAkb"
                                        href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=Random+number+generator+online&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ1QJ6BAhNEAE"
                                      >
                                        <div className="aXBZVd unhzXb" />
                                        <div className="s75CSd u60jwe r2fjmd AB4Wff">
                                          random number generator <b>online</b>
                                        </div>
                                      </a>
                                    </div>
                                    <div data-hveid="CEsQAA">
                                      <a
                                        className="k8XOCe R0xfCb VCOFK s8bAkb"
                                        href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=Random+generator+number&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ1QJ6BAhLEAE"
                                      >
                                        <div className="aXBZVd unhzXb" />
                                        <div className="s75CSd u60jwe r2fjmd AB4Wff">
                                          random generator number
                                        </div>
                                      </a>
                                    </div>
                                    <div data-hveid="CE4QAA">
                                      <a
                                        className="k8XOCe R0xfCb VCOFK s8bAkb"
                                        href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=Random+Number+Generator+Plus&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ1QJ6BAhOEAE"
                                      >
                                        <div className="aXBZVd unhzXb" />
                                        <div className="s75CSd u60jwe r2fjmd AB4Wff">
                                          random number generator <b>plus</b>
                                        </div>
                                      </a>
                                    </div>
                                    <div data-hveid="CEwQAA">
                                      <a
                                        className="k8XOCe R0xfCb VCOFK s8bAkb"
                                        href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=Google+random+Generator&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ1QJ6BAhMEAE"
                                      >
                                        <div className="aXBZVd unhzXb" />
                                        <div className="s75CSd u60jwe r2fjmd AB4Wff">
                                          google random generator
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="AJLUJb">
                                    <div data-hveid="CEYQAA">
                                      <a
                                        className="k8XOCe R0xfCb VCOFK s8bAkb"
                                        href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=Generator+number+lottery&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ1QJ6BAhGEAE"
                                      >
                                        <div className="aXBZVd unhzXb" />
                                        <div className="s75CSd u60jwe r2fjmd AB4Wff">
                                          generator number <b>lottery</b>
                                        </div>
                                      </a>
                                    </div>
                                    <div data-hveid="CEMQAA">
                                      <a
                                        className="k8XOCe R0xfCb VCOFK s8bAkb"
                                        href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=Random+programmasi&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ1QJ6BAhDEAE"
                                      >
                                        <div className="aXBZVd unhzXb" />
                                        <div className="s75CSd u60jwe r2fjmd AB4Wff">
                                          random <b>programmasi</b>
                                        </div>
                                      </a>
                                    </div>
                                    <div data-hveid="CD8QAA">
                                      <a
                                        className="k8XOCe R0xfCb VCOFK s8bAkb"
                                        href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=Random+number+generator+C%2B%2B&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ1QJ6BAg_EAE"
                                      >
                                        <div className="aXBZVd unhzXb" />
                                        <div className="s75CSd u60jwe r2fjmd AB4Wff">
                                          random number generator <b>c++</b>
                                        </div>
                                      </a>
                                    </div>
                                    <div data-hveid="CD4QAA">
                                      <a
                                        className="k8XOCe R0xfCb VCOFK s8bAkb"
                                        href="/search?sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&q=Generator+random&sa=X&sqi=2&ved=2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ1QJ6BAg-EAE"
                                      >
                                        <div className="aXBZVd unhzXb" />
                                        <div className="s75CSd u60jwe r2fjmd AB4Wff">
                                          generator random
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      jscontroller="ogmBcd"
                      jsname="BRTknd"
                      jsmodel="oWVrne"
                      className="sdjuGf"
                      jsdata="A7MAsf;_;AsaulI"
                      jsaction="rcuQ6b:npT2md;Jl3rxb:VimORe;BqPbQ:p5vRo;Kf5VV:CYKeQe;lQkSke:fj32se;aLHH2d:XV6jYd;LYjNec:cyaZJ;QEvNdb:teMyNc;K6ldnc:vK2xWc;xHsTDe:PoQGh"
                    >
                      <div
                        jscontroller="Gg40M"
                        jsaction="rcuQ6b:npT2md;yFBEId:dNTL7c;AnqxQb:dNTL7c;aLHH2d:yTpwFc"
                      >
                        <div jsname="TCyEnb" aria-owns="rhs" />
                        <div jsname="nZDdGd" tabIndex={0} />
                      </div>
                      <div
                        jsname="sgxt2d"
                        data-graft-type="insert"
                        id="arc-srp_1"
                        data-jiis="up"
                        data-async-type="arc"
                        data-async-context-required="arc_id,q"
                        className="yp"
                        data-async-rclass="search"
                        data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQxK8CegQIBRAC"
                      />
                      <div jsname="GDPwke" className="WtZO4e" />
                      <div
                        className="WZH4jc w7LJsc"
                        jscontroller="bpec7b"
                        data-dt={1}
                        jsaction="AnqxQb:eFvKib;q8sV4d:eFvKib;Rlvoif:eFvKib;yFBEId:eFvKib"
                      >
                        <div
                          jsname="b6rISd"
                          className="QjmzCd"
                          style={{ display: "none" }}
                          role="progressbar"
                          aria-label="Загрузка..."
                          aria-live="polite"
                          data-hveid="CAUQAw"
                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ66oDegQIBRAD"
                          aria-hidden="false"
                        >
                          <div
                            style={{
                              height: 36,
                              width: 36,
                              display: "inline-block",
                              animation:
                                "1568.63ms linear 0s infinite normal none running mspin-rotate",
                              overflow: "hidden"
                            }}
                          >
                            <div
                              style={{
                                animation:
                                  "5332ms steps(4) 0s infinite normal none running mspin-revrot",
                                transformOrigin: "18px 18px"
                              }}
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  animation:
                                    "5332ms steps(324) 0s infinite normal none running mspin",
                                  backgroundImage:
                                    'url("//www.gstatic.com/ui/v2/activityindicator/mspin_googcolor_medium.svg")',
                                  backgroundSize: "100%",
                                  height: 36,
                                  width: 11664
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <h1
                          className="bNg8Rb OhScic zsYMMe BBwThe"
                          style={{
                            clip: "rect(1px,1px,1px,1px)",
                            height: 1,
                            overflow: "hidden",
                            position: "absolute",
                            whiteSpace: "nowrap",
                            width: 1,
                            zIndex: -1000,
                            WebkitUserSelect: "none"
                          }}
                        >
                          Page Navigation
                        </h1>
                        <a
                          className="T7sFge sW9g3e VknLRd"
                          href="/search?q=google+random+number+generator&sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&sxsrf=AB5stBh7tWH2ZreSL2CeVm8bpZYbhjw8ig:1694600131468&ei=w4sBZYmTHJ_RwPAPx5aZiAo&sqi=2&start=10&sa=N"
                          style={{ transform: "scale(1)" }}
                          jsname="oHxHid"
                          jsaction="qBEZuc"
                          aria-label="Ещё результаты"
                          data-ve-view=""
                          role="button"
                          data-hveid="CAUQBA"
                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQqq4CegQIBRAE"
                          aria-hidden="false"
                        >
                          <hr className="KXbwLb" aria-hidden="true" />
                          <h3 aria-hidden="true">
                            <div className="GNJvt ipz2Oe">
                              <span className="kQdGHd">
                                <span className="OTvAmd z1asCe QFl0Ff">
                                  <svg
                                    focusable="false"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                                  </svg>
                                </span>
                              </span>
                              <span className="RVQdVd">Ещё результаты</span>
                            </div>
                          </h3>
                        </a>
                        <a
                          jsname="a79Lwf"
                          jsaction="nF6QQd"
                          className="VknLRd"
                          style={{ display: "none" }}
                          aria-live="polite"
                          role="button"
                          tabIndex={0}
                          data-hveid="CAUQBQ"
                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQvvYCegQIBRAF"
                          aria-hidden="false"
                        >
                          <hr className="KXbwLb" aria-hidden="true" />
                          <h3>
                            <span className="GNJvt">Повторить</span>
                          </h3>
                        </a>
                      </div>
                      <a
                        jsname="EvDH1d"
                        style={{ display: "none" }}
                        data-hveid="CAUQBg"
                        data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ_skCegQIBRAG"
                      />
                    </div>
                    <div>
                      <div
                        className="fp-nh save-components-async yp"
                        data-api="AIzaSyBs-GJEDqBAn0NiEv03nkWgCUTr2vlaVl0"
                        data-jiis="up"
                        data-async-type="svcps"
                        id="gws-plugins-collections-tray__save-components-async"
                        data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQnbUCKAF6BAgFEAc"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-hveid="CAIQFw"
                  data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQh6kJegQIAhAX"
                />
                <div
                  jscontroller="GU4Gab"
                  style={{ display: "none" }}
                  data-pcs={1}
                  jsaction="rcuQ6b:npT2md"
                />
                <div role="navigation">
                  <span id="xjs" />
                  <div id="gfn" />
                  <span id="fvf" />
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html: ".Tg0csd{bottom:0;left:0;position:fixed;right:0;z-index:129}"
              }}
            />
            <div className="Tg0csd">
              <div
                jscontroller="tboZfc"
                jsdata="C4mkuf;_;Asauk0"
                jsaction="rcuQ6b:npT2md"
                data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQuqMJegQIARAA"
              />
            </div>{" "}
            <div
              jscontroller="T5VV"
              data-essb={1}
              data-ssc={4}
              jsaction="rcuQ6b:npT2md"
            />{" "}
            <div jscontroller="aDVF7" data-lel="U" jsaction="rcuQ6b:npT2md" />{" "}
            <div
              jscontroller="rhYw1b"
              data-dmd=""
              data-dvt="d"
              jsaction="rcuQ6b:npT2md"
            />{" "}
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "@-webkit-keyframes allow-alert {from{opacity:1}to{opacity:.35}}.TCIIWe{padding-top:12px}"
              }}
            />
            <div id="bfoot">
              <span style={{ display: "none" }}>
                <span
                  jscontroller="DhPYme"
                  style={{ display: "none" }}
                  data-mmcnt={100}
                  jsaction="rcuQ6b:npT2md"
                  data-ei="w4sBZYmTHJ_RwPAPx5aZiAo"
                />
              </span>
            </div>
            <div className="spch" style={{ display: "none" }} id="spch">
              <button className="close-button" id="spchx" aria-label="закрыть">
                ×
              </button>
              <div className="spchc" id="spchc">
                <div className="inner-container">
                  <div className="button-container">
                    <span className="r8s4j" id="spchl" />
                    <span className="LgbsSe" id="spchb">
                      <div className="microphone">
                        <span className="receiver" />
                        <div className="wrapper">
                          <span className="stem" />
                          <span className="shell" />
                        </div>
                      </div>
                    </span>
                  </div>
                  <div className="text-container">
                    <span className="spcht" style={{ color: "#70757a" }} id="spchi" />
                    <span className="spcht" style={{ color: "#000" }} id="spchf" />
                  </div>
                  <div className="google-logo" />
                </div>
                <div className="permission-bar">
                  <div className="permission-bar-gradient" />
                </div>
              </div>
            </div>
            <div
              jscontroller="YFicMc"
              style={{ display: "none" }}
              jsaction="L6fTBf:SMCzH"
              id="sfooter"
              role="contentinfo"
              data-hveid="CAYQAA"
              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQpyp6BAgGEAA"
            >
              <h1
                className="bNg8Rb OhScic zsYMMe BBwThe"
                style={{
                  clip: "rect(1px,1px,1px,1px)",
                  height: 1,
                  overflow: "hidden",
                  position: "absolute",
                  whiteSpace: "nowrap",
                  width: 1,
                  zIndex: -1000,
                  WebkitUserSelect: "none"
                }}
              >
                Ссылки в нижнем колонтитуле
              </h1>
              <div id="footcnt">
                <div className="TCIIWe" style={{ height: 106 }} id="fbarcnt">
                  <div className="f6F9Be TrMVnc" id="fbar">
                    <div
                      jscontroller="a6Sgfb"
                      jsmodel="J9Q59e"
                      jsdata="YzXGMb;_;AsaulE"
                      jsaction="rcuQ6b:npT2md"
                    />
                    <div className="fbar b2hzT">
                      <div className="b0KoTc B4GxFc">
                        <span className="Q8LRLc">Узбекистан</span>
                        <div className="fbar smiUbb" id="swml">
                          <div
                            jscontroller="qcH9Lc"
                            jsdata="z6bOeb;_;AsaulM"
                            jsaction="oEnJg:CEnhyd;gJk92:b6DXXd"
                          >
                            <div
                              className="rwA8ec HDOrGf GNm3Qb"
                              style={{ whiteSpace: "normal" }}
                            >
                              <a
                                jsname="gXWYVe"
                                href="#"
                                style={{ whiteSpace: "normal" }}
                                data-biw={1440}
                                jsaction="click:HTIlC"
                                role="button"
                                tabIndex={0}
                                data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQuZ0HegQIBhAC"
                              >
                                <div className="GNm3Qb">
                                  <span className="EYqSq unknown_loc" />
                                  <span className="dfB0uf">
                                    Мирзо-Улугбекский район, Ташкент
                                  </span>
                                </div>
                                <div className="GNm3Qb">
                                  <span id="VdZal">&nbsp;-&nbsp;</span>
                                  <span className="KwU3F">
                                    <span>На основе ваших предыдущих действий</span>
                                  </span>
                                </div>
                              </a>
                              <span id="tsuid_11">
                                <g-dialog
                                  jsname="BDbGbf"
                                  jscontroller="VEbNoe"
                                  data-id="_w4sBZYmTHJ_RwPAPx5aZiAo_13"
                                  jsaction="jxvro:Imgh9b"
                                  jsdata="gctHtc;_;AsaulQ"
                                  jsshadow=""
                                >
                                  <div
                                    jsname="XKSfm"
                                    id="_w4sBZYmTHJ_RwPAPx5aZiAo_13"
                                    jsaction="dBhwS:TvD9Pc;mLt3mc"
                                  >
                                    <div jsname="bF1uUb" className="kJFf0c KUf18" />
                                    <div
                                      className="mcPPZ yMNJR nP0TDe xg7rAe"
                                      jsaction="trigger.dBhwS"
                                    >
                                      <div
                                        className="LjfRsf"
                                        aria-hidden="true"
                                        role="button"
                                        tabIndex={0}
                                        jsaction="focus:sT2f3e"
                                      />
                                      <span jsslot="" jsaction="mLt3mc">
                                        <div
                                          className="qk7LXc TUOsUe Fb1AKc OosGzb"
                                          aria-labelledby="lQ3q8c"
                                          role="dialog"
                                        >
                                          <div
                                            jsname="C8RmQc"
                                            id="C8RmQc"
                                            data-jiis="up"
                                            data-async-type="lbsc"
                                            className="yp"
                                          />
                                        </div>
                                      </span>
                                      <div
                                        className="LjfRsf"
                                        aria-hidden="true"
                                        role="button"
                                        tabIndex={0}
                                        jsaction="focus:tuePCd"
                                      />
                                    </div>
                                  </div>
                                </g-dialog>
                              </span>
                            </div>
                            <span id="RYW0de">&nbsp;-&nbsp;</span>
                            <update-location
                              className="xSQxL HDOrGf"
                              jscontroller="KgxeNb"
                              role="button"
                              tabIndex={0}
                              jsaction="click:T1dibd;gfszqc:b4F0De;"
                              jsdata="ITZAN;_;AsaulU"
                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQpLkCegQIBhAE"
                            >
                              Обновить
                              <span id="tsuid_14">
                                <location-snackbar-with-learn-more
                                  jsname="nw18gf"
                                  jscontroller="khkNpe"
                                  jsaction="sFrcje:No7Jhf"
                                >
                                  <span id="tsuid_16">
                                    <g-snackbar
                                      jsname="Ng57nc"
                                      jscontroller="OZLguc"
                                      style={{ display: "none" }}
                                      data-dismiss=""
                                      jsshadow=""
                                      jsaction="rcuQ6b:npT2md"
                                      id="ow233"
                                      __is_owner="true"
                                    >
                                      <div
                                        jsname="Ng57nc"
                                        className="yK6jqe"
                                        data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ4G96BAgGEAU"
                                        jsowner="ow233"
                                      >
                                        <div className="b77HKf">
                                          <div className="rIxsve" jsslot="">
                                            <span className="Txngnb wHYlTd yUTMj">
                                              Не удалось обновить данные о вашем
                                              местоположении.
                                            </span>
                                            <g-snackbar-action
                                              className="sHFNYd zJUuqf AB4Wff Z7swgb"
                                              jsname="zrfavf"
                                              jscontroller="xRxDld"
                                              jsaction="GtUzrb"
                                              data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQhbkIegQIBhAH"
                                            >
                                              <g-flat-button
                                                className="U8shWc r2fjmd hObAcc gTewb VDgVie hpZDWd fSXIc"
                                                style={{ color: "#4285f4" }}
                                                role="button"
                                                tabIndex={0}
                                              >
                                                <span className="Omzzbd">
                                                  Подробнее…
                                                </span>
                                              </g-flat-button>
                                            </g-snackbar-action>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        jsname="sM5MNb"
                                        aria-live="polite"
                                        className="LH3wG"
                                        style={{ zIndex: 2000 }}
                                      />
                                    </g-snackbar>
                                  </span>
                                </location-snackbar-with-learn-more>
                              </span>
                              <span id="tsuid_18">
                                <g-snackbar
                                  jsname="M8d6me"
                                  jscontroller="OZLguc"
                                  style={{ display: "none" }}
                                  jsshadow=""
                                  jsaction="rcuQ6b:npT2md"
                                  id="ow235"
                                  __is_owner="true"
                                >
                                  <div
                                    jsname="Ng57nc"
                                    className="yK6jqe"
                                    data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQ4G96BAgGEAk"
                                    jsowner="ow235"
                                  >
                                    <div className="b77HKf">
                                      <div className="rIxsve" jsslot="">
                                        <span className="Txngnb wHYlTd yUTMj">
                                          Обновление данных о местоположении…
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    jsname="sM5MNb"
                                    aria-live="polite"
                                    className="LH3wG"
                                    style={{ zIndex: 2000 }}
                                  />
                                </g-snackbar>
                              </span>
                            </update-location>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div jscontroller="EfPGub" className="RLQCVb">
                      <span className="B4GxFc wHYlTd z8gr9e">
                        Другие параметры вы найдете в{" "}
                        <a
                          jsname="hgPHmf"
                          className="GS5rRd"
                          role="button"
                          tabIndex={0}
                          jsaction="em3SNd"
                          data-ved="2ahUKEwjJgP22raeBAxWfKBAIHUdLBqEQw6sKegQIBhAK"
                        >
                          быстрых настройках (
                          <span
                            className="SLbK8e z1asCe E9hVAb"
                            style={{ height: 16, lineHeight: 16, width: 16 }}
                          >
                            <svg
                              focusable="false"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z" />
                              <circle cx={12} cy={12} r="3.5" />
                            </svg>
                          </span>
                          )
                        </a>
                        .
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* cctlcm 0 cctlcm */}
        <div id="_w4sBZYmTHJ_RwPAPx5aZiAo_59">
          <div>
            <div />
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".RTZ84b{color:#70757a;cursor:pointer;padding-right:8px}.c2xzTb .RTZ84b{padding-top:1px;padding-right:4px}.XEKxtf{color:#70757a;float:right;font-size:12px;line-height:16px;padding-bottom:4px}.CvDJxb.minidiv{margin-top:0}#gb{min-width:unset;position:relative}.minidiv #gb{top:2px}#gba{display:none}.Q3DXx #gb>div{padding-left:0}.minidiv .RNNXgb{min-height:32px;border-radius:16px;background:#fff;margin:10px 0 0;box-shadow:none;border:1px solid #dfe1e5}.emcav.emcat .RNNXgb{border-bottom-left-radius:24px;border-bottom-right-radius:24px}.minidiv .emcav.emcat .RNNXgb{border-bottom-left-radius:16px;border-bottom-right-radius:16px}.minidiv .SDkEP{padding-top:0}.FgNLaf{display:none}.minidiv .logo{padding:0 32px}.emcav.A8SBwf.h3L8Ub{z-index:989}.minidiv .iblpc{margin-top:0;height:32px}.CKb9sd{background:none;display:flex;flex:0 0 auto}.minidiv .jfN4p{height:28px;width:86px}.sbfc textarea.gLFyf{white-space:pre-line;overflow-y:auto}.minidiv .gLFyf{padding:0;line-height:22px;margin-bottom:0}.minidiv .a4bIc{margin-top:5px}.gLFyf.CJxXMe{margin-top:0}.VZUv6d{font-size:11px;font-weight:bold;white-space:nowrap;color:#fff;line-height:29px;padding:0 10px}.minidiv .dRYYxd{margin-top:0;height:32px}.minidiv .vOY7J{line-height:32px}.minidiv .ExCKkf{width:20px}.minidiv .XDyW0e{line-height:32px}.minidiv .goxjub{width:20px;height:20px}.minidiv .nDcEnd{line-height:32px}.minidiv .Gdd5U{width:20px;height:20px}.minidiv .Tg7LZd{height:32px;line-height:32px}.minidiv .Tg7LZd .zgAlFc{height:20px;width:20px}.minidiv .Tg7LZd svg{height:20px;width:20px}.h3L8Ub .rLrQHf{padding-bottom:16px}.h3L8Ub .rLrQHf{min-width:47%;width:47%;margin:8px 16px 0}.S3nFnd{display:flex}.lh87ke:link,.lh87ke:visited{color:#1a0dab;cursor:pointer;font:11px arial,sans-serif;padding:0 5px;text-decoration:none;flex:auto;align-self:flex-end;margin:0 16px 5px 0}.lh87ke:hover{text-decoration:underline}.sb27{background:url(/images/searchbox/desktop_searchbox_sprites318_hr.webp) no-repeat 0 -21px;background-size:20px;min-height:20px;min-width:20px;height:20px;width:20px}.sb43{background:url(/images/searchbox/desktop_searchbox_sprites318_hr.webp) no-repeat 0 0;background-size:20px;min-height:20px;min-width:20px;height:20px;width:20px}.sb53.sb53{padding:0 4px;margin:0}.sb33{background:url(/images/searchbox/desktop_searchbox_sprites318_hr.webp) no-repeat 0 -42px;background-size:20px;height:20px;width:20px;}.Ye4jfc{flex-direction:row;flex-wrap:wrap}.sbic.vYOkbe{background:center/contain no-repeat;border-radius:4px;min-height:32px;min-width:32px;margin:4px 7px 4px -5px;}.sbre .wM6W7d{line-height:18px}.minidiv .wM6W7d{font-size:14px}.WggQGd{color:#52188c}.h3L8Ub .yMAEcf{border-radius:100px;box-sizing:border-box;display:flex;min-height:40px;margin:4px 0 4px 16px;width:396px}@media (forced-colors:none){.h3L8Ub .yMAEcf{background:#f8f9fa}}.h3L8Ub .yMAEcf{width:fit-content}.minidiv .h3L8Ub .yMAEcf .wM6W7d{font-size:16px}@media (forced-colors:none){.h3L8Ub .yMAEcf.sbhl{background:#e8eaed}}.sbhl{border-radius:4px;background:#f8f9fa;}@media (forced-colors:active){.sbhl{background-color:highlight}}.mus_pc{display:block;margin:6px 0}.mus_il{font-family:Arial,Helvetica Neue Light,Helvetica Neue,Helvetica;padding-top:7px;position:relative}.mus_il:first-child{padding-top:0}.mus_il_at{margin-left:10px}.mus_il_st{right:52px;position:absolute}.mus_il_i{align:left;margin-right:10px}.mus_it3{margin-bottom:3px;max-height:24px;vertical-align:bottom}.mus_it5{height:24px;width:24px;vertical-align:bottom;margin-left:10px;margin-right:10px;transform:rotate(90deg)}.mus_tt3{color:#767676;font-size:12px;vertical-align:top}.mus_tt5{color:#d93025;font-size:14px}.mus_tt6{color:#188038;font-size:14px}.mus_tt8{font-size:16px;font-family:Arial,sans-serif}.mus_tt17{color:#212121;font-size:20px}.mus_tt18{color:#212121;font-size:28px}.mus_tt19{color:#767676;font-size:12px}.mus_tt20{color:#767676;font-size:14px}.mus_tt23{color:#767676;font-size:18px}.DJbVFb .TfeWfb{display:flex;flex-wrap:wrap;overflow-x:hidden;width:100%;height:52px}.DJbVFb .AQZ9Vd{display:none}.DJbVFb .xAmryf{border-radius:100px;background-color:#fff}.DJbVFb .TfeWfb{padding-left:10px;display:inherit}.DJbVFb .xAmryf .eL7oAc{display:none}.DJbVFb{background:#f8f9fa;border-radius:20px}.DJbVFb:hover{background:#e8eaed}.DJbVFb .vYOkbe{height:200px;width:200px;flex-shrink:0;margin:20px 0 20px 8px;float:right;border-radius:16px;background-color:#fff}.DJbVFb.sbhl{background:#e8eaed}.DJbVFb .ClJ9Yb{display:none}.DJbVFb .wM6W7d{flex:initial}.DJbVFb .wM6W7d span{text-overflow:ellipsis;-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2;overflow:hidden}.DJbVFb .eIPGRd{display:flex;flex-direction:row-reverse;align-items:stretch;margin:0 20px 0 14px}.DJbVFb.ytLedb .vYOkbe{background-color:#f8f9fa}.DJbVFb .kzCE2{font-size:16px}.DJbVFb .pcTkSc{margin:20px 6px;padding:0}.DJbVFb .vYOkbe{margin:20px 0 20px 18px;background-color:#fff;border-radius:20px}.DJbVFb .EOLKOc{width:calc(50% - 1px)}.DJbVFb .EOLKOc:first-child{border-bottom-left-radius:20px}.DJbVFb .EOLKOc:last-child{border-bottom-right-radius:20px}.DJbVFb .AZNDm{border-top-right-radius:20px;border-top-left-radius:20px}.DJbVFb .a5RLac.kzCE2 span{-webkit-line-clamp:3}.DJbVFb .lnnVSe{margin-bottom:auto}.DJbVFb .a5RLac span{text-overflow:ellipsis;-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2;overflow:hidden;margin-right:10px}.xAmryf .eL7oAc{fill:#4d5156;padding-top:1px}.xAmryf.LvqzR{background-color:#e8f0fe;cursor:pointer;color:#1a73e8}.xAmryf.LvqzR .eL7oAc{fill:#1a73e8}.Hulzgf{}.uhebGb{font-style:italic}.sOmPcf .ZFiwCf{background-color:#D8D7DC}.U48fD.df13ud{margin-top:16px}.U48fD.TOQyFc{margin-top:0}.U48fD.p8FEIf{padding-bottom:0}.jRKCUd::before{bottom:12px;content:'';left:16px;position:absolute;right:16px;top:-4px}a.jRKCUd:hover{text-decoration:none}.TQc1id .ZFiwCf{width:unset}.nCFUpc .ZFiwCf{width:100%}.TQc1id .Bi9oQd{display:none}.kC8B4e .Bi9oQd{display:none}.JCHpcb:hover,.LvqzR .JCHpcb{color:#1558d6;text-decoration:underline}.JCHpcb{color:#70757a;font:13px arial,sans-serif;cursor:pointer;align-self:center}.s2Wjec{display:block}.Q82Okf{font-size:16px;font-family:Arial,sans-serif}.DJbVFb,.o6OF0{background:#f8f9fa;border-radius:20px}.o6OF0:hover,.o6OF0.LvqzR{background:#e7e8e9}.o6OF0 .eIPGRd{display:block}@media (forced-colors:none){.o6OF0.sbhl{background:#e7e8e9}}@media (forced-colors:active){.o6OF0.sbhl{background-color:highlight}}.o6OF0 .AQZ9Vd{display:none}.o6OF0 .sbic{display:none}.o6OF0 .pcTkSc{display:none}.o6OF0 .wM6W7d{display:none}.o6OF0 .eIPGRd{max-width:100%;margin:0}.az9Ajc{padding_top:0px}.o6OF0 .SHFPkb.ZJ594e{padding-right:58px}.z76Rnb.LvqzR{color:#202124;background-color:#D8D7DC}.o6OF0 .TfeWfb{display:flex;gap:6px;height:42px;flex-wrap:wrap;overflow:hidden;padding:0;margin-top:16px}.xAmryf.LvqzR{color:#202124;background-color:#D8D7DC}.cRV9hb .pcTkSc .ClJ9Yb.ENMKxf span{-webkit-line-clamp:1}.aVbWac .sbic.vYOkbe{height:90px;width:90px;border-radius:12px;margin:0}.YpcDnf.HG1dvd{padding:0}.HG1dvd>*{padding:0 16px}.WtV5nd .YpcDnf{padding-left:28px}.Zt0a5e .YpcDnf{line-height:48px}.LGiluc{border-top:1px solid;height:0;margin:5px 0}.Zt0a5e.CB8nDe{background:no-repeat left 8px center;background-image:url(//ssl.gstatic.com/images/icons/material/system/1x/done_black_16dp.png)}.GZnQqe.CB8nDe{background:no-repeat left center;background-image:url(//ssl.gstatic.com/ui/v1/menu/checkmark2.png)}.GZnQqe.LGiluc{border-top-color:#dadce0;}.fLciMb{border-radius:50%;color:#5f6368;cursor:pointer;height:24px;margin-top:4px;padding:8px;width:24px}.minidiv .fLciMb{margin-top:6px}.fLciMb:hover{background-color:rgba(218,220,224,.5);text-decoration:none}.ZOyvub{visibility:hidden;position:absolute;top:50px;padding:5px 6px;background-color:#55524d;color:#f8f9fa;border-radius:4px;font-size:12px;letter-spacing:1px;left:50%;transform:translateX(-50%);width:max-content}#gb{height:0;padding-left:16px;padding-right:16px}.hdtb-ab-o .LHJvCe{opacity:0;top:13px}.SknMB,.SknMB:visited{align-items:center;color:#1a73e8;display:flex;height:40px}.ZI7elf{cursor:pointer;color:#4d5156}.q0yked{color:#4d5156;font-family:arial,sans-serif;margin:0 -24px}.q0yked:hover{background-color:#f1f3f4}.q0yked a{align-items:center;display:flex;text-decoration:none;justify-content:space-between;padding:12px 24px}.tkWDZc{font-family:arial,sans-serif;font-size:12px;font-weight:400;line-height:16px}.CbAZb{background:#fff;border-bottom:1px solid #dadce0;bottom:0;overflow-y:auto;position:fixed;right:-360px;top:0;width:360px;font-family:Google Sans,arial,sans-serif;}.AeB7Sc{background:rgba(32, 33, 36, .6);bottom:0;display:none;left:0;overflow:hidden;position:fixed;right:0;top:0;z-index:9000}.S8wJ3{color:#202124;font-family:Google Sans,arial,sans-serif;font-size:28px;margin-bottom:20px;text-align:left}.tGS0Nc{border:1px solid #dadce0;border-radius:8px;display:block;font-size:16px;padding:10px;text-align:center}a.tGS0Nc,a:visited.tGS0Nc{color:#1a73e8;text-decoration:none}a.tGS0Nc:hover{background-color:rgba(26, 115, 232, .08);color:#1967d2}.bepeF{color:#5f6368;cursor:pointer;display:block;float:right;position:relative;top:-50px}.m0uvVb{font-size:16px;border-top:1px solid #dadce0;padding:4px 24px 10px}.kQEH5b{float:right;cursor:pointer}.cQ2awd{padding:20px 24px}.kwWBYc{color:#202124;font-family:arial,sans-serif;font-size:20px;font-weight:normal;margin-bottom:8px}.S4xgid{cursor:pointer;padding:12px 24px}.uWNHce{color:#4d5156;display:inline-block;margin-left:-16px;margin-bottom:-16px;font-family:arial,sans-serif;width:328px}.UCGAnb{flex:1}.LZTko:hover{background:#f1f3f4;box-shadow:-56px 0 #f1f3f4,24px 0 #f1f3f4,-56px -10px 0 #f1f3f4,24px -10px 0 #f1f3f4;cursor:pointer}.q0yked .z1asCe{color:#4d5156}.UCAEse{height:30px;margin-bottom:5px;margin-top:-5px}.ogD9ue{align-items:center;display:flex}.rhJQGd{color:#70757a;margin-right:6px}.W3aG6d{align-items:center;display:flex;min-height:48px;margin:0 -24px}.aoMqnc{animation:loading-pulse 1.25s ease-out 0s infinite alternate;background:#f1f3f4;border-radius:4px;height:24px;margin:0 24px;opacity:0.2;width:100%}.aztjNb{color:#202124;font-size:11px;font-weight:700;letter-spacing:0.3px;line-height:16px;text-transform:uppercase}.dVmoif{display:flex}.RVVZab{background-color:#4285f4;border-radius:4px;color:#fff;height:14px;margin-right:8px;padding:4px}.fmxhfc{color:#4d5156;font-family:arial,sans-serif}.Z48xed{color:#1a73e8;font-size:12px;margin-top:4px}.XRZSle{display:flex;flex-direction:column}.dluk7e{margin-left:48px}.GZcH3e{display:block}.de2Dud{max-width:100%;position:relative}.de2Dud:focus{outline:none}.KNNyg{display:inline-block}.dsLpHe{border:solid 2px;border-color:#70757a;height:12px;left:16px;position:absolute;transition:border-color 0.2s;top:16px;width:12px}.kaAgDc{height:8px;left:20px;position:absolute;top:20px;width:8px;transform:scale(0);transition:transform 0.2s}.RvdoFd .kaAgDc{transform:scale(1)}.wT0tpe{height:48px;opacity:0;position:absolute;transition:opacity 0.2s;width:48px;cursor:pointer}.r0zAxe .wT0tpe{opacity:.26}.qwkefd .wT0tpe{opacity:0}.Tro82c .RvdoFd .kaAgDc{background-color:rgba(0,0,0,.26)}.Tro82c .dsLpHe{border-color:rgba(0,0,0,.26)}.Tro82c{pointer-events:none}.j0iFNe .RvdoFd .dsLpHe{border-color:#4285f4}.j0iFNe .kaAgDc,.j0iFNe .RvdoFd .wT0tpe,.j0iFNe .r0zAxe .wT0tpe{background-color:#4285f4}.H8eL7d .dluk7e{padding-bottom:15px;padding-top:15px}.H8eL7d .GZcH3e{font-size:16px;line-height:18px}.H8eL7d .de2Dud:not(:last-child){margin-bottom:-16px}.muaC1e{overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none}.muaC1e::-webkit-scrollbar{display:none}.eTnfyc{text-align:right;width:calc(var(--center-abs-margin) + var(--center-width) + var(--rhs-margin) + var(--rhs-width));}.Lj8KXd .QBbvme{margin-top:44px}.yyoM4d{top:42px;padding-top:3px;padding-bottom:7px;top:0;top:7px;}.hdtb-mn-hd{color:#70757a;display:inline-block;position:relative;padding-top:0;padding-bottom:0;padding-right:18px;padding-left:12px;line-height:22px;cursor:pointer}.Lj8KXd .hdtb-mn-hd{padding:0 12px;margin-right:6px}.Lj8KXd .rZBQ0c{margin-right:-12px}.Lj8KXd .KTBKoe{padding-right:10px}.Lj8KXd .gTl8xb{border-width:5px 5px 0 5px}.hdtb-mn-hd:hover{color:#202124}.hdtb-mn-hd:hover .gTl8xb{border-color:#202124 transparent}.hdtb-mn-hd:active{color:#1a73e8}.hdtb-mn-hd:active .gTl8xb{border-color:#1a73e8 transparent}.LkcePc{display:inline-block;width:var(--center-abs-margin);}.nvELY{background-position:left center;background-repeat:no-repeat;background-image:url(//ssl.gstatic.com/ui/v1/menu/checkmark.png)}.Tlae9d a,.Tlae9d .y0fQ9c{padding-left:32px;padding-right:32px}.cF4V5c{background-color:#fff}.cF4V5c g-menu-item{display:block;font-size:14px;line-height:23px;white-space:nowrap}.cF4V5c g-menu-item a,.cF4V5c .y0fQ9c{display:block;padding-top:4px;padding-bottom:4px;cursor:pointer}.cF4V5c g-menu-item a,.cF4V5c g-menu-item a:visited,.cF4V5c g-menu-item a:hover{text-decoration:inherit;color:inherit}.KTBKoe{display:inline-block;padding-right:6px;white-space:nowrap}.hdtb-mn-hd.Yg3U7e{padding-left:0}.gTl8xb{border-color:#70757a transparent;border-style:solid;border-width:5px 4px 0 4px;width:0;height:0;margin-left:-2px;top:50%;margin-top:-2px;position:absolute}.T3kYXe,.OouJcb,.rzG2be{color:#202124}.OouJcb,.rzG2be{background-color:#fff;border:1px solid #dadce0;border-radius:1px;font-size:13px;height:17px;left:50px;line-height:17px;margin:0 4px;padding:5px;position:absolute;width:84px}.OouJcb:focus,.rzG2be:focus{border:1px solid #4285f4;box-shadow:inset 0 1px 2px rgba(0,0,0,.3);outline:none}.J6UZg .goog-date-picker{left:154px;background-color:#f8f9fa;border-radius:2px;border:none;font-size:12px;outline:none;padding:5px 1px 10px;position:absolute;top:61px;-webkit-user-select:none}.J6UZg .goog-date-picker table{padding:0 10px;width:175px}.J6UZg .goog-date-picker table thead td{border-bottom:1px solid #dadce0}.J6UZg .goog-date-picker tbody th{width:0}.J6UZg tr.goog-date-picker-head{height:27px}.J6UZg tr.goog-date-picker-head td{white-space:nowrap}.J6UZg .goog-date-picker-monthyear{font-size:13px}.J6UZg .goog-date-picker tbody{outline:none;font-size:13px}.J6UZg .goog-date-picker td,.J6UZg .goog-date-picker th{text-align:center}.J6UZg .goog-date-picker-btn{background:none;border:none;cursor:pointer;font-size:12px;outline:none;padding:0;position:relative;top:-1px}.J6UZg .goog-date-picker-btn:not(.suap3e){color:#202124}.J6UZg button.goog-date-picker-btn{font-size:12px;vertical-align:middle}.J6UZg .goog-date-picker-wday,.J6UZg .goog-date-picker-date{font-weight:normal;padding:0 1px}.J6UZg .goog-date-picker-wday{padding-top:3px;line-height:15px}.J6UZg td.goog-date-picker-selected{background-color:#1a73e8;border-radius:2px;color:#fff}.J6UZg .goog-date-picker-other-month{color:#dadce0}.J6UZg .goog-date-picker-date{cursor:pointer;width:20px;line-height:15px}.J6UZg .goog-date-picker-foot{display:none}.J6UZg td.goog-date-picker-date:hover{background-color:#dadce0;border-radius:2px}.J6UZg td.goog-date-picker-year,.J6UZg td.goog-date-picker-month{padding:3px 0}.J6UZg button.goog-date-picker-year,.J6UZg button.goog-date-picker-month{color:#000}.J6UZg button.goog-date-picker-month{width:77px}.J6UZg button.goog-date-picker-year{width:50px}.J6UZg .goog-date-picker-menu{background:#fff;border:solid 1px #4285f4;cursor:pointer;outline:none;position:absolute}.UfY8P tr:nth-child(2) .goog-date-picker-other-month{color:#70757a}.T3kYXe{padding:0 15px}.suap3e{color:#dadce0;pointer-events:none}.vOvh1b{left:0;background:#fff;height:100%;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=75)\";opacity:.75;position:fixed;top:0;width:100%;z-index:1000}.J6UZg{left:50%;background:#fff;border:1px solid #dadce0;box-shadow:0 4px 16px rgba(0,0,0,.2);height:241px;margin-left:-202px;position:fixed;top:250px;width:373px;z-index:1001}.QIQ7Cc.J6UZg{left:0;margin-left:0}.QIQ7Cc .Jy9Ore,.QIQ7Cc .Qtsmnf{left:5px}.QIQ7Cc .NwEGxd{left:-8px}.Gwgzqd{right:11px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKBAMAAAB/HNKOAAAAElBMVEX////39/e9vb2zs7PCwsLv7++5ffrDAAAAL0lEQVQI12MIEWBgdGVwVmQQMmEQMhJUVmRgVFYyEmBgEDJWZICSEBGILEQlWBcAq64Ft1WDk9gAAAAASUVORK5CYII=) center no-repeat;cursor:pointer;height:20px;position:absolute;top:10px;-webkit-user-select:none;width:20px}.Jy9Ore{left:42px;color:#202124;font-size:16px;position:absolute;top:34px}.Qtsmnf{left:42px;color:#202124;position:absolute}.tmDYm{top:72px}.iWBKNe{top:111px}.OouJcb{top:65px}.rzG2be{top:104px}.NwEGxd{position:relative}.qomYCd{left:50px;background-color:#f8f9fa;border-bottom-left-radius:2px;border-top-left-radius:2px;height:37px;position:absolute;top:61px;-webkit-transition:top .13s linear;width:110px}.KbfSHd{top:100px}.lRiKjb{-webkit-transition:none}.Ru1Ao{left:54px;position:absolute;top:143px}.BwGU8e{border-radius:2px;border-radius:2px;cursor:pointer;display:inline-block;font-size:11px;font-weight:bold;height:16px;line-height:16px;min-width:54px;padding:6px 8px 5px;text-align:center;-webkit-transition:all 0.218s,visibility 0s;-webkit-user-select:none}.BwGU8e[disabled]{pointer-events:none;background-color:#f8f9fa;border-color:#f8f9fa;color:#70757a}.fE5Rge{color:#1a73e8;background-color:#fff;border:1px solid #dadce0}.fE5Rge:hover{background-color:#f8f9fa;border:1px solid #f8f9fa}.fE5Rge:focus{background-color:#e8f0fe;border:1px solid #e8f0fe}.CBvvz{margin:-8px 0px 0px;margin:-30px 0px 0px;}.rskU3c .bOiwif{animation:ghost-card-shimmering 1.3s infinite;background:-webkit-linear-gradient(left,rgba(255,255,255,0) 0%, rgba(255,255,255,.5) 50%, rgba(255,255,255,0) 99%, rgba(255,255,255,0) 100%);background:linear-gradient(to right,rgba(255,255,255,0) 0%, rgba(255,255,255,.5) 50%, rgba(255,255,255,0) 99%, rgba(255,255,255,0) 100%);bottom:0;right:0;left:0;position:absolute;top:0;transform:translate3d(-100%,0,0)}.rskU3c{overflow-x:hidden;position:relative;width:100%}.G8qI4b{padding:0;}.DYiTxe{padding:0 0 12px;border-bottom:1px solid rgba(0,0,0,.05)}.N6dG3e,.e4XSEd{display:block;width:100%}.N6dG3e{background-color:#e8f0fe;height:16px;margin-bottom:8px}.e4XSEd{background-color:rgba(0,0,0,.05);height:12px}.AMbnUc{padding:12px 0 0;}.ysLSm{background-color:rgba(0,0,0,.05);display:block;height:60px;width:100%}.v5jHUb{display:none}.FcOujd .v5jHUb{display:block;border:1px solid #dadce0;border-top:0;margin-bottom:30px}.H7QZHe{margin:0 0 8px;background-color:#fff}.hlcw0c{margin-bottom:44px}.D0ONmb .hlcw0c:last-child{margin-bottom:0}.FcOujd .ULSxyf:first-child{margin-top:44px}.dG2XIf .c94Vsf .wDYxhc:first-child{padding-top:0;border-top:0}.dG2XIf.c2xzTb .wDYxhc:first-child{padding-top:0}.XzTjhb .fm06If .wDYxhc:not(.NFQFxe){padding-left:0;padding-right:0}.XzTjhb .fm06If .wDYxhc:first-child{padding-top:0}.qs-ic .dG2XIf .wDYxhc:not(.NFQFxe){padding-left:26px;padding-right:26px}#rhs.IVvPP .dG2XIf.XzTjhb{border:none;border-left:1px solid #dadce0;border-radius:0;margin:0 0 0 -21px;padding-left:20px;width:372px}#rhs.IVvPP .g-blk.JnwWd{width:372px}.s6JM6d .Jb0Zif .dG2XIf{margin-left:0;margin-right:0}#rhs .i8qq8b .dG2XIf{border:0;margin:0;background:none}#rhs .dG2XIf{line-height:1.58;margin:6px 0 0;border:1px solid #dadce0;}#rhs .dG2XIf .wDYxhc:not(.NFQFxe){padding-left:15px;padding-right:15px}#rhs .g-blk.VjDLd{border:0;padding:0}.dG2XIf.T1bmQ .vk_arc{margin-top:0}.xXEKkb{color:#1a0dab !important;}.zifkQc{background:none;border:none;box-shadow:none}hr.ga9aRe{background-color:#dadce0;border:0;height:1px;margin:0}.garHBe{color:#202124;font-size:20px;line-height:1.3;position:relative}.garHBe a{color:#202124}.xpdopen .Hhmu2e{overflow:inherit}.cAn2Qb .a84NUc:not(:empty),.cAn2Qb .CQKTwc:not(:empty){border-top:none}.SHa8ve{display:none}.rKR6H{padding-top:0.1px}.Wnoohf .xpdopen .yp1CPe .xpdbox g-more-link{top:28px}.OJXvsb .xpdclose .wDYxhc.siXlze{padding-bottom:16px}.A4O3hd{box-shadow:none !important}.ecRggb{background-color:#fff;box-shadow:none;border:1px solid #dadce0;border-radius:8px;margin:0 0 16px 0}.Zk3Vv{color:#fff}.bIQbX{color:#fff}.QSyVJc{display:inline-block;fill:currentColor;height:24px;width:24px}.wb5ZZc{display:none}.wok5vf{padding:24px}.bvSTKc{padding:8px}.aNrSe{color:#202124;font-size:20px;font-weight:600;line-height:24px}.aNrSe.bgB4Dc{padding-bottom:0}.lZC9wd{height:24px;width:24px;position:absolute;right:16px;top:8px;cursor:pointer}.E1kGSe{background-color:#fff;border-radius:2px;box-shadow:0px 5px 26px 0px rgba(0,0,0,0.22),0px 20px 28px 0px rgba(0,0,0,0.3);cursor:default;width:220px;z-index:1002}@media (forced-colors:active){.E1kGSe{border:1px solid #fff}.lZC9wd{border:1px solid #fff}}.eJtrMc{padding-bottom:8px;padding-top:8px}.Wt5Tfe{padding-left:0px;padding-right:0px}.bQkCTc{display:inline-block;vertical-align:bottom}.DQc04b.DQc04b{line-height:24px}.DQc04b{display:block;color:#202124;cursor:pointer;font-weight:normal}.tW0dvd{color:#202124}.fTE6nf{height:24px;width:24px;vertical-align:middle}.zUdppc{padding-bottom:4px}.HYsXi{cursor:pointer}input.qKoqyc{color:#202124;font-size:16px;line-height:18px;width:100%;cursor:pointer}.HmofF{border-bottom:1px solid #ebebeb;white-space:nowrap}a.OEwtze,a.OEwtze:visited{color:#202124;font-size:16px;line-height:26px}.qKoqyc{color:#202124;font-size:16px;line-height:18px;cursor:pointer}.Cnzagc{opacity:0;position:absolute}.LXtP0 .BMGGYb{top:4px}.OkbWJb.LXtP0 .BMGGYb{top:10px}.rysuG{display:block;position:relative;margin:0 3px;vertical-align:middle}.ZXb90b{border:none;box-shadow:none;color:#202124;font-size:16px;width:100%}.UwzZQb .ZXb90b,.UwzZQb .BMGGYb{font-size:14px}.ZXb90b:focus{outline:none}.HOKz3d:not(.A8x8Pb) .kp85vc,.UNtZ8:not(.A8x8Pb) .kp85vc{border-color:#d93025}.K56Jue.A8x8Pb .kp85vc{border-bottom-style:dashed}.kp85vc{display:table;width:100%}.xqPsfb{background-color:#4285f4;bottom:0;height:2px;left:45%;margin-top:-2px;pointer-events:none;position:relative;-webkit-transition-duration:0.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);visibility:hidden;width:10px}.RKbDve .xqPsfb{left:0;visibility:inherit;width:100%}.HOKz3d .xqPsfb,.UNtZ8 .xqPsfb{background-color:#d93025}.K56Jue .kp85vc{border-bottom:1px solid #dadce0;border-radius:0}.pqHExb{flex-grow:1;border-radius:8px;box-shadow:0 0 0 1px #dadce0;display:inline-block;margin:16px 8px;padding-bottom:6px;width:112px}.BUybKe,.HsnFBf{margin-left:16px}.BUybKe,.oM2GA{margin-right:16px}.XO7rhc{margin-right:-16px;margin-left:-16px}.ZM7ZNb{margin-right:-16px}.u8H8Fd{box-shadow:0 1px 0 #ebebeb}.WuRuJe{background-color:white;bottom:0;height:2px;left:-1px;right:0;position:absolute;width:0}.NDZmNe .KYeOtb{border-bottom:2px solid}.NDZmNe .KYeOtb.rWAMad{border-bottom:0}.Fw5JUe{border-top:1px solid #dadce0}.l0Y8Ue{width:50%}.l0Y8Ue .zQhTRb{display:inherit;position:absolute;transform:translate3d(100%,0px,0px)}@media screen and (orientation:landscape){.e0KOId{width:50%}.e0KOId .zQhTRb{display:inherit;position:absolute;transform:translate3d(100%,0px,0px)}}@media screen and (orientation:portrait){.e0KOId{min-width:0 !important}}.LnPPpd{min-width:100%}.hpdr6b{-webkit-transition:height 700ms cubic-bezier(0.190,1.000,0.220,1.000)}.MT5l9c{overflow-y:auto;}.EmfMle{height:100%}.wjuhKf{overflow-x:hidden}.FspLPc{white-space:nowrap;display:inline-block}.dsKwub{display:inline-flex}.XNfAUb.vbKu7e{overflow-y:visible}.XNfAUb.vbKu7e .RyIFgf{position:static}.TdRuOd:hover{cursor:pointer;text-decoration:underline}div.iOWvff{float:right}.b3Ke9b{color:#70757a;cursor:pointer;padding-right:4px}.hELpae{color:#70757a;float:right;font-size:12px;line-height:1.34;}.QPML4e{font-style:italic;margin-right:-2em}div.VTZT1b{padding:4px 16px 0 8px;margin-bottom:-4px}.kno-ftr.VjDLd{margin-left:0;padding-top:4px}#rhs .kno-ftr.VjDLd{border:none}.HpcQd{outline:0;font-style:italic}.HpcQd:hover{cursor:pointer;text-decoration:underline}.A9Y9g{flex:1 1 100%;min-width:0}.pAEXpf{flex:1 1 auto}.KAO3Kc{display:block;height:100%}.IajJf{flex-shrink:1}.myAtwe{margin-top:auto}.cEaSVc{margin-right:auto}.lOdyRd{margin-bottom:auto}.LnCrMe{margin-left:auto}.aBeYNc{right:-23px;position:absolute;top:0;width:48px;height:48px}.c2xzTb .LC20lb{margin-bottom:0}.MMgsKf{padding-top:2px}.NXKJM{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:1}.xvfwl{margin-top:4px}.TbwUpd.ojE3Fb a.fl{padding-top:0;font-size:12px;line-height:18px;}.iG7WGe{color:#202124;padding:0;text-align:center;width:16px}.qncq2c{font-size:12px;line-height:16px;margin-left:6px}.fJOpI.H9lube{background-color:#e2eeff;border:1px solid #e2eeff}.P1UpZb{background-color:#f1f3f4;border:1px solid #ecedef}.YSlTVe.YSlTVe .DVXTI{color:#0b57d0;background-color:#ebf1ff}.YSlTVe .bJVp8c{color:#0b57d0}.YSlTVe.YSlTVe .qr5Pe,.YSlTVe.YSlTVe .g7Jr2c{background-color:#ebf1ff}.YSlTVe .CZ61cb{background-color:#f7f8f9;border:1px solid #ecedee}.YSlTVe .yidq7b,.YSlTVe .d0FfLc{background-color:#ebf1ff}.YSlTVe.YSlTVe .Hyrj7c{color:#0b57d0}.lWlVCe{border-radius:50%}.bJVp8c{color:#0060f0}.Jj3Uob{color:#0060f0;}.Hyrj7c{text-align:center;vertical-align:middle}.pBG0nf{color:#0060f0;font-family:Google Sans,arial,sans-serif;font-size:14px;line-height:18px}.DVXTI.DVXTI{font-family:Google Sans,arial,sans-serif-medium,sans-serif;font-weight:400;font-size:10px;text-transform:capitalize;margin-bottom:0;color:#0060f0;background-color:#e2eeff}.aH7zee{border-radius:50%;background-color:#fff;}.csDOgf.I5pXif{position:absolute}.csDOgf.Pyz0Gd{margin-top:2px}.TNT2l{font-style:normal}.ob9lvb.HCMUuf{color:#70757a}.NrWpud .VwiC3b{overflow:ellipsis;width:220px}.NrWpud .LC20lb{white-space:nowrap;max-width:100%;text-overflow:ellipsis;overflow:hidden}.bbhULc .LC20lb{font-size:0px}.eCwjMc{margin-bottom:2px;margin-top:2px}.Bb1JKe{padding-bottom:8px}.Kc1gdb{padding-top:4px}.wxEjDb{display:none}.OwKOgb{position:relative}.adDDi.PJI6ge{padding-bottom:0}.adDDi.Kcn6oc{margin:0 -16px}.dG2XIf.cUnQKe .related-question-pair .wDYxhc.NFQFxe g-img{margin-right:0px}.J2MhIb.roMIYb:not(.XBlWIe) .JCzEY{font-weight:normal}.mmb6sb{line-height:25px}.h373nd.FRr7Bf{overflow:visible}.WltAjf{color:#70757a;margin-top:4px}.bCOlv{position:absolute;display:none;width:100%;opacity:0}.IZE3Td{position:relative}.J2MhIb:not(.XBlWIe) .JCzEY{font-weight:700;color:#202124}.BOZ6hd{padding-top:20px}.q2K6Pe{background:#f8f8f8}.g1Khaf{font-size:14px;font-weight:500}.pkG1D{display:block;opacity:0.001;position:relative}.related-question-pair .pkG1D{margin:0 16px;padding-top:12px}.d0fCJc{display:block;font-size:16px;line-height:1.58;opacity:0.001;padding-bottom:10px}.related-question-pair .d0fCJc{padding-bottom:0px;margin-bottom:10px}.lqQNEe{border:1px solid #ebebeb;border-radius:18px;color:#4d5156;display:inline-block;height:36px;line-height:32px;margin-left:-1px;margin-right:-1px;vertical-align:top;white-space:nowrap;max-width:calc(100% - 28px);}.VqVmtb{vertical-align:middle}.ZroESc{font-size:14px;line-height:36px;vertical-align:middle}.L2AgXb{padding-bottom:20px}.cAn2Qb .L2AgXb{display:flex;width:100%}.trNcde .L2AgXb{padding-top:12px}.UAMSo{width:100%;font-family:Google Sans,arial,sans-serif;}.cAn2Qb .UAMSo{width:100%;font-family:arial,sans-serif;position:absolute;overflow:hidden;top:0;bottom:0;}.xnzKpf{position:relative}.CoZBQ{position:absolute;top:calc(100% + 10px);width:150px;right:0}.nmaBTb{text-align:left;font-size:20px;line-height:20px;padding:10px 16px;}.mnOsef{background-color:#e8f0fe;box-sizing:border-box;color:#1967d2;display:block;font-size:12px;line-height:16px;padding:7px 16px;width:100%;letter-spacing:0.75px;text-transform:uppercase}.cAn2Qb .mnOsef{background-color:#fff;box-sizing:border-box;color:#1967d2;display:block;font-size:12px;line-height:16px;padding:7px 16px;width:100%;letter-spacing:0.75px;text-transform:uppercase}.iMCzjd{background-color:#e8f0fe;box-sizing:border-box;display:block;padding:12px 16px;width:100%}.cAn2Qb .iMCzjd{background-color:#f8f9fa;box-sizing:border-box;display:block;padding:12px 16px;width:100%}.qvSLpc{border-radius:16px;overflow:hidden}.qvSLpc.dnEV5c{border-bottom-left-radius:0;border-bottom-right-radius:0}.jRFvfe{border-radius:0 0 16px 16px;overflow:hidden}.Do1FMc{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center;color:rgba(255,255,255,.8)}.aavBce{cursor:pointer}.vfO4k{position:relative;background-color:#000;border-top-left-radius:8px;border-top-right-radius:8px;}.cAn2Qb .vfO4k{position:relative;background-color:#000;border-top-left-radius:8px;border-top-right-radius:8px;border-bottom-left-radius:8px;border-bottom-right-radius:8px}.fi3CNb{position:absolute;top:50%;bottom:0;left:0;right:0;background:linear-gradient(0deg, rgba(0, 0, 0, .54), rgba(0, 0, 0, .27) 30%, rgba(0, 0, 0, 0));}.cAn2Qb .fi3CNb{position:absolute;top:50%;bottom:0;left:0;right:0;background:linear-gradient(0deg, rgba(0, 0, 0, .54), rgba(0, 0, 0, .27) 30%, rgba(0, 0, 0, 0));border-bottom-left-radius:8px;border-bottom-right-radius:8px}.kAoFgd{flex-grow:1;height:49px;padding:0 16px 0 0}.ClE1Nc{text-align:center;padding-top:22px}.yp0ec{font-family:arial,sans-serif-medium,sans-serif;font-weight:500;font-size:14px;text-shadow:0px 1px 2px rgba(0, 0, 0, .36)}.JtyPib{font-family:arial,sans-serif-medium,sans-serif;font-weight:500;color:#fff;background-color:#4285f4;padding:8px 16px;font-size:12px;line-height:16px}.MnwSrc img{width:100%}.MnwSrc{border-top-left-radius:8px;border-top-right-radius:8px;}.cAn2Qb .MnwSrc{border-top-left-radius:8px;border-top-right-radius:8px;border-bottom-left-radius:8px;border-bottom-right-radius:8px}.iJvafd .MnwSrc,.iJvafd .vfO4k{border-radius:unset}.EEu4cc{letter-spacing:0.75px;text-transform:uppercase}.WJ7gZe{height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:0}.Ghjkle{position:absolute;font-size:20px;top:0;left:0;background:linear-gradient(135deg,rgba(255,255,255,.1),rgba(255,255,255,.8) 80%,rgba(255,255,255,.1) 90%,rgba(255,255,255,0));right:50%;padding:3px 0 0 10px}.NWd2Ib{position:relative;border-radius:18px;height:16px;font-size:10px;font-weight:bold;padding:1px 0;display:inline-block;margin-bottom:5px;width:40px;color:#000;background-color:#fff}.MF6MAc{font-weight:bold;display:inline-block;text-align:center;width:100%;line-height:16px;}.Xvesr{cursor:pointer;position:fixed;z-index:9002}.ynlwjd,.dtCYCd{bottom:0;left:0;position:fixed;right:0;top:0;z-index:9000}.dtCYCd{cursor:pointer}.AU64fe{cursor:default;min-height:10px;min-width:10px;position:relative;z-index:9001;vertical-align:middle}g-loading-icon.Xfh32{bottom:0;left:0;margin:auto;position:fixed;right:0;top:0}.qzMpzb{background-color:rgba(0,0,0,0.8)}.PqB12b{background-color:rgba(0,0,0,0.54)}.gjDNhb{background-color:transparent}.avhAMd{background-color:rgba(0,0,0,0.6)}.DvHOIf{background-color:#202124}.oLLmo{background-color:rgba(248,249,250,0.85)}.fkbZ7b{opacity:0;transition:opacity 250ms}.xUZ4Hc .VFlF2c,.xUZ4Hc .AU64fe{height:100%;width:100%}.Xvesr{height:24px;opacity:.78;right:32px;top:32px;width:24px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAzCAYAAADYfStTAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wsGBgcnk8E1iQAAAQBJREFUaN7tmrkShCAQRFkj/hr2rydzExIJlnOGpoUqykCs6acIc+AcexORICKBQmcadKcewGH+68wGwUKVdF6F5yMSVNISR+khvlS3NkSoYU1IUNO0IEBN17ASSs32Cih1m5ZQZrYsDJnPBk2Dy/5XDcPLV9SZAmD2vBlC4LySEUGwfmOPMGQnuFkgPEyLUAuYj1EAFrPr4573/ouevLgrO3wypgVqD5hKKDWYy532sim3elE4yzb6xnpcH2rnlCp8oArwqEJwqiQJVRqLKtFIlQqmStZTlVOoCl5UJUmqojFVWX+HWKVGY/EkCVI0mbTE3jew9+GlbDDH8bLTANsPN64ny8hqeE0AAAAASUVORK5CYII=) no-repeat;background-size:24px 24px}.Xvesr.BV6uAb{left:32px;right:auto}.oLLmo .Xvesr{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAzAgMAAAClE8PAAAAABGdBTUEAALGPC/xhBQAAAAlQTFRFVVVVVVVVVVVVMVQQFQAAAAJ0Uk5TAH+2KaGVAAAAqElEQVQoU32SsRVDIQhFr0UcwmnMBn8Op7HKBDYyZQpRfCliocLhCsIDXc+5vSCNY5VKnsdqnWzVjWSdZN2tbBXaBsvcG7h7gwvZoHsddMIPd66QDazzVNEGV6IyA1tBUWCyu3jaCAzKDAyyvQ8GyT6BQbPAoFhgkC/s19JIeUUzaHatTKrWH+lvtRPSJe2gdlc7L1PRiek0ddKiAlWIqkeVpapTRf5ZX+r5VzHujtLrAAAAAElFTkSuQmCC) no-repeat;background-size:24px 24px}.Xvesr:hover{opacity:1}.GoIRO{background-color:#4285f4;color:#fff;font-family:arial,sans-serif-medium,sans-serif;font-size:12px;font-weight:500;line-height:16px;padding:8px 16px;transition:opacity 0.5s;letter-spacing:0.75px;text-transform:uppercase}.jTSIHb{display:flex;flex-direction:column-reverse;flex-grow:1;font-size:14px;padding:12px 16px 12px 16px}.jTSIHb a,.jTSIHb a:visited{color:#fff}.pE7Yzc{align-items:stretch;display:flex;height:100%;justify-content:center;width:100%;}.tBZiXd{display:flex;flex-direction:column}.CTkDab{display:none}.XdBtEc{font-size:16px;margin:4px 0;line-height:22px}.cAn2Qb .XdBtEc{font-size:16px;margin:4px 0;line-height:24px}.XdBtEc:before{content:'\"... ';}.XdBtEc:after{content:' ...\"';}.w90itc{background-color:#e8f0fe;color:#70757a;cursor:pointer;font-size:16px;line-height:22px;margin-left:16px;white-space:nowrap}.cAn2Qb .w90itc{background-color:#f8f9fa;color:#70757a;cursor:pointer;font-size:16px;line-height:22px;margin-left:16px;white-space:nowrap}.jNVrwc{margin-bottom:0}.Y4pkMc{width:100%}.vBnbff .mO5MMe{padding-top:10px}.cUnQKe .vBnbff .mO5MMe{padding-left:0;}.trNcde .vBnbff .mO5MMe{padding:10px 0 0 0}.cAn2Qb.abzPbc .mnr-c{max-width:calc(100% - 162px)}.ljeAnf{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical}.Jb0Zif .UiGGAb.ILfuVd,.ILfuVd{font-size:16px;line-height:24px;}.fm06If .NA6bn,.c2xzTb .ILfuVd.duSGDe,.c2xzTb .NA6bn.c3biWd{font-size:14px;line-height:1.58;}.c2xzTb .zloOqf{font-size:16px;margin-bottom:16px;margin-top:-8px;}.FLWspc{margin:16px}.LFYdN{font-size:16px;margin:16px}.trNcde .ILfuVd{color:#4d5156;font-family:Google Sans,arial,sans-serif;font-size:14px;line-height:22px}.HSryR .ILfuVd{line-height:1.5}.ss6qqb .ILfuVd,.ss6qqb .UiGGAb.ILfuVd{font-size:14px;line-height:22px}.c2xzTb .qLYAZd{margin:16px 16px 16px 0;}.d9FyLd{padding:0 0 10px}.hgKElc{padding:0 8px 0 0}.kX21rb{padding-right:0;display:inline-block;font-size:12px;line-height:1.34;font-family:Google Sans,arial,sans-serif;white-space:nowrap}.SPV4pd{display:flex;overflow-x:auto}.SPV4pd::-webkit-scrollbar{display:none}.Vjskue{margin-left:8px}.JT9o0,.ZnIJV{align-items:center;border:1px solid #dadce0;border-radius:16px;box-sizing:border-box;color:#1a73e8;cursor:pointer;display:flex;height:32px;margin-bottom:16px}.BkHX0d{font-family:Google Sans,arial,sans-serif-medium,sans-serif;font-size:14px;line-height:20px;padding-right:20px;text-align:center;white-space:nowrap}.xv1D5b{display:block;padding:0 8px 0 12px;width:18px;height:18px}.LGOjhe{overflow:hidden;padding-bottom:20px}.trNcde .LGOjhe{overflow:visible}.SALvLe .LGOjhe,.Jb0Zif .LGOjhe,.HSryR .LGOjhe,.IVvPP .LGOjhe{padding:0 0 10px;margin:10px 0 0 0}.s6JM6d .SALvLe .LGOjhe{margin-top:12px;}.s6JM6d .HSryR .LGOjhe{margin-top:12px;padding-bottom:20px}.IVvPP .qDOt0b{border-bottom:1px solid #dadce0;padding-bottom:6px}.rjOVwe.ILfuVd{font-size:16px;line-height:20px}.dG2XIf .rjOVwe{padding-top:22px;padding-bottom:0;margin-bottom:1px}.s6JM6d .Jb0Zif .LjTgvd .UiGGAb.ILfuVd{line-height:22px}.xWd7I{padding-top:12px;}.NA6bn,.duSGDe,.UiGGAb.ILfuVd,.IVvPP .ILfuVd{font-size:14px;line-height:22px}.n6SJS .ILfuVd{font-size:14px}.NA6bn,.duSGDe,.UiGGAb.ILfuVd,.IVvPP .ILfuVd{line-height:20px}.xpd-wa .g-blk{margin:initial}.xpd-wa .dG2XIf{border:initial;box-shadow:none}.PZY7Gb p:first-child,.PZY7Gb ul:first-child,.PZY7Gb ol:first-child{margin-block-start:0}.PZY7Gb p:last-child,.PZY7Gb ul:last-child,.PZY7Gb ol:last-child{margin-block-end:0}.PZY7Gb li{margin-left:32px}.PZY7Gb li p{margin:0}.PZY7Gb ul li{list-style:disc}.PZY7Gb ol li{list-style:decimal}.fm06If .ILfuVd,.c2xzTb .ILfuVd,.Jb0Zif .c2xzTb .ILfuVd{color:#202124;font-family:Google Sans,arial,sans-serif}.fm06If .ILfuVd,.c2xzTb .ILfuVd,.Jb0Zif .c2xzTb .ILfuVd{font-size:20px;line-height:28px}.fm06If .ILfuVd b,.c2xzTb .ILfuVd b{background-color:rgba(80, 151, 255, 0.18);color:#040c28;font-weight:500;}@media (forced-colors:active){.fm06If .ILfuVd b,.c2xzTb .ILfuVd b{background-color:Mark;color:MarkText}}.trNcde .ILfuVd b{background-color:rgba(80, 151, 255, 0.18);color:#040c28;font-weight:500}@media (forced-colors:active){.trNcde .ILfuVd b{background-color:Mark;color:MarkText}}.IJSH6{border-top:1px solid #ecedef;position:relative}.Ae8kyb{font-size:11px;height:17px;position:relative}.kPLAje{color:#70757a;position:relative}.Qnxsic{clear:both}.M8OgIe .jYyFuf{padding-bottom:40px}.M8OgIe .KFFQ0c{width:100%}.i1eWpb .GTERze{display:none}.i1eWpb .ky4hfd{display:block}.Jb0Zif g-section-with-header{margin-bottom:30px}.ss6qqb g-section-with-header{margin-bottom:16px}.U7izfe.axf3qc{padding-bottom:8px}.eejeod .U7izfe{padding-top:0px}.SEggnd{border:1px solid #dadce0;border-radius:36px;display:inline-block;margin-right:16px;padding:7px;vertical-align:middle;margin-bottom:5px;margin-top:-3px}.SEggnd .N3S4q{display:block}.wIV7Db{visibility:hidden}.xte2qe{display:flex}.OXEsB{border-radius:8px;overflow:hidden}.OXEsB .Xn9Tkc{border-top-left-radius:8px}.OXEsB .oGwWse{border-top-right-radius:8px}.OXEsB .y0jvId{border-bottom-right-radius:8px}.OXEsB .lM9tvf{border-bottom-left-radius:8px}.o6uAG{border-radius:12px;overflow:hidden}.o6uAG .Xn9Tkc{border-top-left-radius:12px}.o6uAG .oGwWse{border-top-right-radius:12px}.o6uAG .y0jvId{border-bottom-right-radius:12px}.o6uAG .lM9tvf{border-bottom-left-radius:12px}.l5X1Ye{border-radius:16px;overflow:hidden}.l5X1Ye .Xn9Tkc{border-top-left-radius:16px}.l5X1Ye .oGwWse{border-top-right-radius:16px}.l5X1Ye .y0jvId{border-bottom-right-radius:16px}.l5X1Ye .lM9tvf{border-bottom-left-radius:16px}.HdBr8{overflow:visible}html.zAoYTe .ZZGZKb:focus{outline-offset:-1px}html.zAoYTe .eA0Zlc:focus-within{outline:-webkit-focus-ring-color auto 1px}.c2xzTb .JX86yc:focus-within{outline:none}html.zAoYTe .c2xzTb .JX86yc a:focus{outline-offset:-1px;z-index:100;position:relative}.M8OgIe .eA0Zlc.qN5nNb{margin-right:4px;margin-bottom:4px}.eA0Zlc.qN5nNb{margin-right:2px;margin-bottom:2px}.eA0Zlc.ITO9Cc{margin-right:2px;margin-bottom:2px}.eA0Zlc.LyIfQ{margin-right:10px;margin-bottom:10px}.oRnkrf.LyIfQ{margin-bottom:10px}.eA0Zlc.U1K9Vc{padding:10px;overflow:visible}.eA0Zlc.U1K9Vc .srrRv{background-color:transparent;border:2px solid;border-color:#1a73e8;border-radius:16px;box-sizing:border-box;pointer-events:none;height:100%;left:0;opacity:1;position:absolute;top:0;width:100%}.eA0Zlc.U1K9Vc .ywd3Gc.srrRv{width:calc(100% - 16px);height:calc(100% - 16px);border-radius:14px;left:8px;top:8px}.eA0Zlc.U1K9Vc:focus-within{outline:none}.eA0Zlc.bi-io{border-bottom:1px solid #fff;border-right:1px solid #fff;left:0;top:0;z-index:1}.cUnQKe .GMCzAd{margin:0;}.c2xzTb .ifM9O .GMCzAd{margin:0}.XzTjhb .fm06If .ifM9O .GMCzAd{margin:0}.M8OgIe .XzTjhb .fm06If .ifM9O .GMCzAd{margin:4px 4px 0 0}.f8yzVb{width:calc(50% - 10px);border-radius:8px}.PEPRs{width:calc(25% - 20px);border-radius:16px}.EfhPkd{height:100%;left:0;position:absolute;top:0;width:100%;z-index:100}.rkPjCb{background-color:#fff;border-radius:16px;box-shadow:0 1px 6px 0 rgba(32,33,36,0.28);cursor:pointer;display:none;height:fit-content;padding:8px 8px 12px 8px;position:absolute;top:0;width:fit-content;z-index:102}.RjYw8b{background-image:linear-gradient(-180deg,rgba(0,0,0,0) 50%,rgba(0,0,0,.8) 100%);position:absolute;width:100%;height:100%;left:0;top:0}.eii6dc{background:rgba(0,0,0,.54);border-radius:16px;position:absolute;top:8px;right:8px;height:32px;width:32px}.HyRcxe{padding:15px 15px}.zgRAGb{position:absolute;top:0;right:0}.Ib6ph{position:absolute;top:0;right:1px}.TxERsb{display:flex;justify-content:center}.b1Zhoc{display:none}.FnEtTd .srrRv{border:2px solid;border-color:#1a73e8}html.zAoYTe .FnEtTd:focus-within .BfmEZb{border:2px solid;border-color:#1558d6}.PBgPab{box-shadow:0 1px 6px rgba(32,33,36,0.28)}html.zAoYTe g-inner-card:focus-within{outline:Highlight auto 1px;outline:-webkit-focus-ring-color auto 1px}.S2Caaf.BmvKjd{margin:-9px -6px}.czzyk .CrkfKf{display:none}.czzyk .CrkfKf{margin-right:0}.Gtr0ne{padding-top:10px}.YB4h9 .Gtr0ne a{color:#fff;text-decoration:underline}.YB4h9.q7XNbb{margin-bottom:44px}.fMgO7c{cursor:pointer;position:relative;}.ff76ob{color:#70757a;float:right;font-size:12px;line-height:16px;padding-bottom:4px}.oqQXff{height:16px}.UfGzPc{border-top:1px solid #ecedef;margin-left:0}.YeThId{border-top:1px solid #ecedef}.FalWJb{background:#fff}.rM2aqb{display:none}.DhDny{color:#3c4043;font:14px/20px Roboto-Medium,HelveticaNeue-Medium,Helvetica Neue,sans-serif-medium,Arial,sans-serif;display:inline-block;vertical-align:middle}.EX9eNe{color:#70757a;margin-left:4px;vertical-align:middle}.spch-dlg{background:transparent;border:none}.spch{background:#fff;height:100%;left:0;opacity:0;overflow:hidden;position:fixed;text-align:left;top:0;visibility:hidden;width:100%;z-index:10000;transition:visibility 0s linear 0.218s,background-color 0.218s;background:rgba(255,255,255,0)}.s2fp.spch{opacity:1;transition-delay:0s;visibility:visible;background:rgba(255,255,255,0)}.close-button{background:none;border:none;color:#70757a;cursor:pointer;font-size:26px;right:0;line-height:15px;opacity:.6;margin:-1px -1px 0 0;padding:0 0 2px 0;height:48px;width:48px;position:absolute;top:0;z-index:10}.close-button:hover{opacity:.8}.close-button:active{opacity:1}.spchc{display:block;height:42px;pointer-events:none;}.inner-container{height:100%;opacity:.1;pointer-events:none;width:100%;transition:opacity .318s ease-in}.s2ml .inner-container,.s2ra .inner-container,.s2er .inner-container,.OJaju .inner-container{opacity:1;transition:opacity 0s}.google-logo{background:url(data:image/png;base64,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) no-repeat center;background-size:94px 32px;height:32px;width:94px;top:8px;opacity:0;float:right;left:255px;pointer-events:none;position:relative;transition:opacity .5s ease-in,left .5s ease-in}.s2fp .google-logo{opacity:0.54;left:270px;transition:opacity .5s ease-out,left .5s ease-out}.inner-container{width:572px}.spchc{background:#fff;box-shadow:0 2px 6px rgba(0,0,0,0.2);margin:0;min-width:100%;overflow:hidden;padding:51px 0 50px 126px;position:absolute}.spch.s2fp.t2n14d{background:rgba(255,255,255,0.9)}.LgbsSe{background-color:#fff;border:1px solid #f8f9fa;border-radius:100%;bottom:0;box-shadow:0 2px 5px rgba(0,0,0,.1);cursor:pointer;display:inline-block;opacity:0;pointer-events:none;position:absolute;right:0;transition:background-color 0.218s,border 0.218s,box-shadow 0.218s;transition-delay:0;position:absolute;opacity:0;left:-83px;top:-83px;}.s2fp .LgbsSe{opacity:1;pointer-events:auto;transform:scale(1);left:0;top:0}.s2ra .LgbsSe{background-color:#ea4335;border:0;box-shadow:none}.r8s4j{background-color:#dadce0;border-radius:100%;display:inline-block;opacity:1;pointer-events:none;position:absolute;transform:scale(.01);transition:opacity 0.218s;height:151px;left:-28px;top:-28px;width:151px}.button-container{pointer-events:none;position:relative;transition:transform 0.218s,opacity 0.218s ease-in;transform:scale(.1);height:95px;right:-31px;top:-27px;width:95px;float:right}.s2fp .button-container{transform:scale(1)}.s2ra .LgbsSe:active{background-color:#c5221f}.LgbsSe:active{background-color:#f8f9fa}.microphone{height:87px;pointer-events:none;position:absolute;width:42px;left:17px;top:7px;transform:scale(.53)}.receiver{background-color:#999;border-radius:30px;height:46px;left:25px;pointer-events:none;position:absolute;width:24px}.wrapper{bottom:0;height:53px;left:11px;overflow:hidden;pointer-events:none;position:absolute;width:52px}.stem{background-color:#999;bottom:14px;height:14px;left:22px;pointer-events:none;position:absolute;width:9px;z-index:1}.shell{border:7px solid #999;border-radius:28px;bottom:27px;height:57px;pointer-events:none;position:absolute;width:38px;z-index:0;left:0px}.s2ml .receiver,.s2ml .stem{background-color:#f44}.s2ml .shell{border-color:#f44}.s2ra .receiver,.s2ra .stem{background-color:#fff}.s2ra .shell{border-color:#fff}.text-container{pointer-events:none;position:relative}.spcht{font-weight:normal;line-height:1.2;opacity:0;pointer-events:none;position:absolute;text-align:left;-webkit-font-smoothing:antialiased;transition:opacity .1s ease-in,margin-left .5s ease-in,top 0s linear 0.218s;font-size:27px;left:7px;top:.2em;width:490px;margin-left:32px}.s2fp .spcht{margin-left:0;opacity:1;transition:opacity .5s ease-out,margin-left .5s ease-out}.spchta{color:#1a0dab;cursor:pointer;font-size:18px;font-weight:500;pointer-events:auto;text-decoration:underline}.spch-2l.spcht,.spch-3l.spcht,.spch-4l.spcht{transition:top 0.218s ease-out}.spch-2l.spcht{top:-.6em}.spch-3l.spcht{top:-1.3em}.spch-4l.spcht{top:-1.7em}.s2fp .spch-5l.spcht{font-size:24px;top:-1.7em;transition:font-size 0.218s ease-out}.permission-bar{margin-top:-100px;opacity:0;pointer-events:none;position:absolute;width:500px;transition:opacity 0.218s ease-in,margin-top .4s ease-in}.s2wfp .permission-bar{margin-top:-300px;opacity:1;transition:opacity .5s ease-out 0.218s,margin-top 0.218s ease-out 0.218s}.permission-bar-gradient{box-shadow:0 1px 0px #4285f4;height:80px;left:0;margin:0;opacity:0;pointer-events:none;position:fixed;right:0;top:-80px;transition:opacity 0.218s,box-shadow 0.218s}.s2wfp .permission-bar-gradient{box-shadow:0 1px 80px #4285f4;opacity:1;pointer-events:none;animation:allow-alert .75s 0 infinite;animation-direction:alternate;animation-timing-function:ease-out;transition:opacity 0.218s,box-shadow 0.218s}.f6F9Be{position:absolute;bottom:0;width:100%}.fbar a{text-decoration:none;white-space:nowrap}.fbar{margin-left:-27px}.Fx4vi{padding-left:27px;margin:0 !important}#fsl{white-space:nowrap}.f6F9Be{background:#f2f2f2;line-height:40px;padding-bottom:12px}.f6F9Be.TrMVnc{padding-top:12px}.f6F9Be.dc8jac{padding-top:24px}.B4GxFc{margin-left:var(--center-abs-margin);}.fbar p,.fbar a{color:#70757a}.fbar a:hover{color:#4d5156}.fbar{font-size:14px}.RLQCVb{line-height:40px}.RLQCVb a{cursor:pointer;font-weight:bold;text-decoration:none}.SLbK8e{max-height:16px;vertical-align:text-top}.b0KoTc{color:#70757a;padding-left:27px}.b2hzT{border-bottom:1px solid #dadce0}.Q8LRLc{font-size:15px}.known_loc{forced-color-adjust:none;background:#4285f4}@media (prefers-color-scheme:dark) and (forced-colors:active){.known_loc{background:Highlight}}.unknown_loc{background:#70757a}.smiUbb img{margin-right:4px}.smiUbb{margin-left:var(--center-abs-margin);line-height:15px;color:#70757a;}#swml{display:inline-block;margin-left:13px;padding-left:16px;border-left:1px solid #dadce0}.KwU3F{color:#1a0dab}.GNm3Qb{display:inline-block}.xSQxL{color:#1a0dab;cursor:pointer;display:inline-block}.HDOrGf{line-height:40px}.EYqSq{margin:6px 4px 9px 0;border-radius:100%;display:inline-block;height:10px;vertical-align:middle;width:10px}.dfB0uf{color:#4d5156;font-weight:bold}.OosGzb{width:376px}.hObAcc{margin-left:4px;margin-right:4px}.U8shWc{background-color:transparent;border:none;border-radius:8px;border-radius:8px;box-sizing:border-box;cursor:pointer;display:inline-block;font-size:14px;font-weight:500;padding-top:6px;padding-bottom:3px;min-width:88px;position:relative;text-decoration:none !important;-webkit-user-select:none;white-space:nowrap}.U8shWc:disabled,.U8shWc[disabled]:not([disabled=false]){pointer-events:none}.U8shWc.fSXIc{min-width:64px}.U8shWc.hpZDWd{color:#fff}.hpZDWd:hover{background-color:rgba(204,204,204,.15)}.hpZDWd:focus{background-color:rgba(204,204,204,.15)}.hpZDWd:active{background-color:rgba(204,204,204,.25)}.U8shWc.hpZDWd:disabled,.U8shWc.hpZDWd[disabled]:not([disabled=false]){color:rgba(255,255,255,.30) !important}.Omzzbd{white-space:normal}.Z7swgb{padding:14px 0}.ozC9Cd{color:#fff;padding-top:4px;margin-bottom:-4px}.nPDzT{align-items:center;display:inline-flex;}a.nPDzT{border-radius:20px;text-decoration:none}"
          }}
        />{" "}
        <div />
        <div
          jscontroller="MTV2Lb"
          style={{ display: "none" }}
          src="/uviewer?q=google+random+number+generator&sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&origin=https%3A%2F%2Fwww.google.com"
          id="Rvx4kc"
          jsaction="rcuQ6b:npT2md;u0pjoe:Hq0NGf"
        >
          <iframe src="/uviewer?q=google%20random%20number%20generator&sca_esv=564974394&rlz=1C5CHFA_enUZ1068UZ1068&origin=https%3A%2F%2Fwww.google.com" />
        </div>
        <div
          jscontroller="W0N1pf"
          className="fp-nh cjGgHb d8Etdd LcUz9d b30Rkd ecJEib"
          id="DDeXhf"
          jsaction="u0pjoe:Hq0NGf"
        >
          <c-wiz
            className="VuvQze DWVRvc LtDEb P3Xfjc SSPGKf BIdYQ"
            jsshadow=""
            jsdata="deferred-vfe_uviewer_0"
            data-p='%.@.["google random number generator",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,["CAISvwwg6qZTIJKwUyCW2FMgrpJUIJmmVCCttGsgyt6YASD8kMUHII-3xQcg6MbFByC378UHIIqExgcg7JXGByCVl8YHIOCcxgcg3Z_GByCPrsYHIImvxgcg37HGByD-uMYHIJnRxgcg7NLGByD31MYHIMPcxgcggOXGByCmh8cHIPyPxwcgjabHByCjpscHIPemxwcgtrvHByD2y8cHINLNxwcgkNHHByD-6McHIKrsxwcgovXHByC4kMgHIIabyAcgiqjIByDKqcgHIJiuyAcgrK7IByDCusgHILy7yAcguMbIByCqrckHIIvHyQcgpMrJByDa6skHIKbtyQcgo-7JByCHg8oHIMCDygcg3onKByDUlcoHIO2xygcgn-DJCSDs9ckJIPz5yQkgxIHKCSCE54QKINqKlAogi7-vDCCozK8MIOO40Awg57jQDCC1_vkMIL-ing0gis-eDSDm4p4NINn6ng0gppifDSDcoZ8NIN6hnw0g0aSfDSCoqZ8NIPK1nw0gvbafDSDEtp8NIMfKnw0girWoEiDPtqgSIM7AqBIgi8uoEiCBzKgSIN_SqBIggdOoEiDL2qgSILrbqBIg5duoEiCW3qgSILDozRMg5e_NEyDm8M0TIPrxzRMg5fPqFCDA-eoUILKy8RQgs83xFCCn1fEUILvf8RQgzN_xFCD33_EUIOLj8RQg6d-eFSDygqAVIPWCoBUg-IKgFSCc4uwVIJaD0hYglODSFiDm-NIWIJCL0xYgiJjTFiDMo9MWIInH0xYgoM3TFiDr29MWILDp0xYgr-vTFiDp9tMWIK-G1BYg8aLUFiDZpNQWIO2n1BYggK3UFiC8utQWIK3A1BYg7M7UFiCn19QWILLi1BYg8fDUFiDYj9UWIJGW1RYg_LbVFiC-19UWILn91RYgzP_VFiCkhdYWIPad1hYgjaDWFiDwtdYWIMa21hYg0cDWFiD7wNYWIM_T1hYgseTWFiDw69YWIMHw1hYg-fTWFiC499YWII751hYg7ovXFiDpjdcWIJGR1xYgyZzXFiCZndcWIPie1xYgx5_XFiDypdcWILC-1xYg0L7XFiDbvtcWINXI1xYg1snXFiDeydcWIOHJ1xYg4snXFiCR0NcWIKrW1xYggdfXFiDk2NcWIIzg1xYgnePXFiDy59cWIIrv1xYgvvDXFiCw8dcWINnx1xYgwv7XFiC1v-8WIKrw8BYgyOT0FiDL5PQWINfo9BYgsu70FiDP7vQWIIrv9BYgt_H0FiCo9PQWILv29BYgzv30FiCq__QWIIWB9RYgnIL1FiCthfUWIJGH9RYggpD1FiCXlPUWILOU9RYgypX1FiDLmvUWILWb9RYggqX1FiCVp_UWIJ-s9RYgvoiMFyD-oZIXIOSTkxcgpIWUFyDRuZUXINPQlhcg19CWFyCy0pcXILvklxcgkoWaFyDEnJsXIKSimxcgs9GbFyCh8Z4XIKXpoBcgqe2iFyD2laUXIKbKpRcgi52mFyDuvaYXINXmqxcgkYXZFyCbzOUXIO2i6BcgtJ_wFyDfofMXIJmTiRgg3qqMGCDe1I8YIIqr7CEgma7sISChvPQhIIfs_CEgrcD-ISDKkoUiIPbLiiIg5d6oIiC25qgiIM7tqCIgxO6oIiCY8KgiIMX1qCIgrOWwIiCv6bAiIPPpsCIgh-uwIiDF67AiIJfssCIg5u2wIiCp-rAiIPWBsSIgy4OxIiDJhrEiILeMsSIg-IyxIiDMjbEiIP2jsSIgn6axIiDaprEiIOCssSIgvK6xIiCNsrEiIL62sSIgsrexIiDturEiIO69sSIg5s2xIiDxzrEiIPPPsSIg09KxIiD74LEiIITmsSIgyO2xIiCg8bEiINbysSIg9fOxIiDE9bEiIPX2sSIglvexIiDg-LEiIOH8sSIg7vyxIiDD_bEiIKKBsiIgsoayIiC1hrIiIKCNsiIgiY6yIiDqkLIiINySsiIgk5iyIiC9nLIiIPWesiIgzaCyIiDioLIiIKChsiIgp6OyIiDuo7IiILClsiIgt6yyIiCKsLIiILWzsiIgkrayIiD9ubIiII27siIg_LuyIiDnwLIiIKvCsiIg08yyIiDfzbIiIPDNsiIg9dSyIiCe17IiINTazyw="]]]'
            jsmodel="hc6Ubd oSegn"
            c-wiz=""
            jscontroller="iaRXBb"
            jsaction="rcuQ6b:npT2md;bXJUz:uj875b;vYB8Wd:e4mHGd;"
          >
            <div
              id="Sva75c"
              jsname="Sva75c"
              jscontroller="ZfBJ7b"
              jsaction="vYB8Wd:zQYYb;agoMJf:mhSdVe;d9N7hc:onf9S;"
              className="RfPPs"
              style={{
                display: "none",
                left: 1215,
                right: "unset",
                width: 487,
                top: 144,
                height: "calc(100% - 144px)"
              }}
            >
              <div jsname="DbrZPc" style={{ width: "100%" }} />
            </div>
            <c-data id="vfe_uviewer_0" />
          </c-wiz>
        </div>
        <div id="lfootercc">
          <div id="ENaIjb" />
          <div
            id="reviewDialog"
            data-async-context="async_id_prefix:"
            data-jiis="up"
            data-async-type="reviewDialog"
            data-async-context-required="async_id_prefix"
            className="yp"
          />
          <div id="dbg_" />
        </div>
        <div id="sZmt3b">
          <div id="i58Mw" className="ABMFZ" />
        </div>
        <div id="snbc">
          <div jsname="sM5MNb" aria-live="polite" className="jhZvod" />
          <div jsname="sM5MNb" aria-live="polite" className="LH3wG" />
          <div jsname="sM5MNb" aria-live="polite" className="LH3wG" />
          <div jsname="sM5MNb" aria-live="polite" className="LH3wG" />
          <div jsname="sM5MNb" aria-live="polite" className="LH3wG" />
          <div
            jsname="sM5MNb"
            aria-live="polite"
            className="LH3wG"
            style={{ zIndex: 2000 }}
          />
          <div
            jsname="sM5MNb"
            aria-live="polite"
            className="LH3wG"
            style={{ zIndex: 2000 }}
          />
          <div
            jsname="sM5MNb"
            aria-live="polite"
            className="LH3wG"
            style={{ zIndex: 2000 }}
          />
        </div>
        <div className="gb_ed" ng-non-bindable="">
          Приложения Google
        </div>
        <div className="gb_q" ng-non-bindable="">
          <div className="gb_zc">
            <div>Аккаунт Google</div>
            <div className="gb_zb">SHAHZOD AXMEDOV</div>
            <div>developershahzod@gmail.com</div>
          </div>
        </div>
        <iframe
          id="hfcr"
          src="https://accounts.google.com/RotateCookiesPage?og_pid=1&rot=3&origin=https%3A%2F%2Fwww.google.com&exp_id=3701169"
          style={{ display: "none" }}
        />
      </>
      
      
      
    )
  }
}
