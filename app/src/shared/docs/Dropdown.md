```js
import Dropdown, { Options } from '../Dropdown';
import { Stack } from '@styled-icons/remix-line/Stack';
import { Pencil } from '@styled-icons/evil/Pencil';
import StyledIcon from '../StyledIcon';

<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <Dropdown text={'L'} position={'left'}>
    <Options>
      <StyledIcon icon={<Pencil />}></StyledIcon> New Idea
    </Options>
    <Options>
      <StyledIcon icon={<Stack />}></StyledIcon> Edit
    </Options>
  </Dropdown>
  <Dropdown text={'C'} position={'center'}>
    <Options>
      <StyledIcon icon={<Pencil />}></StyledIcon> New Idea
    </Options>
    <Options>
      <StyledIcon icon={<Stack />}></StyledIcon> Edit
    </Options>
  </Dropdown>
  <Dropdown text={'R'}>
    <Options>
      <StyledIcon icon={<Pencil />}></StyledIcon> New Idea
    </Options>
    <Options>
      <StyledIcon icon={<Stack />}></StyledIcon> Edit
    </Options>
  </Dropdown>
</div>;
```
