import CesiumView3DTiles from '@/components/common/projectWorkspace/cesiumView3DTiles/CesiumView3DTiles';
import Navigator from '@/components/common/projectWorkspace/navigator/Navigator';

const ProjectWorkspace = () => {
    return (
      <div>
        <Navigator/>
        <CesiumView3DTiles/>
      </div>
  
    );
  };
  
  export default ProjectWorkspace;