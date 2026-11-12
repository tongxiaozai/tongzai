window.portfolioData = {
  projects: [
    {
      slug: 'tax-animation',
      number: '01',
      cover: './assets/projects/tax-animation/cover-signing-hd.webp',
      coverAlt: { zh: '财税动漫短片中的双人签约场景', en: 'Two characters in a contract signing scene from the finance animation' },
      category: { zh: '知识内容 · 角色资产 · 竖屏短片', en: 'Educational content · Character assets · Vertical video' },
      title: { zh: '财税运营视频案例', en: 'Finance & Tax Video Operations' },
      tagline: { zh: '让复杂的话题，先变得愿意看。', en: 'Make a complex subject inviting to watch.' },
      summary: { zh: '以角色化的情景表达财税话题，完成五条竖屏短片，并精选三段横屏样片展示。', en: 'Character-led stories make finance topics easier to follow. The series includes five vertical shorts and three selected landscape samples.' },
      brief: { zh: '财税内容的信息密度高，需要在短视频开头建立人物关系与观看情境。项目通过角色互动和具体业务情景，把抽象知识转化为可观看的短片。', en: 'Finance content is dense. Character interaction and concrete business situations turn abstract topics into short, watchable stories.' },
      process: { zh: '从角色设定与分镜出发，制作五条约 24–30 秒的竖屏短片；这里精选三段横屏样片，展示不同的情景与画风。', en: 'Character design and storyboards led to five vertical shorts of around 24–30 seconds. Three landscape samples here show different situations and visual styles.' },
      deliverables: { zh: '双角色设定、五条竖屏短片与三段精选横屏样片。', en: 'Two character designs, five vertical shorts and three selected landscape samples.' },
      galleryTitle: { zh: '短片与角色设定', en: 'Films & Characters' },
      gallery: [
        ['character-a.webp', '角色一设定', 'Character one', 'square'],
        ['character-b.webp', '角色二设定', 'Character two', 'square']
      ].map(([file, zh, en, layout]) => ({ src: `./assets/projects/tax-animation/${file}`, caption: { zh, en }, layout })),
      videos: [
        { src: './assets/projects/tax-animation/sample-20261016.mp4', poster: './assets/projects/tax-animation/cover-signing-hd.webp', title: { zh: '签约与现金流', en: 'Signing & Cash Flow' }, duration: '00:30' },
        { src: './assets/projects/tax-animation/invoice-short.mp4', poster: './assets/projects/tax-animation/invoice-poster.jpg', title: { zh: '发票与报销', en: 'Invoices & Expenses' }, duration: '00:30' },
        { src: './assets/projects/tax-animation/compliance-short.mp4', poster: './assets/projects/tax-animation/compliance-poster.jpg', title: { zh: '财税合规沟通', en: 'Tax Compliance' }, duration: '00:25' }
      ],
      fullScript: {
        src: './assets/projects/tax-animation/full-script.png',
        alt: { zh: '据签约与现金流样片整理的完整脚本表，包含七个镜头、0 至 30 秒的时间段、景别、画面内容和台词', en: 'Full seven-shot, 0–30 second script breakdown of the signing and cash-flow sample, with timing, framing, action and dialogue' },
        caption: { zh: '《签约与现金流》完整脚本 · 据成片画面与字幕整理 · 点击图片查看原尺寸 ↗', en: 'Signing & Cash Flow · Full script breakdown reconstructed from the finished film · Open full size ↗ (Chinese)' }
      },
      scriptFrames: [
        { shot: '02', src: './assets/projects/tax-animation/shot-02-frame.webp', alt: { zh: '人物伸手按住香槟瓶口的近景', en: 'A hand stops the champagne bottle from opening' }, title: { zh: '按住香槟', en: 'Hold the champagne' }, line: { zh: '“客户什么时候付款？”', en: '“When will the client pay?”' } },
        { shot: '04', src: './assets/projects/tax-animation/shot-04-frame.webp', alt: { zh: '两人看着签约文件，讨论现金流风险', en: 'Two characters review the contract and discuss cash flow' }, title: { zh: '现金流风险', en: 'The cash-flow risk' }, line: { zh: '“大订单也可能卡住现金流。”', en: '“Even a large order can tie up cash flow.”' } },
        { shot: '07', src: './assets/projects/tax-animation/shot-07-frame.webp', alt: { zh: '两人坐在香槟前，决定等款项到账再开', en: 'The characters wait to open the champagne until payment arrives' }, title: { zh: '到账再开', en: 'Open it after payment' }, line: { zh: '“到账再开。”', en: '“Open it when the payment arrives.”' } }
      ]
    },
    {
      "slug": "digital-model",
      "number": "02",
      "title": {
        "zh": "AI 数字角色与影像案例",
        "en": "AI Characters & Motion"
      },
      "category": {
        "zh": "角色设定 · 产品演示 · 剧情短片",
        "en": "Character design · Product demos · Narrative shorts"
      },
      "tagline": {
        "zh": "五组作品，从角色设定到视频成片。",
        "en": "Five projects, from character development to finished video."
      },
      "summary": {
        "zh": "用服装转场、生活 Vlog、产品演示、人像短片和双人剧情，展示角色在不同镜头任务中的表现。每组都能直接看视频，也能查看定帧、造型、场景或脚本。",
        "en": "Five projects explore digital characters through fashion transitions, lifestyle editing, a product demo, a portrait film and a two-character scene. Each pairs video with the assets behind it."
      },
      "deliverables": {
        "zh": "五个案例、八段视频，附角色母版、服装与场景素材、剪辑记录及《退婚书》完整分镜脚本。",
        "en": "Five cases and eight videos, with character sheets, wardrobe and scene assets, an edit timeline and the complete storyboard script for The Broken Engagement."
      },
      "brief": {
        "zh": "服装镜头要让造型和动作看得清楚，广告镜头要交代产品如何使用，双人剧情则依靠站位、视线和停顿推动对白。",
        "en": "Fashion shots make garments and movement readable, product shots explain use, and dialogue scenes depend on blocking, eyelines and pauses."
      },
      "process": {
        "zh": "每章先放成片，再整理这段视频用到的参考与定帧。服装案例保留空场景与合成的对应关系，剧情案例保留时码和完整脚本，便于对照。",
        "en": "Each chapter presents the video first, followed by its references and stills. The wardrobe case pairs plates with composites, and the narrative case retains its timed script."
      },
      "galleryTitle": {
        "zh": "五个影像案例",
        "en": "Five Motion Studies"
      },
      "chapters": [
        {
          "id": "wardrobe",
          "title": {
            "zh": "女装模特",
            "en": "Womenswear Model"
          },
          "intro": {
            "zh": "三套换装转场与白色波点裙短片。重点是让模特在不同服装和空间中保持辨识度，并保留全身的造型和动作。",
            "en": "Three outfit transitions and a white polka-dot film explore recognizable identity across changing outfits and spaces."
          },
          "notes": [
            {
              "zh": "从正、侧、背三视图确定角色比例，再对照服装参考调整廓形和配饰。",
              "en": "Anchor proportions in front, side and back views, then match silhouettes and accessories to the references."
            },
            {
              "zh": "棕色短裙配水泥墙，米色上衣与白短裙配衣柜，碎花吊带裙配窗边光线。空场景和人物合成逐组对应。",
              "en": "Match the brown dress to concrete, the beige top and white skirt to the wardrobe, and the floral dress to the window. Each plate is shown with its composite."
            },
            {
              "zh": "两支成片分别看跨场景换装的节奏，以及单套服装在近景与全身镜头里的表现。",
              "en": "The two films show the rhythm of a multi-look transition and the movement of one look in closer and full-length shots."
            }
          ],
          "videos": [
            {
              "src": "./assets/projects/digital-motion/wardrobe.mp4",
              "poster": "./assets/projects/digital-motion/wardrobe-poster.webp",
              "title": {
                "zh": "三套造型 · 转场变装",
                "en": "Three Looks · Outfit Transitions"
              },
              "duration": "00:09"
            },
            {
              "src": "./assets/projects/digital-motion/white-dots.mp4",
              "poster": "./assets/projects/digital-motion/white-dots-poster.webp",
              "title": {
                "zh": "白色斑点 · 单套穿搭",
                "en": "White Dots · Single Look"
              },
              "duration": "00:11"
            }
          ],
          "groups": [
            {
              "title": {
                "zh": "角色三视图",
                "en": "Character Turnaround"
              },
              "items": [
                {
                  "src": "./assets/projects/digital-motion/wardrobe-master.webp",
                  "caption": {
                    "zh": "正面、侧面、背面",
                    "en": "Front, side and back"
                  }
                }
              ]
            },
            {
              "title": {
                "zh": "三套服装参考",
                "en": "Wardrobe References"
              },
              "items": [
                {
                  "src": "./assets/projects/wardrobe-refined/reference-01-hd.webp",
                  "caption": {
                    "zh": "棕色露肩短裙与长靴",
                    "en": "Brown dress and tall boots"
                  }
                },
                {
                  "src": "./assets/projects/wardrobe-refined/reference-02-hd.webp",
                  "caption": {
                    "zh": "米色露肩上衣与白短裙",
                    "en": "Beige top and white skirt"
                  }
                },
                {
                  "src": "./assets/projects/wardrobe-refined/reference-03-hd.webp",
                  "caption": {
                    "zh": "碎花吊带裙与绑带凉鞋",
                    "en": "Floral dress and lace-up sandals"
                  }
                }
              ]
            },
            {
              "title": {
                "zh": "水泥墙与玻璃门",
                "en": "Concrete & Glass"
              },
              "items": [
                {
                  "src": "./assets/projects/digital-motion/wardrobe-scene-1.webp",
                  "caption": {
                    "zh": "空场景",
                    "en": "Scene plate"
                  }
                },
                {
                  "src": "./assets/projects/digital-motion/wardrobe-look-1.webp",
                  "caption": {
                    "zh": "人物与场景融合",
                    "en": "Character composite"
                  }
                }
              ]
            },
            {
              "title": {
                "zh": "衣柜与沙发",
                "en": "Wardrobe & Sofa"
              },
              "items": [
                {
                  "src": "./assets/projects/digital-motion/wardrobe-scene-2.webp",
                  "caption": {
                    "zh": "空场景",
                    "en": "Scene plate"
                  }
                },
                {
                  "src": "./assets/projects/digital-motion/wardrobe-look-2.webp",
                  "caption": {
                    "zh": "人物与场景融合",
                    "en": "Character composite"
                  }
                }
              ]
            },
            {
              "title": {
                "zh": "窗帘与木地板",
                "en": "Curtains & Wood Floor"
              },
              "items": [
                {
                  "src": "./assets/projects/digital-motion/wardrobe-scene-3.webp",
                  "caption": {
                    "zh": "空场景",
                    "en": "Scene plate"
                  }
                },
                {
                  "src": "./assets/projects/digital-motion/wardrobe-look-3.webp",
                  "caption": {
                    "zh": "人物与场景融合",
                    "en": "Character composite"
                  }
                }
              ]
            },
            {
              "title": {
                "zh": "白色斑点 · 场景与服装",
                "en": "White Dots · Set & Styling"
              },
              "items": [
                {
                  "src": "./assets/projects/digital-model-v2/scene-empty.webp",
                  "caption": {
                    "zh": "拱形壁龛与白色座椅",
                    "en": "Arched alcove and white chair"
                  }
                },
                {
                  "src": "./assets/projects/wardrobe-refined/white-dots-clean.webp",
                  "caption": {
                    "zh": "波点裙与配饰",
                    "en": "Polka-dot dress and accessories"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "vlog",
          "title": {
            "zh": "Vlog · 生活片段",
            "en": "Lifestyle Vlog"
          },
          "intro": {
            "zh": "用自拍、走路、窗边办公和尝甜点等片段，剪成一支 25 秒的生活短片。",
            "en": "Selfies, walking, work by the window and dessert shots form a 25-second lifestyle edit."
          },
          "notes": [
            {
              "zh": "开场把不同景别拼在一起，先交代人物和日常场景。",
              "en": "A collage of shot sizes introduces the character and settings in the opening."
            },
            {
              "zh": "自拍与第一人称镜头交替出现，咖啡馆和街边片段用于切换空间。",
              "en": "Selfies alternate with first-person views. Café and street shots mark changes of place."
            },
            {
              "zh": "保留角色参考、四套造型静帧和剪辑时间线，可以对照看造型如何进入成片。",
              "en": "The character reference, four outfit stills and the edit timeline show how the visual material enters the cut."
            }
          ],
          "videos": [
            {
              "src": "./assets/projects/digital-motion/vlog.mp4",
              "poster": "./assets/projects/digital-motion/vlog-poster.webp",
              "title": {
                "zh": "Vlog · 完整成片",
                "en": "Lifestyle Vlog · Full Edit"
              },
              "duration": "00:25"
            }
          ],
          "groups": [
            {
              "title": {
                "zh": "角色与剪辑时间线",
                "en": "Character & Edit Timeline"
              },
              "items": [
                {
                  "src": "./assets/projects/digital-motion/vlog-identity.webp",
                  "caption": {
                    "zh": "咪卡 · 多角度与表情参考",
                    "en": "Mika · Angles and expressions"
                  }
                },
                {
                  "src": "./assets/projects/wardrobe-refined/vlog-editing.webp",
                  "caption": {
                    "zh": "剪辑工程 · 视频、叠层与音轨",
                    "en": "Edit timeline · Clips, overlays and audio"
                  }
                }
              ]
            },
            {
              "title": {
                "zh": "四套造型静帧",
                "en": "Four Wardrobe Stills"
              },
              "items": [
                {
                  "src": "./assets/projects/digital-motion/vlog-style-1.webp",
                  "caption": {
                    "zh": "棕色背心与粉色短裙",
                    "en": "Brown top and pink skirt"
                  }
                },
                {
                  "src": "./assets/projects/digital-motion/vlog-style-2.webp",
                  "caption": {
                    "zh": "米白吊带长裙",
                    "en": "Ivory slip dress"
                  }
                },
                {
                  "src": "./assets/projects/digital-motion/vlog-style-3.webp",
                  "caption": {
                    "zh": "棕色上衣与灰绿长裙",
                    "en": "Brown top and sage skirt"
                  }
                },
                {
                  "src": "./assets/projects/digital-motion/vlog-style-4.webp",
                  "caption": {
                    "zh": "灰蓝开衫与米色短裤",
                    "en": "Blue-gray cardigan and beige shorts"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "toothbrush",
          "title": {
            "zh": "电动牙刷广告",
            "en": "Electric Toothbrush Ad"
          },
          "intro": {
            "zh": "把产品介绍拆成三段竖屏镜头，从人物手持开场到实际刷牙，再切到水龙头下的刷头特写。",
            "en": "Three vertical clips introduce the brush on camera, show it in use and end with a close-up of the head under running water."
          },
          "notes": [
            {
              "zh": "人物手持牙刷面对镜头，先建立产品和使用者的关系。",
              "en": "A presenter introduces the product directly to camera."
            },
            {
              "zh": "侧脸近景交代手部与刷头的动作，冲洗段把注意力集中到刷头和水流。",
              "en": "A side close-up shows the hand and brush movement, followed by a focused rinse shot."
            },
            {
              "zh": "制作素材包括人物角度、牙刷参考、浴室环境和服装参考。",
              "en": "Production assets include character angles, brush references, the bathroom set and wardrobe."
            }
          ],
          "videos": [
            {
              "src": "./assets/projects/digital-motion/toothbrush-1.mp4",
              "poster": "./assets/projects/digital-motion/toothbrush-1-poster.webp",
              "title": {
                "zh": "手持牙刷 · 开场",
                "en": "Hold the Brush · Opening"
              },
              "duration": "00:05"
            },
            {
              "src": "./assets/projects/digital-motion/toothbrush-2.mp4",
              "poster": "./assets/projects/digital-motion/toothbrush-2-poster.webp",
              "title": {
                "zh": "侧面刷牙 · 使用演示",
                "en": "Side View · Brushing Demo"
              },
              "duration": "00:08"
            },
            {
              "src": "./assets/projects/digital-motion/toothbrush-3.mp4",
              "poster": "./assets/projects/digital-motion/toothbrush-3-poster.webp",
              "title": {
                "zh": "水流下冲洗刷头",
                "en": "Rinsing the Brush Head"
              },
              "duration": "00:08"
            }
          ],
          "groups": [
            {
              "title": {
                "zh": "人物参考",
                "en": "Character References"
              },
              "items": [
                {
                  "src": "./assets/projects/digital-motion/toothbrush-still-1.webp",
                  "caption": {
                    "zh": "面部多角度",
                    "en": "Face angles"
                  }
                },
                {
                  "src": "./assets/projects/digital-motion/toothbrush-still-2.webp",
                  "caption": {
                    "zh": "全身比例与服装",
                    "en": "Full-body proportions and wardrobe"
                  }
                }
              ]
            },
            {
              "title": {
                "zh": "产品、服装与浴室场景",
                "en": "Product, Wardrobe & Set"
              },
              "items": [
                {
                  "src": "./assets/projects/digital-motion/toothbrush-ref-4.webp",
                  "caption": {
                    "zh": "黄色牙刷参考",
                    "en": "Yellow brush reference"
                  }
                },
                {
                  "src": "./assets/projects/digital-motion/toothbrush-ref-8.webp",
                  "caption": {
                    "zh": "白色牙刷参考",
                    "en": "White brush reference"
                  }
                },
                {
                  "src": "./assets/projects/digital-motion/toothbrush-ref-5.webp",
                  "caption": {
                    "zh": "浴室空场景",
                    "en": "Bathroom set"
                  }
                },
                {
                  "src": "./assets/projects/digital-motion/toothbrush-ref-6.webp",
                  "caption": {
                    "zh": "浅色居家服参考",
                    "en": "Light loungewear reference"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "sweet",
          "title": {
            "zh": "甜欲模特",
            "en": "Sweet-Styled Model"
          },
          "intro": {
            "zh": "一支约 14 秒的人像与穿搭短片，配合角色母版、三视图、面部角度和表情资产呈现。",
            "en": "A 14-second portrait and styling film, presented with its character master, turnaround, face angles and expressions."
          },
          "notes": [
            {
              "zh": "用母版归纳发型、脸部特征、服装材质和色调。",
              "en": "The master sheet records hairstyle, features, fabric and color."
            },
            {
              "zh": "三视图用于核对全身比例，面部四视图和表情矩阵用于检查转头与神态。",
              "en": "The turnaround checks proportions, while face angles and expression studies guide turns and expressions."
            },
            {
              "zh": "成片放回室内场景，观察站姿、动作和裙摆的变化。",
              "en": "The film returns the character to an interior setting to show pose, movement and the skirt in motion."
            }
          ],
          "videos": [
            {
              "src": "./assets/projects/digital-motion/sweet.mp4",
              "poster": "./assets/projects/digital-motion/sweet-poster.webp",
              "title": {
                "zh": "甜欲模特 · 人像成片",
                "en": "Sweet-Styled Model · Portrait Film"
              },
              "duration": "00:14"
            }
          ],
          "groups": [
            {
              "title": {
                "zh": "角色母版与三视图",
                "en": "Character Master & Turnaround"
              },
              "items": [
                {
                  "src": "./assets/projects/digital-motion/sweet-master.webp",
                  "caption": {
                    "zh": "人物、造型与色彩母版",
                    "en": "Character, outfit and color master"
                  }
                },
                {
                  "src": "./assets/projects/digital-motion/sweet-turnaround.webp",
                  "caption": {
                    "zh": "正面、侧面、背面",
                    "en": "Front, side and back"
                  }
                }
              ]
            },
            {
              "title": {
                "zh": "面部角度与表情",
                "en": "Face Angles & Expressions"
              },
              "items": [
                {
                  "src": "./assets/projects/digital-motion/sweet-face.webp",
                  "caption": {
                    "zh": "面部四视图",
                    "en": "Four face views"
                  }
                },
                {
                  "src": "./assets/projects/digital-motion/sweet-expression.webp",
                  "caption": {
                    "zh": "六组表情参考",
                    "en": "Six expressions"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "drama",
          "title": {
            "zh": "退婚书",
            "en": "The Broken Engagement"
          },
          "intro": {
            "zh": "一场发生在雨夜庭院的双人对话。30 秒内从质问、解释推进到女主收起退婚书并决定同行。",
            "en": "A 30-second dialogue in a rain-soaked courtyard moves from confrontation to the heroine putting the letter away and deciding to go with him."
          },
          "notes": [
            {
              "zh": "用女左男右的站位维持人物轴线，过肩镜头和近景跟随对白的情绪变化。",
              "en": "Consistent left–right blocking anchors the eyeline. Over-the-shoulder shots and close-ups follow the dialogue."
            },
            {
              "zh": "退婚书由抬起、递近、放低到折起入袖，动作贯穿对白。",
              "en": "The letter is raised, offered, lowered, folded and tucked away across the dialogue."
            },
            {
              "zh": "完整脚本记录七个镜头的时码、景别、机位、动作和台词。",
              "en": "The full script records timecodes, framing, camera position, actions and dialogue for seven shots."
            }
          ],
          "videos": [
            {
              "src": "./assets/projects/digital-motion/drama.mp4",
              "poster": "./assets/projects/digital-motion/drama-poster.webp",
              "title": {
                "zh": "《退婚书》· 完整成片",
                "en": "The Broken Engagement · Full Film"
              },
              "duration": "00:30"
            }
          ],
          "script": "场景：深夜古宅庭院，细雨。\r\n\r\n站位统一：女左男右，保持人物轴线一致。退婚书始终由女主右手持有，最后收进左侧衣袖。原对白不变，保留关键停顿，缩短无声反应。\r\n镜头1｜00:00—00:01（1秒）\r\n景别： 双人中景\r\n机位： 正面略偏侧，平视，固定。\r\n\r\n动作： 女主先动，右手将退婚书从腰前抬至胸前，抬头看向男主。男主目光落在退婚书上，不敢与她对视。\r\n\r\n双手与道具：\r\n- 女主左手自然垂落；右手持退婚书由腰前抬至胸前。\r\n- 男主双手自然垂落，右手手指微微收紧。\r\n- 退婚书保持展开。\r\n对白： 无。\r\n镜头2｜00:01—00:06（5秒）\r\n景别： 女主胸部近景\r\n机位： 男主肩后过肩镜头，平视，轻微前推。\r\n\r\n动作： 女主先动，右手将退婚书向男主递近，直视他的眼睛，压着怒意质问。\r\n\r\n女主：“这退婚书是你亲笔写的，你当真不要我了？”\r\n\r\n停顿：“亲笔写的”后短停约0.2秒。\r\n\r\n听者眼神： 男主先看退婚书，随后避开女主视线，低头不语。\r\n\r\n双手与道具：\r\n- 女主左手垂落；右手从胸前向前伸出半臂，退婚书朝向男主。\r\n- 男主左手不动；右手由微握到松开。\r\n- 退婚书始终在女主右手。\r\n镜头3｜00:06—00:12（6秒）\r\n景别： 男主胸部近景\r\n机位： 女主肩后过肩镜头，平视，固定。\r\n\r\n动作： 男主先动，垂眼吸气后开口。右手微微抬起，想碰退婚书，却又放下。\r\n\r\n男主：“朝中有人要治我的罪，你嫁给我，只会跟着受牵连。”\r\n\r\n停顿：“治我的罪”后短停约0.2秒。\r\n\r\n听者眼神： 女主始终看着男主，听到“受牵连”时眉头微蹙。\r\n\r\n双手与道具：\r\n- 男主左手在袖内轻握；右手由身侧抬至腰前，再放下。\r\n- 女主左手不动；右手将退婚书从前方收回胸前。\r\n- 退婚书仍展开。\r\n镜头4｜00:12—00:17（5秒）\r\n景别： 双人中近景\r\n机位： 侧前方平视，镜头轻微向女主推进。\r\n\r\n动作： 女主先动，向男主逼近半步，右手持退婚书降至腰侧，语气从愤怒转为失望。\r\n\r\n女主：“所以你连问都不问，就替我定了往后的日子？”\r\n\r\n停顿：“连问都不问”后短停约0.2秒。\r\n\r\n听者眼神： 男主短暂与女主对视，随后垂眼看向退婚书。\r\n\r\n双手与道具：\r\n- 女主左手抬至腰前，掌心微张；右手将退婚书由胸前降至右侧腰部。\r\n- 男主左手缓缓松拳；右手垂于身侧。\r\n- 退婚书保持展开，不换手。\r\n镜头5｜00:17—00:23（6秒）\r\n景别： 男主面部近景，逐渐拉至胸部近景\r\n机位： 女主肩后，平视，缓慢后拉。\r\n\r\n动作： 男主先动，短暂抬眼看女主，随后右手握拳，说出决定。最后一句时重新垂眼。\r\n\r\n男主：“明日我便独自进京申冤，这婚约，就此作罢吧。”\r\n\r\n停顿：“这婚约”后短停约0.3秒。\r\n\r\n听者眼神： 女主听到“作罢”时，目光从男主脸上落到退婚书，随后神情逐渐坚定。\r\n\r\n双手与道具：\r\n- 男主左手垂落；右手由自然垂落到握拳，句末松开。\r\n- 女主左手从腰前放下；右手将退婚书从腰侧移至腹前。\r\n- 退婚书保持展开。\r\n镜头6｜00:23—00:29（6秒）\r\n景别： 女主中近景，缓慢拉至双人中景\r\n机位： 男主肩后过肩镜头，平视，轻微后拉。\r\n\r\n动作： 女主先动，低头看退婚书。左手扶住纸张，双手迅速将其对折，左手将退婚书收进左侧衣袖。随后抬头，坚定地向男主靠近半步。\r\n\r\n女主：“这次换我做主，明日我陪你进京，你的清白，我们一起讨回来。”\r\n\r\n停顿：“做主”后、“进京”后各短停约0.2秒。\r\n\r\n听者眼神： 男主先看她收起退婚书，听到“陪你进京”时抬眼，惊讶地望着女主，最后目光变得柔和。\r\n\r\n双手与道具：\r\n- 女主左手由身侧抬起扶住纸张，接过折好的退婚书，收入左侧衣袖后垂落。\r\n- 女主右手由腹前持书，配合折叠，松手后自然垂落。\r\n- 男主左手不动；右手微抬至腰侧，似想伸向女主。\r\n- 退婚书从展开到对折，最终完全收入左侧衣袖。\r\n镜头7｜00:29—00:30（1秒）\r\n景别： 双人中景\r\n机位： 正面略偏侧，平视，固定。\r\n\r\n动作： 男主先动，终于正视女主，右手慢慢放下。女主站定，平静而坚定地看着他。\r\n\r\n听者眼神： 两人对视，男主眼神动容，女主目光坚定。\r\n\r\n双手与道具：\r\n- 女主双手自然垂落。\r\n- 男主左手垂落；右手从腰侧放回身侧。\r\n- 退婚书保持收在女主左袖内，不再出现。",
          "groups": [
            {
              "title": {
                "zh": "双人角色与服装",
                "en": "Characters & Costumes"
              },
              "items": [
                {
                  "src": "./assets/projects/digital-motion/drama-still-1.webp",
                  "caption": {
                    "zh": "女主 · 面部角度",
                    "en": "Heroine · Face angles"
                  }
                },
                {
                  "src": "./assets/projects/digital-motion/drama-still-2.webp",
                  "caption": {
                    "zh": "女主 · 古装造型",
                    "en": "Heroine · Costume"
                  }
                },
                {
                  "src": "./assets/projects/digital-motion/drama-still-3.webp",
                  "caption": {
                    "zh": "男主 · 面部角度",
                    "en": "Hero · Face angles"
                  }
                },
                {
                  "src": "./assets/projects/digital-motion/drama-still-4.webp",
                  "caption": {
                    "zh": "男主 · 古装造型",
                    "en": "Hero · Costume"
                  }
                }
              ]
            },
            {
              "title": {
                "zh": "雨夜庭院与关键道具",
                "en": "Rainy Courtyard & Key Prop"
              },
              "items": [
                {
                  "src": "./assets/projects/digital-motion/drama-still-5.webp",
                  "caption": {
                    "zh": "庭院背景 · 廊檐与灯光",
                    "en": "Courtyard · Eaves and lanterns"
                  }
                },
                {
                  "src": "./assets/projects/digital-motion/drama-still-6.webp",
                  "caption": {
                    "zh": "庭院背景 · 正门与雨地",
                    "en": "Courtyard · Entrance and wet stone"
                  }
                },
                {
                  "src": "./assets/projects/digital-motion/drama-still-7.webp",
                  "caption": {
                    "zh": "退婚书 · 道具设定",
                    "en": "The letter · Prop design"
                  }
                }
              ]
            },
            {
              "title": {
                "zh": "双人表情参考",
                "en": "Expression Studies"
              },
              "items": [
                {
                  "src": "./assets/projects/digital-motion/drama-still-8.webp",
                  "caption": {
                    "zh": "女主 · 表情矩阵",
                    "en": "Heroine · Expression sheet"
                  }
                },
                {
                  "src": "./assets/projects/digital-motion/drama-still-9.webp",
                  "caption": {
                    "zh": "男主 · 表情矩阵",
                    "en": "Hero · Expression sheet"
                  }
                }
              ]
            }
          ]
        }
      ],
      "heroImages": [
        {
          "src": "./assets/projects/digital-motion/wardrobe-look-1.webp",
          "alt": {
            "zh": "女装换装 · 水泥墙定帧",
            "en": "Womenswear at the concrete wall"
          }
        },
        {
          "src": "./assets/projects/digital-motion/wardrobe-look-2.webp",
          "alt": {
            "zh": "女装换装 · 衣柜前定帧",
            "en": "Womenswear at the wardrobe"
          }
        },
        {
          "src": "./assets/projects/digital-motion/wardrobe-look-3.webp",
          "alt": {
            "zh": "女装换装 · 窗边定帧",
            "en": "Womenswear by the window"
          }
        }
      ],
      "cover": "./assets/projects/digital-motion/wardrobe-look-1.webp",
      "coverAlt": {
        "zh": "女装换装 · 水泥墙定帧",
        "en": "Womenswear at the concrete wall"
      },
      "previewImages": [
        "./assets/projects/digital-motion/wardrobe-look-1.webp",
        "./assets/projects/digital-motion/wardrobe-look-2.webp",
        "./assets/projects/digital-motion/wardrobe-look-3.webp"
      ],
      "previewAlts": [
        {
          "zh": "女装换装 · 水泥墙定帧",
          "en": "Womenswear at the concrete wall"
        },
        {
          "zh": "女装换装 · 衣柜前定帧",
          "en": "Womenswear at the wardrobe"
        },
        {
          "zh": "女装换装 · 窗边定帧",
          "en": "Womenswear by the window"
        }
      ]
    },
    {
      slug: 'fruit-drama',
      number: '03',
      cover: './assets/fruit-drama/06.webp',
      coverAlt: { zh: '果然有戏三款冻干水果包装', en: 'Fruit Drama freeze-dried fruit packaging' },
      category: { zh: '品牌视觉 · 包装 · 内容', en: 'Brand identity · Packaging · Content' },
      title: { zh: '果然有戏', en: 'Fruit Drama' },
      tagline: { zh: '让三种口味，长成一个有性格的品牌。', en: 'Three flavours, one unmistakable brand personality.' },
      summary: { zh: '围绕冻干水果，建立从角色、包装到传播画面的视觉系统。', en: 'A visual system for freeze-dried fruit, extending from characters and packaging to campaign imagery.' },
      brief: { zh: '冻干水果的货架竞争很拥挤。这个项目用鲜明的角色与口味识别，让每款产品都能独立被记住，也能在同一品牌下并排成立。', en: 'A crowded snack shelf calls for instant recognition. Distinct characters and flavour cues give each product its own presence while keeping the range coherent.' },
      process: { zh: '从品牌语气与标志出发，为草莓、芒果、菠萝分别建立包装主画面，再延展到产品摄影、主海报与社交传播素材。', en: 'The work moves from brand voice and logo to strawberry, mango and pineapple packs, then into product imagery, a campaign poster and social assets.' },
      deliverables: { zh: '品牌策划、标志、三款包装、角色设定、产品画面、周边物料与传播分镜。', en: 'Brand direction, logo, three packs, character designs, product imagery, collateral and campaign storyboards.' },
      galleryTitle: { zh: '完整视觉系统', en: 'The Complete Visual System' },
      galleryGroups: [
        {
          title: { zh: '品牌基础', en: 'Brand Foundation' },
          intro: { zh: '从品牌定位到选定标志，建立三款产品共享的视觉语言。', en: 'Brand direction and the chosen mark establish a shared visual language for all three products.' },
          items: [
            ['01.webp', '品牌视觉方向', 'Brand direction', 'wide'],
            ['02.webp', '选定标志', 'Chosen identity mark', 'wide']
          ]
        },
        {
          title: { zh: '包装与产品画面', en: 'Packaging & Product Imagery' },
          intro: { zh: '三种口味分别拥有自己的主画面，并延展到合影、产品摄影、海报与周边。', en: 'Each flavour has its own pack visual, extended into a group shot, product imagery, campaign poster and collateral.' },
          items: [
            ['03.webp', '草莓包装', 'Strawberry pack', 'third'],
            ['04.webp', '芒果包装', 'Mango pack', 'third'],
            ['05.webp', '菠萝包装', 'Pineapple pack', 'third'],
            ['06.webp', '三款产品合影', 'Three-product group shot', 'wide'],
            ['07.webp', '分享场景俯拍', 'Sharing scene', 'portrait'],
            ['08.webp', '商品质感摄影', 'Product texture image', 'wide'],
            ['09.webp', '品牌主海报', 'Campaign poster', 'portrait'],
            ['10.webp', '周边物料', 'Brand collateral', 'portrait']
          ]
        },
        {
          title: { zh: '角色与内容分镜', en: 'Characters & Storyboards' },
          intro: { zh: '三位角色与三组分镜，让品牌从包装走向可以持续使用的内容形象。', en: 'Three characters and three storyboards carry the identity beyond packaging into repeatable content.' },
          items: [
            ['12.webp', '丸子女生角色', 'Bun-haired character', 'third'],
            ['13.webp', '男生角色', 'Male character', 'third'],
            ['14.webp', '长发女生角色', 'Long-haired character', 'third'],
            ['15.webp', '分享篇分镜', 'Sharing storyboard', 'wide'],
            ['16.webp', '呵护篇分镜', 'Care storyboard', 'wide'],
            ['17.webp', '成长篇分镜', 'Growth storyboard', 'wide']
          ]
        },
        {
          title: { zh: '完整项目展板', en: 'Complete Project Board' },
          intro: { zh: '将品牌方向、包装与传播画面汇总为一张完整展板。', en: 'The brand direction, packaging and campaign imagery gathered in one full presentation board.' },
          items: [['11.webp', '完整展示长图', 'Full project board', 'feature']]
        }
      ].map((group) => ({ ...group, items: group.items.map(([file, zh, en, layout]) => ({ src: `./assets/fruit-drama/${file}`, caption: { zh, en }, layout })) }))
    },
    {
      slug: 'trace',
      number: '04',
      cover: './assets/projects/trace/cover.webp',
      coverAlt: { zh: 'TRACE 02:17 香氛品牌主视觉', en: 'TRACE 02:17 fragrance campaign visual' },
      category: { zh: '概念品牌 · 产品视觉 · 动效策划', en: 'Concept brand · Product visual · Motion plan' },
      title: { zh: 'TRACE 02:17', en: 'TRACE 02:17' },
      tagline: { zh: '把记忆里的雨夜，做成一款香氛。', en: 'A rain-soaked memory, translated into fragrance.' },
      summary: { zh: '一套概念香氛提案：瓶身、主视觉、包装与 15 秒短片分镜。', en: 'A conceptual fragrance proposal spanning bottle, campaign, packaging and a 15-second film storyboard.' },
      brief: { zh: '以“某些瞬间比时间停留得更久”为线索，让猫首瓶盖、厚玻璃与冷银光线成为可识别的视觉记忆。此项目为概念提案。', en: 'Built around the idea that some moments outlast time, the cat-head cap, thick glass and cold-silver light form a distinct visual memory. This is a concept proposal.' },
      process: { zh: '先定义瓶身与材质，再统一横竖版主视觉、包装系统和应用场景；最后以四个关键镜头规划一支 15 秒品牌短片。', en: 'Bottle form and material come first, followed by campaign visuals, packaging and applications. Four key shots then shape a 15-second film plan.' },
      deliverables: { zh: '产品设定、主视觉、包装系统、传播场景与短片分镜方案。', en: 'Product design direction, key visuals, packaging, campaign applications and motion storyboard.' },
      galleryTitle: { zh: '瓶身、视觉与短片分镜', en: 'Bottle, Visuals & Motion' },
      galleryGroups: [
        {
          title: { zh: '包装系统', en: 'Packaging System' },
          intro: { zh: '保留现有白色包装主画面，同时展示深色方案与包装细节。', en: 'The existing white packaging visual sits alongside the dark option and packaging details.' },
          items: [
            ['packaging.webp', '白色包装系统', 'White packaging system', 'wide'],
            ['packaging-white-box.webp', '白色礼盒视图', 'White box views', 'portrait'],
            ['packaging-white-ribbon.webp', '白色缎带礼盒', 'White ribbon gift box', 'portrait'],
            ['packaging-dark-system.webp', '深色包装系统', 'Dark packaging system', 'wide'],
            ['packaging-box-views.webp', '深色礼盒视图', 'Dark box views', 'portrait'],
            ['packaging-bag-tag.webp', '手提袋与吊牌', 'Bag and tag details', 'portrait']
          ]
        },
        {
          title: { zh: '瓶身设定', en: 'Bottle Design' },
          intro: { zh: '从正面定版延伸到多视角瓶身与猫首瓶盖的结构观察。', en: 'The front packshot expands into multiple bottle views and a closer study of the cat-head cap.' },
          items: [
            ['bottle.webp', '瓶身正面定版', 'Front bottle packshot', 'portrait'],
            ['bottle-three-quarter.webp', '瓶身三分之四视角', 'Three-quarter bottle view', 'portrait'],
            ['bottle-six-view.webp', '瓶身六视角', 'Six bottle views', 'wide'],
            ['cap-three-view.webp', '猫首瓶盖三视角', 'Three cap views', 'wide']
          ]
        },
        {
          title: { zh: '主视觉与材质', en: 'Key Visual & Materials' },
          intro: { zh: '现有项目总览之后，展开竖版主视觉和喷头、瓶盖、玻璃底座的细节。', en: 'The existing project overview leads into the portrait key visual and material details of the atomizer, cap and glass base.' },
          items: [
            ['portfolio.webp', '项目视觉总览', 'Project overview', 'portrait'],
            ['kv-portrait.webp', '竖版主视觉', 'Portrait key visual', 'portrait'],
            ['macro-cat-head.webp', '猫首瓶盖细节', 'Cat-head cap detail', 'portrait'],
            ['macro-glass-base.webp', '玻璃底座细节', 'Glass base detail', 'portrait'],
            ['macro-atomizer.webp', '喷头细节', 'Atomizer detail', 'portrait']
          ]
        },
        {
          title: { zh: '传播场景', en: 'Campaign Scenes' },
          intro: { zh: '同一瓶身进入夜间室内、雨幕与城市街景，延展项目氛围。', en: 'The same bottle moves through a night interior, rain and wet city setting.' },
          items: [
            ['campaign-hotel.webp', '夜间室内场景', 'Night interior scene', 'wide'],
            ['campaign-rain-bathroom.webp', '雨幕场景', 'Rain scene', 'portrait'],
            ['campaign-wet-city.webp', '湿润城市街景', 'Wet city scene', 'portrait']
          ]
        },
        {
          title: { zh: '15 秒短片分镜', en: '15-second Film Plan' },
          intro: { zh: '保留现有完整分镜，并补充四个关键画面，呈现镜头推进方式。', en: 'The existing storyboard is followed by four key frames showing the planned shot progression.' },
          items: [
            ['storyboard.webp', '15 秒短片分镜', '15-second film storyboard', 'wide'],
            ['motion-kf01.webp', '镜头一：猫首揭示', 'Frame 01: Cap reveal', 'half-wide'],
            ['motion-kf02.webp', '镜头二：玻璃与水滴', 'Frame 02: Glass and water', 'half-wide'],
            ['motion-kf03.webp', '镜头三：喷头细节', 'Frame 03: Atomizer detail', 'half-wide'],
            ['motion-kf04.webp', '镜头四：产品定格', 'Frame 04: Final packshot', 'half-wide']
          ]
        }
      ].map((group) => ({ ...group, items: group.items.map(([file, zh, en, layout]) => ({ src: `./assets/projects/trace/${file}`, caption: { zh, en }, layout })) }))
    },


  ]
};
