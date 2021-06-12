/**
 * What is reactive form: ReactiveFormsModule
 * 1.
 *
 *
 */

/*********
 * How to create custom form control:
 * You need to use ControlValueAccessor interface to create custom formc ontrol.
 * it bridges the gap between angular formcontrol api and native dom elemtn.
 *
 * it has 4 default methods.
 * 1. writeValue(obj:any){  }
 * 2. registerOnChange(fn:any){}
 * 3. registerOnTouched(fn:any){}
 * 4. setDisableState(isDisabled:boolean){}
 *
 * you need to add provider NG_VALUE_ACCESSOR
 *
 */