import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DatabaseService } from '../../services/database.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule], // Asegúrate de agregar FormsModule aquí
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profile = {
    name: '',
    email: '',
    phone: '',
    id: ''
  };

  constructor(
    public auth: AuthService,
    private db: DatabaseService
  ) {}

  ngOnInit() {
    if (this.auth.profile) {
      this.profile = { ...this.auth.profile };
    }
  }

  updateProfile() {
    if (!this.profile.id) {
      console.error('UID no encontrado. No se puede actualizar el perfil.');
      return;
    }

    const updatedProfile = {
      name: this.profile.name,
      email: this.profile.email,
      phone: this.profile.phone,
    };

    this.db.updateFirestoreDocument('users', this.profile.id, updatedProfile)
      .then(() => {
        console.log('Perfil actualizado exitosamente');
        this.auth.profile = { ...this.profile };
        localStorage.setItem('profile', JSON.stringify(this.auth.profile));
      })
      .catch(err => console.error('Error al actualizar perfil:', err));
  }
}
