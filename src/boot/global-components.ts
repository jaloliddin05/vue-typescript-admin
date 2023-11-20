import { boot } from 'quasar/wrappers';
import GoBack from '../components/shared/GoBackButton.vue';
import FormDialog from '../components/shared/FormDialog.vue';

const globalComponents = {
  'go-back': GoBack,
  'form-dialog': FormDialog,
};

export default boot(async ({ app }) => {
  Object.entries(globalComponents).forEach(([name, component]) => {
    app.component(name, component);
  });
});
