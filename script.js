$(document).ready(function() {
  var varProcessList, varObj, dictionaryOfImages, FlowableInfo, currentField, varTypeTemp, FormFieldList, FoundRequired, currentAttributeValue, currentAttributeDefault, currentAttributeRequired, checkBoxValue1, currentDictionary, TEC1Text1DefaultText, TEC1Text2DefaultText, twoPointsPos, DictionaryCurrentPage, emailErrorMsg, linkIDVar, TED2CurrentOption, MSCemailCurrentText, WhoIAm, checkFormatReturnValue, currentValueElement, currentFormatElement, processDefKey, lastTemplate, processHistoricVar, baseFlowableURL, basicAuth, ExecID, currentTemplate, getTasksForProcessIDRequest, getTasksForProcessIDUrl, BTStatus, getProcessDefRequest, getProcessDefURL, FieldCheckboxCount, currentType, FieldTextCount, flistNum, fdepIdList, fIdList, fpardepIdList, formDefGetRequest, formDefGetURL, GlucoseResultText, lastMealType, lastMealTime, lastTimeOfInsulinIntake, glucoseResult, lastGlucoseReadingTime, checkBoxValue3, checkBoxValue2, TED2txtTimeDefaultText, queryProcessInstRequest, queryProcessInstBody, TempList, queryProcessInstURL, actionTaskRequest, actionTaskBody, actionTaskURL, fieldListGetRequest, fieldListGetURL, formPropertyNameList, formPropertyNameGlobal, formDataGetRequest, formDataGetURL, saveFormVarRequest, saveFormVarURL, saveFormRequest, saveFormBody, saveFormURL, StartProcessRequest, startProcessBody, StartProcessURL, saveVarNextRequest, saveVarNextURL, deleteVarNextRequest, deleteVarNextURL, variableName, linkID, pList, pListItemID, pDictionaryKey, pDictionaryAttributeValue, template, pDictionaryKeyValue, sFormatType, sFormat, sValueToCheck, processID, ProcessKey, formkey, ProcessDeID, EmailToCheck, atask1ID, formID, taskID, ProcessDefID, atask2ID, ProcessDefinID;
  /**
   * Describe this function...
   */
  function followLink(variableName, linkID) {
    // Block#: ^V/6f4;?$5KIyqFqLjJg
    $('[obj-name="TDB1imgHourglass"]').show(); // Block#: %LYG=*oNt#2ZN$#+#H$~
    com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TDB1imgHourglass", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(dictionaryOfImages, 'hourglass'))); // Block#: C0A8BFZd!fmGd3E$_idG
    varObj = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();;
    // Block#: cxv`#nzdmu?|.Mb@#FHF
    varProcessList = [];
    // Block#: }lbri.@}uf.a)-jrImKx
    com.fc.JavaScriptDistLib.ListLibrary.listAdd(varProcessList, {
      'name': variableName,
      'type': 'string',
      'value': linkID,
      'scope': 'local',
    })
    // Block#: Zg(rVQCI1=;aLrT+3d80
    SaveVariablesAndNext();
  }
  /**
   * Describe this function...
   */
  function storeCurrentFieldsTEC1() {
    // Block#: tg7o$5-wu#6CA%eTOQ#{
    if(FormFieldList.length != 0) {
      // Block#: Zw|H*A62NHz_wqM7S/R~
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TEC1lblErrorMessages", ''); // Block#: $4*Rz8=t;DfT!EWnjNMC
      currentDictionary = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();;
      // Block#: (*srrely(}}-sW~,.r$[
      var index2_end = FormFieldList.length;
      var index2_inc = 1;
      if(1 > index2_end) {
        index2_inc = -index2_inc;
      }
      for(index2 = 1; index2_inc >= 0 ? index2 <= index2_end : index2 >= index2_end; index2 += index2_inc) {
        // Block#: ~=n~VEV}2%BT4Ut~]=MG
        currentDictionary = FormFieldList[index2 - 1];
        // Block#: jlTtQy*jkXb9sPx`o1$@
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentDictionary, 'InternalID'), "EQUAL", 'text1')) {
          // Block#: 4Ya]65m7~%lN_rw)Tf6W
          setDictionaryAtttributeInList(FormFieldList, index2 - 1, 'value', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TEC1Textbox1"));
        }
        // Block#: u2]]vTtj`-h3A_OKuXKP
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentDictionary, 'InternalID'), "EQUAL", 'text2')) {
          // Block#: (k}/]wBHDF0A`gQs(x!B
          setDictionaryAtttributeInList(FormFieldList, index2 - 1, 'value', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TEC1Textbox2"));
        }
        // Block#: (G+a;P{p8XobF$#2g*+_
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentDictionary, 'InternalID'), "EQUAL", 'boolean1')) {
          // Block#: |ytl+o!.u;XV:4MA3z]4
          setDictionaryAtttributeInList(FormFieldList, index2 - 1, 'value', checkBoxValue1);
        }
      }
      // Block#: JS0(9gnZ:E#a(`Di;zN8
      var index3_end = FormFieldList.length;
      var index3_inc = 1;
      if(1 > index3_end) {
        index3_inc = -index3_inc;
      }
      for(index3 = 1; index3_inc >= 0 ? index3 <= index3_end : index3 >= index3_end; index3 += index3_inc) {
        // Block#: 8EC{(phyy`J(xrj5yXL*
        currentField = FormFieldList[index3 - 1];
        // Block#: (@x=!;~o1+Yjuv)EC:Fo
        currentAttributeRequired = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'required'));
        // Block#: sTftpa6]SBaRv|!430!}
        currentAttributeValue = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'value'));
        // Block#: jx#Ps}($H6w]cy(t47Q1
        currentAttributeDefault = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'default'));
        // Block#: ^B0EXn~[Y5_^OXQ7Cq70
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'ID'), "EQUAL", 'birthdate') &&
          !checkFormat('date', '00/00/0000', currentAttributeValue)) {
          // Block#: f@*Me+{G_CLu?7yuC4]U
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TEC1lblErrorMessages", ([com.fc.JavaScriptDistLib.Label.getProperty["Text"]("TEC1lblErrorMessages"), (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'name')), '  is not the correct format. '].join(''))); // Block#: |Zqj*9Jf1E`(H;I=ROyv
          FoundRequired = true;
        }
        // Block#: JubK)*~z^5~^2pBMpDj:
        if(currentAttributeRequired && (com.fc.JavaScriptDistLib.TextLib.textComparison(currentAttributeValue, "EQUAL", currentAttributeDefault) ||
            com.fc.JavaScriptDistLib.TextLib.textContains(currentAttributeValue, '**Required')
          )) {
          // Block#: %dSwnzmAK3;}@9Kv06B]
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TEC1lblErrorMessages", ([com.fc.JavaScriptDistLib.Label.getProperty["Text"]("TEC1lblErrorMessages"), (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'name')), '  is  (**Required).   '].join(''))); // Block#: %sULtueP33:Gytf7bdD#
          FoundRequired = true;
        }
      }
      // Block#: ,9r{dYW=nZ4!J9=Y/$qH
      if(!FoundRequired) {
        // Block#: hsZ5_MPb%*Def3:2tR%|
        var index4_end = FormFieldList.length;
        var index4_inc = 1;
        if(1 > index4_end) {
          index4_inc = -index4_inc;
        }
        for(index4 = 1; index4_inc >= 0 ? index4 <= index4_end : index4 >= index4_end; index4 += index4_inc) {
          // Block#: z5s8e+n9dbeB}+=uxp,l
          currentField = FormFieldList[index4 - 1];
          // Block#: %S/Nc=OXz;](=-y^J-{5
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(varObj, com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'ID'), com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'value'))
          // Block#: HuI=cfUFRY?E$rNLbbc#
          varTypeTemp = (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'type')));
          // Block#: 5.wzkWYs}{Kvj]-x`(^f
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(varTypeTemp, "EQUAL", 'text')) {
            // Block#: J4~}y8b}a2Ylzrk{ixf4
            varTypeTemp = 'string';
          }
          // Block#: {lh@NbsGHV^M}cr.Gp@h
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(varProcessList, {
            'name': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'ID')),
            'type': varTypeTemp,
            'value': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'value')),
            'scope': 'local',
          })
        }
        // Block#: P7,]iJM#YF)Yww*`IEeT
        SaveFormData();
      } else {
        // Block#: bmApZAAmhG#,L?1{]TuI
        $('[obj-name="TEC1imgHourglass"]').hide();
      }
    } else {
      // Block#: U#^;G_rDw[09u8kT^Af.
      ActionCompleteOnTask((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'ProcTaskID')));
    }
  }
  /**
   * Describe this function...
   */
  function setDictionaryAtttributeInList(pList, pListItemID, pDictionaryKey, pDictionaryAttributeValue) {
    // Block#: @5-;Xyr(A?yHwj($^/@=
    currentField = pList[pListItemID];
    // Block#: d,h}XCm})h3_Fb9v9wyS
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(currentField, pDictionaryKey, pDictionaryAttributeValue)
    // Block#: 1y7f}avQ9^|r(ZVD#tNo
    pList[pListItemID] = currentField;
  }
  /**
   * Describe this function...
   */
  function fillFormVariables() {
    // Block#: 97=2O4t3)YQExKWLc1Q$
    DictionaryCurrentPage = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();;
    // Block#: .K}i4~xjhUFudd[]icmB
    var index1_end = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FormPropListID')).length;
    var index1_inc = 1;
    if(1 > index1_end) {
      index1_inc = -index1_inc;
    }
    for(index1 = 1; index1_inc >= 0 ? index1 <= index1_end : index1 >= index1_end; index1 += index1_inc) {
      // Block#: ,]8i8,JXE`hftzukqs/c
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(DictionaryCurrentPage, (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FormPropListID'))[index1 - 1], (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FormPropListName'))[index1 - 1])
    }
    // Block#: Cm3@b)2M#-UAjKy*`woP
    displayPageEngine();
  }
  /**
   * Describe this function...
   */
  function TED1updateCurrentPage(template) {
    // Block#: }9UoPw@_4bkZ*Oq?BtYM
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED1lblTitle", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'title'))); // Block#: 4Qz`8@.rXaRzwS#lpDy0
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED1lblSubTitle", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'subTitle'))); // Block#: lsr9OU0yN;+-d:#PiD:v
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED1lblMainText", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'mainText'))); // Block#: 5O#F4(wG1^JVM#L+v(A#
    com.fc.JavaScriptDistLib.Button.setProperty["Text"]("TED1btnPrev", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'prevButton'))); // Block#: =KyKZ.g~}C~/pj,RMqrf
    com.fc.JavaScriptDistLib.Button.setProperty["Text"]("TED1btnNext", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'nextButton'))); // Block#: IL_yg!AxDpvCzFD9u-c,
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED1lblIIcons", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'iconLabels'))); // Block#: :Pr*`%#{3SnhpTDh.8OW
    com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED1imgIcons", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(dictionaryOfImages, com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'icons')))); // Block#: d^vv!oGL,S/Ac1B}AZ]F
    com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED1imgFooterLogo", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(dictionaryOfImages, com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'footerImage')))); // Block#: RFNH}5boM+Fd1Ax3g|3j
    $('[obj-name="TED1imgHourglass"]').hide();
  }
  /**
   * Describe this function...
   */
  function getDictionaryFromListWithKey(pList, pDictionaryKey, pDictionaryKeyValue) {
    // Block#: y::pHo33+|-0`-Z]?v{8
    var index_end = pList.length;
    var index_inc = 1;
    if(1 > index_end) {
      index_inc = -index_inc;
    }
    for(index = 1; index_inc >= 0 ? index <= index_end : index >= index_end; index += index_inc) {
      // Block#: :Vf2ixGliQ?_AX.6(F-+
      currentField = pList[index - 1];
      // Block#: L9co|56w)1/Y4qw9P_JJ
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, pDictionaryKey), "EQUAL", pDictionaryKeyValue)) {
        // Block#: -Z=~mYcKUj!n22wHWgRY
        currentField = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, pDictionaryKey));
      }
    }
    return currentField;
  }
  /**
   * Describe this function...
   */
  function checkFormat(sFormatType, sFormat, sValueToCheck) {
    // Block#: `7X^y6P9skMi7rxwTirp
    checkFormatReturnValue = true;
    // Block#: e;B-UPjVwvc!|67ARP(%
    if(com.fc.JavaScriptDistLib.TextLib.textComparison(sFormatType, "EQUAL", 'e-mail')) {
      // Block#: n1/Q#Lmpmi0cr3*1@z#!
      if(com.fc.JavaScriptDistLib.TextLib.textContains(sValueToCheck, '@')) {
        // Block#: DA(HY@B;r.)*+m51dw}9
        checkFormatReturnValue = true;
      } else {
        // Block#: Y$[B4MJ?hr6E)H[zqNpl
        checkFormatReturnValue = false;
      }
    }
    // Block#: O%1F(Z-7KO~Y~,P3-%qh
    if(com.fc.JavaScriptDistLib.TextLib.textComparison(sFormatType, "EQUAL", 'time')) {
      // Block#: @3nkBG8YM-eBcbH_HRuI
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(sFormat.length, "EQ", sValueToCheck.length)) {
        // Block#: S;81kOS):Y,emL]7/2Mt
        var index_end2 = sValueToCheck.length - 1;
        var index_inc2 = 1;
        if(0 > index_end2) {
          index_inc2 = -index_inc2;
        }
        for(index = 0; index_inc2 >= 0 ? index <= index_end2 : index >= index_end2; index += index_inc2) {
          // Block#: mKUEE}8ckKJL=0FTItqp
          currentFormatElement = com.fc.JavaScriptDistLib.TextLib.textSubstring(sFormat, index, 1);
          // Block#: 8q|LSsCIsdBTQ+vkr[r?
          currentValueElement = com.fc.JavaScriptDistLib.TextLib.textSubstring(sValueToCheck, index, 1);
          // Block#: Uk`Lu+=1j)#Om?M1o/nn
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentFormatElement, "EQUAL", '0')) {
            // Block#: ClG{Yj#gAxX$x;}gWlT%
            if(!com.fc.JavaScriptDistLib.MathLibrary.isNumber(com.fc.JavaScriptDistLib.MathLibrary.toNumber(currentValueElement))) {
              // Block#: ~ohQLu;.DMKO4/`-cku|
              checkFormatReturnValue = false;
            }
          }
          // Block#: UL.~{SJb0aNA3]Q%{rU_
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentFormatElement, "EQUAL", ':')) {
            // Block#: *%0+DGmqtEY3@?/mW#P.
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(currentValueElement, "EQUAL", ':')) {
              // Block#: TpyoM)M17b(MfdTVKq03
              checkFormatReturnValue = false;
            }
          }
        }
        // Block#: REiRNFvcO4RT)_mM#vc1
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.TextLib.textSubstring(sValueToCheck, 0, 2)), "GT", 23)) {
          // Block#: )sGi`|gqi0YJW(opDg)?
          checkFormatReturnValue = false;
        }
        // Block#: #yRIc*c@U[A3x9`[KgbZ
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.TextLib.textSubstring(sValueToCheck, 3, 2)), "GT", 59)) {
          // Block#: b!R#0{a}GEXqry#2Ap6S
          checkFormatReturnValue = false;
        }
      } else {
        // Block#: {$=u(Za/a$4cu!FQTrhj
        checkFormatReturnValue = false;
      }
    } else {}
    // Block#: MoAoAUvgw:BpaiZ*;;~D
    if(com.fc.JavaScriptDistLib.TextLib.textComparison(sFormatType, "EQUAL", 'date')) {
      // Block#: [usx.sQ#I$V{HSKWf.kS
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(sFormat.length, "EQ", sValueToCheck.length)) {
        // Block#: ;8x;P:]bu;aYjd?q~]CH
        var index_end3 = sValueToCheck.length - 1;
        var index_inc3 = 1;
        if(0 > index_end3) {
          index_inc3 = -index_inc3;
        }
        for(index = 0; index_inc3 >= 0 ? index <= index_end3 : index >= index_end3; index += index_inc3) {
          // Block#: g*Q/QgTKE[RXLt#pmGM0
          currentFormatElement = com.fc.JavaScriptDistLib.TextLib.textSubstring(sFormat, index, 1);
          // Block#: 0LFJ]:m|Wf7N@ns/C.=A
          currentValueElement = com.fc.JavaScriptDistLib.TextLib.textSubstring(sValueToCheck, index, 1);
          // Block#: np`v-cucA~E_jg4S?p/Q
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentFormatElement, "EQUAL", '0')) {
            // Block#: :Y}|_512`mEpS`Z|P`i?
            if(!com.fc.JavaScriptDistLib.MathLibrary.isNumber(com.fc.JavaScriptDistLib.MathLibrary.toNumber(currentValueElement))) {
              // Block#: [5;:{7xO8Fx1eW?X.YT:
              checkFormatReturnValue = false;
            }
          }
          // Block#: EUU(y4^XKON}v-:=#h*R
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentFormatElement, "EQUAL", '/')) {
            // Block#: ;)Y@T@M#m8/[Th?^pcr7
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(currentValueElement, "EQUAL", '/')) {
              // Block#: xm99rAg!x=%|zy5@_|Li
              checkFormatReturnValue = false;
            }
          }
        }
        // Block#: qY#G.MuEbZt$]7uU:n-s
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.TextLib.textSubstring(sValueToCheck, 0, 2)), "GT", 31)) {
          // Block#: KfHVyqh]OatCFxZ{~c!n
          checkFormatReturnValue = false;
        }
        // Block#: ca^R9|^8[[Z3^J}^V+C?
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.TextLib.textSubstring(sValueToCheck, 3, 2)), "GT", 12)) {
          // Block#: Ou[;WuGa#?D{P?ResXwB
          checkFormatReturnValue = false;
        }
        // Block#: lMR.og.%NYhjKt*m%-cw
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.TextLib.textSubstring(sValueToCheck, 5, 4)), "GT", 2017)) {
          // Block#: MTTGz;Tl]|6(PU!oDEjp
          checkFormatReturnValue = false;
        }
      } else {
        // Block#: C=m]Vx!A^Rl{hi[SEs=`
        checkFormatReturnValue = false;
      }
    } else {}
    return checkFormatReturnValue;
  }
  /**
   * Describe this function...
   */
  function initialize() {
    // Block#: v:Y7f}Yq@?A%?cW3lq$i
    ExecID = 0;
    // Block#: {38C0~nmW6_F`d+NX88t
    basicAuth = 'Basic YWRtaW46dGVzdA==';
    // Block#: mODQ*!=P)^j%J]@.RFE8
    baseFlowableURL = 'https://f.snapp.click:8443/flowable-task/';
    // Block#: XIxJ:G6;G5+_L?QVJ5DE
    processDefKey = 'SnapClinicalDemo5';
    // Block#: lYk/n4Y3k}7.-*p`Uy0d
    processHistoricVar = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();;
    // Block#: FAk;qJ_fPBO1-Y/d=cKk
    FlowableInfo = {
      'ActProcDefKey': '',
      'ProcInstID': '',
      'ProcExecID': '',
      'ProcTaskID': '',
      'ProcTaskName': '',
      'FormKey': '',
      'FparentdeploID': '',
      'FdeploID': '',
      'FormID': '',
      'FirstRun': true,
      'FieldsListID': [],
      'FieldsListName': [],
      'FieldsListType': [],
      'FieldsListRequired': [],
      'FormPropListID': [],
      'FormPropListName': [],
      'FormPropListType': [],
    };
    // Block#: 6ZQEz2ku%[zG(}:15gyv
    lastTemplate = '';
    // Block#: /DLv0dqj0I%Bn!qdB]JZ
    initImages();
    // Block#: *weuL{DPi.^{/m2iw)Mq
    getProcessDefID(processDefKey);
  }
  /**
   * Describe this function...
   */
  function displayPageEngine() {
    // Block#: xJ]x$E4pHy,hO?=TW;Cq
    currentTemplate = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'templateType'));
    // Block#: w.}h[b~c@Gd#*rJ=]gQ9
    if(currentTemplate == 'TDB1') {
      // Block#: wlIK1@BT$[j)%,M(c!vn
      if(currentTemplate != lastTemplate) {
        // Block#: jTbruLvkNfcTgbgKqmNy
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        hideScreen.hide();
        let showScreen = $('[obj-name="TDB1"]');
        showScreen.show();
        history.pushState({
          'view': 'TDB1'
        }, 'TDB1', 'TDB1');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      }
      // Block#: O2*D@yDC8-*u+,JBh1KR
      TDB1updateCurrentPage(DictionaryCurrentPage);
      // Block#: HRx/gvI!1.qX13]Cgj#^
      lastTemplate = 'TB1';
    }
    // Block#: 07[dm?B3LsAze5SuW|(M
    if(currentTemplate == 'TEC1') {
      // Block#: K%s#6=uz015y7/(nhcWa
      if(currentTemplate != lastTemplate) {
        // Block#: p[L#f.lK^Hgs/C|wyN8V
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        hideScreen.hide();
        let showScreen = $('[obj-name="TEC1"]');
        showScreen.show();
        history.pushState({
          'view': 'TEC1'
        }, 'TEC1', 'TEC1');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      }
      // Block#: (d*]/3gB27uS]Ue!A4b^
      TEC1updateCurrentPage(DictionaryCurrentPage);
      // Block#: !l-Dx-j77PT$IxPz*EEx
      lastTemplate = 'TEC1';
    }
    // Block#: RH*{=dMA*2ooD62T=dK!
    if(currentTemplate == 'TEC2') {
      // Block#: waYw!AYwMN[9DaBc,b/T
      if(currentTemplate != lastTemplate) {
        // Block#: z=^)oDUpZPeg_]|N]v%b
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        hideScreen.hide();
        let showScreen = $('[obj-name="TEC2"]');
        showScreen.show();
        history.pushState({
          'view': 'TEC2'
        }, 'TEC2', 'TEC2');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      }
      // Block#: fRJwxcXN#^lc|FJ83hk(
      TEC2updateCurrentPage(DictionaryCurrentPage);
      // Block#: ():b/:p#?EA^TM@`3n%h
      lastTemplate = 'TEC2';
    }
    // Block#: ,?gkXdU.#Famoi0.sul{
    if(currentTemplate == 'TED1') {
      // Block#: {.QdNvL*9jrM4itEd/0%
      if(currentTemplate != lastTemplate) {
        // Block#: :Mw2Wc|]3TxOa!]Us|3(
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        hideScreen.hide();
        let showScreen = $('[obj-name="TED1"]');
        showScreen.show();
        history.pushState({
          'view': 'TED1'
        }, 'TED1', 'TED1');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      }
      // Block#: :aBPpm(s|N7YI;U6aFOW
      TED1updateCurrentPage(DictionaryCurrentPage);
      // Block#: )kbYS*Z-((T:i0jmPM`x
      lastTemplate = 'TED1';
    }
    // Block#: t]lQu:R4kA1bUd@ANof_
    if(currentTemplate == 'TED2') {
      // Block#: fJkVk^L0dS%[w,o!cRNl
      if(currentTemplate != lastTemplate) {
        // Block#: /*!%,sph1b(UWY%:Wc)w
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        hideScreen.hide();
        let showScreen = $('[obj-name="TED2"]');
        showScreen.show();
        history.pushState({
          'view': 'TED2'
        }, 'TED2', 'TED2');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      }
      // Block#: l7@u--Q|GNfo`lOSZqcJ
      TED2updateCurrentPage(DictionaryCurrentPage);
      // Block#: d/Fq,_n~8gN8CJ5p3~Ss
      lastTemplate = 'TED2';
    }
    // Block#: -2%ko*csb}FB`FoU:w(X
    if(currentTemplate == 'TED3') {
      // Block#: s;-!SjNd{dLIFRKJk{zs
      if(currentTemplate != lastTemplate) {
        // Block#: 4H.sj_!*J{#[SMof%5M3
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        hideScreen.hide();
        let showScreen = $('[obj-name="TED3"]');
        showScreen.show();
        history.pushState({
          'view': 'TED3'
        }, 'TED3', 'TED3');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      }
      // Block#: kdy:2p7pj;*b|y%$UE76
      TED3updateCurrentPage(DictionaryCurrentPage);
      // Block#: (2~{oW-t`vRv2DjT#eqh
      lastTemplate = 'TED3';
    }
    // Block#: c{UXJUJ~^(#Z=#`uY6*4
    if(currentTemplate == 'STRT') {
      // Block#: 5g|H)j.scZ{%Ox+)Ag0{
      varObj = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();;
      // Block#: gk@tf4*9l]l@AtqP;**|
      varProcessList = [];
      // Block#: EbIT2OQIl|`,)r4j1fk0
      if(com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FirstRun')) {
        // Block#: ]vKGx$t{0}xhN/jw?~r{
        com.fc.JavaScriptDistLib.ListLibrary.listAdd(varProcessList, {
          'name': 'firstrun',
          'value': 'yes',
          'type': 'string',
          'scope': 'local',
        })
      } else {
        // Block#: Y-jEj2LLX#m;+9X:EA:N
        com.fc.JavaScriptDistLib.ListLibrary.listAdd(varProcessList, {
          'name': 'firstrun',
          'value': 'no',
          'type': 'string',
          'scope': 'local',
        })
      }
      // Block#: %%upx16Tu,`uIkn,{qH_
      SaveVariablesAndNext();
    }
  }
  /**
   * Describe this function...
   */
  function getTasks(processID) {
    // Block#: jntvN~O|$n7mM$)c0^fZ
    getTasksForProcessIDUrl = [baseFlowableURL, 'process-api/runtime/tasks?processInstanceId=', processID].join('');
    // Block#: {cz=flY/3a|UG[;RBR2|
    getTasksForProcessIDRequest = (com.fc.JavaScriptDistLib.Network.createHTTPRequest(getTasksForProcessIDUrl, 'GET'));
    // Block#: GJkRMdOZx6-16)V?Hp^]
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(getTasksForProcessIDRequest, 'Authorization', basicAuth); // Block#: 3peLd~_0bH-IngN=0JXa
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(getTasksForProcessIDRequest, 'Content-Type', 'application/json'); // Block#: 5:`;}?U^9Ol3%b5qlM`6
    com.fc.JavaScriptDistLib.Network.sendHTTPRequest(getTasksForProcessIDRequest,
      function(success_data) {
        try {
          // Block#: }eJ+%gMdtUz_v_]DVf0=
          com.fc.JavaScriptDistLib.JSON.parseJSONDataWithCallback(success_data,
            function(parsed_json) {
              // Block#: aQl1U%6@z,a{QoQ~H%?N
              if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.total')), "GT", 0)) {
                // Block#: /}K%oGzPD@BAAq2~YX`U
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'ProcExecID', com.fc.JavaScriptDistLib.TextLib.convertToText((com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.data[:].executionId')).slice(-1)[0]))
                // Block#: T*tzq.+v%6,]X.RAAkhy
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'ProcTaskID', com.fc.JavaScriptDistLib.TextLib.convertToText((com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.data[:].id')).slice(-1)[0]))
                // Block#: nzEP;M6sTz~b{pxZ*V$H
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'ProcTaskName', com.fc.JavaScriptDistLib.TextLib.convertToText((com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.data[:].name')).slice(-1)[0]))
                // Block#: -ZE5,RP[v0gfH,3^BYol
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'FormKey', com.fc.JavaScriptDistLib.TextLib.convertToText((com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.data[:].formKey')).slice(-1)[0]))
                // Block#: Z|dkVibHrGB7o8H9F14|
                ActionClaimOnTask((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'ProcTaskID')));
              } else {
                // Block#: ,X0!::/p@+nMO2_$FVqQ
                let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
                hideScreen.hide();
                let showScreen = $('[obj-name="MSC"]');
                showScreen.show();
                history.pushState({
                  'view': 'MSC'
                }, 'MSC', 'MSC');
                hideScreen.triggerHandler('hide');
                showScreen.triggerHandler('show'); // Block#: w-j15ez0guronp0z~mwN
                $('[obj-name="MSCbtnVerify"]').hide(); // Block#: _=u3RH!F:.xWU(:)ye+J
                $('[obj-name="MSClblEmail"]').hide(); // Block#: Z=v|eHKQ=L3CpbC2g9#e
                $('[obj-name="MSCtxtEmail"]').hide(); // Block#: jO-Hnxjl*J#=Rn[-(w+y
                $('[obj-name="MSCtxtPID"]').hide(); // Block#: m17yPE}j#RDdP%!Ed86j
                $('[obj-name="MSClblPID"]').hide(); // Block#: ^!sKD0$Hb?Hf?w%[pUQ8
                $('[obj-name="MSClblMessages"]').hide(); // Block#: h-?lF2?$=G#hbS,91uVK
                com.fc.JavaScriptDistLib.Application.quitApp();
              }
            },
            function(error_message) {
            });
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      },
      function(error_data) {
        try {
          com.fc.JavaScriptDistLib.Network.HTTPNetworkException(error_data);
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      });
    // Block#: ^A;J?2d0R[01fj;?=G9`
    $('[obj-name="MSCimgHourglass"]').hide();
  }
  /**
   * Describe this function...
   */
  function TDB1updateCurrentPage(template) {
    // Block#: qo)ZY}?/?w;5hcke%puq
    $('[obj-name="TDB1imgLink1"]').hide(); // Block#: 8PKbDr]$?IR!Fzx|`2d1
    $('[obj-name="TDB1imgLink2"]').hide(); // Block#: YH(ZaOxRj!6Wf$Gr])/W
    $('[obj-name="TDB1imgLink3"]').hide(); // Block#: 39{fOz9oRl$ydn@wjGV*
    $('[obj-name="TDB1imgLink4"]').hide(); // Block#: zvNIu~}nj|QUc^CSo[~f
    $('[obj-name="TDB1imgLink5"]').hide(); // Block#: [aSehM?==$4G=DYg}u8l
    $('[obj-name="TDB1imgLink6"]').hide(); // Block#: oK=9}2%XzUj|^VnJvP~*
    $('[obj-name="TDB1lblLink1"]').hide(); // Block#: 8MZjmCT/Tap!xc-%^-n0
    $('[obj-name="TDB1lblLink2"]').hide(); // Block#: PdTZUqSu?7Pu2oL4@mZj
    $('[obj-name="TDB1lblLink3"]').hide(); // Block#: f~+pK0MXY!$#+YhsTZmW
    $('[obj-name="TDB1lblLink4"]').hide(); // Block#: oT1m@p$v0qAmHM-lJGF*
    $('[obj-name="TDB1lblLink5"]').hide(); // Block#: IQ,3x{6PhT-%t[=^$HVz
    $('[obj-name="TDB1lblLink6"]').hide(); // Block#: Bkx?_i,-Mj*WtK=E,u}-
    $('[obj-name="TDB1lblLinkText1"]').hide(); // Block#: G@%=(B4$ODo[i4:N,%FC
    $('[obj-name="TDB1lblLinkText2"]').hide(); // Block#: f|i~!@jAgrN-tGLTx@]r
    $('[obj-name="TDB1lblLinkText3"]').hide(); // Block#: dj:hxBBJn6~f{Qpgg$5K
    $('[obj-name="TDB1lblLinkText4"]').hide(); // Block#: ftSfoZvB$Q?E~wppu*98
    $('[obj-name="TDB1lblLinkText5"]').hide(); // Block#: byp{?Uh+AnL}l~|r;4uE
    $('[obj-name="TDB1lblLinkText6"]').hide(); // Block#: =ZgZEa?3=0me(,A$|;^c
    $('[obj-name="TDB1btnLinkGO1"]').hide(); // Block#: 4$;*f$c4},dai*c}3AKC
    $('[obj-name="TDB1btnLinkGO2"]').hide(); // Block#: 3NcS7#t#%M%/}@aLF:hu
    $('[obj-name="TDB1btnLinkGO3"]').hide(); // Block#: :6h/dikaihW$b*/T#H2c
    $('[obj-name="TDB1btnLinkGO4"]').hide(); // Block#: i-sLRW@~A+ZvV$n`p5oK
    $('[obj-name="TDB1btnLinkGO5"]').hide(); // Block#: WvC+AH)8)Vz/JC=bCt,f
    $('[obj-name="TDB1btnLinkGO6"]').hide(); // Block#: F!uEp{d6))4[vGkK*)q^
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TDB1lblTitle", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'title'))); // Block#: gSmaQatfx7IdMpRPih:3
    if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(template, 'link1')) {
      // Block#: BqSp``njZCSSwT*_J{3m
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TDB1lblLinkText1", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'link1'))); // Block#: BS6Zaa.xPJZ]/[jFfXA9
      $('[obj-name="TDB1imgLink1"]').show(); // Block#: xGpg7.9i6n*QBBBM3?pu
      $('[obj-name="TDB1lblLink1"]').show(); // Block#: `7n0ST;oSXj[Vz^k::qr
      $('[obj-name="TDB1lblLinkText1"]').show(); // Block#: 3a9Tyu1oIPdjdX2jYg*q
      $('[obj-name="TDB1btnLinkGO1"]').show();
    }
    // Block#: z9VA@L@T%ac7:vNL2l6R
    if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(template, 'link2')) {
      // Block#: r4OKS/cKK!UDdJ6eOc=4
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TDB1lblLinkText2", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'link2'))); // Block#: jbUyvV^=+)pzJ?SaEE[h
      $('[obj-name="TDB1imgLink2"]').show(); // Block#: ^(q069FhgglKq%[zYinr
      $('[obj-name="TDB1lblLink2"]').show(); // Block#: :gV-*Xs_NVgsv*^qpeFM
      $('[obj-name="TDB1lblLinkText2"]').show(); // Block#: -!O(=jwk5`EB.c?`[32+
      $('[obj-name="TDB1btnLinkGO2"]').show();
    }
    // Block#: [^CFle9}k|JsslS(NYxA
    if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(template, 'link3')) {
      // Block#: Rv(Qh?1M0Q6}:,%UcPS4
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TDB1lblLinkText3", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'link3'))); // Block#: GJgpxn]ko,Fp?xqWBNkb
      $('[obj-name="TDB1imgLink3"]').show(); // Block#: #G5*l/RN0bWgw{-)ncz[
      $('[obj-name="TDB1lblLink3"]').show(); // Block#: .tKF5FQ+xzHHlyK.E9J4
      $('[obj-name="TDB1lblLinkText3"]').show(); // Block#: LF;}e=+?AW$.7Vt!1q~[
      $('[obj-name="TDB1btnLinkGO3"]').show();
    }
    // Block#: nVZU5n]-.E-4oXa}1C#n
    if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(template, 'link4')) {
      // Block#: xEwh}/Tr_jzW3QXGHt_z
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TDB1lblLinkText4", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'link4'))); // Block#: vq};RLg8D5B+;ME;%*[,
      $('[obj-name="TDB1imgLink4"]').show(); // Block#: ,(xre/5y*lqf6:X?T9c-
      $('[obj-name="TDB1lblLink4"]').show(); // Block#: MwH8.^J*Md:kOz`{WsPT
      $('[obj-name="TDB1lblLinkText4"]').show(); // Block#: gP%a5qgJH3zcNamAn?dS
      $('[obj-name="TDB1btnLinkGO4"]').show();
    }
    // Block#: ?nzsZXrOw(X9*YYhTN#]
    if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(template, 'link5')) {
      // Block#: wAcNH6g2C=BaXaEc+PNS
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TDB1lblLinkText5", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'link5'))); // Block#: $X#SU#xFR2||h-tyVN!f
      $('[obj-name="TDB1imgLink5"]').show(); // Block#: .hJ,o;P18DG6tX*[5:*g
      $('[obj-name="TDB1lblLink5"]').show(); // Block#: dB|L3!:RXpuA3DUFu2D^
      $('[obj-name="TDB1lblLinkText5"]').show(); // Block#: 6sC5uczf#)Q|I6tNGX^l
      $('[obj-name="TDB1btnLinkGO5"]').show();
    }
    // Block#: ~VQr.JnLd14XD`S[k2.m
    if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(template, 'link6')) {
      // Block#: JC?9=lyv[lg,P@!El}NP
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TDB1lblLinkText6", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'link6'))); // Block#: aDcdsqNt%dJ2$4|6Y6VS
      $('[obj-name="TDB1imgLink6"]').show(); // Block#: k1(MMPa`-]44$T;bt2C
      $('[obj-name="TDB1lblLink6"]').show(); // Block#: cJC6+HvGpPc^gLTs!WV5
      $('[obj-name="TDB1lblLinkText6"]').show(); // Block#: WC._mKH*|*m(W(l@e[is
      $('[obj-name="TDB1btnLinkGO6"]').show();
    }
    // Block#: Hs-tkYOfZvJ$_Xzn#h.5
    com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TDB1imgFooterLogo", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(dictionaryOfImages, com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'footerImage')))); // Block#: 3KO1msk!@nBhm$b;9(.-
    $('[obj-name="TDB1imgHourglass"]').hide();
  }
  /**
   * Describe this function...
   */
  function getProcessDefID(ProcessKey) {
    // Block#: +qI[Qn^VyqP-DV1U5F0U
    getProcessDefURL = String(baseFlowableURL) + String('process-api/repository/process-definitions');
    // Block#: o3u(}_-*31;Yz}1ePd|.
    getProcessDefRequest = (com.fc.JavaScriptDistLib.Network.createHTTPRequest(getProcessDefURL, 'GET'));
    // Block#: V,a7a0Q1=MP9d4t5ttzK
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(getProcessDefRequest, 'Authorization', basicAuth); // Block#: e1ppEdPR:r=CyF/Re6EK
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(getProcessDefRequest, 'Content-Type', 'application/json'); // Block#: w~.Wt?wI(7.4Kxr]=,]B
    com.fc.JavaScriptDistLib.Network.addHTTPParams(getProcessDefRequest, 'key', ProcessKey); // Block#: pT]-lp_D8~QmAH?Mqs*M
    com.fc.JavaScriptDistLib.Network.addHTTPParams(getProcessDefRequest, 'size', '50'); // Block#: -#g(wA-?bEI_=cMIDNld
    com.fc.JavaScriptDistLib.Network.addHTTPParams(getProcessDefRequest, 'sort', 'version'); // Block#: Z[})JMJD.9xnabJ[NR16
    com.fc.JavaScriptDistLib.Network.addHTTPParams(getProcessDefRequest, 'order', 'desc'); // Block#: xsf2yh`DA9)p*G=ABy^j
    com.fc.JavaScriptDistLib.Network.sendHTTPRequest(getProcessDefRequest,
      function(success_data) {
        try {
          // Block#: `.ypi1g}1llL$1?zfZl7
          com.fc.JavaScriptDistLib.JSON.parseJSONDataWithCallback(success_data,
            function(parsed_json) {
              // Block#: TN:!$)}DvVAa.5cM1aJ(
              if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.total')), "GT", 0)) {
                // Block#: JNO1)#}xox@lDvSnkp2-
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'ActProcDefKey', com.fc.JavaScriptDistLib.TextLib.convertToText((com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.data[:].id'))[0]))
                // Block#: 9iILR}coxG``3B`FAM;9
                getHistoricVar((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'ActProcDefKey')));
              } else {
                // Block#: }^BR#O73;twq8]T@fvl8
                com.fc.JavaScriptDistLib.Label.setProperty["Text"]("MSClblMessages", ' Process Definition Key NOT FOUND');
              }
            },
            function(error_message) {
            });
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      },
      function(error_data) {
        try {
          com.fc.JavaScriptDistLib.Network.HTTPNetworkException(error_data);
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      });
  }
  /**
   * Describe this function...
   */
  function TEC1updateCurrentPage(template) {
    // Block#: 0ST0.R5A,=x9cSx*7V)]
    $('[obj-name="TEC1btnPrev"]').hide(); // Block#: t472_]OP0IHi}Xl$@E2=
    $('[obj-name="TEC1sldStep"]').hide(); // Block#: :ys;eqc:CD;J,!vmN_ka
    com.fc.JavaScriptDistLib.Button.setProperty["Text"]("TEC1btnPrev", '1'); // Block#: YE|NE^LIR03SV/eesx]+
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TEC1lblTitle", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'title'))); // Block#: O?#`j$w#uiu8c=L_C#2N
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TEC1lblsubTitle", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'subTitle'))); // Block#: S0_!$6M~e[Up{loNK~x:
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TEC1lblfooterText", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'footerText'))); // Block#: c$u~5sPI!tZxT8iQ5ysh
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TEC1lblMainText", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'mainText'))); // Block#: o~@LQ|!0ps?=jXE7gZn@
    if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'barCurrentValue')) != -1) {
      // Block#: so9Zu8,}Mz?!!8n%zt!?
      com.fc.JavaScriptDistLib.Slider.setProperty["Current value"]("TEC1sldStep", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'barCurrentValue'))); // Block#: ^,eXgbh@`d*A9.iJFl}.
      com.fc.JavaScriptDistLib.Slider.setProperty["Maximum value"]("TEC1sldStep", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'barMaxValue'))); // Block#: .o,3VHkQPT#z-VcH%Y#m
      $('[obj-name="TEC1sldStep"]').show();
    } else {
      // Block#: R:@}/j!mp6t#}3UDz*%C
      $('[obj-name="TEC1sldStep"]').hide();
    }
    // Block#: H)!cuS1Q{$iwG$=#dUu8
    com.fc.JavaScriptDistLib.Button.setProperty["Text"]("TEC1btnPrev", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'prevButton'))); // Block#: fOH}p(RLca6BHn!Ok#?.
    if(com.fc.JavaScriptDistLib.Button.getProperty["Text"]("TEC1btnPrev") != '1') {
      // Block#: XEYpDE$DW-)ohQr!EM4_
      com.fc.JavaScriptDistLib.Button.setProperty["Text"]("TEC1btnPrev", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'prevButton'))); // Block#: e.0^nM{x8$KjC]Cg!F?$
      $('[obj-name="TEC1btnPrev"]').show(); // Block#: Nb(l@;u$KslzVmY%-9*G
      com.fc.JavaScriptDistLib.Button.setProperty["x"]("TEC1btnNext", 200); // Block#: d,yw#zr+[qSaL`5B4+:,
      com.fc.JavaScriptDistLib.Button.setProperty["width"]("TEC1btnNext", 145);
    } else {
      // Block#: [+tiTMd/mKe~H71bH4Rz
      com.fc.JavaScriptDistLib.Button.setProperty["x"]("TEC1btnNext", 89); // Block#: oidsdx3+kP[BRoOYTS:U
      com.fc.JavaScriptDistLib.Button.setProperty["width"]("TEC1btnNext", 200);
    }
    // Block#: h4jwPn2FV]6FGd{eKFeO
    com.fc.JavaScriptDistLib.Button.setProperty["Text"]("TEC1btnNext", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'nextButton'))); // Block#: 24@`7nhgszM]Bs-v2t)J
    com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TEC1imgMain", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(dictionaryOfImages, com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'mainImage')))); // Block#: F0~pPBO$rP8S0Bp1:bLO
    com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TEC1imgFooterLogo", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(dictionaryOfImages, com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'footerImage')))); // Block#: 49Wc[[Ct~{eE=#A3Ou|#
    $('[obj-name="TEC1imgCheckBox"]').hide(); // Block#: VTX6dUXL78SI;bmgVp_3
    $('[obj-name="TEC1lblCheckBoxText"]').hide(); // Block#: Y1X/EJ!!-J%OXuTWA~XV
    $('[obj-name="TEC1Textbox1"]').hide(); // Block#: p)c/g`)~e1sfHcF+TiiP
    $('[obj-name="TEC1Textbox2"]').hide(); // Block#: [=Y$~@$GwWCc?s5;71TZ
    FieldCheckboxCount = 0;
    // Block#: 5uIc78JT]2)a8ms|[*`^
    FieldTextCount = 0;
    // Block#: 8MMX7527q|o+mgi{DBO_
    FormFieldList = [];
    // Block#: IZ!jJK`l*|Tz;:4G{X^m
    currentType = [];
    // Block#: nTM)B94wvn/2DGop4kEt
    if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListType')).length != 0) {
      // Block#: @LIb1Y[j?^[G^E*ef3b#
      var index_end4 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListType')).length;
      var index_inc4 = 1;
      if(1 > index_end4) {
        index_inc4 = -index_inc4;
      }
      for(index = 1; index_inc4 >= 0 ? index <= index_end4 : index >= index_end4; index += index_inc4) {
        // Block#: w?k.4dhnVYedKRl6Im5G
        currentType = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListType'))[index - 1];
        // Block#: qjrO`v1#)OgZtYGo7JXH
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentType, "EQUAL", 'text') ||
          com.fc.JavaScriptDistLib.TextLib.textComparison(currentType, "EQUAL", 'boolean')
        ) {
          // Block#: d{LGRbjRcFsO~97d;7n1
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentType, "EQUAL", 'text')) {
            // Block#: qG(AQ1YL-a7.Y|gyBJ?r
            FieldTextCount = FieldTextCount + 1;
            // Block#: b#C7+?9PeF~Y_.NH_*s$
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(FormFieldList, {
              'InternalID': String(currentType) + String(com.fc.JavaScriptDistLib.TextLib.convertToText(FieldTextCount)),
              'ID': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListID'))[index - 1],
              'name': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListName'))[index - 1],
              'type': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListType'))[index - 1],
              'required': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListRequired'))[index - 1],
              'default': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListDefault'))[index - 1],
              'value': '',
            })
            // Block#: (yf25/n9AZP8oZk@YNr;
            if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(FieldTextCount, "EQ", 1)) {
              // Block#: G|WuZ+7!0Zhq5b,z5^G#
              com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TEC1Textbox1", ((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListDefault'))[index - 1])); // Block#: GZTui4+ump4TUX50f`$r
              $('[obj-name="TEC1Textbox1"]').show(); // Block#: JV|sB~0)V!r2Q(uN.t~D
              TEC1Text1DefaultText = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListDefault'))[index - 1];
              // Block#: 7Oj2MT1^#-vp[bAeqJ3$
              if(com.fc.JavaScriptDistLib.TextLib.textComparison((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListRequired'))[index - 1], "EQUAL", 'true')) {
                // Block#: A.h`1r]hN1HgoHTI[!1O
                com.fc.JavaScriptDistLib.Textbox.setProperty["Background color"]("TEC1Textbox1", '#ffffcc');
              } else {
                // Block#: M4(3TLz?+^7w^}M^ZH$5
                com.fc.JavaScriptDistLib.Textbox.setProperty["Background color"]("TEC1Textbox1", '#ccffff');
              }
              // Block#: X?S!Y~X:+f@mPkrTY=}#
              if(com.fc.JavaScriptDistLib.TextLib.textComparison((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListID'))[index - 1], "EQUAL", 'birthdate')) {
                // Block#: IRVN2j*98O7DY73k7,mG
                com.fc.JavaScriptDistLib.Textbox.setProperty["width"]("TEC1Textbox1", 90);
              } else {
                // Block#: 3=zo)lr4_Fc:R*|7xh}f
                com.fc.JavaScriptDistLib.Textbox.setProperty["width"]("TEC1Textbox1", 270);
              }
            }
            // Block#: 0flyI)^BwwcH-[CH}Y0b
            if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(FieldTextCount, "EQ", 2)) {
              // Block#: 7$?^CNYYKC$a,vF+Y;)@
              TEC1Text2DefaultText = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListDefault'))[index - 1];
              // Block#: D,vzBIE+:C;rYV:,-0a?
              com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TEC1Textbox2", ((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListDefault'))[index - 1])); // Block#: 8l#{~U]#AT%uc4sqF!6q
              $('[obj-name="TEC1Textbox2"]').show(); // Block#: Qrv9*s5Cu_n#eIig!9Re
              if(com.fc.JavaScriptDistLib.TextLib.textComparison((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListRequired'))[index - 1], "EQUAL", 'true')) {
                // Block#: GnuWkQI(UT(?R-{%[S2n
                com.fc.JavaScriptDistLib.Textbox.setProperty["Background color"]("TEC1Textbox2", '#ffffcc');
              } else {
                // Block#: oO|qtiu=)WPgGpp@*HBu
                com.fc.JavaScriptDistLib.Textbox.setProperty["Background color"]("TEC1Textbox2", '#ccffff');
              }
            }
          }
          // Block#: aR?vn/5xQ-SZWh8iHXZP
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentType, "EQUAL", 'boolean')) {
            // Block#: AI/J5j3Bgr2FD^iqkWEC
            FieldCheckboxCount = FieldCheckboxCount + 1;
            // Block#: =9/Z!n#1gvSC`S1FPN@c
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(FormFieldList, {
              'InternalID': String(currentType) + String(com.fc.JavaScriptDistLib.TextLib.convertToText(FieldCheckboxCount)),
              'ID': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListID'))[index - 1],
              'name': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListName'))[index - 1],
              'type': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListType'))[index - 1],
              'required': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListRequired'))[index - 1],
              'default': false,
              'value': false,
            })
            // Block#: Fc2b#l$I]rFzqWY4}Pd=
            checkBoxValue1 = false;
            // Block#: (/$}gnGtU44nl!=PN6yY
            if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(FieldCheckboxCount, "EQ", 1)) {
              // Block#: [uj4/H~m,u*78PP*/s/1
              $('[obj-name="TEC1imgCheckBox"]').show(); // Block#: {kiHCp[i5XEPxNJ/F/)?
              $('[obj-name="TEC1lblCheckBoxText"]').show(); // Block#: nn_*YD3@gpRllCiJ6sGT
              com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TEC1lblCheckBoxText", ((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListName'))[index - 1]));
            }
          }
        }
      }
    }
    // Block#: je]-(AM{Wx^K+WIR7nh_
    $('[obj-name="TEC1imgHourglass"]').hide();
  }
  /**
   * Describe this function...
   */
  function GetListFormDef(formkey) {
    // Block#: y@mUqTs)T6QV6?jDV?5E
    formDefGetURL = String(baseFlowableURL) + String('form-api/form-repository/form-definitions');
    // Block#: jU?sSo#|?`ZX7w,NC3@j
    formDefGetRequest = (com.fc.JavaScriptDistLib.Network.createHTTPRequest(formDefGetURL, 'GET'));
    // Block#: _h)aLd4za$N)~m{m+.Ng
    com.fc.JavaScriptDistLib.Network.addHTTPParams(formDefGetRequest, 'key', formkey); // Block#: *+O+1oFIM$Dsiz$,gD)U
    com.fc.JavaScriptDistLib.Network.addHTTPParams(formDefGetRequest, 'size', '200'); // Block#: nWXwK5xm~C?8+5QLD@pT
    com.fc.JavaScriptDistLib.Network.addHTTPParams(formDefGetRequest, 'sort', 'version'); // Block#: j9qrquN5.Z^G]|n:ug)n
    com.fc.JavaScriptDistLib.Network.addHTTPParams(formDefGetRequest, 'order', 'desc'); // Block#: %J71uml88lvr2y|ztX0E
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(formDefGetRequest, 'Authorization', basicAuth); // Block#: ,KTmw.5~L|J!B[$L;m|c
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(formDefGetRequest, 'Content-Type', 'application/json'); // Block#: .}3;(n|Js8JHjO0{DEEo
    com.fc.JavaScriptDistLib.Network.sendHTTPRequest(formDefGetRequest,
      function(success_data) {
        try {
          // Block#: D^}%QZc1,eRJb1,B@s0(
          com.fc.JavaScriptDistLib.JSON.parseJSONDataWithCallback(success_data,
            function(parsed_json) {
              // Block#: ,~W)^xEXFiPJDvx74Tr/
              fIdList = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.data[:].id'));
              // Block#: %vsRXWL_EiNvyx?_aNWX
              fdepIdList = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.data[:].deploymentId'));
              // Block#: !P+b`w76%8-$4vnzLuyN
              fpardepIdList = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.data[:].parentDeploymentId'));
              // Block#: So3{(U-(S~;|EZh$e+]$
              flistNum = fpardepIdList.indexOf(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FparentdeploID')));
              // Block#: k3*^{{HL)Z:R|%ssvw/~
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'FormID', fIdList[flistNum])
              // Block#: MD*G)v8z]vpkbVuc/~%g
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'FdeploID', fdepIdList[flistNum])
              // Block#: vLa+NH~rJ`_T;O:]{#Wi
              GetListFields((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FormID')));
            },
            function(error_message) {
            });
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      },
      function(error_data) {
        try {
          com.fc.JavaScriptDistLib.Network.HTTPNetworkException(error_data);
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      });
  }
  /**
   * Describe this function...
   */
  function TED3updateCurrentPage(template) {
    // Block#: 8dhuay]{[_5M!sqJ42F?
    $('[obj-name="TED3imgRadioWaves"]').hide(); // Block#: 8p/`!(qGS#?]?4%+*%WP
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED3lblTitle", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'title'))); // Block#: bsk5ah+cb9D!i*/!x=Zt
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED3lblSubTitle", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'subTitle'))); // Block#: O|{XY[q3LUb8,$A~Lq=Z
    com.fc.JavaScriptDistLib.Slider.setProperty["Current value"]("TED3sldStep", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'barCurrentValue'))); // Block#: !u*Wk9l@|hI*!k5Hqes+
    com.fc.JavaScriptDistLib.Slider.setProperty["Maximum value"]("TED3sldStep", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'barMaxValue'))); // Block#: CzItc^;PZzeND@9iyIhB
    com.fc.JavaScriptDistLib.Button.setProperty["Text"]("TED3btnPrev", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'prevButton'))); // Block#: lzyk!lE.mr7T9QM(xi=u
    com.fc.JavaScriptDistLib.Button.setProperty["Text"]("TED3btnNext", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'nextButton'))); // Block#: ;Tu,(rHF,oz9p3b]6x?#
    FieldTextCount = 0;
    // Block#: %T{!_VI.fS@2MGjk-7Y=
    FormFieldList = [];
    // Block#: _{/S`}`qmb{OrDDI3eG#
    currentType = [];
    // Block#: !%O?([]duPWSuv1^zy|B
    if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'label1')) != null) {
      // Block#: ~*4`e+RS6oA3,)-W8Zbb
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'prevPage'), "EQUAL", 'page9')) {
        // Block#: DhNwA-eY:meLXsE340Un
        glucoseResult = com.fc.JavaScriptDistLib.MathLibrary.mathRoundPrecision(Math.random() * 150, 0) +
          30;
        // Block#: i(^Zk{7hKdxW%AW-TEcs
        lastGlucoseReadingTime = String(com.fc.JavaScriptDistLib.TextLib.textSubstring(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.TimeLibrary.createTimeNow()), 1, 11)) + String(com.fc.JavaScriptDistLib.TimeLibrary.textFromTime((com.fc.JavaScriptDistLib.TimeLibrary.createTimeNow()), "TIME_24"));
        // Block#: B50sQU3tGV5B*$!VbhM|
        GlucoseResultText = ['<br /><br /><span style="font-family:Trebuchet MS"><span style="font-size:16px"><font color="#808080">Glucose reading: Time and Result</font></span></span><br /><br />&nbsp;', lastGlucoseReadingTime, ' , ', (com.fc.JavaScriptDistLib.TextLib.convertToText(glucoseResult))].join('');
        // Block#: m$Bh7J]vbB{V/-/}CRV,
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(glucoseResult, "LT", 70)) {
          // Block#: gOGU1Y9FQX~f$HFu_TXn
          GlucoseResultText = String(GlucoseResultText) + String('  mg/dL<br /><font color="#B22222">(hypoglicemic event)</font></div>');
          // Block#: {h$h~,YBKAtQa:O/i,Jg
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED3lbl1", (['<div style="text-align:center"><span style="font-size:20px"><span style="font-family:Trebuchet MS"><font color="#B22222">LOW</span> <font color="#B22222">', (com.fc.JavaScriptDistLib.TextLib.convertToText(glucoseResult)), ' mg/dL</font></span></div>'].join('')));
        } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(glucoseResult, "GTE", 70) &&
          com.fc.JavaScriptDistLib.MathLibrary.mathCompare(glucoseResult, "LT", 140)
        ) {
          // Block#: aBs$W`uYp-f1*Cek3y{/
          GlucoseResultText = String(GlucoseResultText) + String('  mg/dL</br>(normal event)</font></div>');
          // Block#: ]a@$:zR4c3]9.nxd%4j/
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED3lbl1", (['<div style="text-align:center"><span style="font-size:20px"><span style="font-family:Trebuchet MS">NORMAL</span> <font color="#00000">', (com.fc.JavaScriptDistLib.TextLib.convertToText(glucoseResult)), ' mg/dL</font></span></div>'].join('')));
        } else {
          // Block#: W%?.s`YPQ:Mfl9Sd$XGL
          GlucoseResultText = String(GlucoseResultText) + String('  mg/dL<font color="#B22222"></br>(hyperglicemic event)</font></div>');
          // Block#: ip/~Lasm%:+5t@R}b.@{
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED3lbl1", (['<div style="text-align:center"><span style="font-size:20px"><span style="font-family:Trebuchet MS"><font color="#B22222">HIGH</span> <font color="#B22222">', (com.fc.JavaScriptDistLib.TextLib.convertToText(glucoseResult)), ' mg/dL</font></span></div>'].join('')));
        }
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'prevPage'), "EQUAL", 'page10')) {
        // Block#: 4z1B}r3()XK*JS,nj,Nf
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED3lbl1", (['<p style="line-height:18px"><div style="text-align:center"><span style="font-size:18px"><b><font color="#4aa6c9">', (com.fc.JavaScriptDistLib.TimeLibrary.stringDayOfWeekFromDate((com.fc.JavaScriptDistLib.TimeLibrary.createTimeNow()))), ' ', (com.fc.JavaScriptDistLib.TimeLibrary.textFromTime((com.fc.JavaScriptDistLib.TimeLibrary.createTimeNow()), "DATE")), '</font></b></span><br /><br /><font color="#808080"><span style="font-size:16px"></br>Last time of insulin intake</font><br /><font color="#4aa6c9">', lastTimeOfInsulinIntake, '</font><br /></br><font color="#808080"><span style="font-size:16px">Last meal: time and type</font><br /><font color="#4aa6c9">', [lastMealTime, '  ,  ', lastMealType].join(''), GlucoseResultText, '</p>'].join('')));
      } else {
        // Block#: $-N-!}SszhySC,FzBH%g
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED3lbl1", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'label1')));
      }
      // Block#: I${2y_@`[=DUv}2,evS~
      $('[obj-name="TED3lbl1"]').show();
    } else {
      // Block#: !38.H?Lj?s0hveG98qS6
      $('[obj-name="TED3lbl1"]').hide();
    }
    // Block#: Sm0LMrmz|PcJZ^uhU3SP
    if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListType')).length != 0) {
      // Block#: SGe:Q{)WQ@c,ceqO?IpR
      var index5_end = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListType')).length;
      var index5_inc = 1;
      if(1 > index5_end) {
        index5_inc = -index5_inc;
      }
      for(index5 = 1; index5_inc >= 0 ? index5 <= index5_end : index5 >= index5_end; index5 += index5_inc) {
        // Block#: e#Mcj%i;*gWO3?J_RR-O
        currentType = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListType'))[index5 - 1];
        // Block#: CR786UkY7%OXan)HHj*Q
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentType, "EQUAL", 'text')) {
          // Block#: iz#]2LSd)r6$]j/31P4j
          FieldTextCount = FieldTextCount + 1;
          // Block#: jgXf`4}3aQI1%Mx|4Ohq
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(FormFieldList, {
            'InternalID': String(currentType) + String(com.fc.JavaScriptDistLib.TextLib.convertToText(FieldTextCount)),
            'ID': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListID'))[index5 - 1],
            'name': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListName'))[index5 - 1],
            'type': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListType'))[index5 - 1],
            'required': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListRequired'))[index5 - 1],
            'default': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListDefault'))[index5 - 1],
            'value': '',
          })
        }
      }
    }
    // Block#: g8U8Wc*5f]]Y3$]8`U2y
    BTStatus = 0;
    // Block#: ]q%C+x~.f!Yf27;3s0*f
    com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED3imgToggle1", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/147ff9b0-9c1d-4069-b23a-c443dbfd7bd9"))); // Block#: Np2F=)a]lyQ]q;U#*~Ri
    if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'showBT')) == 'TRUE') {
      // Block#: $,4.2O9QD^WGXzb[_dvP
      $('[obj-name="TED3imgToggle1"]').show(); // Block#: gW3V`47WKvb|z80XOlud
      $('[obj-name="TED3img1"]').show(); // Block#: 3Be0:FP}3(r*MQ,~k_1,
      $('[obj-name="TED3imgRadioWaves"]').hide();
    } else {
      // Block#: ga.Sy0ka{I~e+Bg~,x2^
      $('[obj-name="TED3imgToggle1"]').hide(); // Block#: JP_~rX.[#{yUe9O@+[C4
      $('[obj-name="TED3img1"]').hide(); // Block#: ,t9(J$m[:K*^IU#HUpC)
      $('[obj-name="TED3imgRadioWaves"]').hide();
    }
    // Block#: iDgr%t2eTi3uK#(}itVo
    com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED3imgMain", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(dictionaryOfImages, com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'mainImage')))); // Block#: Yp,=Br+Fn]#3bgAyJ8:U
    com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED3imgFooterLogo", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(dictionaryOfImages, com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'footerImage')))); // Block#: k=ndgIK:;WJFgMPRlHz?
    com.fc.JavaScriptDistLib.Label.setProperty["Text color"]("TED3lbl1", '#000000'); // Block#: tZ]g0kHo:XUSW7m+Xud~
    $('[obj-name="TED3imgHourglass"]').hide();
  }
  /**
   * Describe this function...
   */
  function initImages() {
    // Block#: j!DW0f]!{s*x-r;MEq0Y
    dictionaryOfImages = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();;
    // Block#: @xhUv.!7y_BskV(vA16b
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'verification', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/217e1921-4a36-42f0-95b3-0457793bdc29"))
    // Block#: rL8,W,@ZiG184]^E2U,p
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'lock', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/884b0bd2-8936-4a8a-920f-661244942a38"))
    // Block#: e-ZPdopCe#6Yu|7UxD2A
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'diagnose', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/ef948692-c2dc-4f39-baaf-527313358cd1"))
    // Block#: 4#`;C(_Nu]SP(LpBmQnU
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'footerLogo', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/b4114f4f-72a7-4413-90a0-5422b0b784a1"))
    // Block#: R6:pM$T_pRH6c:U~LIak
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'TED1Icons', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/7116ba9b-0832-4047-953c-448c4764aa2f"))
    // Block#: S*78a#`kZp,ZG8Y$@PNp
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'mealTime', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/c171217b-628b-4fd7-b952-e074e4e43ddc"))
    // Block#: Xm%4{hc^@0h}-wYC}@Pd
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'Glucometer', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/bec130a2-c6f0-48d4-9aaa-cd5b03575a0a"))
    // Block#: *Nr_rk{c1]k{~5CyNR)N
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'insulin', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/5bbfcabf-57fe-4579-b166-c9c20e15d763"))
    // Block#: ]K(27xHM.3@8O*w#9$NW
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'processComplete', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/5f1de44c-5f98-414a-8472-a71dd1126ce6"))
    // Block#: ^P0_t%yz[2iD3,}MOie/
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'about', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/ea64ee99-7090-441b-bbd2-d294211382c5"))
    // Block#: [CJ4M.mHc%[??Ta)ZA`e
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'eQualification', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/22be2712-5285-4290-90fc-fc1404123234"))
    // Block#: He5Wr@(P6LBoA+:#)1VZ
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'hospitalized', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/6395f26d-eaa9-4112-8832-5115b50e2cf4"))
    // Block#: ad-]Q+6,j|$hxxVIC(H~
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'documents', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/d57cf0bc-247f-4436-aec5-5efe585ea874"))
    // Block#: I?qDLjk32eK0Wb)}?U;M
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'homewireless', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/dc534750-9e07-4b41-b408-077be1b2bec2"))
    // Block#: YMQ^th80K!U%RAWD!Uy{
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'doctor', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/b10e75dd-5e33-4e5c-8c05-9d70616a1c4c"))
    // Block#: dc)^nz9e77|48BU3bWE8
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'notAllowed', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/9c3d0080-a65c-43de-88ec-a7a08e2a1004"))
    // Block#: L?uqz(hUx1Ijq!wX@JD~
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'FAQ', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/ea64ee99-7090-441b-bbd2-d294211382c5"))
    // Block#: x!?U:+(l|lM+5O623f84
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'hourglass', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/e61d073c-141f-4ce0-b7c0-6faaffd73690"))
  }
  /**
   * Describe this function...
   */
  function TEC2updateCurrentPage(template) {
    // Block#: w:^;6BSr0(%Rb1IU{#aa
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TEC2lblTitle", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'title'))); // Block#: ,,P_[ljGgac(p$je-U*W
    com.fc.JavaScriptDistLib.Button.setProperty["Text"]("TEC2btnPrev", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'prevButton'))); // Block#: XD9XNBhSt`$r+/jg5Jn+
    com.fc.JavaScriptDistLib.Button.setProperty["Text"]("TEC2btnNext", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'nextButton'))); // Block#: 2{7E?{9T.Os;()yQwN#_
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TEC2lblfooterText", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'footerText'))); // Block#: 4`:Igg%}+*|1VG6vc!H@
    com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TEC2imgFooterLogo", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(dictionaryOfImages, com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'footerImage')))); // Block#: JsDUOUqTl[;ODx$NdH#L
    $('[obj-name="TEC2imgHourglass"]').hide();
  }
  /**
   * Describe this function...
   */
  function TED2updateCurrentPage(template) {
    // Block#: N5vScfT.LaU!BenY_{|_
    $('[obj-name="TED2txtTimeFormat"]').hide(); // Block#: ,:YErC;hSfzLk*%b}2*z
    $('[obj-name="TED2txtTime"]').hide(); // Block#: {-8}jE-E8s?kFuWuOI_/
    com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TED2txtTime", ''); // Block#: 2i_h:~mNNk)FokJonxZ=
    $('[obj-name="TED2imgOpt1"]').hide(); // Block#: JGoj$CPtVZ?p$i|]zNpg
    $('[obj-name="TED2imgOpt2"]').hide(); // Block#: a/cmsPM6cfJWCu`5-M:B
    $('[obj-name="TED2imgOpt3"]').hide(); // Block#: }MUUjROfuFLLYwQ+gaJ1
    $('[obj-name="TED2lblOpt1"]').hide(); // Block#: fP5R10xTWRSy%x*z2R`Y
    $('[obj-name="TED2lblOpt2"]').hide(); // Block#: ^3MyPxQ]@??37G;T9cAq
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED2lblErrorMessages", ''); // Block#: wqT0bNWTsPauLnO{7(:?
    $('[obj-name="TED2lblOpt3"]').hide(); // Block#: dzmE99BcjdLFaSCBG5yM
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED2lblTitle", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'title'))); // Block#: [y8_)lW/2?Uyb(rlvNep
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED2lblSubTitle", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'subTitle'))); // Block#: zX(*GaizJlWCRd3{BHpf
    com.fc.JavaScriptDistLib.Button.setProperty["Text"]("TED2btnPrev", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'prevButton'))); // Block#: gv#e2k;S6A7hGU2#M!+Q
    com.fc.JavaScriptDistLib.Button.setProperty["Text"]("TED2btnNext", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'nextButton'))); // Block#: 2K!YcYJF~qz+0J7Q9:Zq
    com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED2imgMain", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(dictionaryOfImages, com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'mainImage')))); // Block#: ?gpqLBT$7uZ4x9(la1u^
    com.fc.JavaScriptDistLib.Slider.setProperty["Current value"]("TED2sldStep", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'barCurrentValue'))); // Block#: $4SBsMF2$(8M.Pl_GNbP
    com.fc.JavaScriptDistLib.Slider.setProperty["Maximum value"]("TED2sldStep", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'barMaxValue'))); // Block#: SoG%3rS;!2@}}e4wuBe+
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED2lbl1", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'label1'))); // Block#: yccqbjW24WJUMFW^P$|j
    if(!com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'label2'), "EQUAL", '-')) {
      // Block#: )z1B=H]G]iAzDScJ2C/8
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED2lbl2", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'label2')));
    } else {
      // Block#: XzLji^bDu_zL}b@LxBn|
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED2lbl2", '');
    }
    // Block#: ]m+m~`|3LL+baA*N]H[g
    com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED2imgFooterLogo", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(dictionaryOfImages, com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'footerImage')))); // Block#: *[:njbA^H`I:JynDU@.@
    FormFieldList = [];
    // Block#: A!XkchM5MNK`--Wv(#}6
    currentType = [];
    // Block#: q]nE08BN4W#r$Nv443TH
    FieldCheckboxCount = 0;
    // Block#: %UgmR9Dc74NCX~K[uX7!
    FieldTextCount = 0;
    // Block#: _O-kwi/{N!=T^H7^2l$J
    if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListType')).length != 0) {
      // Block#: 1b;c~!!ss(3CDYHDsyvs
      var index5_end2 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListType')).length;
      var index5_inc2 = 1;
      if(1 > index5_end2) {
        index5_inc2 = -index5_inc2;
      }
      for(index5 = 1; index5_inc2 >= 0 ? index5 <= index5_end2 : index5 >= index5_end2; index5 += index5_inc2) {
        // Block#: E)d(9Bj]#~vh--S5Lz!n
        currentType = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListType'))[index5 - 1];
        // Block#: 9,,GD;HC?doc.fFA]{PM
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentType, "EQUAL", 'text')) {
          // Block#: n1XTy8%2Ctc4RYT0XRU%
          FieldTextCount = FieldTextCount + 1;
          // Block#: tlL%eBqRLrn*6lz:McQ@
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(FormFieldList, {
            'InternalID': String(currentType) + String(com.fc.JavaScriptDistLib.TextLib.convertToText(FieldTextCount)),
            'ID': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListID'))[index5 - 1],
            'name': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListName'))[index5 - 1],
            'type': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListType'))[index5 - 1],
            'required': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListRequired'))[index5 - 1],
            'default': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListDefault'))[index5 - 1],
            'value': '',
          })
          // Block#: Rz_$]!l5h=XNCxSChdpK
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(FieldTextCount, "EQ", 1)) {
            // Block#: [{)idef?{~Ir:ILk}nHa
            $('[obj-name="TED2txtTime"]').show(); // Block#: |;sM%c!*/y7%4oAGbIUs
            $('[obj-name="TED2txtTimeFormat"]').show(); // Block#: 4o*W3CmC6$^gR,uFz@4q
            com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TED2txtTimeFormat", ((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListDefault'))[index5 - 1])); // Block#: iNB[ZdGyLg*{H6_I8Fak
            TED2txtTimeDefaultText = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListDefault'))[index5 - 1];
            // Block#: ]9,-m/A4idecTopc~j]u
            if(com.fc.JavaScriptDistLib.TextLib.textComparison((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListRequired'))[index5 - 1], "EQUAL", 'true')) {
              // Block#: 3$*W1!#7WpCG`D(i~NFD
              com.fc.JavaScriptDistLib.Textbox.setProperty["Background color"]("TED2txtTime", '#ffffcc'); // Block#: u!%wno+o1BH@RKTd-w4=
              com.fc.JavaScriptDistLib.Textbox.setProperty["Alpha"]("TED2txtTime", 80);
            } else {
              // Block#: df+;gjQL^2iJy4jC{q._
              com.fc.JavaScriptDistLib.Textbox.setProperty["Background color"]("TED2txtTime", '#ccffff');
            }
          }
        }
        // Block#: lbMaX:N@X*~gO;;l94f!
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentType, "EQUAL", 'boolean')) {
          // Block#: ,3P;~f-[PKqzxRO=O3Jq
          FieldCheckboxCount = FieldCheckboxCount + 1;
          // Block#: 0=-b9d6?NfD!DrgJL^aA
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(FormFieldList, {
            'InternalID': String(currentType) + String(com.fc.JavaScriptDistLib.TextLib.convertToText(FieldCheckboxCount)),
            'ID': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListID'))[index5 - 1],
            'name': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListName'))[index5 - 1],
            'type': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListType'))[index5 - 1],
            'required': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListRequired'))[index5 - 1],
            'default': false,
            'value': false,
          })
          // Block#: ~P+1QleI4c*pCLHdy,d6
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(FieldCheckboxCount, "EQ", 1)) {
            // Block#: ~rm+}9jhUHhSk5Be+ZSl
            com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED2imgOpt1", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/320408be-ac64-43eb-aa59-31b487d7ad5c"))); // Block#: XZ.:Pvn1;OyXrldoZPl/
            $('[obj-name="TED2imgOpt1"]').show(); // Block#: }taoMx=)fcAy7)nLsja#
            $('[obj-name="TED2lblOpt1"]').show(); // Block#: n9PAs=V`)X*HYWQTBJNL
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED2lblOpt1", ((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListName'))[index5 - 1])); // Block#: uyE~4l!Sr7cWD!4~AuwG
            checkBoxValue1 = false;
          }
          // Block#: /I2I79xRlWTU_K:Z}O@V
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(FieldCheckboxCount, "EQ", 2)) {
            // Block#: {CoXg7Dyn$st,kh#D;$C
            com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED2imgOpt2", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/320408be-ac64-43eb-aa59-31b487d7ad5c"))); // Block#: 8Pp$7pa1`?^WmkAN3zhn
            $('[obj-name="TED2imgOpt2"]').show(); // Block#: ~_/Swa3C!4[p_(S}Ug=z
            $('[obj-name="TED2lblOpt2"]').show(); // Block#: 3gFLe_F4Jde$}!OEj4@f
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED2lblOpt2", ((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListName'))[index5 - 1])); // Block#: ~OK/.M9@=@6|JsI6HC;W
            checkBoxValue2 = false;
          }
          // Block#: g%?sMlCuOxSf][;4(Rpc
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(FieldCheckboxCount, "EQ", 3)) {
            // Block#: 52Jl8R67%L%rl3,c25%g
            com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED2imgOpt3", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/320408be-ac64-43eb-aa59-31b487d7ad5c"))); // Block#: MH|JQ@[NPopl%k9I:5Y{
            $('[obj-name="TED2imgOpt3"]').show(); // Block#: 8:.OD:rzeM#3Gl!GRQ1:
            $('[obj-name="TED2lblOpt3"]').show(); // Block#: ]9`hC$7LF8vgN4MA)zRT
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED2lblOpt3", ((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FieldsListName'))[index5 - 1])); // Block#: ^G5RTz0;7=1e*dqB{(F}
            checkBoxValue3 = false;
          }
        }
      }
    }
    // Block#: HVVQ]lKWXO`#:KjLVP_i
    if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'defaultOption')) == 1) {
      // Block#: ?~ot%|DyE/8Frp`iJb`S
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED2imgOpt1", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/5764f934-f19d-469c-8012-293248ba464a"))); // Block#: kRxBpgRn[*RHk+7iVJK=
      TED2CurrentOption = 1;
    } else if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'defaultOption')) == 2) {
      // Block#: (_^POHMJ$N7/dXv2mzmc
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED2imgOpt2", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/5764f934-f19d-469c-8012-293248ba464a"))); // Block#: ?L[Dtc}r@NpESuudhx9Y
      TED2CurrentOption = 2;
    } else {
      // Block#: G:z`C76+|L=WwcD;Z^vs
      if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'defaultOption')) == 3) {
        // Block#: 1luVnRT+o`~Borez1nN7
        com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED2imgOpt3", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/5764f934-f19d-469c-8012-293248ba464a")));
      }
      // Block#: La$9xy?n;cavow%AuEJ[
      TED2CurrentOption = 3;
    }
    // Block#: ;9fSAk{3BNTD`[MJm}{e
    $('[obj-name="TED2imgHourglass"]').hide();
  }
  /**
   * Describe this function...
   */
  function queryProcessInst(ProcessDeID, EmailToCheck) {
    // Block#: yN${U6_f^V}l4i7{uc[.
    queryProcessInstURL = String(baseFlowableURL) + String('process-api/query/process-instances');
    // Block#: R3eaNzb}U)xa+rz~;HXc
    queryProcessInstRequest = (com.fc.JavaScriptDistLib.Network.createHTTPRequest(queryProcessInstURL, 'POST'));
    // Block#: 9*KM,]IM=[WdZl2sU*d~
    TempList = [{
      'name': 'initiator',
      'value': WhoIAm,
      'operation': 'equals',
    }];
    // Block#: =ivy5.zhODTq8wN}EHAH
    if(com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FirstRun')) {
      // Block#: @ycIZ*7UYk1?eBXuEAmC
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(EmailToCheck.length, "GT", 0)) {
        // Block#: E/,Q@mJ1aZoyshVP+Re,
        com.fc.JavaScriptDistLib.ListLibrary.listAdd(TempList, {
          'name': 'e-mail',
          'value': EmailToCheck,
          'operation': 'equals',
        })
      }
    }
    // Block#: Jz/2^[rXc_]R,G:Z[haW
    queryProcessInstBody = {
      'processDefinitionId': (com.fc.JavaScriptDistLib.TextLib.convertToText(ProcessDeID)),
      'includeProcessVariables': 'true',
      'variables': TempList,
    };
    // Block#: _j26FfWGCqhus%2P=3ea
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(queryProcessInstRequest, 'Authorization', basicAuth); // Block#: 3[wg8y2T^SR=3r$ElwsP
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(queryProcessInstRequest, 'Content-Type', 'application/json'); // Block#: bm`Bo?j^xoC1WQ25z?yB
    com.fc.JavaScriptDistLib.Network.addHTTPParams(queryProcessInstRequest, 'size', '50'); // Block#: Qpn%r4--zX/z5{VNB$o:
    com.fc.JavaScriptDistLib.Network.setHTTPBody(queryProcessInstRequest, com.fc.JavaScriptDistLib.JSON.covertToJSON(queryProcessInstBody)); // Block#: z1#aWKzv!;#7Y6uO(hE,
    com.fc.JavaScriptDistLib.Network.sendHTTPRequest(queryProcessInstRequest,
      function(success_data) {
        try {
          // Block#: wER/sv3D~t#H[LD+9Ysq
          com.fc.JavaScriptDistLib.JSON.parseJSONDataWithCallback(success_data,
            function(parsed_json) {
              // Block#: ,FQ9Jelo}[dO!:=b:P{t
              if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.total')), "GT", 0)) {
                // Block#: n*-6AC$Z=^_lEr4%)ErN
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'ProcInstID', com.fc.JavaScriptDistLib.TextLib.convertToText((com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.data[:].id')).slice(-1)[0]))
                // Block#: :+#S|:GrGe7Aej5Orv{a
                getTasks((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'ProcInstID')));
                // Block#: qKZ39mb./jM^JdLT/.WE
                com.fc.JavaScriptDistLib.Label.setProperty["Text"]("MSClblMessages", '<div style="text-align: center;"><font color="#4aa6c9"><span style="font-size:16px"><span style="font-family:Trebuchet MS">CONGRATULATIONS!&nbsp;<br />YOU HAVE BEEN VERIFIED</span></span></font></div>');
              } else {
                // Block#: aSk+m-:AU(+@s6`ik}~l
                if(com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FirstRun')) {
                  // Block#: JPAy,5+fxn5~otlZw}k_
                  com.fc.JavaScriptDistLib.Label.setProperty["Text"]("MSClblMessages", '<div style="text-align:center"><font color="#e64a4a"><span style="font-size:16px">Invalid PID or E-MAIL,</br>Please verify your input.</span></font></div>'); // Block#: |SK_mU.KQDoW8TpXv~MF
                  $('[obj-name="MSCimgHourglass"]').hide(); // Block#: .FmY++t!!(K]+5C{125t
                  $('[obj-name="MSCbtnVerify"]').show();
                } else {
                  // Block#: Kz|$9L%C.{E6zMwAChlN
                  StartProcess((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'ActProcDefKey')));
                }
              }
            },
            function(error_message) {
            });
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      },
      function(error_data) {
        try {
          com.fc.JavaScriptDistLib.Network.HTTPNetworkException(error_data);
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      });
  }
  /**
   * Describe this function...
   */
  function ActionClaimOnTask(atask1ID) {
    // Block#: 6F]|7u[bZ+;]*)m19fH}
    actionTaskURL = [baseFlowableURL, 'process-api/runtime/tasks/', atask1ID].join('');
    // Block#: 0rr--dH?~(?iGq5|eAq]
    actionTaskRequest = (com.fc.JavaScriptDistLib.Network.createHTTPRequest(actionTaskURL, 'POST'));
    // Block#: 6F8UARz`]j9ZIr:jIQl3
    actionTaskBody = {
      'action': 'claim',
      'assignee': (com.fc.JavaScriptDistLib.TextLib.convertToText(WhoIAm)),
    };
    // Block#: vaM?u.tUm%=k|UmITx_;
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(actionTaskRequest, 'Authorization', basicAuth); // Block#: LP/?Cg?Si=::N?:i7W.R
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(actionTaskRequest, 'Content-Type', 'application/json'); // Block#: E28#Lehn=WrK7.dSsSqW
    com.fc.JavaScriptDistLib.Network.setHTTPBody(actionTaskRequest, com.fc.JavaScriptDistLib.JSON.covertToJSON(actionTaskBody)); // Block#: ZevEX5XFjjjK!g63Zz:j
    com.fc.JavaScriptDistLib.Network.sendHTTPRequest(actionTaskRequest,
      function(success_data) {
        try {
          // Block#: ~%Y,#HEbc!3$8n/pvv=P
          getFormData(atask1ID);
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      },
      function(error_data) {
        try {
          com.fc.JavaScriptDistLib.Network.HTTPNetworkException(error_data);
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      });
  }
  /**
   * Describe this function...
   */
  function GetListFields(formID) {
    // Block#: }iUKpodvl7,jhPC^R^{h
    fieldListGetURL = [baseFlowableURL, 'form-api/form-repository/form-definitions/', (com.fc.JavaScriptDistLib.TextLib.convertToText(formID)), '/resourcedata'].join('');
    // Block#: WR0,Y(Tr:4YX53D-k`rf
    fieldListGetRequest = (com.fc.JavaScriptDistLib.Network.createHTTPRequest(fieldListGetURL, 'GET'));
    // Block#: Jysgq}!9L1B_*t|BBWIX
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(fieldListGetRequest, 'Authorization', basicAuth); // Block#: eI(ipz#9~+}Z08idMn4}
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(fieldListGetRequest, 'Content-Type', 'application/json'); // Block#: sTM74Nf}pR[6*(T=/Nm#
    com.fc.JavaScriptDistLib.Network.sendHTTPRequest(fieldListGetRequest,
      function(success_data) {
        try {
          // Block#: 3GOxl_cov+/MepSly^6{
          com.fc.JavaScriptDistLib.JSON.parseJSONDataWithCallback(success_data,
            function(parsed_json) {
              // Block#: bXw$dB}`#]m(+?Ypnc?@
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'FieldsListID', com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.fields[:].id'))
              // Block#: #uQJl}4~CjSCD0E9P*l7
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'FieldsListName', com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.fields[:].name'))
              // Block#: V9O_If{!oR|9v|-i)MbM
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'FieldsListType', com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.fields[:].type'))
              // Block#: l;;;A}4+Y6qlC(VK8EUD
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'FieldsListRequired', com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.fields[:].required'))
              // Block#: yMAL?^cyX(O5}giP?WJz
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'FieldsListDefault', com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.fields[:].placeholder'))
              // Block#: _pnS,T9VZb_@S7}fr1@T
              fillFormVariables();
            },
            function(error_message) {
            });
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      },
      function(error_data) {
        try {
          com.fc.JavaScriptDistLib.Network.HTTPNetworkException(error_data);
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      });
  }
  /**
   * Describe this function...
   */
  function getFormData(taskID) {
    // Block#: 7(]fP7oaQSgrq)KytEjp
    formDataGetURL = [baseFlowableURL, 'process-api/form/form-data?taskId=', taskID].join('');
    // Block#: 7%?fDg%AdW1wM_5Hhy`V
    formDataGetRequest = (com.fc.JavaScriptDistLib.Network.createHTTPRequest(formDataGetURL, 'GET'));
    // Block#: :EW=HaVBO=+vcRkA8hob
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(formDataGetRequest, 'Authorization', basicAuth); // Block#: KOS^i$=])-epb((@s.EH
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(formDataGetRequest, 'Content-Type', 'application/json'); // Block#: EL,0oJo#vQ9z:u?N=hz8
    com.fc.JavaScriptDistLib.Network.sendHTTPRequest(formDataGetRequest,
      function(success_data) {
        try {
          // Block#: TpKPQVc|GypXuzW=mE`e
          com.fc.JavaScriptDistLib.JSON.parseJSONDataWithCallback(success_data,
            function(parsed_json) {
              // Block#: r.nh!6aE2,.[#xm3+=]]
              formPropertyNameList = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.formProperties[:].name'));
              // Block#: $YGI^E4W_IM|Uf|QSSE{
              formPropertyNameGlobal = (com.fc.JavaScriptDistLib.TextLib.convertToText(formPropertyNameList[0]));
              // Block#: tbaglUCa8@|=RcrIUB4s
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'FparentdeploID', com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.deploymentId'))
              // Block#: pMEDv5Sn[|iL7/`yos=j
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'FormPropListID', com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.formProperties[:].id'))
              // Block#: $h@sQC_uq(1er=dONrBj
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'FormPropListName', com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.formProperties[:].name'))
              // Block#: 8fq{^[8+A-!utM{^jIpq
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'FormPropListType', com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.formProperties[:].type'))
              // Block#: xr_YS}-qr;LSzt0z#^h|
              if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FormKey')) == 'null' || com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FormKey'), "EQUAL", '')) {
                // Block#: 9TBxvJ9J=g{a6:hybVz:
                fillFormVariables();
              } else {
                // Block#: f]~rXiohX_;FKQRv#-C#
                GetListFormDef((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FormKey')));
              }
            },
            function(error_message) {
            });
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      },
      function(error_data) {
        try {
          com.fc.JavaScriptDistLib.Network.HTTPNetworkException(error_data);
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      });
  }
  /**
   * Describe this function...
   */
  function SaveFormDataAsVar() {
    // Block#: |uvw_Kgb@Nucz/HS^@tF
    saveFormVarURL = [baseFlowableURL, 'process-api/runtime/process-instances/', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'ProcInstID'))), '/variables'].join('');
    // Block#: _:A*Hth@[po:?-I|j+uM
    saveFormVarRequest = (com.fc.JavaScriptDistLib.Network.createHTTPRequest(saveFormVarURL, 'PUT'));
    // Block#: IE3x?3~%xMT?9S?YaiEn
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(saveFormVarRequest, 'Authorization', basicAuth); // Block#: W0rcd^Ht8%r_v-}/,F6U
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(saveFormVarRequest, 'Content-Type', 'application/json'); // Block#: 6ixx%5}@N]A)bd#.O]tr
    com.fc.JavaScriptDistLib.Network.setHTTPBody(saveFormVarRequest, varProcessList); // Block#: l~%U[|KcXpEofN{{(:,3
    com.fc.JavaScriptDistLib.Network.sendHTTPRequest(saveFormVarRequest,
      function(success_data) {
        try {
          // Block#: _~c|o;9+^pmh-@Z6+~9r
          ActionCompleteOnTask((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'ProcTaskID')));
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      },
      function(error_data) {
        try {
          com.fc.JavaScriptDistLib.Network.HTTPNetworkException(error_data);
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      });
  }
  /**
   * Describe this function...
   */
  function SaveFormData() {
    // Block#: 4R?sx`ADGJqVLHny2dDz
    saveFormURL = String(baseFlowableURL) + String('form-api/form/form-instances');
    // Block#: Z0{p$bR)L@,[h7EkWV%n
    saveFormRequest = (com.fc.JavaScriptDistLib.Network.createHTTPRequest(saveFormURL, 'POST'));
    // Block#: fB)N`qt3QStN$sdG$q7?
    saveFormBody = {
      'formDefinitionKey': (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FormKey'))),
      'processInstanceId': (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'ProcInstID'))),
      'taskId': (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'ProcTaskID'))),
      'variables': varObj,
    };
    // Block#: -w`=M:pwJL}or;!4k;U4
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(saveFormRequest, 'Authorization', basicAuth); // Block#: =ZK]u8HIPZJ4UUU|s6ZF
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(saveFormRequest, 'Content-Type', 'application/json'); // Block#: XL=)i4].Fg`W5BTlC/N6
    com.fc.JavaScriptDistLib.Network.setHTTPBody(saveFormRequest, com.fc.JavaScriptDistLib.JSON.covertToJSON(saveFormBody)); // Block#: yP1JyOepd~KpPiWe)K.5
    com.fc.JavaScriptDistLib.Network.sendHTTPRequest(saveFormRequest,
      function(success_data) {
        try {
          // Block#: +xNR)4ZQtv@@1S36nvF~
          SaveFormDataAsVar();
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      },
      function(error_data) {
        try {
          com.fc.JavaScriptDistLib.Network.HTTPNetworkException(error_data);
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      });
  }
  /**
   * Describe this function...
   */
  function StartProcess(ProcessDefID) {
    // Block#: :=Zahb0wk!wacQG=W#2?
    StartProcessURL = String(baseFlowableURL) + String('process-api/runtime/process-instances');
    // Block#: TTF2NjBRYV(%Im:BbEC-
    StartProcessRequest = (com.fc.JavaScriptDistLib.Network.createHTTPRequest(StartProcessURL, 'POST'));
    // Block#: gAGE~N)mTn#vB8=3{c[E
    startProcessBody = {
      'processDefinitionId': (com.fc.JavaScriptDistLib.TextLib.convertToText(ProcessDefID)),
      'businessKey': 'snapClinicalKey',
      'returnVariables': 'true',
      'variables': [{
        'name': 'initiator',
        'type': 'string',
        'value': WhoIAm,
        'scope': 'local',
      }],
    };
    // Block#: x,f/1~hzk.-`L{pFf2;c
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(StartProcessRequest, 'Authorization', basicAuth); // Block#: ~1sqDu:U/whhK721bNx8
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(StartProcessRequest, 'Content-Type', 'application/json'); // Block#: {HYYPtqn;*Mai!ZNOY_o
    com.fc.JavaScriptDistLib.Network.setHTTPBody(StartProcessRequest, com.fc.JavaScriptDistLib.JSON.covertToJSON(startProcessBody)); // Block#: n-pf1=ghA6eu]rKJRNfl
    com.fc.JavaScriptDistLib.Network.sendHTTPRequest(StartProcessRequest,
      function(success_data) {
        try {
          // Block#: h^;+J{|}PD`l;9ee42P2
          com.fc.JavaScriptDistLib.JSON.parseJSONDataWithCallback(success_data,
            function(parsed_json) {
              // Block#: nU!wxq{?QK%9*l[-+zB|
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'ProcInstID', com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.id'))
              // Block#: (p(,vz~VBJzV(9,wM}JM
              getTasks((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'ProcInstID')));
            },
            function(error_message) {
            });
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      },
      function(error_data) {
        try {
          com.fc.JavaScriptDistLib.Network.HTTPNetworkException(error_data);
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      });
  }
  /**
   * Describe this function...
   */
  function SaveVariablesAndNext() {
    // Block#: UsYyy!Q*cS)FY)b~?Xt(
    saveVarNextURL = [baseFlowableURL, 'process-api/runtime/process-instances/', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'ProcInstID'))), '/variables'].join('');
    // Block#: 7GDerrpu+6S:H}vqH~j%
    saveVarNextRequest = (com.fc.JavaScriptDistLib.Network.createHTTPRequest(saveVarNextURL, 'PUT'));
    // Block#: n:6Ui7=Gb?:500+6H[ZB
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(saveVarNextRequest, 'Authorization', basicAuth); // Block#: l?rY],|UH).|YXxr#lC#
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(saveVarNextRequest, 'Content-Type', 'application/json'); // Block#: a)PB~1hfs_HT5f?+40rc
    com.fc.JavaScriptDistLib.Network.setHTTPBody(saveVarNextRequest, varProcessList); // Block#: jtt#9R]V+]85X/{p%F(N
    com.fc.JavaScriptDistLib.Network.sendHTTPRequest(saveVarNextRequest,
      function(success_data) {
        try {
          // Block#: j[N2lSs@h^*^S)^ypyTQ
          ActionCompleteOnTask((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'ProcTaskID')));
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      },
      function(error_data) {
        try {
          com.fc.JavaScriptDistLib.Network.HTTPNetworkException(error_data);
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      });
  }
  /**
   * Describe this function...
   */
  function ActionCompleteOnTask(atask2ID) {
    // Block#: ]aBi~)s9:s,)2eVz4}@5
    actionTaskURL = [baseFlowableURL, 'process-api/runtime/tasks/', atask2ID].join('');
    // Block#: /wp(Eob0Wt8h~yY,Ti0t
    actionTaskRequest = (com.fc.JavaScriptDistLib.Network.createHTTPRequest(actionTaskURL, 'POST'));
    // Block#: FqWN@M8Ztp^v%{-g#ErQ
    actionTaskBody = {
      'action': 'complete',
      'assignee': (com.fc.JavaScriptDistLib.TextLib.convertToText(WhoIAm)),
    };
    // Block#: wSZWvDxWNa]75mop}.]0
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(actionTaskRequest, 'Authorization', basicAuth); // Block#: 8ftX{1;fy2%+`C+c1q)m
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(actionTaskRequest, 'Content-Type', 'application/json'); // Block#: 7rPs}gUM?-*4QNQUJ=26
    com.fc.JavaScriptDistLib.Network.setHTTPBody(actionTaskRequest, com.fc.JavaScriptDistLib.JSON.covertToJSON(actionTaskBody)); // Block#: 2kEbdgy{(pPg^z}RoZzc
    com.fc.JavaScriptDistLib.Network.sendHTTPRequest(actionTaskRequest,
      function(success_data) {
        try {
          // Block#: yW#Hq;ACXz69+{7$?ea)
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'FieldsListID', [])
          // Block#: d*BXlXxA`u9[*3qin72v
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'FieldsListName', [])
          // Block#: Y!e6OTU42|/P+,p5[o=+
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'FieldsListType', [])
          // Block#: JsOj^?b$AgsYP|HQGjIy
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'FieldsListRequired', [])
          // Block#: k|g8I?9QLsl2{j/#,eOH
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'FormPropListID', [])
          // Block#: SZ?8dXZfxjvPVKD;]oKP
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'FormPropListName', [])
          // Block#: 2K31zOk_5T=qzt9$[|.(
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'FormPropListType', [])
          // Block#: rl}:K=Ocrwm`G_fC?wF/
          getTasks((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'ProcInstID')));
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      },
      function(error_data) {
        try {
          com.fc.JavaScriptDistLib.Network.HTTPNetworkException(error_data);
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      });
  }
  /**
   * Describe this function...
   */
  function DeleteVariablesAndGotoNext() {
    // Block#: El5c[_CCHX@PY^+k4?[X
    deleteVarNextURL = [baseFlowableURL, 'process-api/runtime/tasks/', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'ProcTaskID'))), '/variables'].join('');
    // Block#: 5I{d(8KdU^sxw7SdB$S!
    deleteVarNextRequest = (com.fc.JavaScriptDistLib.Network.createHTTPRequest(deleteVarNextURL, 'DELETE'));
    // Block#: [M9R9v,Nq35e)Sw*VFl}
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(deleteVarNextRequest, 'Authorization', basicAuth); // Block#: :LAq{*?Zbm=?q?rBrt{P
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(deleteVarNextRequest, 'Content-Type', 'application/json'); // Block#: z=-i?O74af;!GB?;7V#R
    com.fc.JavaScriptDistLib.Network.setHTTPBody(deleteVarNextRequest, varProcessList); // Block#: {c8i=:!m5*MPMNHq182^
    com.fc.JavaScriptDistLib.Network.sendHTTPRequest(deleteVarNextRequest,
      function(success_data) {
        try {
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      },
      function(error_data) {
        try {
          com.fc.JavaScriptDistLib.Network.HTTPNetworkException(error_data);
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      });
  }
  /**
   * Describe this function...
   */
  function getHistoricVar(ProcessDefinID) {
    // Block#: )OmCDV)A{IO8F)m(+9ZM
    queryProcessInstURL = String(baseFlowableURL) + String('process-api/query/historic-process-instances');
    // Block#: *YPTMiMc%8YlO{EF1dSz
    queryProcessInstRequest = (com.fc.JavaScriptDistLib.Network.createHTTPRequest(queryProcessInstURL, 'POST'));
    // Block#: !QW0{.)n|wnudy7^EB)G
    TempList = [{
      'name': 'initiator',
      'value': WhoIAm,
      'operation': 'equals',
    }];
    // Block#: ]Oxy@{XW2D78[YlSRB@j
    if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(1, "EQ", 0)) {
      // Block#: 4XG)kybC*S5=:,8)h|Zo
      com.fc.JavaScriptDistLib.ListLibrary.listAdd(TempList, {
        'name': 'eQuestion6',
        'value': 'yes',
        'operation': 'equals',
      })
    }
    // Block#: K{M0fdli0.C]Quqblm.p
    com.fc.JavaScriptDistLib.ListLibrary.listAdd(TempList, {
      'name': 'iagree',
      'value': true,
      'operation': 'equals',
    })
    // Block#: o+|d6!Wf^[B^UEn-cM|u
    queryProcessInstBody = {
      'processDefinitionId': (com.fc.JavaScriptDistLib.TextLib.convertToText(ProcessDefinID)),
      'includeProcessVariables': 'true',
      'variables': TempList,
    };
    // Block#: 3VZ|fYG/oN72mWQz|f_r
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(queryProcessInstRequest, 'Authorization', basicAuth); // Block#: sOK=;HH:j:OaAdA7.?rP
    com.fc.JavaScriptDistLib.Network.addHTTPHeader(queryProcessInstRequest, 'Content-Type', 'application/json'); // Block#: sx-TE]1@-SB/w4pr@+^b
    com.fc.JavaScriptDistLib.Network.addHTTPParams(queryProcessInstRequest, 'size', '50'); // Block#: 11k^F;K^sxV8*0-[.=YP
    com.fc.JavaScriptDistLib.Network.setHTTPBody(queryProcessInstRequest, com.fc.JavaScriptDistLib.JSON.covertToJSON(queryProcessInstBody)); // Block#: CEDpFT]jcRH|Ah?!WLay
    com.fc.JavaScriptDistLib.Network.sendHTTPRequest(queryProcessInstRequest,
      function(success_data) {
        try {
          // Block#: ,]~3]^NZ?CBF[XwvrS2V
          com.fc.JavaScriptDistLib.JSON.parseJSONDataWithCallback(success_data,
            function(parsed_json) {
              // Block#: i9X(}Yzg9W5|;S-X,H6(
              processHistoricVar = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();;
              // Block#: VHt4!(%ISorPt%Iv.s+@
              if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.total')), "GT", 0)) {
                // Block#: zbamO5t`%V}u.ESsvrX#
                var index11_end = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.data[:].variables[:].name')).length;
                var index11_inc = 1;
                if(1 > index11_end) {
                  index11_inc = -index11_inc;
                }
                for(index11 = 1; index11_inc >= 0 ? index11 <= index11_end : index11 >= index11_end; index11 += index11_inc) {
                  // Block#: %,PIYo~QnDa8FA!GL0Hc
                  com.fc.JavaScriptDistLib.Dictionary.setDictValue(processHistoricVar, com.fc.JavaScriptDistLib.TextLib.convertToText((com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.data[:].variables[:].name'))[index11 - 1]), com.fc.JavaScriptDistLib.TextLib.convertToText((com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(parsed_json, '$.data[:].variables[:].value'))[index11 - 1]))
                }
                // Block#: 2U14;@1zt9(@kGH5LCc!
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'FirstRun', false)
              } else {
                // Block#: `^pZh5JKbBnwPR(Drcci
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(FlowableInfo, 'FirstRun', true)
              }
              // Block#: SVJ(IQ7uXw,6m+T`-Y?X
              queryProcessInst((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'ActProcDefKey')), com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("MSCtxtEmail"));
            },
            function(error_message) {
            });
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      },
      function(error_data) {
        try {
          com.fc.JavaScriptDistLib.Network.HTTPNetworkException(error_data);
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      });
  }
  /**
   * Describe this function...
   */
  function storeCurrentFieldsTED3() {
    // Block#: Czj:0ls(n;Z^u9~PoO]v
    if(FormFieldList.length != 0) {
      // Block#: $|~G~3G`;oGwW^7r0T-^
      currentDictionary = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();;
      // Block#: gf?$9+VgBWfkVMSyYLzX
      var index1_end2 = FormFieldList.length;
      var index1_inc2 = 1;
      if(1 > index1_end2) {
        index1_inc2 = -index1_inc2;
      }
      for(index1 = 1; index1_inc2 >= 0 ? index1 <= index1_end2 : index1 >= index1_end2; index1 += index1_inc2) {
        // Block#: z[|`1HIx`U1ope9f*JFh
        currentDictionary = FormFieldList[index1 - 1];
        // Block#: Wh,fk]Dx@UyJOJljoPF;
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(index1, "EQ", 1)) {
          // Block#: c?qEy?}lyU}{7Y_?/]qS
          setDictionaryAtttributeInList(FormFieldList, index1 - 1, 'value', (com.fc.JavaScriptDistLib.TextLib.convertToText(glucoseResult)));
        }
        // Block#: F;79xa~Ztp1X$xCg0|s%
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(index1, "EQ", 2)) {
          // Block#: Fl:_R_(B9Y{?[}8;_x/+
          setDictionaryAtttributeInList(FormFieldList, index1 - 1, 'value', lastGlucoseReadingTime);
        }
      }
      // Block#: %_!by8xF6iERA+R|@DU4
      var index2_end2 = FormFieldList.length;
      var index2_inc2 = 1;
      if(1 > index2_end2) {
        index2_inc2 = -index2_inc2;
      }
      for(index2 = 1; index2_inc2 >= 0 ? index2 <= index2_end2 : index2 >= index2_end2; index2 += index2_inc2) {
        // Block#: 1dLx6gSLzi**FFjA0dx+
        currentField = FormFieldList[index2 - 1];
        // Block#: IJZ]:!lJ[bAIy^_{~~S1
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(varObj, com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'ID'), com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'value'))
        // Block#: [B8()N[MS[yeSa-zMHp0
        varTypeTemp = (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'type')));
        // Block#: -aJQ|jS-{~o[]K#4n//p
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(varTypeTemp, "EQUAL", 'text')) {
          // Block#: @n8f[RUInBkDZ{oC~.lc
          varTypeTemp = 'string';
        }
        // Block#: ,xhow!_g#4$:a[3xEC$0
        com.fc.JavaScriptDistLib.ListLibrary.listAdd(varProcessList, {
          'name': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'ID')),
          'type': varTypeTemp,
          'value': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'value')),
          'scope': 'local',
        })
      }
      // Block#: FyLM?zh9Pd][}4;jDW)#
      SaveFormData();
    } else {
      // Block#: %K+5}#2SaZiB8qr*]}Jb
      ActionCompleteOnTask((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'ProcTaskID')));
    }
  }
  /**
   * Describe this function...
   */
  function storeCurrentFieldsTED2() {
    // Block#: Sw)Ng_H,@KLm6D|*I?9f
    if($('[obj-name="TED2lblOpt1"]').is(':visible')) {
      // Block#: `6tq=(|3}HYByV)7V!0r
      lastMealTime = String(com.fc.JavaScriptDistLib.TextLib.textSubstring(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.TimeLibrary.createTimeNow()), 1, 11)) + String(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TED2txtTime"));
      // Block#: 2x1I9-,m8t^FmQfS)Oh*
      lastMealType = com.fc.JavaScriptDistLib.Label.getProperty["Text"]("TED2lblOpt1");
      // Block#: V(b3FQ*x=oV+J$=0v+a0
      if(TED2CurrentOption == 1) {
        // Block#: Nk7mo~L!Uux.sucG#r_r
        lastMealType = com.fc.JavaScriptDistLib.Label.getProperty["Text"]("TED2lblOpt1");
      } else if(TED2CurrentOption == 2) {
        // Block#: gf_*6?+iqcYl?|}.I[a*
        lastMealType = com.fc.JavaScriptDistLib.Label.getProperty["Text"]("TED2lblOpt2");
      } else {
        // Block#: }+(Z0T4M~Y2FTM0J+rN?
        lastMealType = com.fc.JavaScriptDistLib.Label.getProperty["Text"]("TED2lblOpt3");
      }
    } else {
      // Block#: 903-bS1JsMPn1X42n}RW
      lastTimeOfInsulinIntake = String(com.fc.JavaScriptDistLib.TextLib.textSubstring(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.TimeLibrary.createTimeNow()), 1, 11)) + String(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TED2txtTime"));
    }
    // Block#: 9GR.j)S,rn_Gf%7JhB|R
    if(FormFieldList.length != 0) {
      // Block#: ao`U.5yor5*[Hn0)4^y,
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED2lblErrorMessages", ''); // Block#: vr:XmJF8?!082%]0;ry)
      currentDictionary = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();;
      // Block#: F`nQ6)gw=,9U%IslZ+fB
      var index6_end = FormFieldList.length;
      var index6_inc = 1;
      if(1 > index6_end) {
        index6_inc = -index6_inc;
      }
      for(index6 = 1; index6_inc >= 0 ? index6 <= index6_end : index6 >= index6_end; index6 += index6_inc) {
        // Block#: ,hIOpqKJOf3[kixk_Qkq
        currentDictionary = FormFieldList[index6 - 1];
        // Block#: ()I4C]IaWR3!4ngZ%6C[
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentDictionary, 'InternalID'), "EQUAL", 'text1')) {
          // Block#: Se~/~5q-XY)gmyGJzp1}
          setDictionaryAtttributeInList(FormFieldList, index6 - 1, 'value', String(com.fc.JavaScriptDistLib.TextLib.textSubstring(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.TimeLibrary.createTimeNow()), 1, 11)) + String(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TED2txtTime")));
        }
        // Block#: .:3rGmU~%GN-kQEF]zN?
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentDictionary, 'InternalID'), "EQUAL", 'boolean1')) {
          // Block#: @RAqxtXXi(h-0o[(gD:}
          setDictionaryAtttributeInList(FormFieldList, index6 - 1, 'value', com.fc.JavaScriptDistLib.MathLibrary.mathCompare(TED2CurrentOption, "EQ", 1));
        }
        // Block#: M(J?-x+n0Vy!?TI.b;rh
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentDictionary, 'InternalID'), "EQUAL", 'boolean2')) {
          // Block#: 5M]%G4Hi7+dNl^Fh{=[d
          setDictionaryAtttributeInList(FormFieldList, index6 - 1, 'value', com.fc.JavaScriptDistLib.MathLibrary.mathCompare(TED2CurrentOption, "EQ", 2));
        }
        // Block#: Op#`OZiWN4Ov-^8oOMtl
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentDictionary, 'InternalID'), "EQUAL", 'boolean3')) {
          // Block#: U;uwisBFsG4(F%r%NfwA
          setDictionaryAtttributeInList(FormFieldList, index6 - 1, 'value', com.fc.JavaScriptDistLib.MathLibrary.mathCompare(TED2CurrentOption, "EQ", 3));
        }
      }
      // Block#: jrgi-lpXNQ?h+RB_AM_w
      var index7_end = FormFieldList.length;
      var index7_inc = 1;
      if(1 > index7_end) {
        index7_inc = -index7_inc;
      }
      for(index7 = 1; index7_inc >= 0 ? index7 <= index7_end : index7 >= index7_end; index7 += index7_inc) {
        // Block#: rAwHa~Avg7#bBvZyLO.I
        currentField = FormFieldList[index7 - 1];
        // Block#: 8B%~*r=nLPs3GY0Dzv]v
        currentAttributeRequired = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'required'));
        // Block#: hStLkyy!^g+HP#-j#5@?
        currentAttributeValue = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'value'));
        // Block#: v[!CEY,xUa(EDEWt3uQ)
        currentAttributeDefault = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'default'));
        // Block#: iJZNT|W)2suBXz3Y1C}s
        if(currentAttributeRequired && !checkFormat('time', '00:00', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TED2txtTime"))) {
          // Block#: ]aci;lg(Do2xVs69=HNQ
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED2lblErrorMessages", ([com.fc.JavaScriptDistLib.Label.getProperty["Text"]("TED2lblErrorMessages"), (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'name')), '  is  not in the correct format. '].join(''))); // Block#: D?8DHsIpJ7@p5}8~NEMa
          FoundRequired = true;
        }
        // Block#: MTdQi*8EA)6dtiIbPys$
        if(currentAttributeRequired && com.fc.JavaScriptDistLib.TextLib.textComparison(currentAttributeValue, "EQUAL", currentAttributeDefault)) {
          // Block#: tDNe.vKw[:sqmAv!c~)p
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TED2lblErrorMessages", ([com.fc.JavaScriptDistLib.Label.getProperty["Text"]("TED2lblErrorMessages"), (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'name')), '  is  (**Required)  '].join(''))); // Block#: _Ay_.lF5Vo=+uG{B1OZQ
          FoundRequired = true;
        }
      }
      // Block#: {I4?5aONa`%5dCv:B6YJ
      if(!FoundRequired) {
        // Block#: 3+lwIBU1-#F)]{BXzYcN
        var index8_end = FormFieldList.length;
        var index8_inc = 1;
        if(1 > index8_end) {
          index8_inc = -index8_inc;
        }
        for(index8 = 1; index8_inc >= 0 ? index8 <= index8_end : index8 >= index8_end; index8 += index8_inc) {
          // Block#: 0/;qJS9Y)]txZue]1GWz
          currentField = FormFieldList[index8 - 1];
          // Block#: PV#@n-l%BKYIvANykW=N
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(varObj, com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'ID'), com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'value'))
          // Block#: 1r#3cI$/-kfdZT9!(f^,
          varTypeTemp = (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'type')));
          // Block#: YC-m6%rIjQor/OIq_^:R
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(varTypeTemp, "EQUAL", 'text')) {
            // Block#: s1MCp~M|)yYocs!i!]5o
            varTypeTemp = 'string';
          }
          // Block#: 4q?1zE.r}aZlk%ytis+G
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(varProcessList, {
            'name': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'ID')),
            'type': varTypeTemp,
            'value': (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'value')),
            'scope': 'local',
          })
        }
        // Block#: bSy_3G0kcl({Y8YCAh_`
        SaveFormData();
      } else {
        // Block#: =@QZ]3I6d}sf|2=~RTcw
        $('[obj-name="TED2imgHourglass"]').hide();
      }
    } else {
      // Block#: =I=tydK:)ThYK{):Ut;@
      ActionCompleteOnTask((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'ProcTaskID')));
    }
  }
  // Block#: ]dSlnqeFQ):C5y{|lZ8E
  let on_screen_createTEC1 = function() {
    try {
      // Block#: 1[WAkNB!ZRVcfNh{{tK`
      $('[obj-name= "TEC1imgCheckBox"]').bind('click', on_Image_TEC1imgCheckBox_CLICK); // Block#: _QeUR^AdY0jBmr4ZZ9}I
      $('[obj-name= "TEC1imgCheckBox"]').bind('click', on_Image_TEC1imgCheckBox_CLICK);
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  }();
  // Block#: |DY0.5~g1hJ-_ynJ=w+W
  function on_Textbox_TED2txtTime_CLICK(e) {
    try {
      // Block#: U#aJ1PO51f({ut%i-PV8
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TED2txtTime"), "EQUAL", '00:00')) {
        // Block#: Y;7dm#%4QMoKqoEZ!DC3
        com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TED2txtTime", '');
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TED2txtTime"]').on('click', on_Textbox_TED2txtTime_CLICK);
  // Block#: RsS(=}%dKBjLc$+%IEoZ
  var elemSelector = '[obj-name="TEC1Textbox1"]';
  $(elemSelector).find("input").on('blur', function(e) {
    // Block#: zLs0gBSB!Rs.dh_EZ!F9
    if(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TEC1Textbox1") == '') {
      // Block#: e8R-UKDlskB!HH(^7[Qs
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TEC1Textbox1", TEC1Text1DefaultText);
    }
  });
  // Block#: vORii%)q]@Hd^0/7;,JF
  let on_screen_createTEC2 = function() {
    try {
      // Block#: ,k8(uDv==k3q4]q_=2B=
      $('[obj-name="TEC2imgHourglass"]').hide(); // Block#: 2q,k$5]*8izdxq+nfVI
      $('[obj-name= "TEC2imgKeyboard"]').bind('click', on_Image_TEC2imgKeyboard_CLICK); // Block#: s[F!@Ahk%Pyix$J5}3:%
      $('[obj-name= "TEC2imgSign"]').bind('click', on_Image_TEC2imgSign_CLICK); // Block#: E!9=$ozoC$U{x.R6%$JY
      $('[obj-name= "TEC2imgSignature"]').bind('click', on_Image_TEC2imgSignature_CLICK);
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  }();
  // Block#: Roy8pqyP{9#:Fa:bH8:U
  var elemSelector = '[obj-name="TEC1Textbox2"]';
  $(elemSelector).find("input").on('blur', function(e) {
    // Block#: bXTCVV.J/Q8mG(oHT!~s
    if(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TEC1Textbox2") == '') {
      // Block#: )#bvT|C$v`Cy#M#/RC,3
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TEC1Textbox2", TEC1Text2DefaultText);
    }
  });
  // Block#: ~R1)T@0Q2BgVAIX9rk)Z
  var elemSelector = '[obj-name="TED2txtTime"]';
  var originalText = $(elemSelector).find("input").val();
  $(elemSelector).find("input").on('input', function(e) {
    var oldText = originalText;
    var newText = $(this).val();
    // Block#: Fyf$Ly@kEwat3;7?Z,.e
    if(!com.fc.JavaScriptDistLib.MathLibrary.isNumber(com.fc.JavaScriptDistLib.TextLib.textSubstring(newText, newText.length - 1, 1))) {
      // Block#: ^v=$a~FDp5h|.l49=-Mu
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TED2txtTime", com.fc.JavaScriptDistLib.TextLib.textSubstring(newText, 0, newText.length - 1));
    }
    // Block#: @DiHa[9pZ(R,Z2a#3lJ4
    twoPointsPos = com.fc.JavaScriptDistLib.TextLib.textIndexOf(newText, ':');
    // Block#: b7dT^!A-N?vEk-e@wahw
    if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(twoPointsPos, "GT", 2)) {
      // Block#: LSE{%6ViJsU8$BE)79|
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TED2txtTime", (String(com.fc.JavaScriptDistLib.TextLib.textSubstring(newText, 0, 2)) + String(':')));
    }
    // Block#: ~UW+Ast=9oo$0Mtjc#K.
    if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(newText.length, "EQ", 2)) {
      // Block#: 5u5$M`w0xXG`o0bChqH{
      if(com.fc.JavaScriptDistLib.MathLibrary.isNumber(newText)) {
        // Block#: )8t[FuB9x5m?S.aLs{#w
        com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TED2txtTime", (String(com.fc.JavaScriptDistLib.TextLib.textSubstring(newText, 0, 2)) + String(':')));
      }
    }
    // Block#: :$ilN5UOcqC~cKr8Ob;w
    if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(newText.length, "GT", 5)) {
      // Block#: #H:A1{pJ^$Yekjj{A1-`
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TED2txtTime", com.fc.JavaScriptDistLib.TextLib.textSubstring(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TED2txtTime"), 0, 5));
    }
  });
  // Block#: +i[d)(n86KathY+gaj#X
  function on_TDB1btnLinkGO1_click(e) {
    try {
      // Block#: m5S`_kW5IPmykW}.Bqcu
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link1');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TDB1btnLinkGO1"]').on('click', on_TDB1btnLinkGO1_click);
  // Block#: 6U@MVHPo|~vNZr{)Z:=)
  function on_Label_TDB1lblLinkText1_CLICK(e) {
    try {
      // Block#: *E]-phNa#3n@ELj[Ih6v
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link1');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TDB1lblLinkText1"]').on('click', on_Label_TDB1lblLinkText1_CLICK);
  // Block#: Lpnz$O9N}_Tsr0V6,N`Y
  function on_TEC2btnNext_click(e) {
    try {
      // Block#: jgdI:GgE#Kg~LT13[h3K
      $('[obj-name="TEC2imgHourglass"]').show(); // Block#: n7!kf5tbLi#Nu30.Fr25
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TEC2imgHourglass", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(dictionaryOfImages, 'hourglass'))); // Block#: LWc8sz|p[j0)kuvbquP=
      FoundRequired = false;
      // Block#: [QG3c4S(#/n^dY1U.)*w
      varObj = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();;
      // Block#: ._M/wfa]}`x+xwHeFFG:
      varProcessList = [];
      // Block#: 0MKe3Rp4-UUwOWz`Pw!2
      ActionCompleteOnTask((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'ProcTaskID')));
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TEC2btnNext"]').on('click', on_TEC2btnNext_click);
  // Block#: @XDS#ORYBc#7C1]9%JQt
  var elemSelector = '[obj-name="TEC1Textbox1"]';
  $(elemSelector).find("input").on('focus', function(e) {
    // Block#: ut1]tUq`1m1;=#bQ6#2T
    if(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TEC1Textbox1") == TEC1Text1DefaultText) {
      // Block#: x_R|xrD$u1@[1/!cV[c8
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TEC1Textbox1", '');
    }
  });
  // Block#: Se!^1y8XnL|a{`/d]57[
  function on_TDB1btnLinkGO2_click(e) {
    try {
      // Block#: NlBx2ea9Y!R?ndlA{;EB
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link2');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TDB1btnLinkGO2"]').on('click', on_TDB1btnLinkGO2_click);
  // Block#: }R}5S-zJcqh2l797RZmE
  function on_Label_TDB1lblLinkText2_CLICK(e) {
    try {
      // Block#: j$Y=d|)7Zdrr2ViPesB!
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link2');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TDB1lblLinkText2"]').on('click', on_Label_TDB1lblLinkText2_CLICK);
  // Block#: Pb@!+s:t~+OMml]hHnyr
  var elemSelector = '[obj-name="TEC1Textbox2"]';
  $(elemSelector).find("input").on('focus', function(e) {
    // Block#: QU,YrVj22qQ!6n03,_pB
    if(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TEC1Textbox2") == TEC1Text2DefaultText) {
      // Block#: %Wa7(w0_Ac~;)JS@5e3N
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TEC1Textbox2", '');
    }
  });
  // Block#: oQxx_da^c~/Uw}v0QW`J
  function on_TDB1btnLinkGO3_click(e) {
    try {
      // Block#: (HD+d]kHMuZs7nGP)MT1
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link3');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TDB1btnLinkGO3"]').on('click', on_TDB1btnLinkGO3_click);
  // Block#: x8tl:=8])w-Aua;y9BhC
  function on_TED1btnNext_click(e) {
    try {
      // Block#: ^X^C)pd`+RL[`421R^^G
      $('[obj-name="TED1imgHourglass"]').show(); // Block#: -G+*;jt]]Ei@zY_Su26E
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED1imgHourglass", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(dictionaryOfImages, 'hourglass'))); // Block#: KWL#kr3}[8IZOW_bnmMB
      ActionCompleteOnTask((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'ProcTaskID')));
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TED1btnNext"]').on('click', on_TED1btnNext_click);
  // Block#: GZMKVCl]b+BFA{hBUi3.
  function on_Label_TDB1lblLinkText3_CLICK(e) {
    try {
      // Block#: rm_9XZ[_PeC)K4SE*1$H
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link3');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TDB1lblLinkText3"]').on('click', on_Label_TDB1lblLinkText3_CLICK);
  // Block#: o,d*evsP#EBJc$SGe|{@
  var elemSelector = '[obj-name="TEC2txtKeyboard"]';
  $(elemSelector).find("input").on('blur', function(e) {
    // Block#: ,8}(SK^nfD1+$mB%2)@E
    if(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TEC2txtKeyboard") == '') {
      // Block#: 2Hk1X;cbU1?Tq.40A9bc
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TEC2txtKeyboard", 'ENTER YOUR NAME HERE');
    }
  });
  // Block#: wHUPDL*)=oz~/2e.A~xL
  let on_screen_createMSC = function() {
    try {
      // Block#: ^APIm(nrtDA9t(@B3=YN
      $('[obj-name="MSCimgHourglass"]').hide(); // Block#: |mB[`)p|Kxv)6Uy}FZg~
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("MSClblMessages", '<div style="text-align:center"><font color="#4aa6c9"><span style="font-size:16px">Please insert<br />e-mail and PID you received</span></font></div>'); // Block#: )N?Jy-{X(xn]/g*W/7uf
      emailErrorMsg = 'e-mail is not in the right format';
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  }();
  // Block#: j%_jX:^M9P^%a.4eiOV]
  function on_TEC1btnPrev_click(e) {
    try {
      // Block#: b1GBv!7O$]gyGT!/HH_F
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TEC1lblErrorMessages", (com.fc.JavaScriptDistLib.TextLib.convertToText(FormFieldList.length)));
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TEC1btnPrev"]').on('click', on_TEC1btnPrev_click);
  // Block#: m)N#lh|+(|Z_KxI(T`qF
  function on_TDB1btnLinkGO4_click(e) {
    try {
      // Block#: Y[Szw.$qLDDl;fj*LOc,
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link4');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TDB1btnLinkGO4"]').on('click', on_TDB1btnLinkGO4_click);
  // Block#: U_C3)3:6W3a{QfS._1m!
  function on_screen_showMSC() {
    try {
      // Block#: }Z_d*{#Dv(*4S(7Le{~u
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("MSCimgHourglass", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/e61d073c-141f-4ce0-b7c0-6faaffd73690")));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="MSC"]').on('show', on_screen_showMSC);
  com.fc.JavaScriptDistLib.Screen.screenDict['showMSC'] = on_screen_showMSC;
  // Block#: TMl60JO0/A$o8du2/x+%
  function on_Label_TDB1lblLinkText4_CLICK(e) {
    try {
      // Block#: GmWt42p0eU4wl9}dcv,f
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link4');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TDB1lblLinkText4"]').on('click', on_Label_TDB1lblLinkText4_CLICK);
  // Block#: d(IIMkssA|R0mR))~p6-
  function on_TED2btnPrev_click(e) {
    try {
      // Block#: AC/Y@k@$!H5Bj=t*d83B
      displayPageEngine();
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TED2btnPrev"]').on('click', on_TED2btnPrev_click);
  // Block#: C`}_!7zt1DJ]dxeoTxsh
  let on_screen_createTED2 = function() {
    try {
      // Block#: 4-~Z@3*WB_XsH%YYnHX~
      $('[obj-name="TED3imgHourglass"]').hide(); // Block#: IYINqGy@`CqPn^0mpqC+
      $('[obj-name= "TED2imgOpt1"]').bind('click', on_Image_TED2imgOpt1_CLICK); // Block#: 4?)f|Zb~kMvEvJXP7(C5
      $('[obj-name= "TED2imgOpt2"]').bind('click', on_Image_TED2imgOpt2_CLICK); // Block#: oNndwcf2Lx:3NL6p}{Z#
      $('[obj-name= "TED2imgOpt3"]').bind('click', on_Image_TED2imgOpt3_CLICK);
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  }();
  // Block#: x-GI3xs2EX3NY8zQ0/T%
  let on_screen_createTED3 = function() {
    try {
      // Block#: TqxJW[{I{Kz^v*}]x1[g
      $('[obj-name= "TED3imgToggle1"]').bind('click', on_Image_TED3imgToggle1_CLICK); // Block#: X?J*/5iTq)xl4@-sxk;d
      $('[obj-name= "TED3imgToggle1"]').bind('click', on_Image_TED3imgToggle1_CLICK);
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  }();
  // Block#: [Wfy(z1I=-[{wTx65(m+
  function on_Image_TEC2imgKeyboard_CLICK(e) {
    try {
      // Block#: R2AlPhQgdYaT8Xl3+0ZE
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TEC2imgKeyboard", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/6705865e-dda5-451d-a340-d848c55cb9af"))); // Block#: Z@Ou_q(bI}+wz]s7s`d;
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TEC2imgSign", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/3e8e37af-84e9-4ba6-8a86-d2cffce11372")));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TEC2imgKeyboard"]').on('click', on_Image_TEC2imgKeyboard_CLICK);
  // Block#: 6GA]oeqfQxTo#Y=0?9V|
  function on_TED2btnNext_click(e) {
    try {
      // Block#: rvCI*_R#9KdW!Z{$Qr*M
      $('[obj-name="TED2imgHourglass"]').show(); // Block#: ~fBL0Dp8~w_-eHz;`q|B
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED2imgHourglass", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(dictionaryOfImages, 'hourglass'))); // Block#: w0!YOfDh$|x_?p=7Nh}/
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'flowType'), "EQUAL", 'e-Qualification')) {
        // Block#: |1JPt]O2Fd48M_:=u%]/
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(TED2CurrentOption, "EQ", 1)) {
          // Block#: W+olOgORYF=9w{0yAmv^
          linkIDVar = com.fc.JavaScriptDistLib.Label.getProperty["Text"]("TED2lblOpt1");
        } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(TED2CurrentOption, "EQ", 2)) {
          // Block#: [)sXUei]hmvN!vu17O{p
          linkIDVar = com.fc.JavaScriptDistLib.Label.getProperty["Text"]("TED2lblOpt2");
        } else {
          // Block#: {PTxmr]WAu7$i6VjJnaE
          linkIDVar = com.fc.JavaScriptDistLib.Label.getProperty["Text"]("TED2lblOpt3");
        }
        // Block#: *f7(j=9a^3SE-B!kd}Hh
        followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), linkIDVar);
      } else {
        // Block#: 6ff5S:}E{h;ebKX0Yth#
        FoundRequired = false;
        // Block#: b$Wyvp75iz2r(sTwd0!v
        varObj = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();;
        // Block#: 693y9k39o[C8@mj=3WdT
        varProcessList = [];
        // Block#: VrwprOwgP]jq-j#M!x/X
        storeCurrentFieldsTED2();
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TED2btnNext"]').on('click', on_TED2btnNext_click);
  // Block#: ENo)7+y;NkWpIdxPZ],,
  function on_TDB1btnLinkGO5_click(e) {
    try {
      // Block#: CN/F=j`NYKNMm*lxwaO7
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link5');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TDB1btnLinkGO5"]').on('click', on_TDB1btnLinkGO5_click);
  // Block#: x;Nru!VvU;|m+.9X!.M$
  var elemSelector = '[obj-name="MSCtxtEmail"]';
  $(elemSelector).find("input").on('focus', function(e) {
    // Block#: m{Gem-A`S-}4Xd_^k:gl
    if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("MSCtxtEmail"), "EQUAL", emailErrorMsg)) {
      // Block#: $6LgE@aJ~1A/f*CFB1Ym
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("MSCtxtEmail", MSCemailCurrentText);
    }
  });
  // Block#: 83c*|{`XUr:0gDy$l5u]
  function on_Label_TDB1lblLinkText5_CLICK(e) {
    try {
      // Block#: EzKE(/I7Sf--0,h77}IZ
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link5');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TDB1lblLinkText5"]').on('click', on_Label_TDB1lblLinkText5_CLICK);
  // Block#: _*@w%Q*C86t,I{Mm4?R-
  function on_TEC1btnNext_click(e) {
    try {
      // Block#: f12i$mOB`(75fwndiMeU
      FoundRequired = false;
      // Block#: @m.)w#3kemx-B+Z5znm{
      varObj = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();;
      // Block#: -CiVO}vRXKjYm?%.W*PQ
      varProcessList = [];
      // Block#: VT#0|VJm]|z557hp{jx+
      $('[obj-name="TEC1imgHourglass"]').show(); // Block#: (Rk5lIFF%.XQX:75dPXd
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TEC1imgHourglass", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(dictionaryOfImages, 'hourglass'))); // Block#: E*TLMblNxTn0:]3_ZQ^;
      storeCurrentFieldsTEC1();
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TEC1btnNext"]').on('click', on_TEC1btnNext_click);
  // Block#: hB]t[W,)BMGQw%3]^G]K
  function on_TDB1btnLinkGO6_click(e) {
    try {
      // Block#: Edb5Jx@Q+164zkBC2zse
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link6');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TDB1btnLinkGO6"]').on('click', on_TDB1btnLinkGO6_click);
  // Block#: Sn]wB1lhgeEu+1G[WW9G
  function on_MSCbtnVerify_click(e) {
    try {
      // Block#: Q=|Cy#vr+nV*ATYGs{t^
      if(checkFormat('e-mail', '@', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("MSCtxtEmail"))) {
        // Block#: j-s]e+Wp+u2,$80R4ekq
        $('[obj-name="MSCimgHourglass"]').show(); // Block#: 2|ECcsW/|Bm~E,ucTrl/
        WhoIAm = com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("MSCtxtPID");
        // Block#: 15J!E#+}F1-g*ybF_2wW
        $('[obj-name="MSCbtnVerify"]').hide(); // Block#: UYgaI*aVD6]ayAVvKhCv
        initialize();
      } else {
        // Block#: r?7?**zG:1RHZuldjFe-
        MSCemailCurrentText = com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("MSCtxtEmail");
        // Block#: V15IyX+BP`uul%B8QWo(
        com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("MSCtxtEmail", emailErrorMsg);
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="MSCbtnVerify"]').on('click', on_MSCbtnVerify_click);
  // Block#: N!R)eTIbJh0Zgi|3s:}%
  function on_TED3btnPrev_click(e) {
    try {
      // Block#: K%|H$N5)m^t)/t7a+ixG
      ActionCompleteOnTask((com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'ProcTaskID')));
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TED3btnPrev"]').on('click', on_TED3btnPrev_click);
  // Block#: ,onZ_]~1hqlfC(Cuo]!z
  function on_Label_TDB1lblLinkText6_CLICK(e) {
    try {
      // Block#: gGA:Gw?Z4eekY2Ma~f,+
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link6');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TDB1lblLinkText6"]').on('click', on_Label_TDB1lblLinkText6_CLICK);
  // Block#: lR.Ez$I#Z5u^p3]i)Xpi
  function on_Image_TEC2imgSign_CLICK(e) {
    try {
      // Block#: $9~@kEsdp)C|5Hd5SpGt
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TEC2imgSign", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/d4e165a8-2e16-41b1-a4c7-39e04186cfbb"))); // Block#: P=2KZPAt72Bo+rstkO[s
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TEC2imgKeyboard", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/ae7f65e9-f8eb-45af-9a45-c3360bf4f04b")));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TEC2imgSign"]').on('click', on_Image_TEC2imgSign_CLICK);
  // Block#: 5GtG_7{#(6e1,r_A8z)f
  function on_TED3btnNext_click(e) {
    try {
      // Block#: He*DZX9H1p,qYxG,*UQv
      $('[obj-name="TED3imgHourglass"]').show(); // Block#: KP;uj{Pem__=.wzoL,CN
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED3imgHourglass", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(dictionaryOfImages, 'hourglass'))); // Block#: Eb?PRKU;DqUPx1=gI`en
      varObj = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();;
      // Block#: pPYyPa9|K[#(rWkB{3:z
      varProcessList = [];
      // Block#: wl,kZvg-c1#1@k=6K%j2
      if(($('[obj-name="TED3imgToggle1"]').is(':visible')) && BTStatus == 1 || !($('[obj-name="TED3imgToggle1"]').is(':visible'))) {
        // Block#: LQ18(05dcTKc1DHKMb,m
        storeCurrentFieldsTED3();
      } else {
        // Block#: nyboW~z~q4yuoiU}0bNF
        com.fc.JavaScriptDistLib.Label.setProperty["Text color"]("TED3lbl1", '#ff0000');
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TED3btnNext"]').on('click', on_TED3btnNext_click);
  // Block#: 7zzv?_f,8s+tp1vFN#]3
  function on_Image_TEC1imgCheckBox_CLICK(e) {
    try {
      // Block#: [-17UgegMgYWWggeq7MG
      if(checkBoxValue1 == true) {
        // Block#: ]G+(OhVeasUv(o1z{.*K
        com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TEC1imgCheckBox", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/69453b37-8d43-4f0d-9f10-9aa234358e36"))); // Block#: U$j:mG@2E)TA(^]z@DZl
        checkBoxValue1 = false;
      } else {
        // Block#: RX|V8F{o~09B_^iPW[Iq
        com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TEC1imgCheckBox", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/540b03e0-aaae-4485-afe0-56e773f80093"))); // Block#: !B$=y/aXd7iQCjw`*wh`
        checkBoxValue1 = true;
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TEC1imgCheckBox"]').on('click', on_Image_TEC1imgCheckBox_CLICK);
  // Block#: {S=?4n72Io;+7}iLMPid
  function on_Image_TEC2imgSignature_CLICK(e) {
    try {
      // Block#: S%Okc)}$2J]@Ro3g~-e+
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(WhoIAm, "EQUAL", 'snapClinical1001')) {
        // Block#: |*x%dG+WG.}1bZ._,tN_
        com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TEC2imgSignature", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/773c5f8b-8ae4-4ab1-bfb4-d0cb1806e7af")));
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(WhoIAm, "EQUAL", 'snapClinical1002')) {
        // Block#: mPjS[b?W:gGqWDjecxmD
        com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TEC2imgSignature", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/a6a2d149-9c71-4c7a-808c-640e993fa83b")));
      } else {
        // Block#: J:`i61=/m5XV22p#PWv.
        com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TEC2imgSignature", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/e3d2ffd1-1255-49bc-ac82-cade2c6448b0")));
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TEC2imgSignature"]').on('click', on_Image_TEC2imgSignature_CLICK);
  // Block#: hK:0IB2aZbi(nP9*VoJ|
  function on_Image_TED2imgOpt1_CLICK(e) {
    try {
      // Block#: 593v{,Q)e.{wJ6orC(Zf
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED2imgOpt1", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/5764f934-f19d-469c-8012-293248ba464a"))); // Block#: 1OCMY@*o~yt7JCb9B?8W
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED2imgOpt2", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/320408be-ac64-43eb-aa59-31b487d7ad5c"))); // Block#: `09ykUV%#(+z.y]cbEz{
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED2imgOpt3", com.fc.JavaScriptDistLib.Image.getProperty["Image"]("TED2imgOpt2")); // Block#: wk{RD#sKG}C]4Tk#!xFw
      TED2CurrentOption = 1;
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TED2imgOpt1"]').on('click', on_Image_TED2imgOpt1_CLICK);
  // Block#: DO!/B-GqWB,|j.Gw0C{l
  function on_Image_TED2imgOpt2_CLICK(e) {
    try {
      // Block#: jZg7GUq:S%2/2qtnmibF
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED2imgOpt1", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/320408be-ac64-43eb-aa59-31b487d7ad5c"))); // Block#: x.G@n)K+z,SN5./]IBKD
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED2imgOpt2", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/5764f934-f19d-469c-8012-293248ba464a"))); // Block#: .7{F!nW07!j!s%I_(#VR
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED2imgOpt3", com.fc.JavaScriptDistLib.Image.getProperty["Image"]("TED2imgOpt1")); // Block#: U$Yz:RitY!$aeR8!cwXt
      TED2CurrentOption = 2;
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TED2imgOpt2"]').on('click', on_Image_TED2imgOpt2_CLICK);
  // Block#: ~V!.[41?1SlN_;o]Bo4a
  function on_Image_TED3imgToggle1_CLICK(e) {
    try {
      // Block#: l~13Y4w$5C:%Wc@mLbl1
      if(BTStatus == 1) {
        // Block#: ER`FWo|o{).v78RwMzLp
        com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED3imgToggle1", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/147ff9b0-9c1d-4069-b23a-c443dbfd7bd9"))); // Block#: g*31xbg.d)4C$9~%)VpC
        BTStatus = 0;
        // Block#: U|^DCwcYaIY+6f9^jm4z
        $('[obj-name="TED3imgRadioWaves"]').hide();
      } else {
        // Block#: =~Z9t:Nw:9Jxz4$GuQD0
        com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED3imgToggle1", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/6adf484c-77a8-4996-a4fc-88cbf492c266"))); // Block#: oW4t9H,Fk`CS%+3jK3CP
        BTStatus = 1;
        // Block#: l#8d,nK0|!0B-jJ`)Kb+
        $('[obj-name="TED3imgRadioWaves"]').show();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TED3imgToggle1"]').on('click', on_Image_TED3imgToggle1_CLICK);
  // Block#: *.%yKWgr~hYB%w6f^j#.
  function on_Textbox_TEC2txtKeyboard_CLICK(e) {
    try {
      // Block#: {hGTd$J#2DVZt}/4r:mT
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TEC2txtKeyboard", '');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TEC2txtKeyboard"]').on('click', on_Textbox_TEC2txtKeyboard_CLICK);
  // Block#: ?b$DX,j`W|E83-O]]$jv
  function on_Label_TEC2lblClear_CLICK(e) {
    try {
      // Block#: w^oc)b8oj?/cuXrEOiu2
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TEC2txtKeyboard", 'ENTER YOUR NAME HERE'); // Block#: T0|fu:,*8Giz^d]3:frY
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TEC2imgSignature", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/bf4dd70f-31d6-497c-8fb4-ac58ab042b4e")));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TEC2lblClear"]').on('click', on_Label_TEC2lblClear_CLICK);
  // Block#: ?um=pQ/dKDTLk4,@$~n0
  function on_Image_TED2imgOpt3_CLICK(e) {
    try {
      // Block#: ^!NU{Oe?AH0}I71o1Zno
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED2imgOpt3", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/5764f934-f19d-469c-8012-293248ba464a"))); // Block#: ;NL$T3J-Hp8lw84$~o#*
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED2imgOpt2", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/320408be-ac64-43eb-aa59-31b487d7ad5c"))); // Block#: q(fOL~5lI7MnaK~O0M.0
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TED2imgOpt1", com.fc.JavaScriptDistLib.Image.getProperty["Image"]("TED2imgOpt2")); // Block#: )*+y~%K2Ktp|vL`(vzT;
      TED2CurrentOption = 3;
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TED2imgOpt3"]').on('click', on_Image_TED2imgOpt3_CLICK);
  com.fc.JavaScriptDistLib.Screen.screenPopInit();
  $('[obj-name="MSC"]').show();
});
// Generated by snapp
// 882589-48323-357348-468175
