webpackJsonpCoveo__temporary([62],{

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(624);
var Dom_1 = __webpack_require__(1);
var Utils_1 = __webpack_require__(4);
var Strings_1 = __webpack_require__(6);
var Component_1 = __webpack_require__(7);
var SVGIcons_1 = __webpack_require__(12);
var GlobalExports_1 = __webpack_require__(3);
var Initialization_1 = __webpack_require__(2);
var ComponentOptions_1 = __webpack_require__(8);
var DEFAULT_SCALE = 5;
/**
 * The `StarRating` component renders a five-star rating widget for use in commerce result templates.
 *
 * @isresulttemplatecomponent
 */
var StarRating = /** @class */ (function (_super) {
    __extends(StarRating, _super);
    /**
     * Creates a new `StarRating` component.
     * @param element The HTMLElement on which to instantiate the component.
     * @param options The options for the `StarRating` component.
     * @param bindings The bindings that the component requires to function normally.
     */
    function StarRating(element, options, bindings, result) {
        var _this = _super.call(this, element, StarRating.ID) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.result = result;
        _this.options = ComponentOptions_1.ComponentOptions.initComponentOptions(element, StarRating, options);
        if (!result) {
            _this.logger.error('No result passed to Star Rating component.');
            return _this;
        }
        _this.renderComponent();
        return _this;
    }
    Object.defineProperty(StarRating.prototype, "configuredFieldsAreValid", {
        get: function () {
            var rawRating = Utils_1.Utils.getFieldValue(this.result, this.options.ratingField);
            var rawNumberOfRatings = Utils_1.Utils.getFieldValue(this.result, this.options.numberOfRatingsField);
            if (rawNumberOfRatings !== undefined) {
                this.numberOfRatingsField = Number(rawNumberOfRatings) < 0 ? 0 : Number(rawNumberOfRatings) || 0;
            }
            this.rating = Number(rawRating) < 0 ? 0 : Number(rawRating) || 0;
            var scale = this.options.ratingScale;
            if (scale < this.rating || scale <= 0) {
                this.logger.error("The rating scale property is either missing or invalid.");
                return false;
            }
            else {
                this.rating = Math.floor(this.rating * (DEFAULT_SCALE / scale));
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    StarRating.prototype.renderComponent = function () {
        if (this.configuredFieldsAreValid) {
            for (var starNumber = 1; starNumber <= DEFAULT_SCALE; starNumber++) {
                this.renderStar(starNumber <= this.rating);
            }
            if (this.numberOfRatingsField !== undefined) {
                this.renderNumberOfReviews(this.numberOfRatingsField);
            }
        }
    };
    StarRating.prototype.renderStar = function (isChecked) {
        var star = Dom_1.$$('span', { className: 'coveo-star-rating-star' }, SVGIcons_1.SVGIcons.icons.star);
        star.toggleClass('coveo-star-rating-star-active', isChecked);
        this.element.appendChild(star.el);
    };
    StarRating.prototype.renderNumberOfReviews = function (value) {
        var numberString = Dom_1.$$('span', { className: 'coveo-star-rating-label' });
        numberString.text(value > 0 ? "(" + value + ")" : Strings_1.l('No Ratings'));
        this.element.appendChild(numberString.el);
    };
    StarRating.ID = 'StarRating';
    StarRating.doExport = function () {
        GlobalExports_1.exportGlobally({
            StarRating: StarRating
        });
    };
    /**
     * @componentOptions
     */
    StarRating.options = {
        /**
         * Specifies the rating to be displayed as stars. If the rating is on a different scale than 0-5, a `ratingScale` value must be provided.
         */
        ratingField: ComponentOptions_1.ComponentOptions.buildFieldOption({ required: true }),
        /**
         * A numeric field whose value should be used to display the total number of ratings label for the result item.
         *
         * If unspecified, no number of ratings label is displayed. If the `numberOfRatingsField`'s value is `0` or less, a `(No Ratings)` label is displayed.
         */
        numberOfRatingsField: ComponentOptions_1.ComponentOptions.buildFieldOption(),
        /**
         * The scale to apply to the [`ratingField`]{@link StarRating.options.ratingField}'s value. Must be smaller than or equal to the highest possible `ratingField`'s value.
         *
         * **Example:** If the `ratingScale` is `100` and the current `ratingField`'s value is `75`, the component will render 3 stars (i.e., `75 * (5 / 100)`, rounded down).
         */
        ratingScale: ComponentOptions_1.ComponentOptions.buildNumberOption({ defaultValue: 5, min: 1, max: 100000 })
    };
    return StarRating;
}(Component_1.Component));
exports.StarRating = StarRating;
Initialization_1.Initialization.registerAutoCreateComponent(StarRating);


/***/ }),

/***/ 624:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=StarRating__929a3e2d14aeca16086d.js.map