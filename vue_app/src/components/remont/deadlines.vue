<template>
    <section class="deadline">
        <div class="container">
            <h2 class="title">Сроки ремонта</h2>
        <div class="tabs">
        <div class="tabs__nav">
          <a class="tabs__link tabs__link_active" href="#content-1" @click="tabas">Ремонт без дизайна со стандартным ремонтом</a>
          <a class="tabs__link" href="#content-2" @click="tabas">Ремонт с дизайна с нестандартным ремонтом</a>
        </div>
        <div class="tabs__content">
          <div class="tabs__pane tabs__pane_show" id="content-1">
            <table id="tbl">
                <thead>
                    <tr>
                        <th>Плошадь, м2</th>
                        <th>Черновая отделка</th>
                        <th>Предчистовая (улучшенная черновая)</th>
                        <th>Вторичное жилье с демонтжными работами</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="Плошадь, м2">50-80</td>
                        <td data-label="Черновая отделка">2 мес</td>
                        <td data-label="Предчистовая">1.5 мес</td>
                        <td data-label="Вторичное жилье с демонтжными работами">3 мес</td>
                    </tr>
                    <tr>
                        <td data-label="Плошадь, м2">80-120</td>
                        <td data-label="Черновая отделка">2.5 мес</td>
                        <td data-label="Предчистовая">2 мес</td>
                        <td data-label="Вторичное жилье с демонтжными работами">3.5 мес</td>
                    </tr>
                    <tr>
                        <td data-label="Плошадь, м2">120-200</td>
                        <td data-label="Черновая отделка">3 мес</td>
                        <td data-label="Предчистовая">2.5 мес</td>
                        <td data-label="Вторичное жилье с демонтжными работами">4 мес</td>
                    </tr>
                    <tr>
                        <td data-label="Плошадь, м2">200+</td>
                        <td data-label="Черновая отделка">3.5-5 мес</td>
                        <td data-label="Предчистовая">3-4 мес</td>
                        <td data-label="Вторичное жилье с демонтжными работами">5-6 мес</td>
                    </tr>                                                  
                </tbody>
            </table>
          </div>
          <div class="tabs__pane" id="content-2">
            <table id="tbl">
                <thead>
                    <tr>
                        <th>Плошадь, м2</th>
                        <th>Черновая отделка</th>
                        <th>Предчистовая (удучшенная черновая)</th>
                        <th>Вторичное жилье с демонтжными работами</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="Плошадь, м2">50-80</td>
                        <td data-label="Черновая отделка">3 мес</td>
                        <td data-label="Предчистовая">2.5 мес</td>
                        <td data-label="Вторичное жилье с демонтжными работами">4 мес</td>
                    </tr>
                    <tr>
                        <td data-label="Плошадь, м2">80-120</td>
                        <td data-label="Черновая отделка">3.5 мес</td>
                        <td data-label="Предчистовая">3 мес</td>
                        <td data-label="Вторичное жилье с демонтжными работами">4.5 мес</td>
                    </tr>
                    <tr>
                        <td data-label="Плошадь, м2">120-200</td>
                        <td data-label="Черновая отделка">4 мес</td>
                        <td data-label="Предчистовая">3.5 мес</td>
                        <td data-label="Вторичное жилье с демонтжными работами">5 мес</td>
                    </tr>
                    <tr>
                        <td data-label="Плошадь, м2">200+</td>
                        <td data-label="Черновая отделка">4.5-6 мес</td>
                        <td data-label="Предчистовая">4-5 мес</td>
                        <td data-label="Вторичное жилье с демонтжными работами">6-7 мес</td>
                    </tr>                                                  
                </tbody>
            </table>
          </div>          
        </div>
        </div>
            <div class="buttons">
                <router-link class="link_btn short" to="/about">О нас</router-link>    
                <router-link class="link_btn long" to="/contacts">Контакты</router-link>   
            </div>   
        </div>
    </section>
</template>


<script>
export default {
    name:'deadlines',    
    methods:{
        tabas(){
            var $tabs = function (target) {
var
  _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
  _eventTabsShow,
  _showTab = function (tabsLinkTarget) {
    var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
    tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
    tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
    tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
    // если следующая вкладка равна активной, то завершаем работу
    if (tabsLinkTarget === tabsLinkActive) {
      return;
    }
    // удаляем классы у текущих активных элементов
    if (tabsLinkActive !== null) {
      tabsLinkActive.classList.remove('tabs__link_active');
    }
    if (tabsPaneShow !== null) {
      tabsPaneShow.classList.remove('tabs__pane_show');
    }
    // добавляем классы к элементам (в завимости от выбранной вкладки)
    tabsLinkTarget.classList.add('tabs__link_active');
    tabsPaneTarget.classList.add('tabs__pane_show');
    document.dispatchEvent(_eventTabsShow);
  },
  _switchTabTo = function (tabsLinkIndex) {
    var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
    if (tabsLinks.length > 0) {
      if (tabsLinkIndex > tabsLinks.length) {
        tabsLinkIndex = tabsLinks.length;
      } else if (tabsLinkIndex < 1) {
        tabsLinkIndex = 1;
      }
      _showTab(tabsLinks[tabsLinkIndex - 1]);
    }
  };

_eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

_elemTabs.addEventListener('click', function (e) {
  var tabsLinkTarget = e.target;
  // завершаем выполнение функции, если кликнули не по ссылке
  if (!tabsLinkTarget.classList.contains('tabs__link')) {
    return;
  }
  // отменяем стандартное действие
  e.preventDefault();
  _showTab(tabsLinkTarget);
});

return {
  showTab: function (target) {
    _showTab(target);
  },
  switchTabTo: function (index) {
    _switchTabTo(index);
  }
}

};

$tabs('.tabs');
        }
    }
}
</script>                                            

<style>
   /* @import url("../../assets/css/remont/deadlines.css");*/
    .title::after{
        width: 0;
        height: 0;
    }
    .deadline .title{
        margin-bottom: 30px;
    }
</style>