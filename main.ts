
namespace trial {

    /**
         * Drives forwards. Call stop to stop
         */
    //% blockId=servos_forward
    //% block="forward"
    export function forward(): void {
        pins.servoWritePin(AnalogPin.P1, 0);
        pins.servoWritePin(AnalogPin.P2, 180);
    }
}