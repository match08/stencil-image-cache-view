var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ImageCache } from 'capacitor-image-cache';
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
export class CachedImage {
    constructor() {
        this.cache = new ImageCache();
        this.id = uuid();
    }
    srcChanged() {
        this.loadImage();
    }
    render() {
        return (h("div", null,
            h("img", { id: this.id })));
    }
    loadImage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { value } = yield this.cache.get({ src: this.src });
                this.element.shadowRoot.querySelector(`img`).setAttribute('src', value);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    componentWillUpdate() {
        this.loadImage();
    }
    componentDidLoad() {
        this.loadImage();
    }
    static get is() { return "st-cached-image"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        },
        "errorHolder": {
            "type": String,
            "attr": "error-holder"
        },
        "id": {
            "state": true
        },
        "placeHolder": {
            "type": String,
            "attr": "place-holder"
        },
        "src": {
            "type": String,
            "attr": "src",
            "watchCallbacks": ["srcChanged"]
        }
    }; }
    static get style() { return "/**style-placeholder:st-cached-image:**/"; }
}
