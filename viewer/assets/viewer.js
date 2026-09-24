// ==========================================
    // 1. 多语言字典定义 (中文, English, Español, Français, العربية, Русский)
    // ==========================================
    const I18N = {
      zh: {
        htmlLang: "zh-CN",
        dir: "ltr",
        documentTitle: "HYDRO-BLOK 格兰板｜3D 结构与技术参考",
        houseDocumentTitle: "HYDRO-BLOK 全屋应用系统｜3D 交互示意",
        brandTitle: "HYDRO-BLOK 格兰板",
        modelBoard: "板材结构",
        modelHouse: "全屋应用示意",
        contactButton: "联系我们",
        contactTitle: "联系佳拓",
        contactSubtitle: "产品规格、应用方案与商务合作咨询",
        contactWhatsAppLabel: "WhatsApp",
        contactPhoneLabel: "电话",
        contactEmailLabel: "邮箱",
        contactWhatsAppAction: "发起沟通",
        contactPhoneAction: "拨打电话",
        contactEmailAction: "发送邮件",
        contactClose: "关闭联系信息",
        houseBrandTitle: "HYDRO-BLOK 全屋应用系统",
        houseSubtitle: "建筑防水隔热复合结构板 · 全屋应用 3D 交互示意",
        houseSpecLabel: "应用区域:",
        houseRotateStop: "停止环绕",
        houseLabelsHide: "隐藏三维标注",
        houseLabelsShow: "显示三维标注",
        houseViewIso: "斜角透视",
        houseViewSection: "正面剖视",
        houseViewTop: "顶部俯视",
        houseModules: ["屋顶系统", "外墙系统", "隔墙系统", "室内墙系统", "楼板系统", "地面系统", "地下室系统", "影音墙系统"],
        subtitle: "建筑防水隔热复合结构板 · 3D 交互结构与技术参考",
        stdTag: "DIN EN 13164",
        specLabel: "可选规格:",
        metricsTitle: "单板数据",
        areaLabel: "单板面积",
        weightLabel: "单板重量",
        restoreTop: "一键复原整体 (合拢板材)",
        currentSku: "当前选定规格",
        dimPrefix: "实际尺寸: ",
        dragHint: "🖱️ 拖动旋转 · 滚轮缩放 · 右键平移 · 单击选层 · 双击置中／再次双击复位 · 支持触控",
        specWheelHint: "鼠标停在规格栏上，使用滚轮可横向浏览全部规格",
        scaleNote: "结构示意：层厚已适当放大，不代表真实比例",
        explodeLabel: "内部复合结构爆炸图:",
        btnAssemble: "合拢整板",
        btnExplodeAll: "完全展开",
        btnIsolate: "单独移出置中观察",
        btnPullback: "拉回所有层",
        btnPullbackSide: "拉回复位",
        btnRecenter: "重置观察中心",
        btnRotate: "360°环绕",
        btnResetView: "恢复视角",
        btnSpecsDoc: "已核验测试数据",
        btnShowDetails: "显示部件信息",
        shiftHint: "已将当前部件置中观察，其余层已向左平移移出",
        viewIso: "斜角透视",
        viewSection: "侧面视图",
        viewTop: "板面俯视",
        titleAutoRotate: "开启或关闭自动360度环绕",
        titleResetView: "恢复默认视角",
        titleCloseInspector: "关闭部件信息",
        titleCloseSpecs: "关闭技术参数",
        sliderLabel: "爆炸图展开程度",
        runtimeError: "3D 组件加载失败。请检查网络连接后重新打开本文件。",
        modal: {
          title: "HYDRO-BLOK 格兰板 · 已核验测试参考",
          subtitle: "SGS 报告 XMIN2407001311CM01_EN · 12 mm 样品 · 2024-09-10",
          headers: ["检验项目", "测试方法", "报告结果", "判定"],
          rows: [
            ["厚度", "EN 13164:2012+A1:2015 / EN ISO 29466:2022", "12.05 mm（标称 12 mm）", "通过：T3（12 ± 1 mm）"],
            ["10% 形变时的压缩应力", "EN 13164:2012+A1:2015 / EN ISO 29469:2022", "最低 468 kPa；平均 473 kPa", "通过：≥ 300 kPa"],
            ["垂直于表面的拉伸强度", "EN 13164:2012+A1:2015 / EN 1607:2013", "最低 401 kPa；平均 508 kPa", "通过：≥ 200 kPa"],
            ["长期全浸水吸水率（28 天）", "EN 13164:2012+A1:2015 / ISO 16535:2019 方法 2A", "最大 2.4%；平均 2.3%", "通过：≤ 3%"],
            ["特定荷载与温度下的变形", "EN 13164:2012+A1:2015 / EN 1605:2013", "报告结果：2", "通过：≤ 5"]
          ],
          note: "以上结果仅适用于报告中受检的 12 mm 样品。项目选型前应核对最新完整报告、所选厚度、当地规范和完整系统安装要求。蒸汽房等高湿高温场景须按安装指南增设防水膜。",
          close: "关闭技术参数"
        },
        layers: [
          {
            shortName: "水泥基涂层",
            name: "聚合物改性水泥基涂层",
            sub: "双面同材质的粘结与保护层",
            tag: "LAYER 01 / 05",
            desc: "板材两面采用相同的聚合物改性水泥基涂层，分别包覆耐碱玻纤网，形成可铺贴瓷砖或与施工系统粘结的纹理表面。两面材料与功能一致，不区分上、下表面；模型中的表面纹理为结构示意。",
            k1: ["主要作用", "提供粘结面与表面保护"],
            k2: ["结构位置", "XPS 芯材两侧（双面相同）"],
            k3: ["材料类型", "聚合物改性水泥基涂层"],
            k4: ["参数依据", "以当前技术数据表为准"]
          },
          {
            shortName: "增强玻纤网",
            name: "耐碱玻璃纤维增强网",
            sub: "双面同材质的抗裂增强层",
            tag: "LAYER 02 / 05",
            desc: "板材两面的水泥基涂层内均嵌入相同的耐碱玻璃纤维增强网，用于分散表面应力并提高复合结构的抗裂稳定性。两侧材料与功能一致，不区分上、下表面。",
            k1: ["主要作用", "分散应力、抑制表层开裂"],
            k2: ["材料类型", "耐碱玻璃纤维网"],
            k3: ["结构位置", "XPS 芯材两侧涂层内（双面相同）"],
            k4: ["参数依据", "以当前技术数据表为准"]
          },
          {
            shortName: "XPS 芯材",
            name: "闭孔 XPS 挤塑聚苯乙烯芯材",
            sub: "轻质保温承载芯层",
            tag: "LAYER 03 / 05",
            desc: "闭孔 XPS 泡沫芯材构成板材主体，兼顾轻量化、隔热和承载。页面中的比例与纹理为可视化示意。",
            k1: ["主要作用", "隔热、轻质承载与防潮"],
            k2: ["材料类型", "闭孔 XPS 挤塑聚苯乙烯"],
            k3: ["结构位置", "复合板芯层"],
            k4: ["已核验测试", "见“已核验测试数据”"]
          },
          {
            shortName: "增强玻纤网",
            name: "耐碱玻璃纤维增强网",
            sub: "双面同材质的抗裂增强层",
            tag: "LAYER 04 / 05",
            desc: "板材两面的水泥基涂层内均嵌入相同的耐碱玻璃纤维增强网，用于分散表面应力并提高复合结构的抗裂稳定性。两侧材料与功能一致，不区分上、下表面。",
            k1: ["主要作用", "分散应力、抑制表层开裂"],
            k2: ["材料类型", "耐碱玻璃纤维网"],
            k3: ["结构位置", "XPS 芯材两侧涂层内（双面相同）"],
            k4: ["参数依据", "以当前技术数据表为准"]
          },
          {
            shortName: "水泥基涂层",
            name: "聚合物改性水泥基涂层",
            sub: "双面同材质的粘结与保护层",
            tag: "LAYER 05 / 05",
            desc: "板材两面采用相同的聚合物改性水泥基涂层，分别包覆耐碱玻纤网，形成可铺贴瓷砖或与施工系统粘结的纹理表面。两面材料与功能一致，不区分上、下表面；模型中的表面纹理为结构示意。",
            k1: ["主要作用", "提供粘结面与表面保护"],
            k2: ["结构位置", "XPS 芯材两侧（双面相同）"],
            k3: ["材料类型", "聚合物改性水泥基涂层"],
            k4: ["参数依据", "以当前技术数据表为准"]
          }
        ]
      },
      en: {
        htmlLang: "en",
        dir: "ltr",
        documentTitle: "HYDRO-BLOK Wallboard | Interactive 3D Structure & Technical Reference",
        houseDocumentTitle: "HYDRO-BLOK Whole House System | Interactive 3D Model",
        brandTitle: "HYDRO-BLOK Wallboard",
        modelBoard: "Board Structure",
        modelHouse: "Whole House",
        contactButton: "Contact Us",
        contactTitle: "Contact JUST TOP",
        contactSubtitle: "Product specifications, application solutions and business inquiries",
        contactWhatsAppLabel: "WhatsApp",
        contactPhoneLabel: "Phone",
        contactEmailLabel: "Email",
        contactWhatsAppAction: "Chat now",
        contactPhoneAction: "Call us",
        contactEmailAction: "Send email",
        contactClose: "Close contact details",
        houseBrandTitle: "HYDRO-BLOK Whole House System",
        houseSubtitle: "Waterproof and thermal-insulation composite board · Interactive whole-house 3D guide",
        houseSpecLabel: "Application Areas:",
        houseRotateStop: "Stop Orbit",
        houseLabelsHide: "Hide 3D Labels",
        houseLabelsShow: "Show 3D Labels",
        houseViewIso: "Perspective",
        houseViewSection: "Front Section",
        houseViewTop: "Top View",
        houseModules: ["Roof", "Exterior Wall", "Partition Wall", "Interior Wall", "Floor Plate", "Floor", "Basement", "Media Wall"],
        subtitle: "Waterproof, thermally insulating composite board · Interactive 3D technical reference",
        stdTag: "DIN EN 13164",
        specLabel: "Available Sizes:",
        metricsTitle: "Board Data",
        areaLabel: "Area per Board",
        weightLabel: "Weight per Board",
        restoreTop: "Restore Board (Assemble)",
        currentSku: "Selected SKU",
        dimPrefix: "Actual Dimensions: ",
        dragHint: "🖱️ Drag to rotate · Wheel to zoom · Right-drag to pan · Click to select · Double-click to isolate/restore · Touch supported",
        specWheelHint: "Hover over the size bar and use the mouse wheel to scroll horizontally",
        scaleNote: "Schematic view: layer thicknesses are exaggerated and not shown to scale",
        explodeLabel: "Exploded Composite Structure:",
        btnAssemble: "Assemble",
        btnExplodeAll: "Explode All",
        btnIsolate: "Isolate & Center Layer",
        btnPullback: "Restore All Layers",
        btnPullbackSide: "Restore Layers",
        btnRecenter: "Recenter Focus",
        btnRotate: "360° Orbit",
        btnResetView: "Reset View",
        btnSpecsDoc: "Verified Test Data",
        btnShowDetails: "Show Layer Details",
        shiftHint: "Selected layer is centered for inspection; other layers shifted to the left",
        viewIso: "Isometric",
        viewSection: "Side View",
        viewTop: "Top Surface",
        titleAutoRotate: "Toggle automatic 360-degree orbit",
        titleResetView: "Restore the default camera view",
        titleCloseInspector: "Close layer details",
        titleCloseSpecs: "Close technical data",
        sliderLabel: "Exploded-view separation",
        runtimeError: "The 3D components could not be loaded. Check the network connection and reopen this file.",
        modal: {
          title: "HYDRO-BLOK Wallboard · Verified Test Reference",
          subtitle: "SGS Report XMIN2407001311CM01_EN · 12 mm sample · 10 Sep 2024",
          headers: ["Test item", "Test method", "Reported result", "Assessment"],
          rows: [
            ["Thickness", "EN 13164:2012+A1:2015 / EN ISO 29466:2022", "12.05 mm (12 mm nominal)", "Pass: T3 (12 ± 1 mm)"],
            ["Compressive stress at 10% deformation", "EN 13164:2012+A1:2015 / EN ISO 29469:2022", "Minimum 468 kPa; average 473 kPa", "Pass: ≥ 300 kPa"],
            ["Tensile strength perpendicular to faces", "EN 13164:2012+A1:2015 / EN 1607:2013", "Minimum 401 kPa; average 508 kPa", "Pass: ≥ 200 kPa"],
            ["Long-term water absorption by total immersion (28 days)", "EN 13164:2012+A1:2015 / ISO 16535:2019 Method 2A", "Maximum 2.4%; average 2.3%", "Pass: ≤ 3%"],
            ["Deformation under specified load and temperature", "EN 13164:2012+A1:2015 / EN 1605:2013", "Reported result: 2", "Pass: ≤ 5"]
          ],
          note: "These results apply only to the tested 12 mm sample. Before specification, confirm the latest complete report, selected thickness, local codes and the full system installation requirements. Steam rooms require an additional waterproofing membrane in accordance with the installation guide.",
          close: "Close Technical Data"
        },
        layers: [
          {
            shortName: "Cementitious Coating",
            name: "Polymer-Modified Cementitious Coating",
            sub: "Identical bonding and protective layer on both faces",
            tag: "LAYER 01 / 05",
            desc: "Both faces of the board use the same polymer-modified cementitious coating. Each coating encapsulates an alkali-resistant fiberglass mesh and forms a textured bonding surface for tile or system installation. Material and function are identical on both faces; there is no designated top or bottom. The rendered texture is schematic.",
            k1: ["Primary Function", "Bonding surface and surface protection"],
            k2: ["Position", "Both sides of the XPS core (identical)"],
            k3: ["Material", "Polymer-modified cementitious coating"],
            k4: ["Data Note", "Refer to the current technical data sheet"]
          },
          {
            shortName: "Reinforcing Mesh",
            name: "Alkali-Resistant Fiberglass Reinforcing Mesh",
            sub: "Identical crack-control reinforcement on both faces",
            tag: "LAYER 02 / 05",
            desc: "The same alkali-resistant fiberglass reinforcing mesh is embedded in the cementitious coating on each face to distribute surface stress and improve crack-control and composite stability. Material and function are identical on both sides; there is no designated top or bottom.",
            k1: ["Primary Function", "Stress distribution and crack control"],
            k2: ["Material", "Alkali-resistant fiberglass mesh"],
            k3: ["Position", "Within the coatings on both sides of the XPS core (identical)"],
            k4: ["Data Note", "Refer to the current technical data sheet"]
          },
          {
            shortName: "XPS Core",
            name: "Closed-Cell Extruded Polystyrene (XPS) Core",
            sub: "Lightweight insulating structural core",
            tag: "LAYER 03 / 05",
            desc: "The closed-cell XPS foam core forms the body of the board and combines low weight, thermal insulation and structural support. Proportions and texture are schematic.",
            k1: ["Primary Function", "Insulation, light weight and moisture resistance"],
            k2: ["Material", "Closed-cell extruded polystyrene"],
            k3: ["Position", "Composite board core"],
            k4: ["Verified Testing", "See “Verified Test Data”"]
          },
          {
            shortName: "Reinforcing Mesh",
            name: "Alkali-Resistant Fiberglass Reinforcing Mesh",
            sub: "Identical crack-control reinforcement on both faces",
            tag: "LAYER 04 / 05",
            desc: "The same alkali-resistant fiberglass reinforcing mesh is embedded in the cementitious coating on each face to distribute surface stress and improve crack-control and composite stability. Material and function are identical on both sides; there is no designated top or bottom.",
            k1: ["Primary Function", "Stress distribution and crack control"],
            k2: ["Material", "Alkali-resistant fiberglass mesh"],
            k3: ["Position", "Within the coatings on both sides of the XPS core (identical)"],
            k4: ["Data Note", "Refer to the current technical data sheet"]
          },
          {
            shortName: "Cementitious Coating",
            name: "Polymer-Modified Cementitious Coating",
            sub: "Identical bonding and protective layer on both faces",
            tag: "LAYER 05 / 05",
            desc: "Both faces of the board use the same polymer-modified cementitious coating. Each coating encapsulates an alkali-resistant fiberglass mesh and forms a textured bonding surface for tile or system installation. Material and function are identical on both faces; there is no designated top or bottom. The rendered texture is schematic.",
            k1: ["Primary Function", "Bonding surface and surface protection"],
            k2: ["Position", "Both sides of the XPS core (identical)"],
            k3: ["Material", "Polymer-modified cementitious coating"],
            k4: ["Data Note", "Refer to the current technical data sheet"]
          }
        ]
      },
      es: {
        htmlLang: "es",
        dir: "ltr",
        documentTitle: "Panel de construcción HYDRO-BLOK | Estructura 3D interactiva y referencia técnica",
        houseDocumentTitle: "Sistema integral HYDRO-BLOK | Modelo 3D interactivo",
        brandTitle: "Panel HYDRO-BLOK",
        modelBoard: "Estructura del panel",
        modelHouse: "Sistema integral",
        contactButton: "Contáctenos",
        contactTitle: "Contacte con JUST TOP",
        contactSubtitle: "Consultas sobre especificaciones, soluciones de aplicación y colaboración comercial",
        contactWhatsAppLabel: "WhatsApp",
        contactPhoneLabel: "Teléfono",
        contactEmailLabel: "Correo electrónico",
        contactWhatsAppAction: "Escribir",
        contactPhoneAction: "Llamar",
        contactEmailAction: "Enviar correo",
        contactClose: "Cerrar los datos de contacto",
        houseBrandTitle: "Sistema integral HYDRO-BLOK",
        houseSubtitle: "Panel compuesto impermeable y termoaislante · Guía 3D interactiva para toda la vivienda",
        houseSpecLabel: "Zonas de aplicación:",
        houseRotateStop: "Detener giro",
        houseLabelsHide: "Ocultar etiquetas 3D",
        houseLabelsShow: "Mostrar etiquetas 3D",
        houseViewIso: "Perspectiva",
        houseViewSection: "Sección frontal",
        houseViewTop: "Vista superior",
        houseModules: ["Cubierta", "Fachada", "Tabiques", "Paredes interiores", "Losa entre plantas", "Suelo", "Sótano", "Pared multimedia"],
        subtitle: "Panel compuesto impermeable y termoaislante · Referencia técnica 3D interactiva",
        stdTag: "DIN EN 13164",
        specLabel: "Medidas disponibles:",
        metricsTitle: "Datos del panel",
        areaLabel: "Superficie por panel",
        weightLabel: "Peso por panel",
        restoreTop: "Recomponer el panel",
        currentSku: "Referencia seleccionada",
        dimPrefix: "Dimensiones reales: ",
        dragHint: "🖱️ Arrastre para girar · Rueda para acercar/alejar · Arrastre con el botón derecho para desplazar · Clic para seleccionar · Doble clic para aislar/restaurar · Compatible con pantalla táctil",
        specWheelHint: "Sitúe el cursor sobre la barra de medidas y use la rueda para desplazarse horizontalmente",
        scaleNote: "Vista esquemática: los espesores de las capas están ampliados y no se muestran a escala real",
        explodeLabel: "Vista explosionada de la estructura compuesta:",
        btnAssemble: "Ensamblar",
        btnExplodeAll: "Separar todas las capas",
        btnIsolate: "Aislar y centrar la capa",
        btnPullback: "Restaurar todas las capas",
        btnPullbackSide: "Restaurar capas",
        btnRecenter: "Volver a centrar",
        btnRotate: "Giro 360°",
        btnResetView: "Restablecer vista",
        btnSpecsDoc: "Datos de ensayo verificados",
        btnShowDetails: "Mostrar detalles de la capa",
        shiftHint: "La capa seleccionada está centrada para su inspección; las demás se han desplazado a la izquierda",
        viewIso: "Vista isométrica",
        viewSection: "Vista lateral",
        viewTop: "Vista superior",
        titleAutoRotate: "Activar o desactivar el giro automático de 360 grados",
        titleResetView: "Restablecer la vista de cámara predeterminada",
        titleCloseInspector: "Cerrar los detalles de la capa",
        titleCloseSpecs: "Cerrar los datos técnicos",
        sliderLabel: "Separación de la vista explosionada",
        runtimeError: "No se han podido cargar los componentes 3D. Compruebe la conexión de red y vuelva a abrir el archivo.",
        modal: {
          title: "Panel HYDRO-BLOK · Referencia de ensayos verificados",
          subtitle: "Informe SGS XMIN2407001311CM01_EN · muestra de 12 mm · 10 sep 2024",
          headers: ["Característica", "Método de ensayo", "Resultado del informe", "Evaluación"],
          rows: [
            ["Espesor", "EN 13164:2012+A1:2015 / EN ISO 29466:2022", "12,05 mm (12 mm nominales)", "Conforme: T3 (12 ± 1 mm)"],
            ["Tensión de compresión al 10 % de deformación", "EN 13164:2012+A1:2015 / EN ISO 29469:2022", "Mínimo 468 kPa; media 473 kPa", "Conforme: ≥ 300 kPa"],
            ["Resistencia a tracción perpendicular a las caras", "EN 13164:2012+A1:2015 / EN 1607:2013", "Mínimo 401 kPa; media 508 kPa", "Conforme: ≥ 200 kPa"],
            ["Absorción de agua a largo plazo por inmersión total (28 días)", "EN 13164:2012+A1:2015 / ISO 16535:2019, método 2A", "Máximo 2,4 %; media 2,3 %", "Conforme: ≤ 3 %"],
            ["Deformación bajo carga y temperatura especificadas", "EN 13164:2012+A1:2015 / EN 1605:2013", "Resultado del informe: 2", "Conforme: ≤ 5"]
          ],
          note: "Estos resultados corresponden únicamente a la muestra ensayada de 12 mm. Antes de especificar el producto, confirme el informe completo más reciente, el espesor elegido, la normativa local y los requisitos de instalación del sistema completo. Los baños de vapor requieren una membrana impermeabilizante adicional conforme a la guía de instalación.",
          close: "Cerrar datos técnicos"
        },
        layers: [
          {
            shortName: "Revestimiento de cemento",
            name: "Revestimiento de cemento modificado con polímero",
            sub: "Capa idéntica de adherencia y protección en ambas caras",
            tag: "CAPA 01 / 05",
            desc: "Ambas caras del panel llevan el mismo revestimiento de cemento modificado con polímero. Cada revestimiento recubre una malla de fibra de vidrio resistente a los álcalis y forma una superficie texturizada de adherencia para la colocación de baldosas o la instalación del sistema. El material y la función son idénticos en ambas caras; no existe una cara superior o inferior definida. La textura del modelo es esquemática.",
            k1: ["Función principal", "Superficie de adherencia y protección superficial"],
            k2: ["Ubicación", "A ambos lados del núcleo de XPS (idénticos)"],
            k3: ["Material", "Revestimiento de cemento modificado con polímero"],
            k4: ["Nota sobre los datos", "Consulte la ficha técnica vigente"]
          },
          {
            shortName: "Malla de refuerzo",
            name: "Malla de refuerzo de fibra de vidrio resistente a los álcalis",
            sub: "Refuerzo idéntico para el control de fisuras en ambas caras",
            tag: "CAPA 02 / 05",
            desc: "La misma malla de refuerzo de fibra de vidrio resistente a los álcalis está embebida en el revestimiento cementoso de cada cara para distribuir las tensiones superficiales y mejorar el control de fisuras y la estabilidad del conjunto. El material y la función son idénticos en ambos lados; no existe una cara superior o inferior definida.",
            k1: ["Función principal", "Distribución de tensiones y control de fisuras"],
            k2: ["Material", "Malla de fibra de vidrio resistente a los álcalis"],
            k3: ["Ubicación", "Dentro del revestimiento de ambas caras del núcleo de XPS (idéntico)"],
            k4: ["Nota sobre los datos", "Consulte la ficha técnica vigente"]
          },
          {
            shortName: "Núcleo de XPS",
            name: "Núcleo de poliestireno extruido (XPS) de célula cerrada",
            sub: "Núcleo estructural ligero y termoaislante",
            tag: "CAPA 03 / 05",
            desc: "El núcleo de espuma XPS de célula cerrada constituye el cuerpo del panel y combina bajo peso, aislamiento térmico y soporte estructural. Las proporciones y la textura del modelo son esquemáticas.",
            k1: ["Función principal", "Aislamiento térmico, bajo peso y resistencia a la humedad"],
            k2: ["Material", "Poliestireno extruido de célula cerrada"],
            k3: ["Ubicación", "Núcleo del panel compuesto"],
            k4: ["Ensayos verificados", "Consulte «Datos de ensayo verificados»"]
          },
          {
            shortName: "Malla de refuerzo",
            name: "Malla de refuerzo de fibra de vidrio resistente a los álcalis",
            sub: "Refuerzo idéntico para el control de fisuras en ambas caras",
            tag: "CAPA 04 / 05",
            desc: "La misma malla de refuerzo de fibra de vidrio resistente a los álcalis está embebida en el revestimiento cementoso de cada cara para distribuir las tensiones superficiales y mejorar el control de fisuras y la estabilidad del conjunto. El material y la función son idénticos en ambos lados; no existe una cara superior o inferior definida.",
            k1: ["Función principal", "Distribución de tensiones y control de fisuras"],
            k2: ["Material", "Malla de fibra de vidrio resistente a los álcalis"],
            k3: ["Ubicación", "Dentro del revestimiento de ambas caras del núcleo de XPS (idéntico)"],
            k4: ["Nota sobre los datos", "Consulte la ficha técnica vigente"]
          },
          {
            shortName: "Revestimiento de cemento",
            name: "Revestimiento de cemento modificado con polímero",
            sub: "Capa idéntica de adherencia y protección en ambas caras",
            tag: "CAPA 05 / 05",
            desc: "Ambas caras del panel llevan el mismo revestimiento de cemento modificado con polímero. Cada revestimiento recubre una malla de fibra de vidrio resistente a los álcalis y forma una superficie texturizada de adherencia para la colocación de baldosas o la instalación del sistema. El material y la función son idénticos en ambas caras; no existe una cara superior o inferior definida. La textura del modelo es esquemática.",
            k1: ["Función principal", "Superficie de adherencia y protección superficial"],
            k2: ["Ubicación", "A ambos lados del núcleo de XPS (idénticos)"],
            k3: ["Material", "Revestimiento de cemento modificado con polímero"],
            k4: ["Nota sobre los datos", "Consulte la ficha técnica vigente"]
          }
        ]
      },
      fr: {
        htmlLang: "fr",
        dir: "ltr",
        documentTitle: "Panneau de construction HYDRO-BLOK | Structure 3D interactive et référence technique",
        houseDocumentTitle: "Système HYDRO-BLOK pour toute la maison | Modèle 3D interactif",
        brandTitle: "Panneau HYDRO-BLOK",
        modelBoard: "Structure du panneau",
        modelHouse: "Maison complète",
        contactButton: "Nous contacter",
        contactTitle: "Contacter JUST TOP",
        contactSubtitle: "Spécifications, solutions d’application et demandes de partenariat commercial",
        contactWhatsAppLabel: "WhatsApp",
        contactPhoneLabel: "Téléphone",
        contactEmailLabel: "E-mail",
        contactWhatsAppAction: "Écrire",
        contactPhoneAction: "Appeler",
        contactEmailAction: "Envoyer un e-mail",
        contactClose: "Fermer les coordonnées",
        houseBrandTitle: "Système intégral HYDRO-BLOK",
        houseSubtitle: "Panneau composite étanche et thermo-isolant · Guide 3D interactif pour toute la maison",
        houseSpecLabel: "Zones d’application :",
        houseRotateStop: "Arrêter la rotation",
        houseLabelsHide: "Masquer les repères 3D",
        houseLabelsShow: "Afficher les repères 3D",
        houseViewIso: "Perspective",
        houseViewSection: "Coupe frontale",
        houseViewTop: "Vue de dessus",
        houseModules: ["Toiture", "Mur extérieur", "Cloison", "Mur intérieur", "Plancher intermédiaire", "Sol", "Sous-sol", "Mur multimédia"],
        subtitle: "Panneau composite étanche et thermo-isolant · Référence technique 3D interactive",
        stdTag: "DIN EN 13164",
        specLabel: "Dimensions disponibles :",
        metricsTitle: "Données du panneau",
        areaLabel: "Surface par panneau",
        weightLabel: "Poids par panneau",
        restoreTop: "Réassembler le panneau",
        currentSku: "Référence sélectionnée",
        dimPrefix: "Dimensions réelles : ",
        dragHint: "🖱️ Faire glisser pour tourner · Molette pour zoomer · Clic droit pour déplacer · Cliquer pour sélectionner · Double-cliquer pour isoler/restaurer · Compatible tactile",
        specWheelHint: "Placez le pointeur sur la barre des dimensions et utilisez la molette pour la faire défiler horizontalement",
        scaleNote: "Vue schématique : l’épaisseur des couches est exagérée et n’est pas représentée à l’échelle",
        explodeLabel: "Vue éclatée de la structure composite :",
        btnAssemble: "Assembler",
        btnExplodeAll: "Éclater toutes les couches",
        btnIsolate: "Isoler et centrer la couche",
        btnPullback: "Restaurer toutes les couches",
        btnPullbackSide: "Restaurer les couches",
        btnRecenter: "Recentrer",
        btnRotate: "Rotation 360°",
        btnResetView: "Réinitialiser la vue",
        btnSpecsDoc: "Données d’essai vérifiées",
        btnShowDetails: "Afficher les détails de la couche",
        shiftHint: "La couche sélectionnée est centrée pour inspection ; les autres couches sont décalées vers la gauche",
        viewIso: "Vue isométrique",
        viewSection: "Vue latérale",
        viewTop: "Vue de dessus",
        titleAutoRotate: "Activer ou désactiver la rotation automatique à 360 degrés",
        titleResetView: "Rétablir la vue de caméra par défaut",
        titleCloseInspector: "Fermer les détails de la couche",
        titleCloseSpecs: "Fermer les données techniques",
        sliderLabel: "Écartement de la vue éclatée",
        runtimeError: "Impossible de charger les composants 3D. Vérifiez la connexion réseau, puis rouvrez le fichier.",
        modal: {
          title: "Panneau HYDRO-BLOK · Référence d’essais vérifiés",
          subtitle: "Rapport SGS XMIN2407001311CM01_EN · échantillon de 12 mm · 10 sept. 2024",
          headers: ["Caractéristique", "Méthode d’essai", "Résultat du rapport", "Évaluation"],
          rows: [
            ["Épaisseur", "EN 13164:2012+A1:2015 / EN ISO 29466:2022", "12,05 mm (12 mm nominal)", "Conforme : T3 (12 ± 1 mm)"],
            ["Contrainte en compression à 10 % de déformation", "EN 13164:2012+A1:2015 / EN ISO 29469:2022", "Minimum 468 kPa ; moyenne 473 kPa", "Conforme : ≥ 300 kPa"],
            ["Résistance à la traction perpendiculaire aux faces", "EN 13164:2012+A1:2015 / EN 1607:2013", "Minimum 401 kPa ; moyenne 508 kPa", "Conforme : ≥ 200 kPa"],
            ["Absorption d’eau à long terme par immersion totale (28 jours)", "EN 13164:2012+A1:2015 / ISO 16535:2019, méthode 2A", "Maximum 2,4 % ; moyenne 2,3 %", "Conforme : ≤ 3 %"],
            ["Déformation sous charge et température spécifiées", "EN 13164:2012+A1:2015 / EN 1605:2013", "Résultat du rapport : 2", "Conforme : ≤ 5"]
          ],
          note: "Ces résultats s’appliquent uniquement à l’échantillon de 12 mm testé. Avant toute prescription, vérifiez le rapport complet le plus récent, l’épaisseur choisie, les réglementations locales et les exigences d’installation du système complet. Les hammams nécessitent une membrane d’étanchéité supplémentaire conformément au guide de pose.",
          close: "Fermer les données techniques"
        },
        layers: [
          {
            shortName: "Enduit cimentaire",
            name: "Enduit cimentaire modifié aux polymères",
            sub: "Couche d’adhérence et de protection identique sur les deux faces",
            tag: "COUCHE 01 / 05",
            desc: "Les deux faces du panneau reçoivent le même enduit cimentaire modifié aux polymères. Chaque enduit enveloppe un treillis en fibre de verre résistant aux alcalis et forme une surface texturée favorisant l’adhérence du carrelage ou l’intégration au système. Le matériau et la fonction sont identiques sur les deux faces ; aucune face supérieure ou inférieure n’est imposée. La texture du modèle est schématique.",
            k1: ["Fonction principale", "Surface d’adhérence et protection superficielle"],
            k2: ["Emplacement", "Des deux côtés de l’âme XPS (identiques)"],
            k3: ["Matériau", "Enduit cimentaire modifié aux polymères"],
            k4: ["Note sur les données", "Consulter la fiche technique en vigueur"]
          },
          {
            shortName: "Treillis de renfort",
            name: "Treillis de renfort en fibre de verre résistant aux alcalis",
            sub: "Renfort identique de maîtrise des fissures sur les deux faces",
            tag: "COUCHE 02 / 05",
            desc: "Le même treillis de renfort en fibre de verre résistant aux alcalis est noyé dans l’enduit cimentaire de chaque face afin de répartir les contraintes superficielles et d’améliorer la maîtrise des fissures ainsi que la stabilité de l’ensemble. Le matériau et la fonction sont identiques des deux côtés ; aucune face supérieure ou inférieure n’est imposée.",
            k1: ["Fonction principale", "Répartition des contraintes et maîtrise des fissures"],
            k2: ["Matériau", "Treillis en fibre de verre résistant aux alcalis"],
            k3: ["Emplacement", "Dans l’enduit des deux faces de l’âme XPS (identique)"],
            k4: ["Note sur les données", "Consulter la fiche technique en vigueur"]
          },
          {
            shortName: "Âme XPS",
            name: "Âme en polystyrène extrudé (XPS) à cellules fermées",
            sub: "Âme structurelle légère et thermo-isolante",
            tag: "COUCHE 03 / 05",
            desc: "L’âme en mousse XPS à cellules fermées constitue le corps du panneau et associe légèreté, isolation thermique et support structurel. Les proportions et la texture du modèle sont schématiques.",
            k1: ["Fonction principale", "Isolation thermique, légèreté et résistance à l’humidité"],
            k2: ["Matériau", "Polystyrène extrudé à cellules fermées"],
            k3: ["Emplacement", "Âme du panneau composite"],
            k4: ["Essais vérifiés", "Voir « Données d’essai vérifiées »"]
          },
          {
            shortName: "Treillis de renfort",
            name: "Treillis de renfort en fibre de verre résistant aux alcalis",
            sub: "Renfort identique de maîtrise des fissures sur les deux faces",
            tag: "COUCHE 04 / 05",
            desc: "Le même treillis de renfort en fibre de verre résistant aux alcalis est noyé dans l’enduit cimentaire de chaque face afin de répartir les contraintes superficielles et d’améliorer la maîtrise des fissures ainsi que la stabilité de l’ensemble. Le matériau et la fonction sont identiques des deux côtés ; aucune face supérieure ou inférieure n’est imposée.",
            k1: ["Fonction principale", "Répartition des contraintes et maîtrise des fissures"],
            k2: ["Matériau", "Treillis en fibre de verre résistant aux alcalis"],
            k3: ["Emplacement", "Dans l’enduit des deux faces de l’âme XPS (identique)"],
            k4: ["Note sur les données", "Consulter la fiche technique en vigueur"]
          },
          {
            shortName: "Enduit cimentaire",
            name: "Enduit cimentaire modifié aux polymères",
            sub: "Couche d’adhérence et de protection identique sur les deux faces",
            tag: "COUCHE 05 / 05",
            desc: "Les deux faces du panneau reçoivent le même enduit cimentaire modifié aux polymères. Chaque enduit enveloppe un treillis en fibre de verre résistant aux alcalis et forme une surface texturée favorisant l’adhérence du carrelage ou l’intégration au système. Le matériau et la fonction sont identiques sur les deux faces ; aucune face supérieure ou inférieure n’est imposée. La texture du modèle est schématique.",
            k1: ["Fonction principale", "Surface d’adhérence et protection superficielle"],
            k2: ["Emplacement", "Des deux côtés de l’âme XPS (identiques)"],
            k3: ["Matériau", "Enduit cimentaire modifié aux polymères"],
            k4: ["Note sur les données", "Consulter la fiche technique en vigueur"]
          }
        ]
      },
      ar: {
        htmlLang: "ar",
        dir: "rtl",
        documentTitle: "لوح HYDRO-BLOK | دليل تفاعلي ثلاثي الأبعاد للبنية والبيانات الفنية",
        houseDocumentTitle: "نظام HYDRO-BLOK للمنزل بالكامل | نموذج تفاعلي ثلاثي الأبعاد",
        brandTitle: "لوح هيدروبلوك (HYDRO-BLOK)",
        modelBoard: "بنية اللوح",
        modelHouse: "تطبيقات المنزل",
        contactButton: "تواصل معنا",
        contactTitle: "تواصل مع JUST TOP",
        contactSubtitle: "للاستفسار عن مواصفات المنتجات وحلول التطبيقات وفرص التعاون التجاري",
        contactWhatsAppLabel: "واتساب",
        contactPhoneLabel: "الهاتف",
        contactEmailLabel: "البريد الإلكتروني",
        contactWhatsAppAction: "ابدأ المحادثة",
        contactPhoneAction: "اتصل بنا",
        contactEmailAction: "أرسل بريداً",
        contactClose: "إغلاق معلومات التواصل",
        houseBrandTitle: "نظام HYDRO-BLOK للمنزل بالكامل",
        houseSubtitle: "لوح مركّب للعزل المائي والحراري · دليل تفاعلي ثلاثي الأبعاد لتطبيقات المنزل بالكامل",
        houseSpecLabel: "مناطق التطبيق:",
        houseRotateStop: "إيقاف الدوران",
        houseLabelsHide: "إخفاء تسميات 3D",
        houseLabelsShow: "إظهار تسميات 3D",
        houseViewIso: "منظور مائل",
        houseViewSection: "قطاع أمامي",
        houseViewTop: "منظر علوي",
        houseModules: ["السقف", "الجدار الخارجي", "الجدار الفاصل", "الجدار الداخلي", "بلاطة الطابق", "الأرضية", "القبو", "جدار العرض"],
        subtitle: "لوح إنشائي مركّب مقاوم للماء وعازل للحرارة · مرجع تقني تفاعلي ثلاثي الأبعاد",
        stdTag: "DIN EN 13164",
        specLabel: "المقاسات المتاحة:",
        metricsTitle: "بيانات اللوح",
        areaLabel: "مساحة اللوح",
        weightLabel: "وزن اللوح",
        restoreTop: "إعادة تجميع اللوح بالكامل",
        currentSku: "المقاس المختار",
        dimPrefix: "الأبعاد الفعلية: ",
        dragHint: "🖱️ اسحب للتدوير · العجلة للتكبير · الزر الأيمن للتحريك · انقر للاختيار · انقر نقراً مزدوجاً للعزل أو الاستعادة · يدعم اللمس",
        specWheelHint: "مرّر مؤشر الفأرة فوق شريط المقاسات واستخدم العجلة للتصفح أفقياً",
        scaleNote: "رسم توضيحي: تم تكبير سماكات الطبقات ولا تمثل المقياس الحقيقي",
        explodeLabel: "عرض انفجاري للبنية المركّبة:",
        btnAssemble: "تجميع اللوح",
        btnExplodeAll: "فصل جميع الطبقات",
        btnIsolate: "عزل وتوسيط الطبقة",
        btnPullback: "إعادة جميع الطبقات",
        btnPullbackSide: "إعادة الطبقات",
        btnRecenter: "إعادة ضبط المركز",
        btnRotate: "دوران تلقائي 360°",
        btnResetView: "استعادة المنظور",
        btnSpecsDoc: "بيانات الاختبار الموثقة",
        btnShowDetails: "إظهار تفاصيل الطبقة",
        shiftHint: "تم توسيط الطبقة المختارة ونقل الطبقات الأخرى يساراً للفحص",
        viewIso: "منظور مائل",
        viewSection: "منظر جانبي",
        viewTop: "عرض علوي",
        titleAutoRotate: "تشغيل أو إيقاف الدوران التلقائي بزاوية 360 درجة",
        titleResetView: "استعادة وضع الكاميرا الافتراضي",
        titleCloseInspector: "إغلاق تفاصيل الطبقة",
        titleCloseSpecs: "إغلاق البيانات الفنية",
        sliderLabel: "مقدار فصل الطبقات في العرض الانفجاري",
        runtimeError: "تعذر تحميل مكونات العرض ثلاثي الأبعاد. تحقق من اتصال الشبكة ثم أعد فتح الملف.",
        modal: {
          title: "لوح HYDRO-BLOK · مرجع الاختبارات الموثقة",
          subtitle: "تقرير SGS رقم XMIN2407001311CM01_EN · عينة 12 مم · 10 سبتمبر 2024",
          headers: ["بند الاختبار", "طريقة الاختبار", "النتيجة المسجلة", "التقييم"],
          rows: [
            ["السُمك", "EN 13164:2012+A1:2015 / EN ISO 29466:2022", "12.05 مم (السُمك الاسمي 12 مم)", "مطابق: T3 ‏(12 ± 1 مم)"],
            ["إجهاد الضغط عند تشوه 10%", "EN 13164:2012+A1:2015 / EN ISO 29469:2022", "الحد الأدنى 468 كيلوباسكال؛ المتوسط 473 كيلوباسكال", "مطابق: ≥ 300 كيلوباسكال"],
            ["مقاومة الشد عمودياً على السطحين", "EN 13164:2012+A1:2015 / EN 1607:2013", "الحد الأدنى 401 كيلوباسكال؛ المتوسط 508 كيلوباسكال", "مطابق: ≥ 200 كيلوباسكال"],
            ["امتصاص الماء طويل الأمد بالغمر الكامل (28 يوماً)", "EN 13164:2012+A1:2015 / ISO 16535:2019 الطريقة 2A", "الحد الأقصى 2.4%؛ المتوسط 2.3%", "مطابق: ≤ 3%"],
            ["التشوه تحت أحمال ودرجات حرارة محددة", "EN 13164:2012+A1:2015 / EN 1605:2013", "النتيجة المسجلة: 2", "مطابق: ≤ 5"]
          ],
          note: "تنطبق هذه النتائج على عينة 12 مم التي تم اختبارها فقط. قبل اعتماد المواصفات، يجب التحقق من أحدث تقرير كامل وسُمك المنتج المختار والكود المحلي ومتطلبات تركيب النظام بالكامل. تتطلب غرف البخار غشاء عزل مائي إضافياً وفق دليل التركيب.",
          close: "إغلاق البيانات الفنية"
        },
        layers: [
          {
            shortName: "الطلاء الإسمنتي",
            name: "طلاء إسمنتي معدل بالبوليمر",
            sub: "طبقة ربط وحماية متطابقة على وجهي اللوح",
            tag: "الطبقة 01 / 05",
            desc: "يستخدم وجها اللوح الطلاء الإسمنتي المعدل بالبوليمر نفسه. يغلف كل طلاء شبكة ألياف زجاجية مقاومة للقلويات ويكوّن سطحاً محبباً للالتصاق بالبلاط أو بنظام التركيب. المادة والوظيفة متطابقتان على الوجهين، ولا يوجد وجه علوي أو سفلي محدد. ملمس السطح في النموذج توضيحي.",
            k1: ["الوظيفة الأساسية", "سطح للربط وحماية السطح"],
            k2: ["الموقع", "على جانبي قلب XPS (متطابقان)"],
            k3: ["المادة", "طلاء إسمنتي معدل بالبوليمر"],
            k4: ["ملاحظة البيانات", "يرجى الرجوع إلى ورقة البيانات الفنية الحالية"]
          },
          {
            shortName: "شبكة التسليح",
            name: "شبكة تسليح من الألياف الزجاجية مقاومة للقلويات",
            sub: "تسليح متطابق للتحكم في التشققات على وجهي اللوح",
            tag: "الطبقة 02 / 05",
            desc: "تُدمج شبكة التسليح نفسها المصنوعة من الألياف الزجاجية المقاومة للقلويات داخل الطلاء الإسمنتي على كل وجه لتوزيع إجهادات السطح وتحسين مقاومة التشقق وثبات البنية المركّبة. المادة والوظيفة متطابقتان على الجانبين، ولا يوجد وجه علوي أو سفلي محدد.",
            k1: ["الوظيفة الأساسية", "توزيع الإجهاد والتحكم في التشققات"],
            k2: ["المادة", "شبكة ألياف زجاجية مقاومة للقلويات"],
            k3: ["الموقع", "داخل الطلاء على جانبي قلب XPS (متطابقان)"],
            k4: ["ملاحظة البيانات", "يرجى الرجوع إلى ورقة البيانات الفنية الحالية"]
          },
          {
            shortName: "قلب XPS",
            name: "قلب من البوليسترين المبثوق مغلق الخلايا (XPS)",
            sub: "قلب خفيف عازل وداعم",
            tag: "الطبقة 03 / 05",
            desc: "يشكل فوم XPS مغلق الخلايا جسم اللوح، ويجمع بين خفة الوزن والعزل الحراري والدعم الإنشائي. النسب والملمس في النموذج توضيحيان.",
            k1: ["الوظيفة الأساسية", "العزل وخفة الوزن ومقاومة الرطوبة"],
            k2: ["المادة", "بوليسترين مبثوق مغلق الخلايا"],
            k3: ["الموقع", "قلب اللوح المركّب"],
            k4: ["الاختبارات الموثقة", "راجع «بيانات الاختبار الموثقة»"]
          },
          {
            shortName: "شبكة التسليح",
            name: "شبكة تسليح من الألياف الزجاجية مقاومة للقلويات",
            sub: "تسليح متطابق للتحكم في التشققات على وجهي اللوح",
            tag: "الطبقة 04 / 05",
            desc: "تُدمج شبكة التسليح نفسها المصنوعة من الألياف الزجاجية المقاومة للقلويات داخل الطلاء الإسمنتي على كل وجه لتوزيع إجهادات السطح وتحسين مقاومة التشقق وثبات البنية المركّبة. المادة والوظيفة متطابقتان على الجانبين، ولا يوجد وجه علوي أو سفلي محدد.",
            k1: ["الوظيفة الأساسية", "توزيع الإجهاد والتحكم في التشققات"],
            k2: ["المادة", "شبكة ألياف زجاجية مقاومة للقلويات"],
            k3: ["الموقع", "داخل الطلاء على جانبي قلب XPS (متطابقان)"],
            k4: ["ملاحظة البيانات", "يرجى الرجوع إلى ورقة البيانات الفنية الحالية"]
          },
          {
            shortName: "الطلاء الإسمنتي",
            name: "طلاء إسمنتي معدل بالبوليمر",
            sub: "طبقة ربط وحماية متطابقة على وجهي اللوح",
            tag: "الطبقة 05 / 05",
            desc: "يستخدم وجها اللوح الطلاء الإسمنتي المعدل بالبوليمر نفسه. يغلف كل طلاء شبكة ألياف زجاجية مقاومة للقلويات ويكوّن سطحاً محبباً للالتصاق بالبلاط أو بنظام التركيب. المادة والوظيفة متطابقتان على الوجهين، ولا يوجد وجه علوي أو سفلي محدد. ملمس السطح في النموذج توضيحي.",
            k1: ["الوظيفة الأساسية", "سطح للربط وحماية السطح"],
            k2: ["الموقع", "على جانبي قلب XPS (متطابقان)"],
            k3: ["المادة", "طلاء إسمنتي معدل بالبوليمر"],
            k4: ["ملاحظة البيانات", "يرجى الرجوع إلى ورقة البيانات الفنية الحالية"]
          }
        ]
      },
      ru: {
        htmlLang: "ru",
        dir: "ltr",
        documentTitle: "Панель HYDRO-BLOK | Интерактивная 3D-структура и технические данные",
        houseDocumentTitle: "Система HYDRO-BLOK для всего дома | Интерактивная 3D-модель",
        brandTitle: "Строительная панель HYDRO-BLOK",
        modelBoard: "Структура панели",
        modelHouse: "Весь дом",
        contactButton: "Связаться",
        contactTitle: "Связаться с JUST TOP",
        contactSubtitle: "Характеристики продукции, решения по применению и деловые запросы",
        contactWhatsAppLabel: "WhatsApp",
        contactPhoneLabel: "Телефон",
        contactEmailLabel: "Эл. почта",
        contactWhatsAppAction: "Написать",
        contactPhoneAction: "Позвонить",
        contactEmailAction: "Отправить письмо",
        contactClose: "Закрыть контактные данные",
        houseBrandTitle: "HYDRO-BLOK — система для всего дома",
        houseSubtitle: "Композитная тепло- и гидроизоляционная плита · Интерактивная 3D-схема применения",
        houseSpecLabel: "Зоны применения:",
        houseRotateStop: "Остановить вращение",
        houseLabelsHide: "Скрыть 3D-метки",
        houseLabelsShow: "Показать 3D-метки",
        houseViewIso: "Перспектива",
        houseViewSection: "Фронтальный разрез",
        houseViewTop: "Вид сверху",
        houseModules: ["Кровля", "Наружная стена", "Перегородка", "Внутренняя стена", "Плита перекрытия", "Пол", "Подвал", "Медиастена"],
        subtitle: "Водостойкая теплоизоляционная композитная панель · Интерактивный 3D-справочник",
        stdTag: "DIN EN 13164",
        specLabel: "Доступные размеры:",
        metricsTitle: "Данные панели",
        areaLabel: "Площадь панели",
        weightLabel: "Масса панели",
        restoreTop: "Собрать панель воедино",
        currentSku: "Выбранный артикул",
        dimPrefix: "Фактические размеры: ",
        dragHint: "🖱️ Перетаскивание — вращение · Колесо — масштаб · ПКМ — панорама · Клик — выбор · Двойной клик — изоляция/возврат · Сенсорный ввод поддерживается",
        specWheelHint: "Наведите указатель на панель размеров и прокручивайте её колесом мыши по горизонтали",
        scaleNote: "Схематическое изображение: толщина слоёв увеличена и не показана в реальном масштабе",
        explodeLabel: "Разнесённая схема композитной структуры:",
        btnAssemble: "Собрать",
        btnExplodeAll: "Разнести все слои",
        btnIsolate: "Изолировать слой в центр",
        btnPullback: "Вернуть все слои",
        btnPullbackSide: "Восстановить слои",
        btnRecenter: "Центрировать",
        btnRotate: "Автовращение 360°",
        btnResetView: "Сброс вида",
        btnSpecsDoc: "Подтверждённые испытания",
        btnShowDetails: "Показать данные слоя",
        shiftHint: "Выбранный слой расположен по центру, остальные слои смещены влево",
        viewIso: "Изометрия",
        viewSection: "Вид сбоку",
        viewTop: "Вид сверху",
        titleAutoRotate: "Включить или выключить автоматическое вращение на 360 градусов",
        titleResetView: "Восстановить исходное положение камеры",
        titleCloseInspector: "Закрыть данные слоя",
        titleCloseSpecs: "Закрыть технические данные",
        sliderLabel: "Степень разнесения слоёв",
        runtimeError: "Не удалось загрузить 3D-компоненты. Проверьте подключение к сети и снова откройте файл.",
        modal: {
          title: "Панель HYDRO-BLOK · Подтверждённые результаты испытаний",
          subtitle: "Отчёт SGS XMIN2407001311CM01_EN · образец 12 мм · 10 сентября 2024 г.",
          headers: ["Показатель", "Метод испытания", "Результат отчёта", "Оценка"],
          rows: [
            ["Толщина", "EN 13164:2012+A1:2015 / EN ISO 29466:2022", "12,05 мм (номинал 12 мм)", "Соответствует: T3 (12 ± 1 мм)"],
            ["Напряжение сжатия при 10% деформации", "EN 13164:2012+A1:2015 / EN ISO 29469:2022", "Минимум 468 кПа; среднее 473 кПа", "Соответствует: ≥ 300 кПа"],
            ["Прочность при растяжении перпендикулярно поверхностям", "EN 13164:2012+A1:2015 / EN 1607:2013", "Минимум 401 кПа; среднее 508 кПа", "Соответствует: ≥ 200 кПа"],
            ["Длительное водопоглощение при полном погружении (28 суток)", "EN 13164:2012+A1:2015 / ISO 16535:2019, метод 2A", "Максимум 2,4%; среднее 2,3%", "Соответствует: ≤ 3%"],
            ["Деформация при заданных нагрузке и температуре", "EN 13164:2012+A1:2015 / EN 1605:2013", "Результат отчёта: 2", "Соответствует: ≤ 5"]
          ],
          note: "Результаты относятся только к испытанному образцу толщиной 12 мм. Перед включением продукта в проект проверьте актуальный полный отчёт, выбранную толщину, местные нормы и требования к монтажу всей системы. Для парных требуется дополнительная гидроизоляционная мембрана согласно инструкции по монтажу.",
          close: "Закрыть технические данные"
        },
        layers: [
          {
            shortName: "Цементное покрытие",
            name: "Полимермодифицированное цементное покрытие",
            sub: "Одинаковый адгезионный и защитный слой с обеих сторон",
            tag: "СЛОЙ 01 / 05",
            desc: "С обеих сторон панели применяется одинаковое полимермодифицированное цементное покрытие. Каждый слой закрывает щелочестойкую стеклосетку и образует фактурную поверхность для приклеивания плитки или монтажа системы. Материал и функция с обеих сторон одинаковы; заданных верхней и нижней сторон нет. Фактура в модели показана схематически.",
            k1: ["Основная функция", "Адгезионная поверхность и защита"],
            k2: ["Положение", "С обеих сторон сердечника XPS (одинаково)"],
            k3: ["Материал", "Полимермодифицированное цементное покрытие"],
            k4: ["Примечание", "См. актуальный технический паспорт"]
          },
          {
            shortName: "Армирующая сетка",
            name: "Щелочестойкая армирующая стеклосетка",
            sub: "Одинаковое армирование для контроля трещин с обеих сторон",
            tag: "СЛОЙ 02 / 05",
            desc: "Одинаковая щелочестойкая армирующая стеклосетка находится внутри цементного покрытия с каждой стороны, распределяет поверхностные напряжения и повышает трещиностойкость и стабильность композитной структуры. Материал и функция с обеих сторон одинаковы; заданных верхней и нижней сторон нет.",
            k1: ["Основная функция", "Распределение напряжений и контроль трещин"],
            k2: ["Материал", "Щелочестойкая стеклосетка"],
            k3: ["Положение", "В покрытиях с обеих сторон сердечника XPS (одинаково)"],
            k4: ["Примечание", "См. актуальный технический паспорт"]
          },
          {
            shortName: "Сердечник XPS",
            name: "Закрытоячеистый сердечник из экструдированного полистирола (XPS)",
            sub: "Лёгкий теплоизоляционный несущий сердечник",
            tag: "СЛОЙ 03 / 05",
            desc: "Закрытоячеистый XPS формирует тело панели и сочетает малый вес, теплоизоляцию и конструкционную поддержку. Пропорции и фактура показаны схематически.",
            k1: ["Основная функция", "Теплоизоляция, малый вес и влагостойкость"],
            k2: ["Материал", "Закрытоячеистый экструдированный полистирол"],
            k3: ["Положение", "Сердечник композитной панели"],
            k4: ["Подтверждённые испытания", "См. раздел испытаний"]
          },
          {
            shortName: "Армирующая сетка",
            name: "Щелочестойкая армирующая стеклосетка",
            sub: "Одинаковое армирование для контроля трещин с обеих сторон",
            tag: "СЛОЙ 04 / 05",
            desc: "Одинаковая щелочестойкая армирующая стеклосетка находится внутри цементного покрытия с каждой стороны, распределяет поверхностные напряжения и повышает трещиностойкость и стабильность композитной структуры. Материал и функция с обеих сторон одинаковы; заданных верхней и нижней сторон нет.",
            k1: ["Основная функция", "Распределение напряжений и контроль трещин"],
            k2: ["Материал", "Щелочестойкая стеклосетка"],
            k3: ["Положение", "В покрытиях с обеих сторон сердечника XPS (одинаково)"],
            k4: ["Примечание", "См. актуальный технический паспорт"]
          },
          {
            shortName: "Цементное покрытие",
            name: "Полимермодифицированное цементное покрытие",
            sub: "Одинаковый адгезионный и защитный слой с обеих сторон",
            tag: "СЛОЙ 05 / 05",
            desc: "С обеих сторон панели применяется одинаковое полимермодифицированное цементное покрытие. Каждый слой закрывает щелочестойкую стеклосетку и образует фактурную поверхность для приклеивания плитки или монтажа системы. Материал и функция с обеих сторон одинаковы; заданных верхней и нижней сторон нет. Фактура в модели показана схематически.",
            k1: ["Основная функция", "Адгезионная поверхность и защита"],
            k2: ["Положение", "С обеих сторон сердечника XPS (одинаково)"],
            k3: ["Материал", "Полимермодифицированное цементное покрытие"],
            k4: ["Примечание", "См. актуальный технический паспорт"]
          }
        ]
      }
    };

    function getInitialLanguage() {
      try {
        const saved = localStorage.getItem('hydroblok-lang');
        if (saved && I18N[saved]) return saved;
      } catch (_) {
        // Some local-file environments disable storage; Chinese remains the safe default.
      }
      return 'zh';
    }

    let currentLang = getInitialLanguage();
    let activeProductModel = 'board';
    let selectedHouseModule = 'roof';
    let houseLabelsVisible = true;
    let houseAutoRotating = false;
    const HOUSE_MODULE_IDS = ['roof', 'exterior', 'partition', 'interior', 'floorplate', 'floor', 'basement', 'screen'];

    // ==========================================
    // 2. 从 JUST TOP 价格单提取的板材规格库（显示名称按语言本地化）
    // ==========================================
    const BOARD_SPECS = [
      {
        sku: 'HBWB1220244010',
        labels: { zh: '1220×2440×10 mm', en: '1220×2440×10 mm', es: '1220×2440×10 mm', fr: '1220×2440×10 mm', ar: '1220×2440×10 مم', ru: '1220×2440×10 мм' },
        length: 2440,
        width: 1220,
        thickness: 10,
        weightKg: 8.22,
        descriptions: {
          zh: '1220 × 2440 × 10 mm（公制墙板）',
          en: '1220 × 2440 × 10 mm (metric wallboard)',
          es: '1220 × 2440 × 10 mm (panel de pared en formato métrico)',
          fr: '1220 × 2440 × 10 mm (panneau mural au format métrique)',
          ar: '1220 × 2440 × 10 مم (لوح جداري متري)',
          ru: '1220 × 2440 × 10 мм (метрическая стеновая панель)'
        }
      },
      {
        sku: 'HBWB1220244020',
        labels: { zh: '1220×2440×20 mm（默认）', en: '1220×2440×20 mm (Featured)', es: '1220×2440×20 mm (predeterminado)', fr: '1220×2440×20 mm (par défaut)', ar: '1220×2440×20 مم (موصى به)', ru: '1220×2440×20 мм (основной)' },
        length: 2440,
        width: 1220,
        thickness: 20,
        weightKg: 9.7,
        descriptions: {
          zh: '1220 × 2440 × 20 mm（公制墙板 · 默认展示）',
          en: '1220 × 2440 × 20 mm (metric wallboard · featured view)',
          es: '1220 × 2440 × 20 mm (panel de pared en formato métrico · vista predeterminada)',
          fr: '1220 × 2440 × 20 mm (panneau mural au format métrique · vue par défaut)',
          ar: '1220 × 2440 × 20 مم (لوح جداري متري · العرض الافتراضي)',
          ru: '1220 × 2440 × 20 мм (метрическая стеновая панель · основной вид)'
        }
      },
      {
        sku: 'HBWB1220244030',
        labels: { zh: '1220×2440×30 mm', en: '1220×2440×30 mm', es: '1220×2440×30 mm', fr: '1220×2440×30 mm', ar: '1220×2440×30 مم', ru: '1220×2440×30 мм' },
        length: 2440,
        width: 1220,
        thickness: 30,
        weightKg: 10.25,
        descriptions: {
          zh: '1220 × 2440 × 30 mm（公制墙板）',
          en: '1220 × 2440 × 30 mm (metric wallboard)',
          es: '1220 × 2440 × 30 mm (panel de pared en formato métrico)',
          fr: '1220 × 2440 × 30 mm (panneau mural au format métrique)',
          ar: '1220 × 2440 × 30 مم (لوح جداري متري)',
          ru: '1220 × 2440 × 30 мм (метрическая стеновая панель)'
        }
      },
      {
        sku: 'HBWB1220244050',
        labels: { zh: '1220×2440×50 mm', en: '1220×2440×50 mm', es: '1220×2440×50 mm', fr: '1220×2440×50 mm', ar: '1220×2440×50 مم', ru: '1220×2440×50 мм' },
        length: 2440,
        width: 1220,
        thickness: 50,
        weightKg: 13.44,
        descriptions: {
          zh: '1220 × 2440 × 50 mm（公制墙板）',
          en: '1220 × 2440 × 50 mm (metric wallboard)',
          es: '1220 × 2440 × 50 mm (panel de pared en formato métrico)',
          fr: '1220 × 2440 × 50 mm (panneau mural au format métrique)',
          ar: '1220 × 2440 × 50 مم (لوح جداري متري)',
          ru: '1220 × 2440 × 50 мм (метрическая стеновая панель)'
        }
      },
      {
        sku: 'HBWB366012',
        labels: { zh: '36″×60″×1/2″', en: '36″×60″×1/2″', ar: '36×60×1/2 بوصة', ru: '36×60×1/2 дюйма' },
        length: 1524,
        width: 914,
        thickness: 12.7,
        descriptions: {
          zh: '36″ × 60″ × 1/2″（914 × 1524 × 12.7 mm 英制墙板）',
          en: '36″ × 60″ × 1/2″ (914 × 1524 × 12.7 mm imperial wallboard)',
          ar: '36 × 60 × 1/2 بوصة (914 × 1524 × 12.7 مم، لوح جداري بالنظام الإمبراطوري)',
          ru: '36 × 60 × 1/2 дюйма (914 × 1524 × 12,7 мм, дюймовая стеновая панель)'
        }
      },
      {
        sku: 'HBWB489612',
        labels: { zh: '48″×96″×1/2″', en: '48″×96″×1/2″', ar: '48×96×1/2 بوصة', ru: '48×96×1/2 дюйма' },
        length: 2438,
        width: 1219,
        thickness: 12.7,
        descriptions: {
          zh: '48″ × 96″ × 1/2″（1219 × 2438 × 12.7 mm 英制墙板）',
          en: '48″ × 96″ × 1/2″ (1219 × 2438 × 12.7 mm imperial wallboard)',
          ar: '48 × 96 × 1/2 بوصة (1219 × 2438 × 12.7 مم، لوح جداري بالنظام الإمبراطوري)',
          ru: '48 × 96 × 1/2 дюйма (1219 × 2438 × 12,7 мм, дюймовая стеновая панель)'
        }
      },
      {
        sku: 'HBWB48602',
        labels: { zh: '48″×60″×2″', en: '48″×60″×2″', ar: '48×60×2 بوصة', ru: '48×60×2 дюйма' },
        length: 1524,
        width: 1219,
        thickness: 50.8,
        descriptions: {
          zh: '48″ × 60″ × 2″（1219 × 1524 × 50.8 mm 英制墙板）',
          en: '48″ × 60″ × 2″ (1219 × 1524 × 50.8 mm imperial wallboard)',
          ar: '48 × 60 × 2 بوصة (1219 × 1524 × 50.8 مم، لوح جداري بالنظام الإمبراطوري)',
          ru: '48 × 60 × 2 дюйма (1219 × 1524 × 50,8 мм, дюймовая стеновая панель)'
        }
      }
    ];

    let currentSpecIndex = 1; // 默认为 1220*2440*20mm

    // ==========================================
    // 3. Three.js 核心场景与渲染变量
    // ==========================================
    let scene, camera, renderer, controls;
    let container = document.getElementById('canvas-container');
    let boardGroup;
    let layerMeshes = [];
    let layerEdges = [];
    let selectedLayerIndex = 2; // 默认选中 XPS 芯材
    let explosionProgress = 0; // 0 ~ 1

    // 新增：单层移出置中与其余层平移状态管理
    let isShiftCenterMode = false;
    let isolatedLayerIndex = null;
    let targetPositionsY = [0, 0, 0, 0, 0];
    let targetPositionsX = [0, 0, 0, 0, 0];
    let currentPositionsX = [0, 0, 0, 0, 0];
    let currentPositionsY = [0, 0, 0, 0, 0];

    // 材质变量
    let mortarTopMaterial, mortarBottomMaterial, meshMaterial, xpsMaterial;
    let canvasWaffleTex, canvasPureCementTex, canvasXpsMicroBump, canvasMeshAlpha;
    const isCompactDevice = window.matchMedia('(max-width: 768px)').matches;

    function generateTextures() {
      // 1. 合拢时水泥表面微弱网格印痕
      const cWaffle = document.createElement('canvas');
      cWaffle.width = 512;
      cWaffle.height = 512;
      const ctxW = cWaffle.getContext('2d');
      ctxW.fillStyle = '#535b64';
      ctxW.fillRect(0, 0, 512, 512);

      for (let i = 0; i < (isCompactDevice ? 8000 : 18000); i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const shade = Math.random() > 0.5 ? '#5b646e' : '#4b525a';
        ctxW.fillStyle = shade;
        ctxW.fillRect(x, y, 1.2, 1.2);
      }

      ctxW.strokeStyle = 'rgba(40, 45, 50, 0.28)';
      ctxW.lineWidth = 1.2;
      for (let i = 0; i <= 512; i += 16) {
        ctxW.beginPath();
        ctxW.moveTo(i, 0); ctxW.lineTo(i, 512);
        ctxW.stroke();
        ctxW.beginPath();
        ctxW.moveTo(0, i); ctxW.lineTo(512, i);
        ctxW.stroke();
      }
      canvasWaffleTex = new THREE.CanvasTexture(cWaffle);
      canvasWaffleTex.wrapS = THREE.RepeatWrapping;
      canvasWaffleTex.wrapT = THREE.RepeatWrapping;
      canvasWaffleTex.repeat.set(16, 16);

      // 2. 纯正无网格的天然矿物水泥灰原浆贴图
      const cPure = document.createElement('canvas');
      cPure.width = 512;
      cPure.height = 512;
      const ctxP = cPure.getContext('2d');
      ctxP.fillStyle = '#545c66';
      ctxP.fillRect(0, 0, 512, 512);

      for (let i = 0; i < (isCompactDevice ? 12000 : 28000); i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const s = Math.random() * 1.5;
        const val = Math.floor(75 + Math.random() * 25);
        ctxP.fillStyle = `rgb(${val}, ${val + 8}, ${val + 14})`;
        ctxP.fillRect(x, y, s, s);
      }
      canvasPureCementTex = new THREE.CanvasTexture(cPure);
      canvasPureCementTex.wrapS = THREE.RepeatWrapping;
      canvasPureCementTex.wrapT = THREE.RepeatWrapping;
      canvasPureCementTex.repeat.set(12, 12);

      // 3. XPS 专用六面立体闭孔微孔贴图
      const cXps = document.createElement('canvas');
      cXps.width = 512;
      cXps.height = 512;
      const ctxX = cXps.getContext('2d');
      ctxX.fillStyle = '#7cd3a8';
      ctxX.fillRect(0, 0, 512, 512);

      for (let i = 0; i < (isCompactDevice ? 16000 : 35000); i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const r = 0.6 + Math.random() * 1.8;
        const tone = Math.random();
        if (tone > 0.6) {
          ctxX.fillStyle = 'rgba(152, 235, 194, 0.45)';
        } else if (tone < 0.25) {
          ctxX.fillStyle = 'rgba(92, 175, 136, 0.55)';
        } else {
          ctxX.fillStyle = 'rgba(110, 195, 154, 0.35)';
        }
        ctxX.beginPath();
        ctxX.arc(x, y, r, 0, Math.PI * 2);
        ctxX.fill();
      }
      canvasXpsMicroBump = new THREE.CanvasTexture(cXps);
      canvasXpsMicroBump.wrapS = THREE.RepeatWrapping;
      canvasXpsMicroBump.wrapT = THREE.RepeatWrapping;
      canvasXpsMicroBump.repeat.set(10, 10);

      // 4. 白色玻纤经纬网格
      const cMesh = document.createElement('canvas');
      cMesh.width = 128;
      cMesh.height = 128;
      const ctxM = cMesh.getContext('2d');
      ctxM.clearRect(0, 0, 128, 128);

      ctxM.strokeStyle = 'rgba(255, 255, 255, 0.96)';
      ctxM.lineWidth = 14;
      ctxM.beginPath();
      ctxM.moveTo(64, 0); ctxM.lineTo(64, 128);
      ctxM.moveTo(0, 64); ctxM.lineTo(128, 64);
      ctxM.stroke();

      ctxM.strokeStyle = 'rgba(240, 245, 250, 0.45)';
      ctxM.lineWidth = 22;
      ctxM.beginPath();
      ctxM.moveTo(64, 0); ctxM.lineTo(64, 128);
      ctxM.moveTo(0, 64); ctxM.lineTo(128, 64);
      ctxM.stroke();

      canvasMeshAlpha = new THREE.CanvasTexture(cMesh);
      canvasMeshAlpha.wrapS = THREE.RepeatWrapping;
      canvasMeshAlpha.wrapT = THREE.RepeatWrapping;
      canvasMeshAlpha.repeat.set(24, 24);
    }

    function init3DScene() {
      if (!window.THREE || !THREE.OrbitControls) {
        showRuntimeError();
        return false;
      }

      raycaster = new THREE.Raycaster();
      mouse = new THREE.Vector2();
      generateTextures();

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xb6bec8);

      camera = new THREE.PerspectiveCamera(42, container.clientWidth / container.clientHeight, 0.1, 1000);
      camera.position.set(4.2, 3.4, 4.6);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isCompactDevice ? 1.25 : 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);

      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.06;
      controls.maxPolarAngle = Math.PI / 2 + 0.05;
      controls.minDistance = 1.6;
      controls.maxDistance = 14;

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.72);
      scene.add(ambientLight);

      const mainKeyLight = new THREE.DirectionalLight(0xffffff, 0.95);
      mainKeyLight.position.set(6, 12, 8);
      mainKeyLight.castShadow = true;
      mainKeyLight.shadow.mapSize.width = isCompactDevice ? 1024 : 2048;
      mainKeyLight.shadow.mapSize.height = isCompactDevice ? 1024 : 2048;
      mainKeyLight.shadow.bias = -0.0004;
      scene.add(mainKeyLight);

      const fillLight = new THREE.DirectionalLight(0xdbeafe, 0.45);
      fillLight.position.set(-8, 6, -6);
      scene.add(fillLight);

      const rimLight = new THREE.DirectionalLight(0xffffff, 0.35);
      rimLight.position.set(0, -6, 5);
      scene.add(rimLight);

      const floorGeo = new THREE.PlaneGeometry(30, 30);
      const floorMat = new THREE.ShadowMaterial({ opacity: 0.18 });
      const floor = new THREE.Mesh(floorGeo, floorMat);
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = -1.4;
      floor.receiveShadow = true;
      scene.add(floor);

      const grid = new THREE.GridHelper(20, 20, 0x94a3b8, 0xcfd8dc);
      grid.position.y = -1.401;
      scene.add(grid);

      rebuildBoardModel();

      window.addEventListener('resize', onWindowResize);
      renderer.domElement.addEventListener('pointerdown', onCanvasPointerDown);
      renderer.domElement.addEventListener('pointerup', onCanvasPointerUp);
      renderer.domElement.addEventListener('dblclick', onCanvasDoubleClick);

      animate();
      return true;
    }

    function rebuildBoardModel() {
      if (boardGroup) {
        scene.remove(boardGroup);
        layerMeshes.forEach(m => {
          m.geometry.dispose();
          if (m.material) m.material.dispose();
        });
        layerEdges.forEach(e => {
          e.geometry.dispose();
          e.material.dispose();
        });
      }

      boardGroup = new THREE.Group();
      layerMeshes = [];
      layerEdges = [];

      const spec = BOARD_SPECS[currentSpecIndex];
      const scaleRef = 2.6 / 2440;
      const bLength = spec.length * scaleRef;
      const bWidth = spec.width * scaleRef;
      const thicknessFactor = Math.max(0.18, (spec.thickness / 20) * 0.28);

      const mortarThick = 0.026;
      const meshThick = 0.007;
      const xpsThick = thicknessFactor;

      mortarTopMaterial = new THREE.MeshStandardMaterial({
        map: canvasWaffleTex,
        bumpMap: canvasWaffleTex,
        bumpScale: 0.012,
        roughness: 0.88,
        metalness: 0.04,
        color: 0x545c66
      });

      meshMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        alphaMap: canvasMeshAlpha,
        transparent: true,
        roughness: 0.65,
        metalness: 0.1,
        side: THREE.DoubleSide
      });

      xpsMaterial = new THREE.MeshStandardMaterial({
        color: 0x7cd3a8,
        bumpMap: canvasXpsMicroBump,
        bumpScale: 0.026,
        roughness: 0.92,
        metalness: 0.02
      });

      mortarBottomMaterial = new THREE.MeshStandardMaterial({
        map: canvasPureCementTex,
        bumpMap: canvasPureCementTex,
        bumpScale: 0.015,
        roughness: 0.88,
        metalness: 0.04,
        color: 0x545c66
      });

      const layersConfig = [
        { name: 'top-mortar', geom: new THREE.BoxGeometry(bLength, mortarThick, bWidth), mat: mortarTopMaterial },
        { name: 'top-mesh', geom: new THREE.BoxGeometry(bLength * 0.998, meshThick, bWidth * 0.998), mat: meshMaterial },
        { name: 'xps-core', geom: new THREE.BoxGeometry(bLength, xpsThick, bWidth), mat: xpsMaterial },
        { name: 'bottom-mesh', geom: new THREE.BoxGeometry(bLength * 0.998, meshThick, bWidth * 0.998), mat: meshMaterial },
        { name: 'bottom-mortar', geom: new THREE.BoxGeometry(bLength, mortarThick, bWidth), mat: mortarBottomMaterial }
      ];

      layersConfig.forEach((cfg, idx) => {
        const mesh = new THREE.Mesh(cfg.geom, cfg.mat);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.userData = { layerIndex: idx, name: cfg.name };

        const edgesGeo = new THREE.EdgesGeometry(cfg.geom, 24);
        const edgesMat = new THREE.LineBasicMaterial({
          color: 0xffffff,
          linewidth: 1.5,
          transparent: true,
          opacity: idx === selectedLayerIndex ? 0.95 : 0.0
        });
        const edgeLine = new THREE.LineSegments(edgesGeo, edgesMat);
        mesh.add(edgeLine);
        layerEdges.push(edgeLine);

        boardGroup.add(mesh);
        layerMeshes.push(mesh);
      });

      scene.add(boardGroup);

      currentPositionsX = [0, 0, 0, 0, 0];
      currentPositionsY = [0, 0, 0, 0, 0];
      computeTargetPositions();
      applyExplosionProgress(explosionProgress);
      updateSelectionHighlight();
      updateInfoCard();
    }

    // 计算各层目标位置（结合爆炸图展开 + 选中单独置中 + 其他层向左平移）
    function computeTargetPositions() {
      if (!layerMeshes || layerMeshes.length < 5) return;

      const maxSep = 0.55;
      const xpsHeight = layerMeshes[2].geometry.parameters.height;
      const mTopH = layerMeshes[0].geometry.parameters.height;
      const meshH = layerMeshes[1].geometry.parameters.height;

      // 标准垂直展开高度
      const topMortarY = (xpsHeight / 2 + meshH + mTopH / 2) + explosionProgress * (maxSep * 1.8);
      const topMeshY = (xpsHeight / 2 + meshH / 2) + explosionProgress * (maxSep * 0.9);
      const xpsY = 0;
      const bottomMeshY = -(xpsHeight / 2 + meshH / 2) - explosionProgress * (maxSep * 0.9);
      const bottomMortarY = -(xpsHeight / 2 + meshH + mTopH / 2) - explosionProgress * (maxSep * 1.8);

      const basePos = [topMortarY, topMeshY, xpsY, bottomMeshY, bottomMortarY];

      // 板材真实宽度（用于计算合理的左移安全间距，完全移出不遮挡中间）
      const spec = BOARD_SPECS[currentSpecIndex];
      const scaleRef = 2.6 / 2440;
      const bLength = spec.length * scaleRef;
      const shiftDistanceX = -(bLength * 1.35 + 0.6); // 向左移出距离

      const centeredLayerIndex = isolatedLayerIndex ?? selectedLayerIndex;
      for (let i = 0; i < 5; i++) {
        if (isShiftCenterMode) {
          if (i === centeredLayerIndex) {
            targetPositionsX[i] = 0; // 选中的当前层：绝对居中
            targetPositionsY[i] = 0; // 选中的当前层：高度置中到视线正中心
          } else {
            targetPositionsX[i] = shiftDistanceX; // 其他非选中层：统一向左平移移出
            targetPositionsY[i] = basePos[i];     // 保持原本爆炸图层级高低
          }
        } else {
          targetPositionsX[i] = 0;
          targetPositionsY[i] = basePos[i];
        }
      }
    }

    function applyExplosionProgress(progress) {
      explosionProgress = progress;
      computeTargetPositions();

      // 展开时表面材质切换
      if (mortarTopMaterial) {
        if (progress > 0.08 || isShiftCenterMode) {
          if (mortarTopMaterial.map !== canvasPureCementTex) {
            mortarTopMaterial.map = canvasPureCementTex;
            mortarTopMaterial.bumpMap = canvasPureCementTex;
            mortarTopMaterial.needsUpdate = true;
          }
        } else {
          if (mortarTopMaterial.map !== canvasWaffleTex) {
            mortarTopMaterial.map = canvasWaffleTex;
            mortarTopMaterial.bumpMap = canvasWaffleTex;
            mortarTopMaterial.needsUpdate = true;
          }
        }
      }

      // 控制顶部“一键复原整体”按钮显隐
      const btnRestore = document.getElementById('btn-restore-top');
      if (progress > 0.08 || isShiftCenterMode) {
        btnRestore.classList.remove('hidden');
        btnRestore.classList.add('flex');
      } else {
        btnRestore.classList.add('hidden');
        btnRestore.classList.remove('flex');
      }

      document.getElementById('explode-percent').textContent = `${Math.round(progress * 100)}%`;
      document.getElementById('explode-slider').value = Math.round(progress * 100);
    }

    let targetExplosion = 0;
    let explosionAnimationFrame = null;
    function setExplosion(targetVal) {
      targetExplosion = targetVal;
      // 如果用户正在单层置中模式，拉动或展开爆炸图时自动退出置中模式恢复完整阵列
      if (isShiftCenterMode && targetVal === 0) {
        pullBackAllLayers();
      }
      if (explosionAnimationFrame === null) {
        explosionAnimationFrame = requestAnimationFrame(animateExplosion);
      }
    }

    function animateExplosion() {
      const diff = targetExplosion - explosionProgress;
      if (Math.abs(diff) > 0.005) {
        applyExplosionProgress(explosionProgress + diff * 0.15);
        explosionAnimationFrame = requestAnimationFrame(animateExplosion);
      } else {
        applyExplosionProgress(targetExplosion);
        explosionAnimationFrame = null;
      }
    }

    function onExplodeInput(val) {
      if (explosionAnimationFrame !== null) {
        cancelAnimationFrame(explosionAnimationFrame);
        explosionAnimationFrame = null;
      }
      targetExplosion = val / 100;
      applyExplosionProgress(targetExplosion);
    }

    // 一键复原整体 (合拢板材并拉回所有层)
    function restoreWholeBoard() {
      isShiftCenterMode = false;
      isolatedLayerIndex = null;
      setShiftRestoreVisibility(false);
      updateIsolateButtonText();
      setExplosion(0);
    }

    function setShiftRestoreVisibility(visible) {
      const button = document.getElementById('shift-restore-badge');
      button.classList.toggle('hidden', !visible);
      button.classList.toggle('flex', visible);
    }

    function enterCenterShiftModeForLayer(idx) {
      selectLayer(idx);
      isShiftCenterMode = true;
      isolatedLayerIndex = idx;
      updateIsolateButtonText();
      setShiftRestoreVisibility(true);

      if (explosionAnimationFrame !== null) {
        cancelAnimationFrame(explosionAnimationFrame);
        explosionAnimationFrame = null;
      }

      targetExplosion = Math.max(explosionProgress, 0.35);
      applyExplosionProgress(targetExplosion);
    }

    // 单层置中、其他层向左平移；按钮用于进入或退出该模式
    function toggleCenterShiftCurrentLayer() {
      if (isShiftCenterMode) {
        isShiftCenterMode = false;
        isolatedLayerIndex = null;
        updateIsolateButtonText();
        setShiftRestoreVisibility(false);
        computeTargetPositions();
      } else {
        enterCenterShiftModeForLayer(selectedLayerIndex);
      }
    }

    // 旁边一键把全部结构拉回来的按钮功能
    function pullBackAllLayers() {
      isShiftCenterMode = false;
      isolatedLayerIndex = null;
      computeTargetPositions();
      updateIsolateButtonText();
      setShiftRestoreVisibility(false);
    }

    function updateIsolateButtonText() {
      const btn = document.getElementById('btn-isolate');
      const langData = I18N[currentLang];
      if (isShiftCenterMode) {
        btn.classList.add('bg-amber-100', 'text-amber-900', 'border-amber-400');
        btn.classList.remove('bg-emerald-50', 'text-emerald-800', 'border-emerald-300');
        document.getElementById('ui-btn-isolate').textContent = langData.btnPullback;
      } else {
        btn.classList.remove('bg-amber-100', 'text-amber-900', 'border-amber-400');
        btn.classList.add('bg-emerald-50', 'text-emerald-800', 'border-emerald-300');
        document.getElementById('ui-btn-isolate').textContent = langData.btnIsolate;
      }
    }

    // 选择指定层并保证画面与简介严格同步显示（彻底修复原先选网格看不见的bug）
    function selectLayer(idx) {
      selectedLayerIndex = idx;

      updateSelectionHighlight();
      updateInfoCard();
      setCardVisibility(true);

      // 确保所有层 mesh 处于完全可见状态
      layerMeshes.forEach(m => m.visible = true);

      // 同步底部层级高亮按钮
      for (let i = 0; i < 5; i++) {
        const tab = document.getElementById(`tab-layer-${i}`);
        if (i === idx) {
          tab.className = "py-1 px-1 rounded-lg border border-emerald-600 bg-emerald-50 text-emerald-800 font-bold transition truncate shadow-xs";
        } else {
          tab.className = "py-1 px-1 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:border-emerald-400 transition truncate";
        }
      }
    }

    function toggleLayerCenterFromTab(idx) {
      if (isShiftCenterMode && isolatedLayerIndex === idx) {
        pullBackAllLayers();
        return;
      }
      enterCenterShiftModeForLayer(idx);
    }

    function updateSelectionHighlight() {
      layerEdges.forEach((edge, idx) => {
        if (idx === selectedLayerIndex) {
          edge.material.opacity = 0.95;
        } else {
          edge.material.opacity = 0.0;
        }
      });
    }

    function updateInfoCard() {
      const langData = I18N[currentLang];
      const layerInfo = langData.layers[selectedLayerIndex];

      document.getElementById('card-layer-tag').textContent = layerInfo.tag;
      document.getElementById('card-title').textContent = layerInfo.name;
      document.getElementById('card-subtitle').textContent = layerInfo.sub;
      document.getElementById('card-desc').textContent = layerInfo.desc;

      document.getElementById('prop-k1-name').textContent = layerInfo.k1[0];
      document.getElementById('prop-k1-val').textContent = layerInfo.k1[1];
      document.getElementById('prop-k2-name').textContent = layerInfo.k2[0];
      document.getElementById('prop-k2-val').textContent = layerInfo.k2[1];
      document.getElementById('prop-k3-name').textContent = layerInfo.k3[0];
      document.getElementById('prop-k3-val').textContent = layerInfo.k3[1];
      document.getElementById('prop-k4-name').textContent = layerInfo.k4[0];
      document.getElementById('prop-k4-val').textContent = layerInfo.k4[1];
    }

    function setCardVisibility(isVisible) {
      const card = document.getElementById('inspector-card');
      const showButton = document.getElementById('btn-show-inspector');
      card.classList.toggle('hidden', !isVisible);
      showButton.classList.toggle('hidden', isVisible);
      showButton.classList.toggle('flex', !isVisible);
    }

    function toggleCardVisibility() {
      const isCurrentlyVisible = !document.getElementById('inspector-card').classList.contains('hidden');
      setCardVisibility(!isCurrentlyVisible);
    }

    function toggleSpecsModal(forceOpen) {
      const modal = document.getElementById('specs-modal');
      const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : modal.classList.contains('hidden');
      modal.classList.toggle('hidden', !shouldOpen);
      modal.classList.toggle('flex', shouldOpen);
      modal.setAttribute('aria-hidden', String(!shouldOpen));
      if (shouldOpen) {
        document.getElementById('modal-close-icon').focus();
      }
    }

    let contactReturnFocus = null;

    function toggleContactModal(forceOpen) {
      const modal = document.getElementById('contact-modal');
      const trigger = document.getElementById('contact-button');
      const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : modal.classList.contains('hidden');

      if (shouldOpen) {
        contactReturnFocus = document.activeElement;
      }

      modal.classList.toggle('hidden', !shouldOpen);
      modal.classList.toggle('flex', shouldOpen);
      modal.setAttribute('aria-hidden', String(!shouldOpen));
      trigger.setAttribute('aria-expanded', String(shouldOpen));

      if (shouldOpen) {
        document.getElementById('contact-modal-close').focus();
      } else if (contactReturnFocus instanceof HTMLElement) {
        contactReturnFocus.focus();
        contactReturnFocus = null;
      }
    }

    function handleContactBackdrop(event) {
      if (event.target === event.currentTarget) toggleContactModal(false);
    }

    // 视角控制与环绕功能
    let isAutoRotating = false;
    function toggleAutoRotate() {
      isAutoRotating = !isAutoRotating;
      controls.autoRotate = isAutoRotating;
      controls.autoRotateSpeed = 1.8;
      const btn = document.getElementById('btn-auto-rotate');
      if (isAutoRotating) {
        btn.classList.add('bg-emerald-100', 'text-emerald-800');
      } else {
        btn.classList.remove('bg-emerald-100', 'text-emerald-800');
      }
    }

    function resetCameraAndFocus() {
      camera.position.set(4.2, 3.4, 4.6);
      controls.target.set(0, 0, 0);
      controls.update();
    }

    function setCameraView(type) {
      if (type === 'iso') {
        camera.position.set(4.2, 3.4, 4.6);
        controls.target.set(0, 0, 0);
      } else if (type === 'section') {
        camera.position.set(5.5, 0.2, 0);
        controls.target.set(0, 0, 0);
      } else if (type === 'top') {
        camera.position.set(0.01, 6.2, 0);
        controls.target.set(0, 0, 0);
      }
      controls.update();
    }

    function postHouseCommand(command, details = {}) {
      const frame = document.getElementById('whole-house-frame');
      if (frame.dataset.loaded !== 'true' || !frame.contentWindow) return;
      frame.contentWindow.postMessage({ type: 'hydroblok-house-command', command, ...details }, '*');
    }

    function toggleActiveAutoRotate() {
      if (activeProductModel === 'house') {
        postHouseCommand('toggle-rotate');
        return;
      }
      toggleAutoRotate();
    }

    function resetActiveView() {
      if (activeProductModel === 'house') {
        postHouseCommand('reset-view');
        return;
      }
      resetCameraAndFocus();
    }

    function setActiveCameraView(type) {
      if (activeProductModel === 'house') {
        postHouseCommand('set-view', { view: type });
        return;
      }
      setCameraView(type);
    }

    function toggleActiveSpecsOrLabels() {
      if (activeProductModel === 'house') {
        postHouseCommand('toggle-labels');
        return;
      }
      toggleSpecsModal();
    }

    let raycaster;
    let mouse;
    let pointerDownState = null;

    function onCanvasPointerDown(event) {
      pointerDownState = { x: event.clientX, y: event.clientY, pointerId: event.pointerId };
    }

    function getLayerIndexAtCanvasPoint(event) {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(layerMeshes);
      if (intersects.length === 0) return null;

      const hit = intersects[0].object;
      return hit.userData && Number.isInteger(hit.userData.layerIndex)
        ? hit.userData.layerIndex
        : null;
    }

    function onCanvasPointerUp(event) {
      if (!pointerDownState || pointerDownState.pointerId !== event.pointerId) return;
      const moveDistance = Math.hypot(event.clientX - pointerDownState.x, event.clientY - pointerDownState.y);
      pointerDownState = null;
      if (moveDistance > 6) return;

      const layerIndex = getLayerIndexAtCanvasPoint(event);
      if (layerIndex !== null) {
        selectLayer(layerIndex);
        if (explosionProgress === 0 && !isShiftCenterMode) {
          setExplosion(0.28);
        }
      }
    }

    function onCanvasDoubleClick(event) {
      const layerIndex = getLayerIndexAtCanvasPoint(event);
      if (layerIndex === null) return;
      event.preventDefault();
      if (isShiftCenterMode && isolatedLayerIndex === layerIndex) {
        pullBackAllLayers();
        return;
      }
      enterCenterShiftModeForLayer(layerIndex);
    }

    function onWindowResize() {
      positionWholeHouseFrame();
      if (activeProductModel !== 'board') return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }

    function animate() {
      requestAnimationFrame(animate);

      if (document.hidden || activeProductModel !== 'board') return;

      // 平滑插值动画驱动 X / Y 轴平移（平滑平移至左侧或置中）
      for (let i = 0; i < layerMeshes.length; i++) {
        currentPositionsX[i] += (targetPositionsX[i] - currentPositionsX[i]) * 0.12;
        currentPositionsY[i] += (targetPositionsY[i] - currentPositionsY[i]) * 0.12;

        layerMeshes[i].position.x = currentPositionsX[i];
        layerMeshes[i].position.y = currentPositionsY[i];
      }

      controls.update();
      renderer.render(scene, camera);
    }

    function updateModelSwitchState() {
      const boardButton = document.getElementById('model-board-button');
      const houseButton = document.getElementById('model-house-button');
      const isHouse = activeProductModel === 'house';
      boardButton.classList.toggle('is-active', !isHouse);
      houseButton.classList.toggle('is-active', isHouse);
      boardButton.setAttribute('aria-selected', String(!isHouse));
      houseButton.setAttribute('aria-selected', String(isHouse));
    }

    function positionWholeHouseFrame() {
      const frame = document.getElementById('whole-house-frame');
      const header = document.getElementById('main-header');
      if (!frame || !header) return;
      const top = Math.ceil(header.getBoundingClientRect().bottom);
      frame.style.top = `${top}px`;
      frame.style.height = `${Math.max(0, window.innerHeight - top)}px`;
    }

    function ensureWholeHouseFrame() {
      const frame = document.getElementById('whole-house-frame');
      if (frame.dataset.loaded === 'true') return frame;
      frame.src = './products/whole-house/index.html';
      frame.dataset.loaded = 'true';
      frame.addEventListener('load', () => {
        positionWholeHouseFrame();
        frame.contentWindow?.postMessage({ type: 'hydroblok-preview-active', active: activeProductModel === 'house' }, '*');
        frame.contentWindow?.postMessage({ type: 'hydroblok-language', lang: currentLang }, '*');
      }, { once: true });
      return frame;
    }

    function switchProductModel(mode) {
      if (mode !== 'board' && mode !== 'house') return;
      activeProductModel = mode;
      const isHouse = mode === 'house';
      const frame = isHouse ? ensureWholeHouseFrame() : document.getElementById('whole-house-frame');
      document.getElementById('canvas-container').classList.toggle('hidden', isHouse);
      frame.classList.toggle('hidden', !isHouse);
      document.body.dataset.productModel = mode;
      updateModelSwitchState();
      updateActiveHeader();
      positionWholeHouseFrame();

      if (isHouse) {
        toggleSpecsModal(false);
      } else if (renderer && camera) {
        requestAnimationFrame(onWindowResize);
      }

      if (frame.dataset.loaded === 'true') {
        frame.contentWindow?.postMessage({ type: 'hydroblok-preview-active', active: isHouse }, '*');
        frame.contentWindow?.postMessage({ type: 'hydroblok-language', lang: currentLang }, '*');
      }

      const language = I18N[currentLang];
      document.title = isHouse ? language.houseDocumentTitle : language.documentTitle;
    }

    window.addEventListener('message', event => {
      const frame = document.getElementById('whole-house-frame');
      if (frame.contentWindow && event.source !== frame.contentWindow) return;
      if (event.data?.type === 'hydroblok-model-switch' && event.data.mode === 'board') {
        switchProductModel('board');
        return;
      }
      if (event.data?.type === 'hydroblok-house-selected' && HOUSE_MODULE_IDS.includes(event.data.id)) {
        selectedHouseModule = event.data.id;
        if (activeProductModel === 'house') updateActiveHeader();
        return;
      }
      if (event.data?.type === 'hydroblok-house-labels') {
        houseLabelsVisible = Boolean(event.data.visible);
        if (activeProductModel === 'house') updateActiveHeader();
        return;
      }
      if (event.data?.type === 'hydroblok-house-rotate') {
        houseAutoRotating = Boolean(event.data.active);
        if (activeProductModel === 'house') updateActiveHeader();
      }
    });

    function showRuntimeError() {
      const status = document.getElementById('runtime-status');
      status.textContent = I18N[currentLang].runtimeError;
      status.classList.remove('hidden');
    }

    // ==========================================
    // 4. 规格切换与 UI 渲染
    // ==========================================
    function initSpecButtons() {
      const container = document.getElementById('spec-buttons-container');
      container.innerHTML = '';

      BOARD_SPECS.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.id = `spec-btn-${index}`;
        btn.className = `px-2.5 py-1 rounded-lg font-medium transition shrink-0 ${
          index === currentSpecIndex
            ? 'bg-emerald-600 text-white shadow-xs font-semibold'
            : 'text-slate-600 hover:bg-white hover:text-slate-900'
        }`;
        btn.textContent = item.labels[currentLang] || item.labels.en;
        btn.onclick = () => selectSpec(index);
        container.appendChild(btn);
      });

      updateSpecInfoDisplay();
    }

    function renderHouseModuleButtons(data) {
      const container = document.getElementById('spec-buttons-container');
      container.innerHTML = '';
      HOUSE_MODULE_IDS.forEach((id, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.houseModule = id;
        button.className = `px-2.5 py-1 rounded-lg font-medium transition shrink-0 whitespace-nowrap ${
          id === selectedHouseModule
            ? 'bg-emerald-600 text-white shadow-xs font-semibold'
            : 'text-slate-600 hover:bg-white hover:text-slate-900'
        }`;
        button.textContent = `${index + 1}. ${data.houseModules[index]}`;
        button.onclick = () => postHouseCommand('toggle-module', { id });
        container.appendChild(button);
      });
    }

    function updateActiveHeader(data = I18N[currentLang]) {
      const isHouse = activeProductModel === 'house';
      setText('ui-brand-title', isHouse ? data.houseBrandTitle : data.brandTitle);
      setText('ui-subtitle', isHouse ? data.houseSubtitle : data.subtitle);
      setText('ui-spec-label', isHouse ? data.houseSpecLabel : data.specLabel);
      setText('ui-btn-rotate', isHouse && houseAutoRotating ? data.houseRotateStop : data.btnRotate);
      setText('ui-btn-reset-view', data.btnResetView);
      setText('ui-btn-specs-doc', isHouse ? (houseLabelsVisible ? data.houseLabelsHide : data.houseLabelsShow) : data.btnSpecsDoc);
      setText('btn-view-iso', isHouse ? data.houseViewIso : data.viewIso);
      setText('btn-view-section', isHouse ? data.houseViewSection : data.viewSection);
      setText('btn-view-top', isHouse ? data.houseViewTop : data.viewTop);

      const rotateButton = document.getElementById('btn-auto-rotate');
      const rotateActive = isHouse ? houseAutoRotating : isAutoRotating;
      rotateButton.classList.toggle('bg-emerald-100', rotateActive);
      rotateButton.classList.toggle('text-emerald-800', rotateActive);

      if (isHouse) renderHouseModuleButtons(data);
      else initSpecButtons();
    }

    function enableSpecPickerWheelScroll() {
      const picker = document.getElementById('spec-picker');
      const scroller = document.getElementById('spec-buttons-scroll');
      picker.addEventListener('wheel', (event) => {
        if (scroller.scrollWidth <= scroller.clientWidth) return;

        const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;
        if (delta === 0) return;

        const previousScrollLeft = scroller.scrollLeft;
        scroller.scrollLeft += delta;
        if (scroller.scrollLeft !== previousScrollLeft) event.preventDefault();
      }, { passive: false });
    }

    function selectSpec(index) {
      currentSpecIndex = index;
      BOARD_SPECS.forEach((_, i) => {
        const btn = document.getElementById(`spec-btn-${i}`);
        if (btn) {
          if (i === index) {
            btn.className = 'px-2.5 py-1 rounded-lg font-semibold bg-emerald-600 text-white shadow-xs shrink-0';
          } else {
            btn.className = 'px-2.5 py-1 rounded-lg font-medium text-slate-600 hover:bg-white hover:text-slate-900 shrink-0';
          }
        }
      });

      updateSpecInfoDisplay();
      rebuildBoardModel();
    }

    function updateSpecInfoDisplay() {
      const spec = BOARD_SPECS[currentSpecIndex];
      const langData = I18N[currentLang];

      document.getElementById('spec-sku-display').textContent = spec.sku;
      document.getElementById('spec-dim-display').textContent = `${langData.dimPrefix}${spec.descriptions[currentLang] || spec.descriptions.en}`;
      updateProductMetrics();
    }

    function updateProductMetrics() {
      const spec = BOARD_SPECS[currentSpecIndex];
      const locale = I18N[currentLang].htmlLang;
      const areaSquareMeters = (spec.length * spec.width) / 1000000;
      const areaValue = new Intl.NumberFormat(locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(areaSquareMeters);

      document.getElementById('metric-area-value').textContent = areaValue;

      const hasWeight = Number.isFinite(spec.weightKg);
      const weightItem = document.getElementById('metric-weight-item');
      const metricsGrid = document.getElementById('metrics-grid');
      weightItem.classList.toggle('hidden', !hasWeight);
      metricsGrid.style.gridTemplateColumns = hasWeight
        ? 'repeat(2, minmax(0, 1fr))'
        : 'minmax(0, 1fr)';

      if (hasWeight) {
        document.getElementById('metric-weight-value').textContent = new Intl.NumberFormat(locale, {
          maximumFractionDigits: 2
        }).format(spec.weightKg);
      }
    }

    // ==========================================
    // 5. 多语言全站即时切换引擎
    // ==========================================
    function setText(id, value) {
      const element = document.getElementById(id);
      if (!element) {
        console.warn(`Missing translation target: #${id}`);
        return;
      }
      element.textContent = value;
    }

    function setAccessibleLabel(id, value) {
      const element = document.getElementById(id);
      if (!element) return;
      element.title = value;
      element.setAttribute('aria-label', value);
    }

    function renderSpecsModal(data) {
      setText('modal-title', data.modal.title);
      setText('modal-subtitle', data.modal.subtitle);
      setText('modal-head-item', data.modal.headers[0]);
      setText('modal-head-method', data.modal.headers[1]);
      setText('modal-head-result', data.modal.headers[2]);
      setText('modal-head-assessment', data.modal.headers[3]);
      setText('modal-note', data.modal.note);
      setText('modal-close-button', data.modal.close);

      const body = document.getElementById('modal-table-body');
      body.innerHTML = '';
      data.modal.rows.forEach((row) => {
        const tr = document.createElement('tr');
        row.forEach((value, index) => {
          const td = document.createElement('td');
          td.className = index === 0 ? 'p-2.5 font-medium' : index === 2 ? 'p-2.5 font-semibold text-emerald-700' : 'p-2.5';
          td.textContent = value;
          tr.appendChild(td);
        });
        body.appendChild(tr);
      });
    }

    function changeLanguage(langKey) {
      if (!I18N[langKey]) langKey = 'zh';
      currentLang = langKey;
      const data = I18N[langKey];

      document.documentElement.lang = data.htmlLang;
      document.documentElement.dir = data.dir;
      document.title = activeProductModel === 'house' ? data.houseDocumentTitle : data.documentTitle;
      document.getElementById('lang-selector').value = langKey;
      try {
        localStorage.setItem('hydroblok-lang', langKey);
      } catch (_) {
        // Language still changes even when local storage is unavailable.
      }

      setText('ui-brand-title', data.brandTitle);
      setText('ui-model-board', data.modelBoard);
      setText('ui-model-house', data.modelHouse);
      setText('ui-contact-button', data.contactButton);
      setText('contact-modal-title', data.contactTitle);
      setText('contact-modal-subtitle', data.contactSubtitle);
      setText('contact-whatsapp-label', data.contactWhatsAppLabel);
      setText('contact-phone-label', data.contactPhoneLabel);
      setText('contact-email-label', data.contactEmailLabel);
      setText('contact-whatsapp-action', data.contactWhatsAppAction);
      setText('contact-phone-action', data.contactPhoneAction);
      setText('contact-email-action', data.contactEmailAction);
      setText('ui-subtitle', data.subtitle);
      setText('ui-std-tag', data.stdTag);
      setText('ui-spec-label', data.specLabel);
      setText('ui-metrics-title', data.metricsTitle);
      setText('ui-area-label', data.areaLabel);
      setText('ui-weight-label', data.weightLabel);
      setText('ui-btn-restore', data.restoreTop);
      setText('ui-current-sku-title', data.currentSku);
      setText('ui-hint-drag', data.dragHint);
      setText('ui-scale-note', data.scaleNote);
      setText('ui-explode-label', data.explodeLabel);
      setText('ui-btn-assemble', data.btnAssemble);
      setText('ui-btn-explode-all', data.btnExplodeAll);
      setText('ui-btn-isolate', isShiftCenterMode ? data.btnPullback : data.btnIsolate);
      setText('ui-btn-pullback', data.btnPullback);
      setText('ui-btn-pullback-side', data.btnPullbackSide);
      setText('ui-btn-rotate', data.btnRotate);
      setText('ui-btn-reset-view', data.btnResetView);
      setText('ui-btn-specs-doc', data.btnSpecsDoc);
      setText('ui-btn-show-details', data.btnShowDetails);
      setText('btn-view-iso', data.viewIso);
      setText('btn-view-section', data.viewSection);
      setText('btn-view-top', data.viewTop);

      setAccessibleLabel('btn-auto-rotate', data.titleAutoRotate);
      setAccessibleLabel('btn-reset-view', data.titleResetView);
      setAccessibleLabel('btn-close-inspector', data.titleCloseInspector);
      setAccessibleLabel('modal-close-icon', data.titleCloseSpecs);
      setAccessibleLabel('contact-button', data.contactButton);
      setAccessibleLabel('contact-modal-close', data.contactClose);
      setAccessibleLabel('spec-picker', data.specWheelHint);
      document.getElementById('explode-slider').setAttribute('aria-label', data.sliderLabel);

      for (let i = 0; i < 5; i++) {
        setText(`tab-layer-${i}`, `${i + 1}. ${data.layers[i].shortName}`);
      }

      const specsTable = document.querySelector('#specs-modal table');
      specsTable.classList.toggle('text-right', data.dir === 'rtl');
      specsTable.classList.toggle('text-left', data.dir !== 'rtl');

      updateActiveHeader(data);
      updateInfoCard();
      renderSpecsModal(data);

      const houseFrame = document.getElementById('whole-house-frame');
      if (houseFrame.dataset.loaded === 'true') {
        houseFrame.contentWindow?.postMessage({ type: 'hydroblok-language', lang: currentLang }, '*');
      }
      requestAnimationFrame(positionWholeHouseFrame);

      const runtimeStatus = document.getElementById('runtime-status');
      if (!runtimeStatus.classList.contains('hidden')) runtimeStatus.textContent = data.runtimeError;
    }

    window.addEventListener('DOMContentLoaded', () => {      const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
      if (requestedLanguage && I18N[requestedLanguage]) currentLang = requestedLanguage;
      if (window.lucide) lucide.createIcons();
      changeLanguage(currentLang);
      enableSpecPickerWheelScroll();
      init3DScene();
      const requestedModel = new URLSearchParams(window.location.search).get('model');
      if (requestedModel === 'house') requestAnimationFrame(() => switchProductModel('house'));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        const contactModal = document.getElementById('contact-modal');
        if (!contactModal.classList.contains('hidden')) {
          toggleContactModal(false);
          return;
        }
        const modal = document.getElementById('specs-modal');
        if (!modal.classList.contains('hidden')) toggleSpecsModal(false);
      }
    });
