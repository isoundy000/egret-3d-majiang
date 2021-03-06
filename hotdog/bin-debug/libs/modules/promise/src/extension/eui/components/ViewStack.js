//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
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
var eui;
(function (eui) {
    /**
     * An ViewStack navigator container consists of a collection of child
     * containers stacked on top of each other, where only one child
     * at a time is visible.
     * When a different child container is selected, it seems to replace
     * the old one because it appears in the same location.
     * However, the old child container still exists; it is just invisible.
     *
     * @event eui.CollectionEvent.COLLECTION_CHANGE Dispatched when the ICollection has been updated in some way.
     *
     * @version Egret 2.4
     * @version eui 1.0
     * @platform Web,Native
     * @includeExample  extension/eui/components/ViewStackExample.ts
     * @language en_US
     */
    /**
     * ViewStack 导航器容器由一组彼此上下堆叠的子容器组成，其中一次只可以显示一个子容器。
     * 选择另一个子容器后，它将显示在原来子容器的位置处，所以看起来好像此子容器替换了原来的子容器。
     * 但是，原来的子容器仍然存在，只不过它现在处于不可见状态。
     *
     * @event eui.CollectionEvent.COLLECTION_CHANGE 以某种方式更新 ICollection 后分派。
     *
     * @version Egret 2.4
     * @version eui 1.0
     * @platform Web,Native
     * @includeExample  extension/eui/components/ViewStackExample.ts
     * @language zh_CN
     */
    var ViewStack = (function (_super) {
        __extends(ViewStack, _super);
        /**
         * Constructor.
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * 构造函数。
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        function ViewStack() {
            var _this = _super.call(this) || this;
            /**
             * @private
             */
            _this._selectedChild = null;
            /**
             * @private
             * 在属性提交前缓存选中项索引
             */
            _this.proposedSelectedIndex = eui.ListBase.NO_PROPOSED_SELECTION;
            /**
             * @private
             */
            _this._selectedIndex = -1;
            return _this;
        }
        Object.defineProperty(ViewStack.prototype, "layout", {
            /**
             * The layout object for this container.
             * This object is responsible for the measurement and layout of
             * the visual elements in the container.
             *
             * @default eui.BasicLayout
             *
             * @version Egret 2.4
             * @version eui 1.0
             * @platform Web,Native
             * @language en_US
             */
            /**
             * 此容器的 layout 对象。此对象负责容器中可视元素的测量和布局。
             *
             * @default eui.BasicLayout
             *
             * @version Egret 2.4
             * @version eui 1.0
             * @platform Web,Native
             * @language zh_CN
             */
            get: function () {
                return this.$layout;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewStack.prototype, "selectedChild", {
            /**
             * A reference to the currently visible child container.
             * The default is a reference to the first child.
             * If there are no children, this property is <code>null</code>.
             *
             * @version Egret 2.4
             * @version eui 1.0
             * @platform Web,Native
             * @language en_US
             */
            /**
             * 对当前可见子容器的引用。默认设置为对第一个子容器的引用。如果没有子项，则此属性为 <code>null</code>。
             *
             * @version Egret 2.4
             * @version eui 1.0
             * @platform Web,Native
             * @language zh_CN
             */
            get: function () {
                var index = this.selectedIndex;
                if (index >= 0 && index < this.numChildren)
                    return this.getChildAt(index);
                return null;
            },
            set: function (value) {
                var index = this.getChildIndex(value);
                if (index >= 0 && index < this.numChildren)
                    this.setSelectedIndex(index);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewStack.prototype, "selectedIndex", {
            /**
             * The zero-based index of the currently visible child container.
             * Child indexes are in the range 0, 1, 2, ..., n - 1,
             * where <code>n</code> is the number of children.
             * The default value is 0, corresponding to the first child.
             * If there are no children, the value of this property is <code>-1</code>.
             *
             * @version Egret 2.4
             * @version eui 1.0
             * @platform Web,Native
             * @language en_US
             */
            /**
             * 当前可见子容器的从零开始的索引。子索引的范围是 0、1、2、...、n - 1，其中 <code>n</code> 是子项的数目。
             * 默认值是 0，对应于第一个子项。如果不存在子容器，则此属性的值为 -1。
             *
             * @version Egret 2.4
             * @version eui 1.0
             * @platform Web,Native
             * @language zh_CN
             */
            get: function () {
                return this.proposedSelectedIndex != eui.ListBase.NO_PROPOSED_SELECTION ? this.proposedSelectedIndex : this._selectedIndex;
            },
            set: function (value) {
                value = +value | 0;
                this.setSelectedIndex(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * 设置选中项索引
         */
        ViewStack.prototype.setSelectedIndex = function (value) {
            if (value == this.selectedIndex) {
                return;
            }
            this.proposedSelectedIndex = value;
            this.invalidateProperties();
            eui.PropertyEvent.dispatchPropertyEvent(this, eui.PropertyEvent.PROPERTY_CHANGE, "selectedIndex");
        };
        /**
         * @private
         * 一个子项被添加到容器内，此方法不仅在操作addChild()时会被回调，在操作setChildIndex()或swapChildren时也会回调。
         * 当子项索引发生改变时，会先触发$childRemoved()方法，然后触发$childAdded()方法。
         */
        ViewStack.prototype.$childAdded = function (child, index) {
            _super.prototype.$childAdded.call(this, child, index);
            this.showOrHide(child, false);
            var selectedIndex = this.selectedIndex;
            if (selectedIndex == -1) {
                this.setSelectedIndex(index);
            }
            else if (index <= this.selectedIndex && this.$stage) {
                this.setSelectedIndex(selectedIndex + 1);
            }
            eui.CollectionEvent.dispatchCollectionEvent(this, eui.CollectionEvent.COLLECTION_CHANGE, eui.CollectionEventKind.ADD, index, -1, [child.name]);
        };
        /**
         * @private
         * 一个子项从容器内移除，此方法不仅在操作removeChild()时会被回调，在操作setChildIndex()或swapChildren时也会回调。
         * 当子项索引发生改变时，会先触发$childRemoved()方法，然后触发$childAdded()方法。
         */
        ViewStack.prototype.$childRemoved = function (child, index) {
            _super.prototype.$childRemoved.call(this, child, index);
            this.showOrHide(child, true);
            var selectedIndex = this.selectedIndex;
            if (index == selectedIndex) {
                if (this.numChildren > 0) {
                    if (index == 0) {
                        this.proposedSelectedIndex = 0;
                        this.invalidateProperties();
                    }
                    else
                        this.setSelectedIndex(0);
                }
                else
                    this.setSelectedIndex(-1);
            }
            else if (index < selectedIndex) {
                this.setSelectedIndex(selectedIndex - 1);
            }
            eui.CollectionEvent.dispatchCollectionEvent(this, eui.CollectionEvent.COLLECTION_CHANGE, eui.CollectionEventKind.REMOVE, index, -1, [child.name]);
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         */
        ViewStack.prototype.commitProperties = function () {
            _super.prototype.commitProperties.call(this);
            if (this.proposedSelectedIndex != eui.ListBase.NO_PROPOSED_SELECTION) {
                this.commitSelection(this.proposedSelectedIndex);
                this.proposedSelectedIndex = eui.ListBase.NO_PROPOSED_SELECTION;
            }
        };
        /**
         * @private
         *
         * @param newIndex
         */
        ViewStack.prototype.commitSelection = function (newIndex) {
            if (newIndex >= 0 && newIndex < this.numChildren) {
                this._selectedIndex = newIndex;
                if (this._selectedChild) {
                    this.showOrHide(this._selectedChild, false);
                }
                this._selectedChild = this.getElementAt(this._selectedIndex);
                this.showOrHide(this._selectedChild, true);
            }
            else {
                this._selectedChild = null;
                this._selectedIndex = -1;
            }
            this.invalidateSize();
            this.invalidateDisplayList();
        };
        /**
         * @private
         *
         * @param child
         * @param visible
         */
        ViewStack.prototype.showOrHide = function (child, visible) {
            if (egret.is(child, "eui.UIComponent")) {
                child.includeInLayout = visible;
            }
            child.visible = visible;
        };
        Object.defineProperty(ViewStack.prototype, "length", {
            /**
             * number of children
             *
             * @version Egret 2.4
             * @version eui 1.0
             * @platform Web,Native
             * @language en_US
             */
            /**
             * 子项数量
             *
             * @version Egret 2.4
             * @version eui 1.0
             * @platform Web,Native
             * @language zh_CN
             */
            get: function () {
                return this.$children.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         */
        ViewStack.prototype.getItemAt = function (index) {
            var element = this.$children[index];
            return element ? element.name : "";
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         */
        ViewStack.prototype.getItemIndex = function (item) {
            var list = this.$children;
            var length = list.length;
            for (var i = 0; i < length; i++) {
                if (list[i].name == item) {
                    return i;
                }
            }
            return -1;
        };
        return ViewStack;
    }(eui.Group));
    eui.ViewStack = ViewStack;
    __reflect(ViewStack.prototype, "eui.ViewStack", ["eui.ICollection", "egret.IEventDispatcher"]);
    eui.registerBindable(ViewStack.prototype, "selectedIndex");
})(eui || (eui = {}));
//# sourceMappingURL=ViewStack.js.map