import PermissionCard from './components/permission-card/permission-card';

const App = () => {
  return (
    <div>
      <PermissionCard label="Single option" />
      <PermissionCard
        label="Multiple options"
        permissions={[{ label: 'Option one' }, { label: 'Optione two' }]}
      />
    </div>
  );
};

export default App;
