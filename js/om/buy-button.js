
// 3 Month Prepay
(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'organic-beard-supply.myshopify.com',
        storefrontAccessToken: '048a2b8ac7ebbafa330efd4f238726e7', // Storefront access tokens are not secret. You can place them in a JavaScript file or any public HTML document. https://help.shopify.com/en/api/reference/access/storefrontaccesstoken#properties
        appId: '6',
      });

      ShopifyBuy.UI.onReady(client).then(function (ui) {
        const $buyButtons = $('.buy-button')

        if ($buyButtons.length) {
          $buyButtons.map(function() {
            createComponent(ui, this);
          })
        } else {
          createComponent(ui);
        }
      })
    }

    function createComponent(ui, element) {
      const $element = $(element),
            variantId = $element.attr('data-variant-id') || 'all',
            buttonText = $element.attr('data-button-text') || 'Buy Now',
            buttonClasses = $element.attr('data-variant-button-class') || 'shopify-buy__btn';

      ui.createComponent('product', {
        id: [1397481242720],
        variantId,
        node: element,
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          product: {
            iframe: false,
            variantId,
            buttonDestination: "cart",
            contents: {
              img: false,
              imgWithCarousel: false,
              title: false,
              variantTitle: false,
              options: false,
              price: false,
              description: false,
              buttonWithQuantity: false,
              quantity: false
            },
            text: {
              button: buttonText
            },
            classes: {
              button: buttonClasses
            }
          },
          cart: {
            contents: {
              button: true,
            },
            styles: {
              button: {
                "font-family": "BlinkMacSystemFont,-apple-system,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','Helvetica','Arial',sans-serif",
                "background-color": "#159097",
                "border-color": "#159097",
                "outline": "none",
                "transition": "all 0.5s",
                "color": "#ffffff",
                "border-radius": "4px",
                "padding": "22px 40px",
                "border-width": "1px",
                "font-size": "1rem",
                "height": "2.25em",
                "text-transform": "none",
                "line-height": "0",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                ":focus": {
                  "background-color": "#e6e6e6"
                }
              },
              header: {
                "border-bottom": "1px solid #EFF4F7"
              },
              footer: {
                "background-color": "#EFF4F7"
              }
            }
          },
          toggle: {
            styles: {
              toggle: {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
                "background-color": "#159097",
                ":hover": {
                  "background-color": "#127b81"
                },
                ":focus": {
                  "background-color": "#127b81"
                }
              },
              count: {
                "color": "#ffffff",
                ":hover": {
                  "color": "#ffffff"
                },
                "font-size": "1rem"
              },
              iconPath: {
                "fill": "#ffffff"
              }
            }
          }
        }
      })
    }
})();
