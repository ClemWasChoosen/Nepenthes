import * as dat from 'dat.gui'
import * as THREE from 'three'


export function setupGui(camera, light) {
  const gui = new dat.GUI();

  const camGui = gui.addFolder("Camera");
  camGui.add(camera.position, 'x').min(-2).max(5).name("Pos x camera.pos");
  camGui.add(camera.position, 'y').min(0).max(10).name("Pos y camera.pos");
  camGui.add(camera.position, 'z').min(0).max(10).name("Pos z camera.pos");

  camGui.add(camera.rotation, 'x').min(-2).max(5).step(0.01).name("Rota x camera.pos");
  //camGui.add(camera.rotation, 'y').min(-2).max(5).step(0.01).name("Rota y camera.pos");
  camGui.add(camera.rotation, 'z').min(-2).max(5).step(0.01).name("Rota z camera.pos");

  // const camGui = gui.addFolder("Bloc 1");
  // guir.add(bloc2nd.position, 'y').min(-3).max(5).name("bloc2 pos y");
  // guir.add(bloc2nd.position, 'x').min(-3).max(5).name("bloc2 pos x");
  // guir.add(bloc2nd.position, 'z').min(-3).max(5).name("bloc2 pos z");
  //
  // guir.add(bloc.position, 'y').min(-3).max(5).name("bloc pos y");
  // guir.add(bloc.position, 'x').min(-3).max(5).name("bloc pos x");
  // guir.add(bloc.position, 'z').min(-3).max(5).name("bloc pos z");
  //
  // guir.add(bloc.rotation, 'y').min(-3).max(5).name("bloc rota y");
  // guir.add(bloc.rotation, 'x').min(-3).max(5).name("bloc rota x");
  // guir.add(bloc.rotation, 'z').min(-3).max(5).name("bloc rota z");

  const lightGui = gui.addFolder("Light");
  lightGui.add(light.position, 'x').min(-5).max(5).step(.01).name("Pos x light.pos");
  lightGui.add(light.position, 'y').min(-5).max(5).step(.01).name("Pos y light.pos");
  lightGui.add(light.position, 'z').min(-5).max(5).step(.01).name("Pos z light.pos");

  gui.close();
}
