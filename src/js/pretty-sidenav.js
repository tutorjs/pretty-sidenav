/**
* Side Navigation
* <adiatma9024@gmail.com>
*/

;(function(root, factory) {

  root.PrettySidenav = factory();

})(this, function(){

  function el(element) {
    return document.querySelector(element);
  };

  function findChildren(element, selector) {
    return element.querySelectorAll(selector);
  };

  function createCloseButtonElement() {
    var closeButtonElement = document.createElement('span');
    closeButtonElement.classList.add('close-button');
    closeButtonElement.innerHTML = '&times;';
    return closeButtonElement;
  };

  var DEFAULT_WIDTH = 250;
  var DEFAULT_BACKGROUND = '#111';
  var DEFAULT_COLOR = '#818181';

  function configSideNav(options) {
    this.options = Object.assign({}, options);

    this.width = this.options.width || DEFAULT_WIDTH;
    this.background = this.options.background || DEFAULT_BACKGROUND;
    this.color = this.options.color || DEFAULT_COLOR;

    this.wrapSideNavigationItem = this.wrapSideNavigationItem.bind(this);
    this.renderSideNav();
  };

  configSideNav.prototype.renderSideNav = function renderSideNav() {  
    // Add class side navigation
    var target = el(this.options.navigation);
    target.classList.add('side-navigation');
    target.classList.add(this.options.position);
    target.style.background = this.background;
    this.target = target;

    // Get trigger selector
    var trigger = el(this.options.trigger);
    trigger.addEventListener('click', this.move.bind(this));

    // Find children element in navigation
    var children = findChildren(target, this.options.children);

    // Add side navigation
    var sideNavigationItem = this.wrapSideNavigationItem(children);

    // Side navigation add padding position
    var sideNavigationItemCustom = findChildren(sideNavigationItem, '.side-navigation__item');
    for (var i = 0; i < sideNavigationItemCustom.length; i++) {
      var paddingValue = this.options.position === 'left' ? '5% 5% 5% 30%' : '5% 0 5% 40%';
      sideNavigationItemCustom[i].style.padding = paddingValue;
      sideNavigationItemCustom[i].style.color = this.color;
    }

    // Add close action listener
    var close = findChildren(sideNavigationItem, '.close-button');
    
    close[0].style.color = this.color; 
    
    if (this.options.position === 'left') { 
      close[0].style.marginLeft = 50 + 'px';
      close[0].style.right = 25 + 'px'; 
    } else if (this.options.position === 'right') {
      close[0].style.marginRight = 50 + 'px'; 
      close[0].style.left = 25 + 'px';
    }

    close[0].addEventListener('click', function() {
      target.style.width = 0 + 'px';
    });

    target.appendChild(sideNavigationItem);
  
  };

  configSideNav.prototype.wrapSideNavigationItem = function wrapSideNavigationItem(children) {
    var divFragment = document.createDocumentFragment();
    var closeButton = createCloseButtonElement();
    divFragment.appendChild(closeButton);

    Array.prototype.forEach.call(children, function(el) {
      el.classList.add('side-navigation__item');
      divFragment.appendChild(el);
    });

    return divFragment;
  
  };

  configSideNav.prototype.move = function move() {
    this.target.style.width = this.width + 'px';
  };

  return configSideNav;

});