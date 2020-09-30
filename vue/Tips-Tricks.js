/**
 * Assign attributes to the right element.
 *
 * Example:
 * <div class="my-textarea-wrapper">
 *  <textarea v-bind="$attrs"></textarea>
 * </div>
 *
 * By default, Vue takes attributes applied to the component and puts them on the root element of that component.
 * This is often, but not always what you want.
 * However, if we look again at the textarea wrapper from above,
 * in that case, it would make more sense to apply the attributes to the textarea itself rather than the div.
 * To do this, we tell the component not to apply the attributes by default,
 * and instead apply them directly using the $attrs object. In our JavaScript:
 *
 * Solution:
 * export default {
 *   inheritAttrs: false,
 * }
 *
 *
 * <div class="my-textarea-wrapper">
 *   <textarea v-bind="$attrs"></textarea>
 * </div>
 */