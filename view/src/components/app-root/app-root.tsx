import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {

  render() {
    return (
      <div class="container">
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <div>
            <form>
              
              <input class="u-full-width" type="text" name="email" placeholder="email"/>
              <hr/>
              <input class="u-full-width"  type="password" name="email" placeholder="email"/>
              <hr/>
              <button>Login</button>
            </form>
          </div>
        </main>
      </div>
    );
  }
}
