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
var egret;
(function (egret) {
    /**
     * @private
     * @version Egret 2.4
     * @platform Web,Native
     */
    var ScrollViewProperties = (function () {
        function ScrollViewProperties() {
            /**
             * @private
             */
            this._verticalScrollPolicy = "auto";
            /**
             * @private
             */
            this._horizontalScrollPolicy = "auto";
            /**
             * @private
             */
            this._scrollLeft = 0;
            /**
             * @private
             */
            this._scrollTop = 0;
            /**
             * @private
             */
            this._hCanScroll = false;
            /**
             * @private
             */
            this._vCanScroll = false;
            /**
             * @private
             */
            this._lastTouchPosition = new egret.Point(0, 0);
            /**
             * @private
             */
            this._touchStartPosition = new egret.Point(0, 0);
            /**
             * @private
             */
            this._scrollStarted = false;
            /**
             * @private
             */
            this._lastTouchTime = 0;
            /**
             * @private
             */
            this._lastTouchEvent = null;
            /**
             * @private
             */
            this._velocitys = [];
            /**
             * @private
             */
            this._isHTweenPlaying = false;
            /**
             * @private
             */
            this._isVTweenPlaying = false;
            /**
             * @private
             */
            this._hScrollTween = null;
            /**
             * @private
             */
            this._vScrollTween = null;
            /**
             * @private
             */
            this._bounces = true;
        }
        return ScrollViewProperties;
    }());
    egret.ScrollViewProperties = ScrollViewProperties;
    __reflect(ScrollViewProperties.prototype, "egret.ScrollViewProperties");
})(egret || (egret = {}));
//# sourceMappingURL=ScrollViewProperties.js.map