export default class IpRange {
    constructor(startAddress, endAddress) {
        this._startAddress = startAddress;
        this._endAddress = endAddress;
    }

    get startAddress() {
        return this._startAddress;
    }

    get endAddress() {
        return this._endAddress;
    }
}
