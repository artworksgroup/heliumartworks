<template>
    <div class="header">
        <h3>Médias</h3>
        <form action="#">
            <label for="add-new-media">Ajouter des média
                <input type="file" name="add-new-media" id="add-new-media">
                <img class="icon" src="../../assets/images/gallery-add.svg" alt="">
            </label>
        </form>
    </div>
    <div ref="b" class="tabs">
        <div role="tablist" aria-labelledby="tablist-1" class="manual">
            <button id="tab-1" type="button" role="tab" aria-selected="true" aria-controls="tabpanel-1" @click="onClick" @keydown="onKeydown">
                <span class="focus">Mes médias</span>
            </button>
            <button id="tab-2" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-2" tabindex="-1" @click="onClick" @keydown="onKeydown">
                <span class="focus">Mes collections</span>
            </button>
            <button id="tab-3" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-3" tabindex="-1" @click="onClick" @keydown="onKeydown">
                <span class="focus">Medias en attente</span>
            </button>
            <button id="tab-4" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-4" tabindex="-1" @click="onClick" @keydown="onKeydown">
                <span class="focus">Brouillons</span>
            </button>
        </div>
        <div class="media-filter">
            <button>Tous les médias</button>
            <button>Plus récents</button>
        </div>
        <div id="tabpanel-1" class="my-medias-panel" role="tabpanel" aria-labelledby="tab-1">
            <ul>
                <li><img src="../../assets/images/image5.jpg" alt=""></li>
                <li><img src="../../assets/images/image6.jpg" alt=""></li>
                <li><img src="../../assets/images/image7.jpg" alt=""></li>
                <li><img src="../../assets/images/image8.jpg" alt=""></li>
                <li><img src="../../assets/images/image9.jpg" alt=""></li>
                <li><img src="../../assets/images/image10.jpg" alt=""></li>
                <li><img src="../../assets/images/image11.jpg" alt=""></li>
                <li><img src="../../assets/images/image12.jpg" alt=""></li>
                <li><img src="../../assets/images/image13.jpg" alt=""></li>
                <li><img src="../../assets/images/image14.jpg" alt=""></li>
                <li><img src="../../assets/images/image15.jpg" alt=""></li>
                <li><img src="../../assets/images/image16.jpg" alt=""></li>
            </ul>
        </div>
        <div id="tabpanel-2" class="collections-panel is-hidden" role="tabpanel" aria-labelledby="tab-2">
            <ul>
                <li class="card1"><span class="card-title">Animaux</span><span class="card-value">29</span></li>
                <li class="card2"><span class="card-title">Nature</span><span class="card-value">57</span></li>
                <li class="card3"><span class="card-title">Mode</span><span class="card-value">40</span></li>
            </ul>
        </div>
        <div id="tabpanel-3" role="tabpanel" aria-labelledby="tab-3" class="is-hidden">
            <ul>
                <li><img src="../../assets/images/image5.jpg" alt=""></li>
                <li><img src="../../assets/images/image6.jpg" alt=""></li>
                <li><img src="../../assets/images/image9.jpg" alt=""></li>
                <li><img src="../../assets/images/image11.jpg" alt=""></li>
                <li><img src="../../assets/images/image12.jpg" alt=""></li>
                <li><img src="../../assets/images/image14.jpg" alt=""></li>
                <li><img src="../../assets/images/image15.jpg" alt=""></li>
                <li><img src="../../assets/images/image16.jpg" alt=""></li>
            </ul>
        </div>
        <div id="tabpanel-4" class="is-hidden draft-panel" role="tabpanel" aria-labelledby="tab-4">
            <ul>
                <li>
                    <img src="../../assets/images/image6.jpg" alt="">
                    <div class="card-footer">
                        <div class="meter-container">
                            <div role="meter" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" aria-labelledby="cpu_usage_label">
                                <svg width="100" height="100" class="fill" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0" y="0" width="100%" height="100%" fill="currentcolor"></rect>
                                </svg>
                            </div>
                            <span class="progress-per">42%</span>
                        </div>
                        <img src="../../assets/images/edit-2.svg" alt="">
                    </div>
                </li>
                <li><img src="../../assets/images/image7.jpg" alt=""></li>
                <li><img src="../../assets/images/image8.jpg" alt=""></li>
                <li><img src="../../assets/images/image9.jpg" alt=""></li>
                <li><img src="../../assets/images/image11.jpg" alt=""></li>
                <li><img src="../../assets/images/image12.jpg" alt=""></li>
                <li><img src="../../assets/images/image13.jpg" alt=""></li>
                <li><img src="../../assets/images/image15.jpg" alt=""></li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
let tabs: NodeListOf<HTMLElement>, panels: NodeListOf<HTMLElement>;
    const b = ref<HTMLElement | null>(null);
    // console.log("before on mounted", b.value)
    
    onMounted(() => {
        // console.log("after on mounted", b.value);
        tabs = b.value?.querySelectorAll("[role=tab]") as NodeListOf<HTMLElement>;
            panels = b.value?.querySelectorAll("[role=tabpanel]") as NodeListOf<HTMLElement>;
            })
            
            function onClick(e: MouseEvent) {
                // console.log("click", b.value);
                const targetTab = e.currentTarget as HTMLElement;
                tabs.forEach((tabElement: HTMLElement, index: number) => {
                    if(tabElement === targetTab) {
                        console.log(true);
                        tabElement.setAttribute("aria-selected", "true");
                        tabElement.tabIndex = 1;
                        panels[index].classList.remove('is-hidden');
                    } else {
                        console.log(false);
                        tabElement.setAttribute("aria-selected", "false");
                        tabElement.tabIndex = -1;
                        panels[index].classList.add('is-hidden');
                    }
                })
            }
            
            function onKeydown(e: KeyboardEvent) {
                const tgt = e.currentTarget as HTMLElement;
                let flag = false;
                
                function moveFocusToNextTab(tab: HTMLElement) {
                    let index: number;
                    
                    if (tab === tabs[tabs.length - 1]) {
                        moveFocusToTab(tabs[0]);
                    } else {
                        index = Array.prototype.indexOf.call(null, tabs);
                        moveFocusToTab(tabs[index + 1]);
                    }
                }
                
                function moveFocusToPreviousTab(tab: HTMLElement) {
                    let index: number;
                    
                    if (tab === tabs[0]) {
                        moveFocusToTab(tabs[tabs.length - 1]);
                    } else {
                        index = Array.prototype.indexOf.call(null, tabs);
                        moveFocusToTab(tabs[index - 1]);
                    }
                }
                
                function moveFocusToTab(tab: HTMLElement) {
                    tab.focus()
                }
                
                switch (e.key) {
                    case 'ArrowLeft':
                    moveFocusToPreviousTab(tgt);
                    flag = true;
                    break;
                    
                    case 'ArrowRight':
                    moveFocusToNextTab(tgt);
                    flag = true;
                    break;
                    
                    case 'Home':
                    moveFocusToTab(tabs[0]);
                    flag = true;
                    break;
                    
                    case 'End':
                    moveFocusToTab(tabs[tabs.length - 1]);
                    flag = true;
                    break;
                    
                    default:
                    break;
                }
                
                if (flag) {
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
            class Meters {
                rootElement: HTMLElement;
                fillElement: HTMLElement;
                min!: number;
                max!: number;
                value!: number;
                
                constructor(rootElement: HTMLElement) {
                    this.rootElement = rootElement;
                    this.fillElement = this.rootElement.querySelector('.fill') as HTMLElement;
                    
                    var min = rootElement.getAttribute('aria-valuemin');
                    var max = rootElement.getAttribute('aria-valuemax');
                    var value = rootElement.getAttribute('aria-valuenow');
                    if(min && max && value) {
                        this._update(parseFloat(min), parseFloat(max), parseFloat(value));
                    }
                }
                
                _calculatePercentFill(min: number, max: number, value: number) {
                    if (
                    typeof min !== 'number' ||
                    typeof max !== 'number' ||
                    typeof value !== 'number'
                    ) {
                        return 0;
                    }
                    
                    return (100 * (value - min)) / (max - min);
                }
                
                _getColorValue(percent: number) {
                    // red is 0deg, green is 120deg in hsl
                    // if percent is 100, hue should be red, and if percent is 0, hue should be green
                    var hue = (percent / 100) * (0 - 120) + 120;
                    
                    return 'hsl(' + hue + ', 100%, 40%)';
                };
                
                _update(min: number, max: number, value: number) {
                    // update fill width
                    if (min !== this.min || max !== this.max || value !== this.value) {
                        var percentFill = this._calculatePercentFill(min, max, value);
                        this.fillElement.style.width = percentFill + '%';
                        this.fillElement.style.color = this._getColorValue(percentFill);
                    }
                    
                    // update aria attributes
                    if (min !== this.min) {
                        this.min = min;
                        this.rootElement.setAttribute('aria-valuemin', min + '');
                    }
                    
                    if (max !== this.max) {
                        this.max = max;
                        this.rootElement.setAttribute('aria-valuemax', max + '');
                    }
                    
                    if (value !== this.value) {
                        this.value = value;
                        this.rootElement.setAttribute('aria-valuenow', value + '');
                    }
                }
                
                setValue(value: number) {
                    if (typeof value !== 'number') {
                        value = parseFloat(value);
                    }
                    
                    if (!isNaN(value)) {
                        this._update(this.min, this.max, value);
                    }
                };
            }
            
            
        </script>
        
        <style scoped>
        img.icon {
            display: inline-block;
            vertical-align: middle;
            width: 20px;
        }
        
        h3 {
            font-size: 28px;
            color: #0E0E2C;
        }
        
        div.header {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #0E0E2C99;
        }
        
        div.header form input {
            display: none;
        }
        
        div.header form label {
            padding: 10px 20px;
            border-radius: 8px;
            background-color: #FF0051;
            color: #fff;
        }
        
        [role="tab"], [role="tab"]:focus, [role="tab"]:hover {
            position: relative;
            z-index: 2;
            top: 2px;
            margin: 0;
            margin-top: 4px;
            padding: 3px 3px 4px;
            overflow: visible;
            outline: none;
        }
        
        
        [role="tab"][aria-selected="true"] {
            padding: 2px 2px 4px;
            margin-top: 0;
        }
        
        [role="tab"] span.focus {
            display: inline-block;
            margin: 2px;
            padding: 4px 6px;
        }
        
        [role="tab"]:hover span.focus,
        [role="tab"]:focus span.focus,
        [role="tab"]:active span.focus {
            padding: 2px 4px;
            border-bottom: 4px solid #FF0051;
            border-radius: 3px;
        }
        
        [role="tabpanel"] {
            padding: 5px 0;
            background: hsl(220deg 43% 99%);
            min-height: 10em;
            min-width: 550px;
            overflow: auto;
        }
        
        [role="tabpanel"].is-hidden {
            display: none;
        }
        
        [role="tabpanel"] p {
            margin: 0;
        }
        
        .media-filter {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
        }
        
        [role="tabpanel"] ul {
            display: grid;
            grid-template-columns: repeat(4, minmax(244px, 1fr));
            gap: 10px;
        }
        
        .collections-panel ul li {
            display: flex;
            justify-content: space-between;
            height: 191px;
            padding: 10px;
            border-radius: 8px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            color: #FFF;
        }
        
        .collections-panel ul .card1 {
            background-image: url(../../assets/images/image17.jpg);
        }
        
        .collections-panel ul .card2 {
            background-image: url(../../assets/images/image18.jpg);
        }
        
        .collections-panel ul .card3 {
            background-image: url(../../assets/images/image19.jpg);
        }
        
        .collections-panel ul li span:first-child {
            align-self: flex-end;
        }
        
        .collections-panel ul li span:last-child {
            align-self: flex-start;
        }

        .draft-panel ul li {
            position: relative;
        }


        .draft-panel .card-footer {
            display: flex;
            column-gap: 10px;
            align-items: center;
            justify-content: center;
            position: absolute;
            bottom: 10px;
        }

        .draft-panel .meter-container {
            display: flex;
            column-gap: 5px;
            align-items: center;
            justify-content: center;
            width: 200px;
            height: 40px;
            padding: 2px;
            border-radius: 8px;
            background-color: #FFF;
        }
        
        [role="meter"] {
            padding: 1px;
            width: calc(100% - 50px);
            height: 5px;
            border-radius: 5px;
            background-color: #ECF1F4;
        }
        
        .fill {
            width: 42%;
            height: 100%;
            box-sizing: border-box;
            border-radius: 3px;
            background-color: black;
            color: #FF0051;
        }

        .card-footer img {
            width: 40px;
            padding: 2px;
            border-radius: 8px;
        }
    </style>