```js
import MultiSelect from '../MultiSelect';

<MultiSelect
  options={['tech', 'frontend', 'backend']}
  closeOnSelect={false}
  selected={this.props.tags}
  placeholder={'Profesional'}
  onSelectOption={(opt) => this.props.toggleTags(opt)}
/>;
```
