const MODULES = [
      {
        id: 'roof',
        name: '屋顶系统',
        en: 'Roof',
        position: '建筑顶部围护结构',
        function: '连续基层与防护覆盖',
        description: '以斜屋面形式展示 HYDRO-BLOK 板材在屋顶围护区域的连续应用，强调轻质基层与完整覆盖关系。',
        explode: [12.5, 0, 0],
        label: [-1.2, 7.35, 0.4]
      },
      {
        id: 'exterior',
        name: '外墙系统',
        en: 'Exterior Wall',
        position: '建筑外围护立面',
        function: '外墙基层与连续围护',
        description: '通过右侧完整立面和正面分区展示外墙应用，保留门窗开口并表达板材与主体结构的连接关系。',
        explode: [13.0, 0, 0],
        label: [4.85, 4.2, 1.25]
      },
      {
        id: 'partition',
        name: '隔墙系统',
        en: 'Partition Wall',
        position: '室内空间分隔位置',
        function: '轻质分隔与空间组织',
        description: '上层纵向隔墙用于表现板材在室内空间划分中的应用，可单独拆出观察墙体尺度和位置关系。',
        explode: [-12.0, 0, 0],
        label: [-0.6, 5.35, 1.9]
      },
      {
        id: 'interior',
        name: '室内墙系统',
        en: 'Interior Wall',
        position: '室内功能空间墙面',
        function: '室内基层与墙面承托',
        description: '以首层和上层的内部墙面组合展示室内应用，与隔墙模块区分为连续墙面基层区域。',
        explode: [-13.0, 0, 0],
        label: [-4.65, 2.1, 1.65]
      },
      {
        id: 'floorplate',
        name: '楼板系统',
        en: 'Floor Plate',
        position: '上下楼层之间',
        function: '楼层承托与水平分隔',
        description: '中间楼板贯穿主要建筑空间，用于展示板材在楼层水平构造中的连续铺设与节点衔接。',
        explode: [-13.5, 0, 0],
        label: [-3.75, 3.35, 2.05]
      },
      {
        id: 'floor',
        name: '地面系统',
        en: 'Floor',
        position: '首层室内与室外平台',
        function: '连续地面基层应用',
        description: '首层地面和入口平台共同组成地面应用模块，展示室内外标高衔接及大面积连续铺设关系。',
        explode: [14.0, 0, 0],
        label: [2.6, 0.65, 4.0]
      },
      {
        id: 'basement',
        name: '地下室系统',
        en: 'Basement',
        position: '地下围护与基础空间',
        function: '地下空间围护与基层',
        description: '以半透明剖面形式表现地下室底板、侧墙和后墙，使地下围护范围及内部空间保持清晰可见。',
        explode: [-14.0, 0, 0],
        label: [-4.45, -1.25, 1.65]
      },
      {
        id: 'screen',
        name: '影音墙系统',
        en: 'Movie Screen',
        position: '地下影音功能空间',
        function: '功能墙面与设备基层',
        description: '地下室中的独立影音墙模块，用于展示特殊功能空间内的墙面基层和设备安装界面。',
        explode: [-12.5, 0, 0],
        label: [-1.45, -0.8, 2.25]
      }
    ];

    const HOUSE_I18N = {
      zh: {
        htmlLang: 'zh-CN', dir: 'ltr', documentTitle: 'HYDRO-BLOK 全屋应用系统｜3D 模型预览',
        brandTitle: 'HYDRO-BLOK 全屋应用系统', brandSubtitle: '建筑防水隔热复合结构板 · 全屋应用 3D 交互示意',
        modeAria: '当前模型', boardMode: '板材结构', houseMode: '全屋应用示意模型',
        rotate: '360° 环绕', stopRotate: '停止环绕', resetView: '恢复视角', isoView: '斜角透视', frontView: '正面剖视', topView: '顶部俯视',
        hideLabels: '隐藏标注', showLabels: '显示标注', restore: '全部复原', restoreAll: '一键复原整体',
        overviewEyebrow: '全屋应用系统', overviewTitle: '全屋快速安装系统应用',
        overviewSubtitle: '现代住宅剖面示意模型，集中展示板材在建筑八个核心区域中的应用关系。',
        countLabel: '交互模块', countValue: '8 个应用区域', currentLabel: '当前选中',
        hintHtml: '鼠标左键旋转 · 滚轮缩放 · 右键平移<br>点击模型或三维标注：向左右拆出，可同时拆出多个系统',
        positionLabel: '应用位置', functionLabel: '示意功能', statusLabel: '模型状态', actionLabel: '交互方式',
        explodeTitle: '全屋模块爆炸图', modulePrefix: '模块',
        selectedLeft: '已选中，可向左拆出', selectedRight: '已选中，可向右拆出', pulled: '已从整体拆出', exploded: '整体爆炸展开 {value}%',
        clickAction: '点击模型、标注或下方按钮', clickAgain: '再次点击即可拉回原位', sliderAction: '拖动滑杆控制展开程度',
        pullLeft: '向左平移观察', pullRight: '向右平移观察', returnPosition: '拉回原位', tabAria: '{name}：单击拆出或拉回',
        modules: Object.fromEntries(MODULES.map(item => [item.id, { name: item.name, label: item.en, position: item.position, function: item.function, description: item.description }]))
      },
      en: {
        htmlLang: 'en', dir: 'ltr', documentTitle: 'HYDRO-BLOK Whole House System | 3D Model',
        brandTitle: 'HYDRO-BLOK Whole House System', brandSubtitle: 'Waterproof and thermal-insulation composite board · Interactive whole-house 3D guide',
        modeAria: 'Current model', boardMode: 'Board Structure', houseMode: 'Whole House Model',
        rotate: '360° Orbit', stopRotate: 'Stop Orbit', resetView: 'Reset View', isoView: 'Perspective', frontView: 'Front Section', topView: 'Top View',
        hideLabels: 'Hide Labels', showLabels: 'Show Labels', restore: 'Restore All', restoreAll: 'Restore Whole Model',
        overviewEyebrow: 'Whole House System', overviewTitle: 'Whole House Rapid Installation System',
        overviewSubtitle: 'A sectional home model showing HYDRO-BLOK applications across eight core building areas.',
        countLabel: 'Interactive modules', countValue: '8 application areas', currentLabel: 'Selected',
        hintHtml: 'Left-drag to rotate · Wheel to zoom · Right-drag to pan<br>Click a model part or 3D label to pull it sideways; multiple systems may remain pulled out.',
        positionLabel: 'Application area', functionLabel: 'Demonstrated function', statusLabel: 'Model status', actionLabel: 'Interaction',
        explodeTitle: 'Whole-house exploded view', modulePrefix: 'MODULE',
        selectedLeft: 'Selected · ready to pull left', selectedRight: 'Selected · ready to pull right', pulled: 'Pulled out from the whole model', exploded: 'Whole model expanded {value}%',
        clickAction: 'Click the model, label, or button below', clickAgain: 'Click again to return it', sliderAction: 'Drag the slider to control separation',
        pullLeft: 'Move Left to Inspect', pullRight: 'Move Right to Inspect', returnPosition: 'Return to Position', tabAria: '{name}: click to pull out or return',
        modules: {
          roof: { name: 'Roof System', label: 'Roof', position: 'Top building enclosure', function: 'Continuous substrate and protective coverage', description: 'The pitched roof demonstrates continuous HYDRO-BLOK coverage at the roof enclosure, highlighting a lightweight substrate and complete surface protection.' },
          exterior: { name: 'Exterior Wall System', label: 'Exterior Wall', position: 'Exterior building envelope', function: 'Wall substrate and continuous enclosure', description: 'The complete side elevation and front zones show exterior-wall applications while retaining door and window openings and their connection to the main structure.' },
          partition: { name: 'Partition Wall System', label: 'Partition Wall', position: 'Interior space divisions', function: 'Lightweight separation and space planning', description: 'The upper-level partition demonstrates use in interior space planning and can be pulled out to inspect its size and location.' },
          interior: { name: 'Interior Wall System', label: 'Interior Wall', position: 'Interior functional walls', function: 'Interior substrate and wall support', description: 'Grouped walls on both levels demonstrate continuous interior wall substrates, distinct from the partition-wall module.' },
          floorplate: { name: 'Floor Plate System', label: 'Floor Plate', position: 'Between upper and lower levels', function: 'Floor support and horizontal separation', description: 'The central floor plate spans the main building spaces to show continuous horizontal installation and junction detailing between levels.' },
          floor: { name: 'Floor System', label: 'Floor', position: 'Ground-floor interior and exterior platform', function: 'Continuous floor substrate', description: 'The ground floor and entrance platform form one application module, showing transitions in elevation and continuous large-area installation.' },
          basement: { name: 'Basement System', label: 'Basement', position: 'Below-grade enclosure and foundation space', function: 'Below-grade enclosure and substrate', description: 'A semi-transparent section shows the basement slab, side walls, and rear wall while keeping the enclosed space clearly visible.' },
          screen: { name: 'Media Wall System', label: 'Movie Screen', position: 'Basement media area', function: 'Feature-wall and equipment substrate', description: 'The separate media-wall module demonstrates a wall substrate and equipment-mounting surface for a specialised interior space.' }
        }
      },
      es: {
        htmlLang: 'es', dir: 'ltr', documentTitle: 'Sistema integral HYDRO-BLOK | Modelo 3D',
        brandTitle: 'Sistema integral HYDRO-BLOK', brandSubtitle: 'Panel compuesto impermeable y termoaislante · Guía 3D interactiva para toda la vivienda',
        modeAria: 'Modelo actual', boardMode: 'Estructura del panel', houseMode: 'Modelo de vivienda completa',
        rotate: 'Giro 360°', stopRotate: 'Detener giro', resetView: 'Restablecer vista', isoView: 'Perspectiva', frontView: 'Sección frontal', topView: 'Vista superior',
        hideLabels: 'Ocultar etiquetas', showLabels: 'Mostrar etiquetas', restore: 'Restaurar todo', restoreAll: 'Restaurar modelo completo',
        overviewEyebrow: 'Sistema integral', overviewTitle: 'Sistema de instalación rápida para toda la vivienda',
        overviewSubtitle: 'Modelo seccionado de una vivienda moderna que muestra las aplicaciones de HYDRO-BLOK en ocho zonas esenciales del edificio.',
        countLabel: 'Módulos interactivos', countValue: '8 zonas de aplicación', currentLabel: 'Seleccionado',
        hintHtml: 'Arrastre con el botón izquierdo para girar · Rueda para acercar/alejar · Arrastre con el botón derecho para desplazar<br>Haga clic en una parte del modelo o en una etiqueta 3D para moverla lateralmente; puede mantener varios sistemas separados.',
        positionLabel: 'Zona de aplicación', functionLabel: 'Función representada', statusLabel: 'Estado del modelo', actionLabel: 'Interacción',
        explodeTitle: 'Vista explosionada de la vivienda', modulePrefix: 'MÓDULO',
        selectedLeft: 'Seleccionado · listo para mover a la izquierda', selectedRight: 'Seleccionado · listo para mover a la derecha', pulled: 'Separado del modelo completo', exploded: 'Modelo completo separado al {value} %',
        clickAction: 'Haga clic en el modelo, la etiqueta o el botón inferior', clickAgain: 'Vuelva a hacer clic para devolverlo a su posición', sliderAction: 'Arrastre el control para ajustar la separación',
        pullLeft: 'Mover a la izquierda', pullRight: 'Mover a la derecha', returnPosition: 'Volver a su posición', tabAria: '{name}: haga clic para separar o devolver',
        modules: {
          roof: { name: 'Sistema de cubierta', label: 'Cubierta', position: 'Cerramiento superior del edificio', function: 'Soporte continuo y protección de la cubierta', description: 'La cubierta inclinada muestra la aplicación continua de HYDRO-BLOK en el cerramiento superior, destacando un soporte ligero y una protección completa de la superficie.' },
          exterior: { name: 'Sistema de fachada', label: 'Fachada', position: 'Envolvente exterior del edificio', function: 'Soporte de revestimiento y cerramiento continuo', description: 'La elevación lateral completa y las zonas de fachada muestran las aplicaciones exteriores, conservando los huecos de puertas y ventanas y su conexión con la estructura principal.' },
          partition: { name: 'Sistema de tabiques', label: 'Tabique', position: 'División de espacios interiores', function: 'Separación ligera y distribución de espacios', description: 'El tabique de la planta superior muestra el uso del panel para distribuir espacios interiores y puede desplazarse para inspeccionar sus dimensiones y ubicación.' },
          interior: { name: 'Sistema de paredes interiores', label: 'Pared interior', position: 'Paredes de zonas funcionales interiores', function: 'Soporte interior y base para acabados', description: 'Los grupos de paredes de ambas plantas muestran soportes interiores continuos, diferenciados del módulo de tabiques.' },
          floorplate: { name: 'Sistema de losa entre plantas', label: 'Losa entre plantas', position: 'Entre la planta superior y la inferior', function: 'Soporte del piso y separación horizontal', description: 'La losa central atraviesa los espacios principales para mostrar la instalación horizontal continua y los encuentros entre plantas.' },
          floor: { name: 'Sistema de suelo', label: 'Suelo', position: 'Planta baja y plataforma exterior', function: 'Soporte continuo para el pavimento', description: 'El suelo de la planta baja y la plataforma de acceso forman un único módulo que muestra cambios de nivel e instalación continua en grandes superficies.' },
          basement: { name: 'Sistema de sótano', label: 'Sótano', position: 'Envolvente bajo rasante y espacio de cimentación', function: 'Cerramiento y soporte bajo rasante', description: 'Una sección semitransparente muestra la losa, los muros laterales y el muro posterior del sótano, manteniendo visible el espacio interior.' },
          screen: { name: 'Sistema de pared multimedia', label: 'Pantalla', position: 'Zona multimedia del sótano', function: 'Soporte para pared técnica y equipos', description: 'El módulo independiente de pared multimedia muestra un soporte mural y una superficie de montaje para equipos en un espacio interior especializado.' }
        }
      },
      fr: {
        htmlLang: 'fr', dir: 'ltr', documentTitle: 'Système HYDRO-BLOK pour toute la maison | Modèle 3D',
        brandTitle: 'Système HYDRO-BLOK pour toute la maison', brandSubtitle: 'Panneau composite étanche et thermo-isolant · Guide 3D interactif pour toute la maison',
        modeAria: 'Modèle actuel', boardMode: 'Structure du panneau', houseMode: 'Modèle de la maison complète',
        rotate: 'Rotation 360°', stopRotate: 'Arrêter la rotation', resetView: 'Réinitialiser la vue', isoView: 'Perspective', frontView: 'Coupe frontale', topView: 'Vue de dessus',
        hideLabels: 'Masquer les repères', showLabels: 'Afficher les repères', restore: 'Tout restaurer', restoreAll: 'Restaurer le modèle complet',
        overviewEyebrow: 'Système pour toute la maison', overviewTitle: 'Système de pose rapide pour toute la maison',
        overviewSubtitle: 'Maquette en coupe d’une habitation moderne présentant les applications HYDRO-BLOK dans huit zones essentielles du bâtiment.',
        countLabel: 'Modules interactifs', countValue: '8 zones d’application', currentLabel: 'Sélection',
        hintHtml: 'Clic gauche et glisser pour tourner · Molette pour zoomer · Clic droit et glisser pour déplacer<br>Cliquez sur un élément du modèle ou un repère 3D pour le déplacer latéralement ; plusieurs systèmes peuvent rester sortis.',
        positionLabel: 'Zone d’application', functionLabel: 'Fonction représentée', statusLabel: 'État du modèle', actionLabel: 'Interaction',
        explodeTitle: 'Vue éclatée de la maison', modulePrefix: 'MODULE',
        selectedLeft: 'Sélectionné · prêt à sortir vers la gauche', selectedRight: 'Sélectionné · prêt à sortir vers la droite', pulled: 'Sorti du modèle complet', exploded: 'Modèle complet éclaté à {value} %',
        clickAction: 'Cliquez sur le modèle, le repère ou le bouton ci-dessous', clickAgain: 'Cliquez de nouveau pour le remettre en place', sliderAction: 'Faites glisser le curseur pour régler l’écartement',
        pullLeft: 'Déplacer vers la gauche', pullRight: 'Déplacer vers la droite', returnPosition: 'Remettre en place', tabAria: '{name} : cliquer pour sortir ou remettre en place',
        modules: {
          roof: { name: 'Système de toiture', label: 'Toiture', position: 'Enveloppe supérieure du bâtiment', function: 'Support continu et protection de la toiture', description: 'La toiture inclinée illustre la pose continue de HYDRO-BLOK sur l’enveloppe supérieure, avec un support léger et une protection complète de la surface.' },
          exterior: { name: 'Système de murs extérieurs', label: 'Mur extérieur', position: 'Enveloppe extérieure du bâtiment', function: 'Support de parement et enveloppe continue', description: 'L’élévation latérale complète et les zones de façade montrent les applications extérieures tout en conservant les baies de portes et de fenêtres ainsi que leur liaison avec la structure principale.' },
          partition: { name: 'Système de cloisons', label: 'Cloison', position: 'Séparation des espaces intérieurs', function: 'Séparation légère et organisation des espaces', description: 'La cloison de l’étage illustre l’emploi du panneau pour organiser les espaces intérieurs et peut être sortie afin d’examiner ses dimensions et son emplacement.' },
          interior: { name: 'Système de murs intérieurs', label: 'Mur intérieur', position: 'Murs des espaces fonctionnels intérieurs', function: 'Support intérieur et base de finition', description: 'Les groupes de murs des deux niveaux présentent des supports intérieurs continus, distincts du module de cloisons.' },
          floorplate: { name: 'Système de plancher intermédiaire', label: 'Plancher intermédiaire', position: 'Entre les niveaux supérieur et inférieur', function: 'Support du plancher et séparation horizontale', description: 'Le plancher intermédiaire central traverse les principaux espaces afin de montrer la pose horizontale continue et les raccords entre niveaux.' },
          floor: { name: 'Système de sol', label: 'Sol', position: 'Rez-de-chaussée et plateforme extérieure', function: 'Support de sol continu', description: 'Le sol du rez-de-chaussée et la plateforme d’entrée forment un seul module illustrant les changements de niveau et la pose continue sur de grandes surfaces.' },
          basement: { name: 'Système de sous-sol', label: 'Sous-sol', position: 'Enveloppe enterrée et espace de fondation', function: 'Enveloppe et support sous le niveau du sol', description: 'Une coupe semi-transparente présente la dalle, les murs latéraux et le mur arrière du sous-sol tout en laissant l’espace intérieur clairement visible.' },
          screen: { name: 'Système de mur multimédia', label: 'Écran', position: 'Espace multimédia du sous-sol', function: 'Support de paroi technique et d’équipements', description: 'Le module indépendant de mur multimédia présente un support mural et une surface de fixation des équipements dans un espace intérieur spécialisé.' }
        }
      },
      ar: {
        htmlLang: 'ar', dir: 'rtl', documentTitle: 'نظام HYDRO-BLOK للمنزل بالكامل | نموذج ثلاثي الأبعاد',
        brandTitle: 'نظام HYDRO-BLOK للمنزل بالكامل', brandSubtitle: 'لوح مركّب للعزل المائي والحراري · دليل تفاعلي ثلاثي الأبعاد لتطبيقات المنزل بالكامل',
        modeAria: 'النموذج الحالي', boardMode: 'تركيب اللوح', houseMode: 'نموذج تطبيقات المنزل',
        rotate: 'دوران 360°', stopRotate: 'إيقاف الدوران', resetView: 'استعادة المنظور', isoView: 'منظور مائل', frontView: 'قطاع أمامي', topView: 'منظر علوي',
        hideLabels: 'إخفاء التسميات', showLabels: 'إظهار التسميات', restore: 'إعادة الكل', restoreAll: 'إعادة النموذج بالكامل',
        overviewEyebrow: 'نظام المنزل بالكامل', overviewTitle: 'تطبيقات نظام التركيب السريع للمنزل بالكامل',
        overviewSubtitle: 'نموذج مقطعي لمنزل حديث يوضح استخدام ألواح HYDRO-BLOK في ثماني مناطق إنشائية أساسية.',
        countLabel: 'الوحدات التفاعلية', countValue: '8 مناطق تطبيق', currentLabel: 'المحدد حالياً',
        hintHtml: 'اسحب بالزر الأيسر للدوران · استخدم العجلة للتقريب · اسحب بالزر الأيمن للتحريك<br>انقر على الجزء أو التسمية ثلاثية الأبعاد لسحبه جانبياً؛ يمكن إبقاء عدة أنظمة مفصولة.',
        positionLabel: 'منطقة التطبيق', functionLabel: 'الوظيفة التوضيحية', statusLabel: 'حالة النموذج', actionLabel: 'طريقة التفاعل',
        explodeTitle: 'عرض تفكيكي لوحدات المنزل', modulePrefix: 'الوحدة',
        selectedLeft: 'محدد ويمكن سحبه إلى اليسار', selectedRight: 'محدد ويمكن سحبه إلى اليمين', pulled: 'مفصول عن النموذج الكامل', exploded: 'نسبة التفكيك الكلية {value}%',
        clickAction: 'انقر على النموذج أو التسمية أو الزر أدناه', clickAgain: 'انقر مرة أخرى لإعادته إلى مكانه', sliderAction: 'اسحب شريط التمرير للتحكم في التفكيك',
        pullLeft: 'تحريك لليسار للمعاينة', pullRight: 'تحريك لليمين للمعاينة', returnPosition: 'إعادة إلى الموضع', tabAria: '{name}: انقر للسحب أو الإعادة',
        modules: {
          roof: { name: 'نظام السقف', label: 'السقف', position: 'الغلاف العلوي للمبنى', function: 'قاعدة مستمرة وطبقة حماية', description: 'يوضح السقف المائل الاستعمال المتواصل لألواح HYDRO-BLOK في غلاف السقف مع إبراز القاعدة خفيفة الوزن والتغطية الكاملة.' },
          exterior: { name: 'نظام الجدار الخارجي', label: 'الجدار الخارجي', position: 'الغلاف الخارجي للمبنى', function: 'قاعدة للجدار وغلاف مستمر', description: 'توضح الواجهة الجانبية الكاملة ومناطق الواجهة الأمامية تطبيقات الجدار الخارجي مع الحفاظ على فتحات الأبواب والنوافذ واتصالها بالهيكل.' },
          partition: { name: 'نظام الجدار الفاصل', label: 'الجدار الفاصل', position: 'تقسيمات المساحات الداخلية', function: 'فصل خفيف وتنظيم المساحة', description: 'يوضح الجدار الفاصل في الطابق العلوي استخدام اللوح لتنظيم المساحات الداخلية، ويمكن سحبه لمعاينة أبعاده وموضعه.' },
          interior: { name: 'نظام الجدار الداخلي', label: 'الجدار الداخلي', position: 'جدران المساحات الداخلية', function: 'قاعدة داخلية ودعم تشطيبات الجدار', description: 'تعرض مجموعة الجدران في الطابقين مناطق القواعد الداخلية المستمرة مع تمييزها عن وحدة الجدار الفاصل.' },
          floorplate: { name: 'نظام بلاطة الطابق', label: 'بلاطة الطابق', position: 'بين الطابقين العلوي والسفلي', function: 'حمل الطابق والفصل الأفقي', description: 'تمتد بلاطة الطابق المركزية عبر المساحات الرئيسية لتوضيح التركيب الأفقي المستمر وتفاصيل الوصل بين الطوابق.' },
          floor: { name: 'نظام الأرضية', label: 'الأرضية', position: 'الدور الأرضي والمنصة الخارجية', function: 'قاعدة أرضية مستمرة', description: 'تكوّن أرضية الدور الأرضي ومنصة المدخل وحدة واحدة توضح انتقالات المناسيب والتركيب المستمر على المساحات الكبيرة.' },
          basement: { name: 'نظام القبو', label: 'القبو', position: 'الغلاف تحت الأرض ومساحة الأساس', function: 'غلاف وقاعدة تحت مستوى الأرض', description: 'يوضح القطاع شبه الشفاف بلاطة القبو والجدران الجانبية والخلفية مع إبقاء المساحة الداخلية واضحة.' },
          screen: { name: 'نظام جدار الوسائط', label: 'جدار العرض', position: 'منطقة الوسائط في القبو', function: 'قاعدة لجدار وظيفي وتركيب المعدات', description: 'توضح وحدة جدار الوسائط المستقلة قاعدة الجدار وسطح تركيب المعدات في مساحة داخلية متخصصة.' }
        }
      },
      ru: {
        htmlLang: 'ru', dir: 'ltr', documentTitle: 'HYDRO-BLOK — система для всего дома | 3D-модель',
        brandTitle: 'HYDRO-BLOK — система для всего дома', brandSubtitle: 'Композитная тепло- и гидроизоляционная плита · Интерактивная 3D-схема применения',
        modeAria: 'Текущая модель', boardMode: 'Структура плиты', houseMode: 'Модель всего дома',
        rotate: 'Обзор 360°', stopRotate: 'Остановить вращение', resetView: 'Сбросить вид', isoView: 'Перспектива', frontView: 'Фронтальный разрез', topView: 'Вид сверху',
        hideLabels: 'Скрыть метки', showLabels: 'Показать метки', restore: 'Вернуть всё', restoreAll: 'Восстановить модель',
        overviewEyebrow: 'Система для всего дома', overviewTitle: 'Система быстрого монтажа для всего дома',
        overviewSubtitle: 'Разрез современного дома показывает применение плит HYDRO-BLOK в восьми основных зонах здания.',
        countLabel: 'Интерактивные модули', countValue: '8 зон применения', currentLabel: 'Выбрано',
        hintHtml: 'Левая кнопка — вращение · Колесо — масштаб · Правая кнопка — панорама<br>Нажмите на часть модели или 3D-метку, чтобы сдвинуть её в сторону; можно выдвинуть несколько систем.',
        positionLabel: 'Зона применения', functionLabel: 'Назначение', statusLabel: 'Состояние модели', actionLabel: 'Управление',
        explodeTitle: 'Разнесённая схема модулей дома', modulePrefix: 'МОДУЛЬ',
        selectedLeft: 'Выбрано — можно сдвинуть влево', selectedRight: 'Выбрано — можно сдвинуть вправо', pulled: 'Модуль выдвинут из общей модели', exploded: 'Общее разнесение {value}%',
        clickAction: 'Нажмите на модель, метку или кнопку ниже', clickAgain: 'Нажмите ещё раз, чтобы вернуть', sliderAction: 'Перетащите ползунок для разнесения',
        pullLeft: 'Сдвинуть влево', pullRight: 'Сдвинуть вправо', returnPosition: 'Вернуть на место', tabAria: '{name}: нажмите, чтобы выдвинуть или вернуть',
        modules: {
          roof: { name: 'Система кровли', label: 'Кровля', position: 'Верхняя ограждающая конструкция', function: 'Сплошное основание и защитное покрытие', description: 'Скатная кровля показывает непрерывное применение плит HYDRO-BLOK с лёгким основанием и полным защитным покрытием.' },
          exterior: { name: 'Система наружных стен', label: 'Наружная стена', position: 'Внешний контур здания', function: 'Основание стены и непрерывное ограждение', description: 'Боковой фасад и передние зоны показывают наружное применение с сохранением дверных и оконных проёмов и связей с несущей конструкцией.' },
          partition: { name: 'Система перегородок', label: 'Перегородка', position: 'Разделение внутренних помещений', function: 'Лёгкое зонирование пространства', description: 'Перегородка верхнего этажа показывает применение плит для планировки помещений; её можно выдвинуть для осмотра размеров и положения.' },
          interior: { name: 'Система внутренних стен', label: 'Внутренняя стена', position: 'Стены функциональных помещений', function: 'Внутреннее основание и опора отделки', description: 'Группы стен на двух уровнях показывают сплошные основания внутренних стен отдельно от модуля перегородок.' },
          floorplate: { name: 'Система межэтажной плиты', label: 'Плита перекрытия', position: 'Между верхним и нижним этажами', function: 'Несущая плоскость и горизонтальное разделение', description: 'Центральная плита проходит через основные помещения и показывает непрерывный горизонтальный монтаж и сопряжения этажей.' },
          floor: { name: 'Система пола', label: 'Пол', position: 'Первый этаж и наружная площадка', function: 'Сплошное основание пола', description: 'Пол первого этажа и входная площадка образуют единый модуль, показывающий переходы высот и непрерывный монтаж на большой площади.' },
          basement: { name: 'Система подвала', label: 'Подвал', position: 'Подземный контур и фундаментное пространство', function: 'Подземное ограждение и основание', description: 'Полупрозрачный разрез показывает плиту, боковые и заднюю стены подвала, сохраняя видимость внутреннего пространства.' },
          screen: { name: 'Система медиастены', label: 'Экран', position: 'Медиазона подвала', function: 'Основание функциональной стены и оборудования', description: 'Отдельный модуль медиастены показывает основание стены и поверхность для крепления оборудования в специализированном помещении.' }
        }
      }
    };

    const metaById = Object.fromEntries(MODULES.map(item => [item.id, item]));
    const moduleGroups = new Map();
    const moduleMeshes = new Map();
    const interactiveMeshes = [];
    const labelSprites = [];

    let scene;
    let camera;
    let renderer;
    let controls;
    let raycaster;
    let pointer;
    let houseRoot;
    let selectedId = 'roof';
    const pulledIds = new Set();
    let hoveredId = null;
    let labelsVisible = true;
    let clickTimer = null;
    let pointerDown = null;
    let cameraGoal = null;
    let targetGoal = null;
    let previewActive = true;
    let currentHouseLang = 'zh';

    const container = document.getElementById('canvas-container');
    const slider = document.getElementById('explode-slider');

    function showRuntimeError(message) {
      const status = document.getElementById('runtime-status');
      status.textContent = message;
      status.classList.remove('hidden');
    }

    function makeMaterial(color, options = {}) {
      return new THREE.MeshStandardMaterial({
        color,
        roughness: options.roughness ?? 0.7,
        metalness: options.metalness ?? 0.02,
        transparent: Boolean(options.transparent),
        opacity: options.opacity ?? 1,
        side: options.side ?? THREE.FrontSide,
        emissive: 0x000000,
        emissiveIntensity: 0
      });
    }

    function getGroup(id) {
      if (!moduleGroups.has(id)) {
        const group = new THREE.Group();
        group.name = `module-${id}`;
        group.userData.targetPosition = new THREE.Vector3();
        group.userData.moduleId = id;
        moduleGroups.set(id, group);
        moduleMeshes.set(id, []);
        houseRoot.add(group);
      }
      return moduleGroups.get(id);
    }

    function addEdges(mesh, color = 0xe5edf0, opacity = 0.46) {
      const edgeGeometry = new THREE.EdgesGeometry(mesh.geometry, 24);
      const edgeMaterial = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
      const edgeLines = new THREE.LineSegments(edgeGeometry, edgeMaterial);
      edgeLines.renderOrder = 2;
      mesh.add(edgeLines);
    }

    function addBox(id, size, position, color, options = {}) {
      const group = getGroup(id);
      const geometry = new THREE.BoxGeometry(size[0], size[1], size[2]);
      const material = makeMaterial(color, options);
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(position[0], position[1], position[2]);
      if (options.rotation) {
        mesh.rotation.set(options.rotation[0] || 0, options.rotation[1] || 0, options.rotation[2] || 0);
      }
      mesh.castShadow = options.castShadow !== false;
      mesh.receiveShadow = options.receiveShadow !== false;
      mesh.userData.moduleId = id;
      mesh.userData.baseOpacity = material.opacity;
      mesh.userData.baseTransparent = material.transparent;
      if (options.edges !== false) addEdges(mesh, options.edgeColor, options.edgeOpacity);
      group.add(mesh);
      moduleMeshes.get(id).push(mesh);
      interactiveMeshes.push(mesh);
      return mesh;
    }

    const BOARD_PALETTE = {
      surface: 0x2d3744,
      surfaceAlt: 0x354250,
      core: 0xa5f3e2,
      coreEdge: 0x62d3a7,
      skinEdge: 0xe8f0f2
    };

    function addBoardPanel(id, size, position, plane = 'horizontal', options = {}) {
      const coreThickness = options.coreThickness ?? 0.12;
      const skinThickness = options.skinThickness ?? 0.026;
      const reveal = options.reveal ?? 0.06;
      const rotation = options.rotation || [0, 0, 0];
      const euler = new THREE.Euler(rotation[0] || 0, rotation[1] || 0, rotation[2] || 0);
      const normal = plane === 'front'
        ? new THREE.Vector3(0, 0, 1)
        : plane === 'side'
          ? new THREE.Vector3(1, 0, 0)
          : new THREE.Vector3(0, 1, 0);
      normal.applyEuler(euler).normalize();

      const dimensions = (thickness, extra = 0) => {
        if (plane === 'front') return [size[0] + extra, size[1] + extra, thickness];
        if (plane === 'side') return [thickness, size[0] + extra, size[1] + extra];
        return [size[0] + extra, thickness, size[1] + extra];
      };

      addBox(id, dimensions(coreThickness, reveal), position, options.coreColor ?? BOARD_PALETTE.core, {
        rotation,
        roughness: 0.7,
        edgeColor: options.coreEdge ?? BOARD_PALETTE.coreEdge,
        edgeOpacity: 0.92
      });

      const skinOffset = coreThickness / 2 + skinThickness / 2;
      [-1, 1].forEach((direction, index) => {
        const skinPosition = new THREE.Vector3(...position).addScaledVector(normal, skinOffset * direction);
        addBox(id, dimensions(skinThickness), skinPosition.toArray(), index === 0
          ? (options.backColor ?? options.surfaceColor ?? BOARD_PALETTE.surfaceAlt)
          : (options.surfaceColor ?? BOARD_PALETTE.surface), {
          rotation,
          roughness: options.roughness ?? 0.52,
          metalness: options.metalness ?? 0.02,
          edgeColor: options.skinEdge ?? BOARD_PALETTE.skinEdge,
          edgeOpacity: 0.64
        });
      });
    }

    function addCleanRoofPanel(id, size, position, rotation) {
      const coreThickness = 0.105;
      const skinThickness = 0.008;
      const euler = new THREE.Euler(rotation[0] || 0, rotation[1] || 0, rotation[2] || 0);
      const normal = new THREE.Vector3(0, 1, 0).applyEuler(euler).normalize();

      // Preserve the board build-up on the roof: dark finish skins around the mint
      // XPS core. All three layers share the same footprint and use no raised edge
      // geometry; the exterior wall below is what prevents roof intersection.
      addBox(id, [size[0], coreThickness, size[1]], position, BOARD_PALETTE.core, {
        rotation,
        roughness: 0.7,
        edges: false
      });

      const skinOffset = coreThickness / 2 + skinThickness / 2;
      [-1, 1].forEach((direction, index) => {
        const skinPosition = new THREE.Vector3(...position).addScaledVector(normal, skinOffset * direction);
        addBox(id, [size[0], skinThickness, size[1]], skinPosition.toArray(), index === 0
          ? BOARD_PALETTE.surfaceAlt
          : BOARD_PALETTE.surface, {
          rotation,
          roughness: 0.52,
          metalness: 0.02,
          edges: false
        });
      });
    }

    function addDecorBox(size, position, color, options = {}) {
      const geometry = new THREE.BoxGeometry(size[0], size[1], size[2]);
      const material = makeMaterial(color, options);
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(position[0], position[1], position[2]);
      if (options.rotation) mesh.rotation.set(options.rotation[0] || 0, options.rotation[1] || 0, options.rotation[2] || 0);
      mesh.castShadow = options.castShadow !== false;
      mesh.receiveShadow = options.receiveShadow !== false;
      if (options.edges !== false) addEdges(mesh, options.edgeColor, options.edgeOpacity);
      houseRoot.add(mesh);
      return mesh;
    }

    function createRoundedRectPath(ctx, x, y, width, height, radius) {
      const r = Math.min(radius, width / 2, height / 2);
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + width - r, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + r);
      ctx.lineTo(x + width, y + height - r);
      ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
      ctx.lineTo(x + r, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    }

    function getHouseText() {
      return HOUSE_I18N[currentHouseLang] || HOUSE_I18N.zh;
    }

    function getModuleText(id) {
      const data = getHouseText();
      return data.modules[id] || HOUSE_I18N.zh.modules[id];
    }

    function interpolateHouseText(template, values = {}) {
      return Object.entries(values).reduce((result, [key, value]) => result.replaceAll(`{${key}}`, value), template);
    }

    function drawLabelSprite(sprite) {
      const canvas = sprite.userData.labelCanvas;
      const ctx = canvas.getContext('2d');
      const meta = getModuleText(sprite.userData.moduleId);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      createRoundedRectPath(ctx, 8, 10, 496, 106, 28);
      ctx.fillStyle = 'rgba(19, 34, 50, 0.92)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(101, 211, 168, 0.85)';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.fillStyle = '#ffffff';
      ctx.font = '700 29px "Noto Sans SC", "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.direction = getHouseText().dir;
      ctx.fillText(meta.name, 256, 52, 455);
      ctx.fillStyle = '#8fe0bf';
      ctx.font = '600 19px "Plus Jakarta Sans", "Noto Sans SC", sans-serif';
      ctx.fillText(meta.label, 256, 87, 455);
      sprite.userData.labelTexture.needsUpdate = true;
    }

    function makeLabelSprite(meta) {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 128;
      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false, depthWrite: false });
      const sprite = new THREE.Sprite(material);
      sprite.scale.set(2.25, 0.56, 1);
      sprite.position.set(meta.label[0], meta.label[1], meta.label[2]);
      sprite.renderOrder = 1000;
      sprite.userData.moduleId = meta.id;
      sprite.userData.anchor = new THREE.Vector3(meta.label[0], meta.label[1], meta.label[2]);
      sprite.userData.labelCanvas = canvas;
      sprite.userData.labelTexture = texture;
      drawLabelSprite(sprite);
      scene.add(sprite);
      labelSprites.push(sprite);
      return sprite;
    }

    function buildHouseModel() {
      houseRoot = new THREE.Group();
      houseRoot.name = 'whole-house-root';
      scene.add(houseRoot);

      // 1. Roof system: flush skins and core with no raised edge geometry.
      addCleanRoofPanel('roof', [5.55, 5.45], [-1.63, 6.09, -0.05], [0, 0, 0.23]);
      addCleanRoofPanel('roof', [3.85, 5.25], [2.66, 5.67, -0.05], [0, 0, -0.17]);

      // 2. Exterior wall system: a closed villa envelope with deliberate openings.
      // Keep the right exterior wall below the sloping roof plane. Its former top
      // edge crossed through the roof and appeared as two bright parallel ribs.
      addBoardPanel('exterior', [5.25, 4.86], [4.05, 2.68, -0.02], 'side', { coreThickness: 0.16, reveal: 0.1 });
      addBoardPanel('exterior', [5.25, 4.86], [-4.05, 2.68, -0.02], 'side', { coreThickness: 0.16, reveal: 0.1 });
      addBoardPanel('exterior', [8.08, 5.25], [0, 2.68, -2.42], 'front', { coreThickness: 0.16, reveal: 0.1 });
      // Closed backing walls prevent the two right-front rooms from reading as empty bays.
      addBoardPanel('exterior', [3.14, 2.42], [2.47, 1.48, 2.28], 'front', { reveal: 0.08 });
      addBoardPanel('exterior', [3.14, 2.22], [2.47, 4.06, 2.28], 'front', { reveal: 0.08 });
      addBoardPanel('exterior', [2.0, 2.45], [2.9, 1.5, 2.37], 'front', { coreThickness: 0.15, reveal: 0.07 });
      addBoardPanel('exterior', [1.55, 2.28], [3.1, 4.18, 2.37], 'front', { coreThickness: 0.15, reveal: 0.07 });
      addBoardPanel('exterior', [1.15, 2.05], [0.72, 4.0, 2.37], 'front', { coreThickness: 0.15, reveal: 0.07 });
      addBox('exterior', [0.28, 5.2, 0.3], [0.02, 2.68, 2.32], 0x495660, { edgeColor: 0x8adfbc });
      addBox('exterior', [8.15, 0.17, 0.24], [0, 2.86, 2.38], 0x68d4aa, { edgeColor: 0xb5f5db });
      addBoardPanel('exterior', [2.05, 4.75], [0.55, 4.02, -0.02], 'side', { coreThickness: 0.15, reveal: 0.08 });

      // Upper-left facade framing and two glazed windows close the front elevation.
      addBox('exterior', [3.6, 0.38, 0.22], [-2.05, 5.2, 2.37], 0x5f6b74, { edgeColor: 0xd9e1e5 });
      addBox('exterior', [3.6, 0.34, 0.22], [-2.05, 3.02, 2.37], 0x5f6b74, { edgeColor: 0xd9e1e5 });
      addBox('exterior', [0.36, 2.2, 0.22], [-3.85, 4.1, 2.37], 0x5f6b74, { edgeColor: 0xd9e1e5 });
      addBox('exterior', [0.3, 2.2, 0.22], [-2.08, 4.1, 2.37], 0x5f6b74, { edgeColor: 0xd9e1e5 });
      addBox('exterior', [0.36, 2.2, 0.22], [-0.27, 4.1, 2.37], 0x5f6b74, { edgeColor: 0xd9e1e5 });
      addBox('exterior', [1.38, 1.68, 0.08], [-3.0, 4.1, 2.51], 0x93bdc9, { transparent: true, opacity: 0.66, roughness: 0.2, edgeColor: 0x2f4858, edgeOpacity: 0.85 });
      addBox('exterior', [1.38, 1.68, 0.08], [-1.16, 4.1, 2.51], 0x93bdc9, { transparent: true, opacity: 0.66, roughness: 0.2, edgeColor: 0x2f4858, edgeOpacity: 0.85 });

      // Ground-floor garage bay is enclosed by a framed sectional door.
      addBox('exterior', [3.6, 0.4, 0.22], [-2.05, 2.56, 2.37], 0x55636c, { edgeColor: 0xd9e1e5 });
      addBox('exterior', [0.34, 2.2, 0.22], [-3.85, 1.35, 2.37], 0x55636c, { edgeColor: 0xd9e1e5 });
      addBox('exterior', [0.34, 2.2, 0.22], [-0.25, 1.35, 2.37], 0x55636c, { edgeColor: 0xd9e1e5 });
      addBox('exterior', [3.12, 1.88, 0.08], [-2.05, 1.34, 2.5], 0xaeb9be, { roughness: 0.66, metalness: 0.08, edgeColor: 0x3d4b55, edgeOpacity: 0.8 });
      [-0.56, -0.2, 0.16, 0.52].forEach(offset => {
        addBox('exterior', [3.0, 0.035, 0.035], [-2.05, 1.34 + offset, 2.56], 0x75848c, { metalness: 0.18, roughness: 0.5, edges: false });
      });

      // Window and door surfaces are part of the exterior module.
      addBox('exterior', [1.25, 1.42, 0.08], [2.0, 1.45, 2.51], 0x8fb7c4, { transparent: true, opacity: 0.62, roughness: 0.22, metalness: 0.08, edgeColor: 0x2f4858, edgeOpacity: 0.85 });
      addBox('exterior', [0.18, 2.05, 0.12], [2.78, 1.48, 2.48], 0x46545e, { metalness: 0.08, roughness: 0.62, edgeColor: 0xc6d1d6 });
      addBox('exterior', [1.03, 1.42, 0.08], [3.42, 1.45, 2.51], 0x8fb7c4, { transparent: true, opacity: 0.62, roughness: 0.22, metalness: 0.08, edgeColor: 0x2f4858, edgeOpacity: 0.85 });
      addBox('exterior', [0.95, 1.45, 0.08], [3.16, 4.06, 2.51], 0x91bbc8, { transparent: true, opacity: 0.64, roughness: 0.2, edgeColor: 0x2f4858, edgeOpacity: 0.85 });
      addBox('exterior', [0.72, 1.35, 0.08], [0.74, 4.03, 2.51], 0x91bbc8, { transparent: true, opacity: 0.64, roughness: 0.2, edgeColor: 0x2f4858, edgeOpacity: 0.85 });

      // 3. Partition walls: upper internal dividers.
      addBoardPanel('partition', [2.55, 4.52], [-0.75, 4.08, -0.05], 'side', { reveal: 0.08 });
      addBoardPanel('partition', [2.55, 2.4], [-2.05, 4.02, -2.23], 'front', { reveal: 0.08 });
      addBoardPanel('partition', [2.3, 2.0], [-2.8, 4.0, 1.25], 'side', { reveal: 0.08 });

      // 4. Interior walls: visible room backings and ground-floor internal wall.
      addBoardPanel('interior', [3.2, 2.45], [-2.25, 1.5, -2.25], 'front', { reveal: 0.08 });
      addBoardPanel('interior', [2.45, 3.2], [-3.75, 1.5, -0.55], 'side', { reveal: 0.08 });
      addBoardPanel('interior', [2.35, 3.1], [0.2, 1.52, -0.6], 'side', { reveal: 0.08 });
      addBoardPanel('interior', [2.6, 2.3], [-2.05, 4.0, -1.25], 'front', { reveal: 0.08 });

      // Internal circulation and structural rhythm make the villa read as a complete building.
      for (let i = 0; i < 8; i += 1) {
        addBox('interior', [1.45, 0.15, 0.46], [-0.75, 0.32 + i * 0.29, 1.55 - i * 0.36], 0x7a868d, { roughness: 0.82, edgeColor: 0xdce5e8, edgeOpacity: 0.55 });
      }
      addBox('interior', [0.16, 2.55, 0.16], [-1.55, 1.45, 0.1], 0x42515c, { metalness: 0.12, roughness: 0.55, edgeColor: 0xaebbc2 });
      addBox('interior', [0.16, 2.55, 0.16], [0.1, 1.45, 0.1], 0x42515c, { metalness: 0.12, roughness: 0.55, edgeColor: 0xaebbc2 });
      addBox('interior', [3.3, 0.16, 0.18], [-0.72, 2.64, 0.1], 0x42515c, { metalness: 0.12, roughness: 0.55, edgeColor: 0xaebbc2 });

      // 5. Floor plate: intermediate slab and balcony extension.
      addBoardPanel('floorplate', [8.3, 4.82], [0, 2.82, -0.02], 'horizontal', { coreThickness: 0.17, reveal: 0.1 });
      addBoardPanel('floorplate', [3.25, 1.45], [-2.5, 2.78, 2.9], 'horizontal', { coreThickness: 0.14, reveal: 0.08 });

      // 6. Floor system: enlarged site plane, main floor, deck and entry steps.
      // The large site plane is split into a U-shape, keeping the basement cutaway visible.
      addBox('floor', [15.2, 0.34, 3.0], [0, -0.28, -3.72], 0x77847f, { roughness: 0.94, edgeColor: 0xdfe7e5 });
      addBox('floor', [15.22, 0.07, 3.02], [0, -0.07, -3.72], 0x5f9a7f, { roughness: 0.84, edgeColor: 0x9fe0c2, edgeOpacity: 0.7 });
      addBox('floor', [3.35, 0.34, 7.45], [-5.92, -0.28, 1.48], 0x77847f, { roughness: 0.94, edgeColor: 0xdfe7e5 });
      addBox('floor', [3.37, 0.07, 7.47], [-5.92, -0.07, 1.48], 0x5f9a7f, { roughness: 0.84, edgeColor: 0x9fe0c2, edgeOpacity: 0.7 });
      addBox('floor', [3.35, 0.34, 7.45], [5.92, -0.28, 1.48], 0x77847f, { roughness: 0.94, edgeColor: 0xdfe7e5 });
      addBox('floor', [3.37, 0.07, 7.47], [5.92, -0.07, 1.48], 0x5f9a7f, { roughness: 0.84, edgeColor: 0x9fe0c2, edgeOpacity: 0.7 });
      addBoardPanel('floor', [8.55, 5.02], [0, 0.04, -0.02], 'horizontal', { coreThickness: 0.18, reveal: 0.1 });
      addBoardPanel('floor', [5.7, 2.45], [1.55, 0.02, 3.35], 'horizontal', { coreThickness: 0.18, reveal: 0.1 });
      addBox('floor', [2.6, 0.22, 0.72], [3.05, -0.24, 4.85], 0x69767e, { edgeColor: 0xdce4e7 });
      addBox('floor', [2.25, 0.22, 0.68], [3.22, -0.47, 5.48], 0x78838a, { edgeColor: 0xdce4e7 });

      // 7. Basement: bottom slab, rear/side walls and transparent front cutaway.
      addBoardPanel('basement', [8.6, 7.2], [0, -2.35, 0.95], 'horizontal', { coreThickness: 0.17, reveal: 0.1 });
      addBoardPanel('basement', [8.6, 2.22], [0, -1.22, -2.43], 'front', { coreThickness: 0.16, reveal: 0.1 });
      addBoardPanel('basement', [2.22, 6.98], [-4.18, -1.22, 0.95], 'side', { coreThickness: 0.16, reveal: 0.1 });
      addBoardPanel('basement', [2.22, 6.98], [4.18, -1.22, 0.95], 'side', { coreThickness: 0.16, reveal: 0.1 });
      addBox('basement', [8.18, 1.95, 0.09], [0, -1.25, 4.42], 0x8bb4c0, { transparent: true, opacity: 0.28, roughness: 0.26, edgeColor: 0xc9e0e7, edgeOpacity: 0.75 });
      addBoardPanel('basement', [8.72, 7.08], [0, -0.56, 0.95], 'horizontal', { coreThickness: 0.12, skinThickness: 0.02, reveal: 0.1 });
      [-2.7, -0.9, 0.9, 2.7].forEach(x => {
        addBox('basement', [0.08, 1.95, 0.14], [x, -1.25, 4.43], 0x4b5a64, { metalness: 0.25, roughness: 0.45, edgeColor: 0xb9c6cc });
      });

      // 8. Movie screen: independent special-purpose wall in the basement.
      addBoardPanel('screen', [3.25, 1.5], [-1.1, -1.2, -2.24], 'front', { coreThickness: 0.11, reveal: 0.12, surfaceColor: 0x202b37, backColor: 0x293542 });
      addBox('screen', [2.85, 1.12, 0.035], [-1.1, -1.2, -2.13], 0xb8c6cc, { roughness: 0.58, edgeColor: 0xf0f5f6, edgeOpacity: 0.72 });
      addBox('screen', [0.28, 0.9, 0.22], [-3.15, -1.28, -2.12], 0x27343f, { roughness: 0.52, edgeColor: 0x71818c });
      addBox('screen', [0.28, 0.9, 0.22], [0.95, -1.28, -2.12], 0x27343f, { roughness: 0.52, edgeColor: 0x71818c });

      // Neutral structural accents retained outside the eight interactive modules.
      addDecorBox([0.16, 5.2, 0.16], [-4.05, 2.62, 2.35], 0x31404b, { metalness: 0.12, roughness: 0.5, edgeColor: 0x96a5ad });
      addDecorBox([0.16, 5.2, 0.16], [4.05, 2.62, 2.35], 0x31404b, { metalness: 0.12, roughness: 0.5, edgeColor: 0x96a5ad });
      addDecorBox([8.1, 0.14, 0.14], [0, 5.33, 2.35], 0x31404b, { metalness: 0.12, roughness: 0.5, edgeColor: 0x96a5ad });

      MODULES.forEach(makeLabelSprite);
    }

    function initScene() {
      if (!window.THREE || !THREE.OrbitControls) {
        showRuntimeError('3D 资源加载失败，请确认网络连接后重新打开文件。');
        return;
      }

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xb6bec8);
      raycaster = new THREE.Raycaster();
      pointer = new THREE.Vector2();

      camera = new THREE.PerspectiveCamera(42, container.clientWidth / container.clientHeight, 0.1, 1000);
      camera.position.set(14.4, 8.8, 17.5);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);

      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.06;
      controls.target.set(0, 1.35, 0);
      controls.minDistance = 5.2;
      controls.maxDistance = 34;
      controls.maxPolarAngle = Math.PI / 2 + 0.03;

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.72);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffffff, 0.98);
      keyLight.position.set(7, 13, 9);
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.set(2048, 2048);
      keyLight.shadow.camera.left = -13;
      keyLight.shadow.camera.right = 13;
      keyLight.shadow.camera.top = 13;
      keyLight.shadow.camera.bottom = -13;
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0xdbeafe, 0.45);
      fillLight.position.set(-8, 6, 5);
      scene.add(fillLight);

      const rimLight = new THREE.DirectionalLight(0xffffff, 0.32);
      rimLight.position.set(0, -4, -8);
      scene.add(rimLight);

      const floorGeometry = new THREE.PlaneGeometry(34, 34);
      const floorMaterial = new THREE.ShadowMaterial({ opacity: 0.18 });
      const floor = new THREE.Mesh(floorGeometry, floorMaterial);
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = -2.5;
      floor.receiveShadow = true;
      scene.add(floor);

      const grid = new THREE.GridHelper(28, 28, 0x94a3b8, 0xcfd8dc);
      grid.position.y = -2.501;
      scene.add(grid);

      buildHouseModel();
      applyHouseLanguage(currentHouseLang);
      bindEvents();
      animate();
    }

    function buildModuleTabs() {
      const tabs = document.getElementById('module-tabs');
      tabs.innerHTML = '';
      const data = getHouseText();
      MODULES.forEach((meta, index) => {
        const localized = getModuleText(meta.id);
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'module-tab';
        button.dataset.moduleId = meta.id;
        button.textContent = `${index + 1}. ${localized.name}`;
        button.setAttribute('aria-label', interpolateHouseText(data.tabAria, { name: localized.name }));
        button.addEventListener('click', () => togglePulledModule(meta.id));
        tabs.appendChild(button);
      });
    }

    function applyHouseLanguage(lang) {
      currentHouseLang = HOUSE_I18N[lang] ? lang : 'zh';
      const data = getHouseText();
      document.documentElement.lang = data.htmlLang;
      document.documentElement.dir = data.dir;
      document.title = data.documentTitle;
      document.getElementById('house-brand-title').textContent = data.brandTitle;
      document.getElementById('house-brand-subtitle').textContent = data.brandSubtitle;
      document.getElementById('house-mode-pill').setAttribute('aria-label', data.modeAria);
      document.getElementById('switch-to-board-model').textContent = data.boardMode;
      document.getElementById('house-mode-label').textContent = data.houseMode;
      document.getElementById('btn-auto-rotate').textContent = controls && controls.autoRotate ? data.stopRotate : data.rotate;
      document.getElementById('btn-reset-view').textContent = data.resetView;
      document.querySelector('[data-view="iso"]').textContent = data.isoView;
      document.querySelector('[data-view="front"]').textContent = data.frontView;
      document.querySelector('[data-view="top"]').textContent = data.topView;
      document.getElementById('btn-toggle-labels').textContent = labelsVisible ? data.hideLabels : data.showLabels;
      document.getElementById('btn-restore-top').textContent = `↺  ${data.restoreAll}`;
      document.getElementById('btn-restore-card').textContent = data.restore;
      document.getElementById('btn-restore-all').textContent = data.restoreAll;
      document.getElementById('overview-eyebrow').textContent = data.overviewEyebrow;
      document.getElementById('overview-title').textContent = data.overviewTitle;
      document.getElementById('overview-subtitle').textContent = data.overviewSubtitle;
      document.getElementById('overview-count-label').textContent = data.countLabel;
      document.getElementById('overview-count-value').textContent = data.countValue;
      document.getElementById('overview-current-label').textContent = data.currentLabel;
      document.getElementById('interaction-hint').innerHTML = data.hintHtml;
      document.getElementById('prop-position-label').textContent = data.positionLabel;
      document.getElementById('prop-function-label').textContent = data.functionLabel;
      document.getElementById('prop-status-label').textContent = data.statusLabel;
      document.getElementById('prop-action-label').textContent = data.actionLabel;
      document.getElementById('explode-title').textContent = data.explodeTitle;
      slider.setAttribute('aria-label', data.explodeTitle);
      buildModuleTabs();
      labelSprites.forEach(drawLabelSprite);
      selectModule(selectedId);
    }

    function setGroupTarget(id, vector) {
      const group = moduleGroups.get(id);
      if (!group) return;
      group.userData.targetPosition.copy(vector);
    }

    function resetGroupTargets(immediate = false) {
      moduleGroups.forEach(group => {
        group.userData.targetPosition.set(0, 0, 0);
        if (immediate) group.position.set(0, 0, 0);
      });
    }

    function setModuleVisibility(idToKeep = null) {
      moduleGroups.forEach((group, id) => {
        group.visible = !idToKeep || id === idToKeep;
      });
      labelSprites.forEach(sprite => {
        sprite.visible = labelsVisible && (!idToKeep || sprite.userData.moduleId === idToKeep);
      });
    }

    function setMaterialState(mesh, selected, hovered) {
      if (!mesh.material || !('emissive' in mesh.material)) return;
      if (selected) {
        mesh.material.emissive.setHex(0x0b6b50);
        mesh.material.emissiveIntensity = 0.3;
      } else if (hovered) {
        mesh.material.emissive.setHex(0x0b8f69);
        mesh.material.emissiveIntensity = 0.16;
      } else {
        mesh.material.emissive.setHex(0x000000);
        mesh.material.emissiveIntensity = 0;
      }
    }

    function refreshHighlights() {
      moduleMeshes.forEach((meshes, id) => {
        meshes.forEach(mesh => setMaterialState(mesh, id === selectedId, id === hoveredId));
      });
      labelSprites.forEach(sprite => {
        const active = sprite.userData.moduleId === selectedId;
        sprite.material.opacity = active ? 1 : 0.9;
        sprite.scale.set(active ? 2.42 : 2.25, active ? 0.61 : 0.56, 1);
      });
    }

    function refreshTabStates() {
      document.querySelectorAll('.module-tab').forEach(button => {
        const id = button.dataset.moduleId;
        button.classList.toggle('active', id === selectedId);
        button.classList.toggle('pulled', pulledIds.has(id));
      });
    }

    function selectModule(id) {
      if (!metaById[id]) return;
      selectedId = id;
      const meta = getModuleText(id);
      const data = getHouseText();
      const index = MODULES.findIndex(item => item.id === id);
      document.getElementById('module-index').textContent = `${data.modulePrefix} ${String(index + 1).padStart(2, '0')} / 08`;
      document.getElementById('module-number').textContent = String(index + 1).padStart(2, '0');
      document.getElementById('module-title').textContent = meta.name;
      document.getElementById('module-en').textContent = meta.label;
      document.getElementById('module-description').textContent = meta.description;
      document.getElementById('prop-position').textContent = meta.position;
      document.getElementById('prop-function').textContent = meta.function;
      document.getElementById('overview-selected').textContent = meta.name;
      refreshTabStates();
      refreshHighlights();
      updateStatusText();
      if (window.parent !== window) {
        window.parent.postMessage({ type: 'hydroblok-house-selected', id }, '*');
      }
    }

    function updateStatusText() {
      const data = getHouseText();
      const movesLeft = metaById[selectedId].explode[0] < 0;
      let status = movesLeft ? data.selectedLeft : data.selectedRight;
      let action = data.clickAction;
      let pullLabel = movesLeft ? data.pullLeft : data.pullRight;
      if (pulledIds.has(selectedId)) {
        status = data.pulled;
        action = data.clickAgain;
        pullLabel = data.returnPosition;
      } else if (Number(slider.value) > 0) {
        status = interpolateHouseText(data.exploded, { value: slider.value });
        action = data.sliderAction;
      }
      document.getElementById('prop-status').textContent = status;
      document.getElementById('prop-action').textContent = action;
      document.getElementById('btn-pull-module').textContent = pullLabel;
    }

    function togglePulledModule(id) {
      if (!metaById[id]) return;
      if (Number(slider.value) > 0) {
        slider.value = '0';
        document.getElementById('explode-value').textContent = '0%';
        pulledIds.clear();
        resetGroupTargets(false);
      }

      if (pulledIds.has(id)) {
        setGroupTarget(id, new THREE.Vector3());
        pulledIds.delete(id);
      } else {
        pulledIds.add(id);
        setGroupTarget(id, new THREE.Vector3(...metaById[id].explode));
      }
      selectModule(id);
    }

    function setExplode(value) {
      const progress = Math.max(0, Math.min(100, Number(value))) / 100;
      pulledIds.clear();
      setModuleVisibility(null);
      MODULES.forEach(meta => {
        setGroupTarget(meta.id, new THREE.Vector3(...meta.explode).multiplyScalar(progress));
      });
      document.getElementById('explode-value').textContent = `${Math.round(progress * 100)}%`;
      refreshTabStates();
      updateStatusText();
    }

    function restoreAll(resetCamera = false) {
      pulledIds.clear();
      hoveredId = null;
      slider.value = '0';
      document.getElementById('explode-value').textContent = '0%';
      setModuleVisibility(null);
      resetGroupTargets(false);
      if (resetCamera) setCameraView('iso');
      refreshTabStates();
      refreshHighlights();
      updateStatusText();
    }

    function setCameraView(type) {
      const views = {
        iso: { position: [14.4, 8.8, 17.5], target: [0, 1.35, 0] },
        front: { position: [0.01, 3.0, 20.6], target: [0, 1.25, 0] },
        top: { position: [0.01, 20.5, 0.01], target: [0, 1.0, 0] }
      };
      const view = views[type] || views.iso;
      cameraGoal = new THREE.Vector3(...view.position);
      targetGoal = new THREE.Vector3(...view.target);
      document.querySelectorAll('[data-view]').forEach(button => {
        button.classList.toggle('active', button.dataset.view === type);
      });
    }

    function toggleHouseAutoRotate() {
      controls.autoRotate = !controls.autoRotate;
      controls.autoRotateSpeed = 1.1;
      const button = document.getElementById('btn-auto-rotate');
      button.classList.toggle('active', controls.autoRotate);
      button.textContent = controls.autoRotate ? getHouseText().stopRotate : getHouseText().rotate;
      if (window.parent !== window) {
        window.parent.postMessage({ type: 'hydroblok-house-rotate', active: controls.autoRotate }, '*');
      }
    }

    function toggleHouseLabels() {
      labelsVisible = !labelsVisible;
      setModuleVisibility(null);
      const button = document.getElementById('btn-toggle-labels');
      button.textContent = labelsVisible ? getHouseText().hideLabels : getHouseText().showLabels;
      button.classList.toggle('active', !labelsVisible);
      if (window.parent !== window) {
        window.parent.postMessage({ type: 'hydroblok-house-labels', visible: labelsVisible }, '*');
      }
    }

    function runHouseCommand(command, payload = {}) {
      if (command === 'toggle-rotate') toggleHouseAutoRotate();
      if (command === 'reset-view') setCameraView('iso');
      if (command === 'set-view') setCameraView(payload.view === 'section' ? 'front' : payload.view);
      if (command === 'toggle-labels') toggleHouseLabels();
      if (command === 'toggle-module' && metaById[payload.id]) togglePulledModule(payload.id);
      if (command === 'restore-all') restoreAll(false);
    }

    function raycastModule(event) {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const visibleMeshes = interactiveMeshes.filter(mesh => {
        const moduleId = mesh.userData.moduleId;
        const group = moduleGroups.get(moduleId);
        return mesh.visible && group && group.visible;
      });
      const visibleLabels = labelSprites.filter(sprite => sprite.visible);
      const labelHits = raycaster.intersectObjects(visibleLabels, false);
      if (labelHits.length) return labelHits[0].object.userData.moduleId;
      const hits = raycaster.intersectObjects(visibleMeshes, false);
      return hits.length ? hits[0].object.userData.moduleId : null;
    }

    function bindEvents() {
      window.addEventListener('resize', onResize);
      window.addEventListener('message', event => {
        if (!event.data) return;
        if (event.data.type === 'hydroblok-preview-active') {
          previewActive = Boolean(event.data.active);
          if (previewActive) requestAnimationFrame(onResize);
          return;
        }
        if (event.data.type === 'hydroblok-language') {
          applyHouseLanguage(event.data.lang);
          return;
        }
        if (event.data.type === 'hydroblok-house-command') {
          runHouseCommand(event.data.command, event.data);
        }
      });

      renderer.domElement.addEventListener('pointerdown', event => {
        pointerDown = { x: event.clientX, y: event.clientY };
      });

      renderer.domElement.addEventListener('pointerup', event => {
        if (!pointerDown) return;
        const moved = Math.hypot(event.clientX - pointerDown.x, event.clientY - pointerDown.y);
        pointerDown = null;
        if (moved > 5) return;
        const id = raycastModule(event);
        if (!id) return;
        window.clearTimeout(clickTimer);
        clickTimer = window.setTimeout(() => togglePulledModule(id), 220);
      });

      renderer.domElement.addEventListener('dblclick', event => {
        window.clearTimeout(clickTimer);
        const id = raycastModule(event);
        if (id) togglePulledModule(id);
      });

      renderer.domElement.addEventListener('pointermove', event => {
        const id = raycastModule(event);
        if (id !== hoveredId) {
          hoveredId = id;
          renderer.domElement.style.cursor = id ? 'pointer' : 'grab';
          refreshHighlights();
        }
      });

      renderer.domElement.addEventListener('pointerleave', () => {
        hoveredId = null;
        renderer.domElement.style.cursor = 'grab';
        refreshHighlights();
      });

      slider.addEventListener('input', event => setExplode(event.target.value));
      document.getElementById('btn-restore-top').addEventListener('click', () => restoreAll(false));
      document.getElementById('btn-restore-all').addEventListener('click', () => restoreAll(false));
      document.getElementById('btn-restore-card').addEventListener('click', () => restoreAll(false));
      document.getElementById('btn-pull-module').addEventListener('click', () => togglePulledModule(selectedId));
      document.getElementById('btn-reset-view').addEventListener('click', () => setCameraView('iso'));
      document.getElementById('switch-to-board-model').addEventListener('click', () => {
        if (window.parent !== window) {
          window.parent.postMessage({ type: 'hydroblok-model-switch', mode: 'board' }, '*');
        }
      });

      document.getElementById('btn-auto-rotate').addEventListener('click', toggleHouseAutoRotate);

      document.querySelectorAll('[data-view]').forEach(button => {
        button.addEventListener('click', () => setCameraView(button.dataset.view));
      });

      controls.addEventListener('start', () => {
        cameraGoal = null;
        targetGoal = null;
      });

      document.getElementById('btn-toggle-labels').addEventListener('click', toggleHouseLabels);
    }

    function onResize() {
      if (!renderer || !camera) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    function updateLabelPositions() {
      labelSprites.forEach(sprite => {
        const group = moduleGroups.get(sprite.userData.moduleId);
        if (!group) return;
        sprite.position.copy(sprite.userData.anchor).add(group.position);
      });
    }

    function animate() {
      requestAnimationFrame(animate);

      if (!previewActive || document.hidden) return;

      moduleGroups.forEach(group => {
        group.position.lerp(group.userData.targetPosition, 0.105);
      });

      if (cameraGoal) {
        camera.position.lerp(cameraGoal, 0.085);
        if (camera.position.distanceTo(cameraGoal) < 0.015) {
          camera.position.copy(cameraGoal);
          cameraGoal = null;
        }
      }

      if (targetGoal) {
        controls.target.lerp(targetGoal, 0.085);
        if (controls.target.distanceTo(targetGoal) < 0.015) {
          controls.target.copy(targetGoal);
          targetGoal = null;
        }
      }

      updateLabelPositions();
      controls.update();
      renderer.render(scene, camera);
    }

    try {
      initScene();
    } catch (error) {
      console.error(error);
      showRuntimeError(`模型初始化失败：${error.message}`);
    }
